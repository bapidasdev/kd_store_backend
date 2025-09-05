import express from "express";
import { addAddress, getAddress } from "../controllers/address.controller.js";
import { authUser } from "../middlewares/authUser.js";


const router = express.Router();

router.post("/add", authUser, addAddress)
router.get("/get", authUser, getAddress)


export default router;