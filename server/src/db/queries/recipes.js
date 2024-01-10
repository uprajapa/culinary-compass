const db = require("../connection");

const findAll = async () => {
  try {
    const query = "SELECT * FROM recipes";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
};

const findTopRatedRecipes = async () => {
  try {
    const query = "SELECT recipes.id AS recipes_id, recipes.chef_name, recipes.recipe_name, recipes.cook_time, recipes.cuisine, recipes.description FROM ratings JOIN recipes ON recipes.id = ratings.recipe_id WHERE rating > 4 GROUP BY recipe_id, recipes.id, recipes.video_link;";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
};

module.exports = { findAll, findTopRatedRecipes };
