import express from "express";
import { getNewsLetter, postNewsLetter,searchProperties,createProperty } from "../controllers/apiController.js";

const router = express.Router();

router.get("/listnewsletter", getNewsLetter);
router.post("/newsletter", postNewsLetter);
router.get('/search', searchProperties);
// Route to create a new property
router.post('/properties', createProperty);

export default router;
