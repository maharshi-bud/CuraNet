import express from "express";
import {
  registerDoctor,
  getDoctors
} from "../controllers/doctorController.js";

const router = express.Router();

/* ✅ ROUTES */
router.post("/register", registerDoctor);
router.get("/", getDoctors);

export default router;