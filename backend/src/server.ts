import express from "express";
import cors from "cors";
import diceRoutes from "./routes/dice.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", diceRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
