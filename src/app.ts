import "dotenv/config";
import "./DB/Connection";
import express from "express";
import cors from "cors";
import memRoute from "./Routes/member.route";
import authRoute from "./Routes/author.route";
import bookRoute from "./Routes/book.route";
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

app.use(express.json());
app.use("/members", memRoute); // Path Mounting
app.use("/authors", authRoute);
app.use("/books", bookRoute);
app.listen(process.env.port, () => {
  console.log(`We are Connected...${process.env.port}`);
});
