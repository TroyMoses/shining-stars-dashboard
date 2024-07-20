import express from "express";

import {
  createAdmission,
  deleteAdmission,
  getAllAdmissions,
  getAdmissionDetail,
  updateAdmission,
} from "../controllers/admission.controller.js";

const router = express.Router();

router.route("/").get(getAllAdmissions);
router.route("/:id").get(getAdmissionDetail);
router.route("/").post(createAdmission);
router.route("/:id").patch(updateAdmission);
router.route("/:id").delete(deleteAdmission);

export default router;
