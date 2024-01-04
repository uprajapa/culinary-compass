DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  cuisine VARCHAR(255) NOT NULL,
  chef_name VARCHAR(255) NOT NULL,
  recipe_name VARCHAR(255) NOT NULL,
  prep_time INTEGER,
  cook_time INTEGER,
  servings INTEGER,
  description VARCHAR (255),
  ingredients VARCHAR,
  cooking_instructions VARCHAR,
  video_link VARCHAR(255)
);