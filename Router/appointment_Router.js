// Imports ----------------------------
import Controller from "../controller.js";
import model from "../models/appointmentmodel.js";
import database from "../database.js";
import makeRouter from "./makeRouter.js";

// Controller -------------------------
const controller = new Controller(model, database);

// Router -----------------------------
const router = makeRouter(controller);

// Bespoke Endpoints ------------------
router.get("/appointment/:id", (req, res) =>
  controller.get(req, res, "appointment"),
);

export default router;
