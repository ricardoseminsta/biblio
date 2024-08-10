import express from "express";
import {
  addReserva,
  deleteReserva,
  getReservas,
  updateReserva,
} from "../controllers/reservaController.js";

const router = express.Router();

router.get("/", getReservas);

router.post("/", addReserva);

router.put("/:id", updateReserva);

router.delete("/:id", deleteReserva);

export default router;
