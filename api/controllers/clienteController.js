import { db } from "../db.js";

// Função para obter todos os clientes
export const getClientes = (_, res) => {
  const q = "SELECT * FROM cliente";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para adicionar um novo cliente
export const addCliente = (req, res) => {
  console.log("Recebendo solicitação para adicionar cliente:", req.body);
  const { primeiro_nome, segundo_nome, email, telefone, endereco_id } =
    req.body;

  // Verificação de campos obrigatórios
  if (!primeiro_nome || !telefone) {
    return res.status(400).json({
      error: "Os campos 'primeiro_nome' e 'telefone' são obrigatórios.",
    });
  }

  // Verificação de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    return res.status(400).json({ error: "O email fornecido não é válido." });
  }

  const q = "CALL CadastrarCliente(?, ?, ?, ?, ?)";

  const values = [
    primeiro_nome,
    segundo_nome || null,
    email || null,
    telefone,
    endereco_id || null,
  ];

  console.log("Valores a serem inseridos:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Cliente criado com sucesso.");
  });
};

// Função para atualizar um cliente existente
export const updateCliente = (req, res) => {
  console.log("Recebendo solicitação para atualizar cliente:", req.body);
  const { primeiro_nome, segundo_nome, email, telefone, endereco_id } =
    req.body;

  // Verificação de campos obrigatórios
  if (!primeiro_nome || !telefone) {
    return res.status(400).json({
      error: "Os campos 'primeiro_nome' e 'telefone' são obrigatórios.",
    });
  }

  // Verificação de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    return res.status(400).json({ error: "O email fornecido não é válido." });
  }

  const q = "CALL EditarCliente(?, ?, ?, ?, ?, ?)";
  const values = [
    req.params.id,
    primeiro_nome,
    segundo_nome,
    email,
    telefone,
    endereco_id,
  ];

  console.log("Valores a serem atualizados:", values);

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Cliente atualizado com sucesso.");
  });
};

// Função para excluir um cliente
export const deleteCliente = (req, res) => {
  const q = "DELETE FROM cliente WHERE `cliente_id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Cliente deletado com sucesso.");
  });
};
