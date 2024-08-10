import { db } from "../db.js";

// Função para obter todos os livros
export const getLivros = (_, res) => {
  const q = "SELECT * FROM livro";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para adicionar um novo livro
export const addLivro = (req, res) => {
  console.log("Recebendo solicitação para adicionar livro:", req.body);
  const { titulo, descricao, preco } = req.body;

  // Verificação de campos obrigatórios
  if (!titulo || preco == null) {
    return res
      .status(400)
      .json({ error: "Os campos 'titulo' e 'preco' são obrigatórios." });
  }

  const q = "INSERT INTO livro(`titulo`, `descricao`, `preco`) VALUES(?, ?, ?)";
  const values = [titulo, descricao, preco];

  console.log("Valores a serem inseridos:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro criado com sucesso.");
  });
};

// Função para atualizar um livro existente
export const updateLivro = (req, res) => {
  console.log("Recebendo solicitação para atualizar livro:", req.body);
  const { titulo, descricao, preco } = req.body;

  // Verificação de campos obrigatórios
  if (!titulo || preco == null) {
    return res
      .status(400)
      .json({ error: "Os campos 'titulo' e 'preco' são obrigatórios." });
  }

  const q =
    "UPDATE livro SET `titulo` = ?, `descricao` = ?, `preco` = ? WHERE `livro_id` = ?";
  const values = [titulo, descricao, parseFloat(preco), req.params.id];

  console.log("Valores a serem atualizados:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro atualizado com sucesso.");
  });
};

// Função para excluir um livro
export const deleteLivro = (req, res) => {
  const q = "DELETE FROM livro WHERE `livro_id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro deletado com sucesso.");
  });
};
