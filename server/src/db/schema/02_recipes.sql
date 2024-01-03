DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  name VARCHAR(255) NOT NULL,
  prep_time INTEGER,
  cook_time INTEGER,
  servings INTEGER,
  descriptiom VARCHAR (255),
  ingredients VARCHAR(255),
  cooking_instructions VARCHAR(255),
  video_link VARCHAR(255)
);