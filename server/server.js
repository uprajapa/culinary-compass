require("dotenv").config();

const express = require("express");
var cors = require("cors");
const morgan = require("morgan");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const verifyToken = require("./src/middleware/authMiddleware");
const indexApiRoutes = require("./src/routes/index");
const usersApiRoutes = require("./src/routes/users");
app.use("/api/users", usersApiRoutes);

app.use("/api/", verifyToken, indexApiRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Example app listening on port ${PORT}`);
});
