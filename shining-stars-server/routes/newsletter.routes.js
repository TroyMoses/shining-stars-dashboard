import express from "express";

import {
  createNewsLetter,
} from "../controllers/newsletter.controller.js";

const router = express.Router();

router.route("/").post(createNewsLetter);

export default router;
