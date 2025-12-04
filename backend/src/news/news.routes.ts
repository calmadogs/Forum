import { Router } from "express";
import * as newsController from "./news.controller";
// import { authenticateToken } from "../auth/auth.middleware"; // If available

const router = Router();

// Public route to get news
router.get("/", newsController.getNews);

// Protected route to create news (add middleware later if needed)
router.post("/", newsController.createNews);

export default router;
