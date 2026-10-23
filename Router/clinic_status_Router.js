// Imports ----------------------------
import Controller from "../controller.js";
import model from "../models/clinic_statusmodel.js";
import database from "../database.js";
import makeRouter from "./makeRouter.js";

// Controller -------------------------
const controller = new Controller(model, database);

// Router -----------------------------
const router = makeRouter(controller);

// Bespoke Endpoints ------------------

export default router;
