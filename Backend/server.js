import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import doctorRoutes from "./routes/doctorRoutes.js";

dotenv.config();

console.log("Starting server...");
const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/doctors", doctorRoutes);

export default app;

if (process.env.VERCEL !== "1") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

process.on("SIGINT", () => {
  console.log("Server stopped");
  process.exit();
});
