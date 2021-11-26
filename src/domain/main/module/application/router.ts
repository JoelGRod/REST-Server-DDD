// Domain module routes

// External Packages
import { Router } from "express";
// Controllers
import * as responses from "./controllers/responses";
// Router instance
const moduleRouter = Router();

// Routes
moduleRouter.get("/", [], responses.getRequest);
moduleRouter.post("/", [], responses.postRequest);
moduleRouter.put("/:id", [], responses.putRequest);
moduleRouter.delete("/", [], responses.deleteRequest);

export default moduleRouter;