const db = require("../connection");

const getAllCuisines = async () => {
  try {
    const query = "SELECT * FROM cuisines";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      return { success: true, cuisines: result.rows };
    } else {
      return { success: true, cuisines: [] };
    }
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
};

module.exports = { getAllCuisines };
