import Controller from "../controller.js";
import model from "../models/doctormodel.js";
import database from "../database.js";
import makeRouter from "./makeRouter.js";

// Controller -------------------------
const controller = new Controller(model, database);

// Router -----------------------------
const router = makeRouter(controller);

// Bespoke Endpoints ------------------
router.get("/doctor_information/:id", (req, res) =>
  controller.get(req, res, "doctor_information"),
);

export default router;
