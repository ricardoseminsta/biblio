import { db } from "../db.js";

// Função para obter todas as categorias
export const getCategorias = (_, res) => {
  const q = "SELECT * FROM categoria";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para adicionar uma nova categoria
export const addCategoria = (req, res) => {
  console.log("Recebendo solicitação para adicionar categoria:", req.body);
  const { nome } = req.body;

  // Verificação de campos obrigatórios
  if (!nome) {
    return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
  }

  const q = "INSERT INTO categoria(`nome`) VALUES(?)";
  const values = [nome];

  console.log("Valores a serem inseridos:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Categoria criada com sucesso.");
  });
};

// Função para atualizar uma categoria existente
export const updateCategoria = (req, res) => {
  console.log("Recebendo solicitação para atualizar categoria:", req.body);
  const { nome } = req.body;

  // Verificação de campos obrigatórios
  if (!nome) {
    return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
  }

  const q = "UPDATE categoria SET `nome` = ? WHERE `categoria_id` = ?";
  const values = [nome, req.params.id];

  console.log("Valores a serem atualizados:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Categoria atualizada com sucesso.");
  });
};

// Função para excluir uma categoria
export const deleteCategoria = (req, res) => {
  const q = "DELETE FROM categoria WHERE `categoria_id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Categoria deletada com sucesso.");
  });
};
