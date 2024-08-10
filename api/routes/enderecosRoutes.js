import express from "express";
import {
  addEndereco,
  deleteEndereco,
  getEnderecos,
  updateEndereco,
} from "../controllers/enderecoController.js";

const router = express.Router();

router.get("/", getEnderecos);

router.post("/", addEndereco);

router.put("/:id", updateEndereco);

router.delete("/:id", deleteEndereco);

export default router;
