import express from "express";
import { shortenUrl, redirectUrl, listUrls } from "../controllers/urlController.js";

const router = express.Router();

// Shorten URL
router.post("/shorten", shortenUrl);

// Redirect
router.get("/:code", redirectUrl);

// List all (debug)
router.get("/list", listUrls);

export default router;
