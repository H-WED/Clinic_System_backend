// Imports ----------------------------
import Controller from "../controller.js";
import model from "../models/patientmodel.js";
import database from "../database.js";
import makeRouter from "./makeRouter.js";

// Controller -------------------------
const controller = new Controller(model, database);

// Router -----------------------------
const router = makeRouter(controller);

// Bespoke Endpoints ------------------
router.get("/patient/:id", (req, res) => controller.get(req, res, "patient"));

export default router;
