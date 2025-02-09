import pool from "../database/pool.js";
import bcrypt from "bcrypt";

const handleRegister = {
    register: async(req, res) => {
        try{
            const { username, password, email} = req.body;

            if(!username || !password || !email) return res.status(400).json({ 'message': "Username, password, and email are required"});

            const duplicateUserQuery = "Select * FROM users WHERE username = $1";
            const duplicateUser = await pool.query(duplicateUserQuery, [username])
            if (duplicateUser.rows.length > 0) {
                return res.status(409).json({ 'message': "User already exists" });
            }
                const hashedPwd = await bcrypt.hash(password, 10);

                const insertUserQuery = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING username, email";
                const insertRes = await pool.query(insertUserQuery, [username, hashedPwd, email]);

                res.status(201).json(insertRes.rows[0]);
        } catch(err) {
            console.log(err);
            res.status(500).json({ 'message': err.message});
        }
    }
}

export default handleRegister;