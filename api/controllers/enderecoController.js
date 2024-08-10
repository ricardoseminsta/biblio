import { db } from "../db.js";

// Função para obter todos os endereços
export const getEnderecos = (_, res) => {
  const q = "SELECT * FROM endereco";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para adicionar um novo endereço
export const addEndereco = (req, res) => {
  console.log("Recebendo solicitação para adicionar endereço:", req.body);
  const { logradouro, bairro, cep, cidade } = req.body;

  // Verificação de campos obrigatórios
  if (!logradouro || !bairro || !cep || !cidade) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const q =
    "INSERT INTO endereco(`logradouro`, `bairro`, `cep`, `cidade`) VALUES(?, ?, ?, ?)";
  const values = [logradouro, bairro, cep, cidade];

  console.log("Valores a serem inseridos:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Endereço criado com sucesso.");
  });
};

// Função para atualizar um endereço existente
export const updateEndereco = (req, res) => {
  console.log("Recebendo solicitação para atualizar endereço:", req.body);
  const { logradouro, bairro, cep, cidade } = req.body;

  // Verificação de campos obrigatórios
  if (!logradouro || !bairro || !cep || !cidade) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const q =
    "UPDATE endereco SET `logradouro` = ?, `bairro` = ?, `cep` = ?, `cidade` = ? WHERE `endereco_id` = ?";
  const values = [logradouro, bairro, cep, cidade, req.params.id];

  console.log("Valores a serem atualizados:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Endereço atualizado com sucesso.");
  });
};

// Função para excluir um endereço
export const deleteEndereco = (req, res) => {
  const q = "DELETE FROM endereco WHERE `endereco_id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Endereço deletado com sucesso.");
  });
};
