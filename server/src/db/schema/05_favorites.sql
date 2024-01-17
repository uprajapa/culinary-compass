DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE NOT NULL
);