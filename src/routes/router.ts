import { Router } from "express";
import customerRoute from "./customerRoute";

const router = Router();

router.use(customerRoute);

export default router;
