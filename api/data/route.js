import express from "express"
import { getTawanan } from "./controller.js"

const router = express.Router();
router.get('/isroiwan', getTawanan)

export default router