const db = require("../connection");

const addFavorites = async (userId, recipeId) => {
  try {
    const query = "INSERT INTO favorites (user_id, recipe_id) VALUES ($1, $2) RETURNING *;";
    const result = await db.query(query, [userId, recipeId]);

    if (result.rowCount > 0) {
      return { success: true, favorites: result.rows };
    } else {
      return { success: true, favorites: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const deleteFavorite = async (userId, recipeId) => {
  try {
    const query = "DELETE FROM favorites WHERE user_id = $1 AND recipe_id = $2;";
    const result = await db.query(query, [userId, recipeId]);
    if (result.rowCount > 0) {
      return { success: true, favorites: result.rows };
    } else {
      return { success: true, favorites: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

module.exports = { addFavorites, deleteFavorite };