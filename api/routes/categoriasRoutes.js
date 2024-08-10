import express from "express";
import {
  addCategoria,
  deleteCategoria,
  getCategorias,
  updateCategoria,
} from "../controllers/categoriaController.js";

const router = express.Router();

router.get("/", getCategorias);

router.post("/", addCategoria);

router.put("/:id", updateCategoria);

router.delete("/:id", deleteCategoria);

export default router;
