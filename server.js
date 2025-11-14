import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

// Create an instance of the Express application
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes setup
app.use("/api/v1/auth", authRoutes);

// Define the root route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the eCommerce app</h1>");
});

// Define the port
const PORT = process.env.PORT || 8080;

// Start the server
server.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
  io.on("connection", (socket) => {
    console.log("user connected " + socket.id);
  });
});
