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
const topThreeRecipesApiRoutes = require("./src/routes/topThreeRecipes");
const italianRecipesApiRoutes = require("./src/routes/italianRecipes");
const japaneseRecipesApiRoutes = require("./src/routes/japaneseRecipes");
const indianRecipesApiRoutes = require("./src/routes/indianRecipes");
const koreanRecipesApiRoutes = require("./src/routes/koreanRecipes");
const mexicanRecipesApiRoutes = require("./src/routes/mexicanRecipes");
const popularRecipesApiRoutes = require("./src/routes/popularrecipes");

app.use("/api/users", usersApiRoutes);
app.use("/api/recipes", recipesApiRoutes);
app.use("/api/cuisines", cuisinesApiRoutes);
app.use("/api/topratedrecipes", topRatedRecipesApiRoutes);
app.use("/api/", indexApiRoutes);
app.use("/api/topthreerecipes", topThreeRecipesApiRoutes);
app.use("/api/italianrecipes", italianRecipesApiRoutes);
app.use("/api/japaneserecipes", japaneseRecipesApiRoutes);
app.use("/api/indianrecipes", indianRecipesApiRoutes);
app.use("/api/koreanrecipes", koreanRecipesApiRoutes);
app.use("/api/mexicanrecipes", mexicanRecipesApiRoutes);
app.use("/api/popularrecipes", popularRecipesApiRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Example app listening on port ${PORT}`);
});

