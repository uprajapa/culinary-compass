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
const recipesApiRoutes = require("./src/routes/recipes");
const cuisinesApiRoutes = require("./src/routes/cuisines");
const topRatedRecipesApiRoutes = require("./src/routes/topRatedRecipes");
const topThreeRecipes = require("./src/routes/topThreeRecipes");
const italianRecipes = require("./src/routes/italianRecipes")

app.use("/api/users", usersApiRoutes);
app.use("/api/recipes", recipesApiRoutes);
app.use("/api/cuisines", cuisinesApiRoutes);
app.use("/api/topratedrecipes", topRatedRecipesApiRoutes);
app.use("/api/", indexApiRoutes);
app.use("/api/topthreerecipes", topThreeRecipes);
app.use("/api/italianrecipes", italianRecipes);

app.listen(PORT, HOST, () => {
  console.log(`Example app listening on port ${PORT}`);
});

