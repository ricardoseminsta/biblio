import express from "express";
import autorRoutes from "./routes/autorsRoutes.js";
import categoriaRoutes from "./routes/categoriasRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());

app.use("/autores", autorRoutes);
app.use("/categorias", categoriaRoutes);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
