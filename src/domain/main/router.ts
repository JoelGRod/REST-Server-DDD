// External Packages
import { Router } from "express";
// Domain Modules Routers
import moduleRouter from "./module/application/router";
// Router instance
const domainRouter = Router();

// Routes
domainRouter.use("/", [], moduleRouter);

export default domainRouter;