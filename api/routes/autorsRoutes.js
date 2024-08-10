import express from "express";
import {
  addAutor,
  deleteAutor,
  getAutors,
  updateAutor,
} from "../controllers/autorController.js";

const router = express.Router();

router.get("/", getAutors);

router.post("/", addAutor);

router.put("/:id", updateAutor);

router.delete("/:id", deleteAutor);

export default router;
