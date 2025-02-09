import express from "express";
import handleRegister from "../controllers/registerController.js";

const router = express.Router();

router.post('/', handleRegister.register);

export default router;