import PurController from "../controllers/pur.controller";
import {Router} from "express";

const router = Router();

const purController = new PurController();

router.get('/', purController.get);

export default router;