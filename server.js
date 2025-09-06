import express from "express";
import urlRoutes from "./routes/urlRoutes.js";
import logger from "./middleware/logger.js";

const app = express();
app.use(express.json());

// Middleware
app.use(logger);

// Routes
app.use("/", urlRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
