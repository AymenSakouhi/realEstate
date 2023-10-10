import express from "express";
import { getNewsLetter, postNewsLetter } from "../controllers/apiController.js";

const router = express.Router();

router.get("/listnewsletter", getNewsLetter);
router.post("/newsletter", postNewsLetter);

export default router;
