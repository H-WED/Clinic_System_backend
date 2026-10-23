// Imports -----------------------------
import { Router } from "express";

const makeRouter = (controller) => {
  // Router --------------------------
  const router = new Router();

  // Generic Endpoints ---------------
  router.get("/", (req, res) => controller.get(req, res, null));

  return router;
};

export default makeRouter;
