import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
console.log("Backend running")
app.get("/api/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});