import { useState } from "react";
import useRecipes from "../hooks/useRecipes";
import SelectCusine from "./SelectCusine";
import ErrorMessage from "../components/ErrorMessage";
import "../../public/css/modalForm.css";

const RecipeForm = ({ closeModalRecipe }) => {
  const { newRecipe, error, messageError } = useRecipes(closeModalRecipe);
  const [formData, setFormData] = useState({
    user_id: localStorage.getItem("user_id"),
    cuisine_id: "",
    chef_name: localStorage.getItem("user_name"),
    recipe_name: "",
    budget: "",
    prep_time: "",
    cook_time: "",
    servings: "",
    description: "",
    ingredients: "",
    cooking_instructions: "",
    video_link: "",
    photo_link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newRecipe(formData);
  };

  return (
    <div>
      <p className="mt-4 mb-4">
        {error && <ErrorMessage messageError={messageError} />}
      </p>

      <p className="text-center text-4xl">New Recipe</p>
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="flex flex-col mt-4">
          <SelectCusine
            nameField={formData.cuisine_id}
            onChange={handleChange}
          />
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              name="recipe_name"
              value={formData.recipe_name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Recipe Name"
              required
            />
            <input
              type="text"
              name="chef_name"
              value={formData.chef_name}
              onChange={handleChange}
              id="chef_name"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Chef Name"
              required
            />
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="number"
              value={formData.prep_time}
              onChange={handleChange}
              name="prep_time"
              id="prep_time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Prep Time"
              required
            />
            <input
              type="number"
              name="cook_time"
              value={formData.cook_time}
              onChange={handleChange}
              id="cook_time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cooking Time"
              required
            />
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              id="budget"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Budget"
              required
            />
            <input
              type="number"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              id="servings"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="How many people servings?"
              required
            />
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              name="video_link"
              value={formData.video_link}
              onChange={handleChange}
              id="video_link"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://youtube.com"
              required
            />
            <input
              type="text"
              name="photo_link"
              value={formData.photo_link}
              onChange={handleChange}
              id="photo_link"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://photo.com"
              required
            />
          </div>
          <div className="mt-4 flex gap-2">
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mt-4 flex gap-2">
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ingredients"
            ></textarea>
          </div>
          <div className="mt-4 flex gap-2">
            <textarea
              id="cooking_instructions"
              name="cooking_instructions"
              value={formData.cooking_instructions}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cooking Instructions"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex mt-4  justify-center rounded-md bg-indigo-600 px-4 py-4 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
