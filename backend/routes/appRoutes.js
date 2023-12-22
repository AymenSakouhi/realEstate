import express from "express";
import { getNewsLetter, postNewsLetter,searchProperties } from "../controllers/apiController.js";

const router = express.Router();

router.get("/listnewsletter", getNewsLetter);
router.post("/newsletter", postNewsLetter);
router.get('/search', searchProperties);

export default router;
