import express from "express";

import {
  createAdmission,
  getAllAdmissions,
} from "../controllers/admission.controller.js";

const router = express.Router();

router.route("/").get(getAllAdmissions);
router.route("/").post(createAdmission);

export default router;
