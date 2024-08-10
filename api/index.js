import express from "express";
import autorRoutes from "./routes/autorsRoutes.js";
import categoriaRoutes from "./routes/categoriasRoutes.js";
import clienteRoutes from "./routes/clientesRoutes.js";
import enderecoRoutes from "./routes/enderecosRoutes.js";
import livroRoutes from "./routes/livrosRoutes.js";

import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());

app.use("/autores", autorRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/clientes", clienteRoutes);
app.use("/enderecos", enderecoRoutes);
app.use("/livros", livroRoutes);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
