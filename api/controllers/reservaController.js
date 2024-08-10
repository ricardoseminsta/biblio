import { db } from "../db.js";

// Função para listar todas as reservas
export const getReservas = (_, res) => {
  const q = "SELECT * FROM reserva";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para adicionar uma reserva
export const addReserva = (req, res) => {
  const { cliente_id, data_de_reserva, livro_id, data_de_devolucao } = req.body;

  // Verificação de campos obrigatórios
  if (!cliente_id || !data_de_reserva || !livro_id) {
    return res.status(400).json({
      error:
        "Os campos 'cliente_id', 'data_de_reserva' e 'livro_id' são obrigatórios.",
    });
  }

  const q =
    "INSERT INTO reserva(`cliente_id`, `data_de_reserva`, `livro_id`, `data_de_devolucao`) VALUES(?, ?, ?, ?)";
  const values = [cliente_id, data_de_reserva, livro_id, data_de_devolucao];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva criada com sucesso.");
  });
};

// Função para atualizar uma reserva
export const updateReserva = (req, res) => {
  const { cliente_id, data_de_reserva, livro_id, data_de_devolucao } = req.body;

  // Verificação de campos obrigatórios
  if (!cliente_id || !data_de_reserva || !livro_id) {
    return res.status(400).json({
      error:
        "Os campos 'cliente_id', 'data_de_reserva' e 'livro_id' são obrigatórios.",
    });
  }

  const q =
    "UPDATE reserva SET `cliente_id` = ?, `data_de_reserva` = ?, `livro_id` = ?, `data_de_devolucao` = ? WHERE `reserva_id` = ?";
  const values = [
    cliente_id,
    data_de_reserva,
    livro_id,
    data_de_devolucao,
    req.params.id,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva atualizada com sucesso.");
  });
};

// Função para deletar uma reserva
export const deleteReserva = (req, res) => {
  const q = "DELETE FROM reserva WHERE `reserva_id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva deletada com sucesso.");
  });
};
