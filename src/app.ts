import "dotenv/config";
import "./DB/Connection";
import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

app.use(express.json());
app.listen(process.env.port, () => {
  console.log(`We are Connected...${process.env.port}`);
});
