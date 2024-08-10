import { db } from "../db.js";

export const getAutors = (_, res) => {
  const q = "SELECT * FROM autor";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addAutor = (req, res) => {
  console.log("Recebendo solicitação para adicionar autor:", req.body);
  const { nome, nome2 } = req.body;

  // Verificação de campos obrigatórios
  if (!nome || !nome2) {
    return res
      .status(400)
      .json({ error: "Os campos 'nome' e 'nome2' são obrigatórios." });
  }

  const q = "INSERT INTO autor(`primeiro_nome`, `segundo_nome`) VALUES(?, ?)";
  const values = [nome, nome2];

  console.log("Valores a serem inseridos:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateAutor = (req, res) => {
  console.log("Recebendo solicitação para atualizar autor:", req.body);
  const { nome, nome2 } = req.body;

  // Verificação de campos obrigatórios
  if (!nome || !nome2) {
    return res
      .status(400)
      .json({ error: "Os campos 'nome' e 'nome2' são obrigatórios." });
  }

  const q =
    "UPDATE autor SET `primeiro_nome` = ?, `segundo_nome` = ? WHERE `autor_id` = ?";
  const values = [nome, nome2, req.params.id];

  console.log("Valores a serem atualizados:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteAutor = (req, res) => {
  const q = "DELETE FROM autor WHERE `autor_id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
