const db = require("../connection");

const findAll = async () => {
  try {
    const query = "SELECT * FROM recipes";
    const result = await db.query(query);
    if (result.rowCount > 0) {
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
    const query = "SELECT recipes.id, recipes.chef_name, recipes.recipe_name, recipes.budget, recipes.cook_time, cuisines.name AS cuisine_name, recipes.description, recipes.photo_link FROM ratings JOIN recipes ON recipes.id = ratings.recipe_id JOIN cuisines ON cuisines.id = recipes.cuisine_id  WHERE rating > 4 GROUP BY recipe_id, recipes.id, recipes.video_link, cuisines.name;";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
const findTopThreeRecipes = async () => {
  try {
    const query = "SELECT recipes.id, recipes.chef_name, recipes.recipe_name, recipes.budget, recipes.cook_time, cuisines.name AS cuisine_name, recipes.description, recipes.photo_link FROM ratings JOIN recipes ON recipes.id = ratings.recipe_id JOIN cuisines ON cuisines.id = recipes.cuisine_id  WHERE rating > 4 GROUP BY recipe_id, recipes.id, recipes.video_link, cuisines.name LIMIT 3;";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

module.exports = { findAll, findTopRatedRecipes, findTopThreeRecipes };
