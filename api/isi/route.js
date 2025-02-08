import express from "express"
import { getorang } from "./controller.js"

const router = express.Router();
router.get('/isroiwan', getorang)

export default router