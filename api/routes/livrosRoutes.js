import express from "express";
import {
  addLivro,
  deleteLivro,
  getLivros,
  updateLivro,
  getLivroById,
} from "../controllers/livroController.js";

const router = express.Router();

router.get("/", getLivros);
router.post("/", addLivro);
router.put("/:id", updateLivro);
router.delete("/:id", deleteLivro);
router.get("/:id", getLivroById);

export default router;
