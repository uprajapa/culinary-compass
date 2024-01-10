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

module.exports = { findAll };
