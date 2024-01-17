const db = require("../connection");

const findAll = async () => {
  try {
    const query = "SELECT recipes.*, cuisines.name As cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id;";
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

const findTopRatedRecipes = async () => {
  try {
    const query =
      "SELECT recipes.id, recipes.chef_name, recipes.recipe_name, recipes.budget, recipes.cook_time, cuisines.name AS cuisine_name, recipes.description, recipes.photo_link FROM ratings JOIN recipes ON recipes.id = ratings.recipe_id JOIN cuisines ON cuisines.id = recipes.cuisine_id  WHERE rating > 4 GROUP BY recipe_id, recipes.id, recipes.video_link, cuisines.name;";
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
    const query =
      "SELECT recipes.id, recipes.chef_name, recipes.recipe_name, recipes.budget, recipes.cook_time, cuisines.name AS cuisine_name, recipes.description, recipes.photo_link FROM ratings JOIN recipes ON recipes.id = ratings.recipe_id JOIN cuisines ON cuisines.id = recipes.cuisine_id  WHERE rating > 4 GROUP BY recipe_id, recipes.id, recipes.video_link, cuisines.name LIMIT 3;";
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
const newRecipe = async (data) => {
  const {
    user_id,
    cuisine_id,
    chef_name,
    recipe_name,
    budget,
    prep_time,
    cook_time,
    servings,
    description,
    ingredients,
    cooking_instructions,
    video_link,
    photo_link,
  } = data;

  try {
    const query = `INSERT INTO recipes (user_id,
      cuisine_id,
      chef_name,
      recipe_name,
      budget,
      prep_time,
      cook_time,
      servings,
      description,
      ingredients,
      cooking_instructions,
      video_link,
      photo_link) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING id`;
    const result = await db.query(query, [
      user_id,
      cuisine_id,
      chef_name,
      recipe_name,
      budget,
      prep_time,
      cook_time,
      servings,
      description,
      ingredients,
      cooking_instructions,
      video_link,
      photo_link,
    ]);

    if (result.rowCount === 1) {
      return { success: true, data: result };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error(error.message);
    return { success: false, message: error.message };
  }
};

const findById = async (id) => {
  try {
    const query = "SELECT recipes.*, cuisines.name As cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE recipes.id = $1";
    const result = await db.query(query, [id]);
    if (result.rowCount > 0) {
      return { success: true, recipe: result.rows[0] };
    } else {
      return { success: true, recipe: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const findByUserId = async (id) => {
  try {
    const query = "SELECT recipes.*, cuisines.name As cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE user_id = $1";
    const result = await db.query(query, [id]);
    if (result.rowCount > 0) {
      return { success: true, recipe: result.rows[0] };
    } else {
      return { success: true, recipe: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const deleteById = async (id) => {
  try {
    const query = "DELETE FROM recipes WHERE id = $1;";
    const result = await db.query(query, [id]);
    if (result.rowCount > 0) {
      return { success: true, recipe: result.rows[0] };
    } else {
      return { success: true, recipe: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const editById = async (id, chef_name, recipe_name, budget, prep_time, cook_time, servings, description, ingredients, cooking_instructions, video_link, photo_link, cuisine_id, user_id) => {
  try {
    const query = "UPDATE recipes SET chef_name=$1, recipe_name=$2, budget=$3, prep_time=$4, cook_time=$5, servings=$6, description=$7, ingredients=$8, cooking_instructions=$9, video_link=$10, photo_link=$11, cuisine_id=$12 WHERE id = $14 RETURNING id";
    const result = await db.query(query, [chef_name, recipe_name, budget, prep_time, cook_time, servings, description, ingredients, cooking_instructions, video_link, photo_link, cuisine_id, user_id, id]);
    if (result.rowCount > 0) {
      return { success: true, recipe: result.rows[0] };
    } else {
      return { success: true, recipe: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const favoriteRecipes = async (id) => {
  try {
    const query = "SELECT recipe_id FROM favorites WHERE user_id = $1;";
    const result = await db.query(query, [id]);
    if (result.rowCount > 0) {
      return { success: true, favoriteRecipes: result.rows };
    } else {
      return { success: true, favoriteRecipes: [] };
    }
  } catch (error) {
    return { success: false, Error: error };
  }
};

const findItalianRecipes = async () => {
  try {
    const query =
      "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Italian';";
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
const findJapaneseRecipes = async () => {
  try {
    const query =
      "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Japanese';";
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
const findIndianRecipes = async () => {
  try {
    const query =
      "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Indian';";
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
const findKoreanRecipes = async () => {
  try {
    const query =
      "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Korean';";
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
const findMexicanRecipes = async () => {
  try {
    const query =
      "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Mexican';";
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

module.exports = {
  findAll,
  findTopRatedRecipes,
  findTopThreeRecipes,
  findById, 
  deleteById,
  favoriteRecipes,
  findItalianRecipes,
  findJapaneseRecipes,
  findIndianRecipes,
  findKoreanRecipes,
  findMexicanRecipes,
  newRecipe,
  findByUserId,
  editById
};
