const db = require("../connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = async (email, password) => {
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email]);

    if (result.rowCount === 1) {
      const isPasswordValid = await bcrypt.compare(
        password,
        result.rows[0].password
      );
      if (isPasswordValid) {
        const token = jwt.sign(
          { userId: result.rows[0].id },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        return {
          success: true,
          token,
          email,
          user_id: result.rows[0].id,
          user_name: result.rows[0].name,
        };
      }
    }
    return { success: false, message: "Invalid email or password" };
  } catch (err) {
    return { success: false, message: "Authentication failed" };
  }
};

const createUser = async (name, email, password) => {
  try {
    const passwordHashed = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS)
    );
    const query =
      "INSERT INTO users (name, email,password) VALUES ($1,$2, $3) RETURNING id";
    const result = await db.query(query, [name, email, passwordHashed]);

    if (result.rowCount === 1) {
      const token = jwt.sign(
        { userId: result.rows[0].id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return {
        success: true,
        token,
        email,
        user_id: result.rows[0].id,
        user_name: name,
      };
    }
  } catch (error) {
    if (error.constraint === "users_email_key") {
      const msg = "Email address is already in use.";
      return { success: false, message: msg };
    } else {
      return { success: false, message: error.message };
    }
  }
};


const getUserByEmail = async (email) => {
  try {
    const query = "SELECT id FROM users WHERE email = $1";
    const result = await db.query(query, [email]);
    if (result.rowCount > 0) {
      return { success: true, user: result.rows[0] };
    } else {
      return { success: true, user: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};


module.exports = { auth, createUser, getUserByEmail };
