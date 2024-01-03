DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  recipe_id INTEGER REFERENCES recipes(id) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating between 0 and 5)
);