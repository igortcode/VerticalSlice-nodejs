import express from "express";
import documentoRoutes from "./feature/documento/documento.routes"

const app = express();

app.use(express.json());

app.use("/documentos", documentoRoutes)

app.listen(3000, () => {
    console.log("Rodando em http://localhost:3000");
})