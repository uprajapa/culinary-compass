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
    const query = "SELECT * FROM recipes JOIN ratings ON recipes.id = recipe_id WHERE rating > 4;";
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
