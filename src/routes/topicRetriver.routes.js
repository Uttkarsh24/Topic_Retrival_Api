import { Router } from "express";
import { getTopics } from "../controllers/topicRetriever.controller.js";

const router = Router();

router.route("/topics").get(getTopics);

export default router;