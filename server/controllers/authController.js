import pool from "../database/pool.js";
import bcrypt from "bcrypt";

const handleLogin = {
    login: async(req, res) => {
        try{
            const { username, password} = req.body;

            if(!username || !password) return res.status(400).json({ 'message': "Username and password are required"});

            const findUserQuery = "SELECT * FROM users WHERE username = $1";
            const userFound = await pool.query(findUserQuery, [username]);

            if(userFound.rows.length === 0) {
                return res.status(401).json({ 'message': "Invalid username of password"});
            }

            const user = userFound.rows[0];
            const match = await bcrypt.compare(password, user.password);

            if(!match) {
                return res.status(401).json({ 'message': "Invalid username or password"});
            }

            res.status(200).json({ 'message': "Login successful", 'user': {username: user.username, email: user.email}});
        } catch(err) {
            console.log(err);
            res.status(500).json({ 'message': err.message});
        }
    }
}

export default handleLogin;