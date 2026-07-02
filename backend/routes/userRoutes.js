import express from "express";
import { login, logout, register } from "../controllers/userController.js";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").get(login);
router.route("/logout").get(logout)

export default router; 