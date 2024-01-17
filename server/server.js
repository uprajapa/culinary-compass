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
const favoritesApiRoutes = require("./src/routes/favorites");
const topRatedRecipesApiRoutes = require("./src/routes/topRatedRecipes");
const topThreeRecipesApiRoutes = require("./src/routes/topThreeRecipes");
const italianRecipesApiRoutes = require("./src/routes/italianRecipes");
const japaneseRecipesApiRoutes = require("./src/routes/japaneseRecipes");
const indianRecipesApiRoutes = require("./src/routes/indianRecipes");
const koreanRecipesApiRoutes = require("./src/routes/koreanRecipes");
const mexicanRecipesApiRoutes = require("./src/routes/mexicanRecipes");
const popularRecipesApiRoutes = require("./src/routes/popularRecipes");

app.use("/api/users", usersApiRoutes);
app.use("/api/recipes", recipesApiRoutes);
app.use("/api/cuisines", cuisinesApiRoutes);
app.use("/api/favorites", favoritesApiRoutes);
app.use("/api/topratedrecipes", topRatedRecipesApiRoutes);
app.use("/api/", indexApiRoutes);
app.use("/api/topthreerecipes", topThreeRecipesApiRoutes);
app.use("/api/cuisines/Italian", italianRecipesApiRoutes);
app.use("/api/cuisines/Japanese", japaneseRecipesApiRoutes);
app.use("/api/cuisines/Indian", indianRecipesApiRoutes);
app.use("/api/cuisines/Korean", koreanRecipesApiRoutes);
app.use("/api/cuisines/Mexican", mexicanRecipesApiRoutes);
app.use("/api/cuisines/Popular", popularRecipesApiRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Example app listening on port ${PORT}`);
});
