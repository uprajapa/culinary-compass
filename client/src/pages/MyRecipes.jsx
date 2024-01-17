import React, { useState, useEffect, useReducer } from 'react';
import "../../public/css/myrecipes.css";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import RecipeEdit from '../components/RecipeEdit';
import useRecipes from '../hooks/useRecipes';
import axios from 'axios';
import dataReducer, { MODAL_EDIT } from "../reducers/dataReducer";


function MyRecipes({recipes}) {
  const [ myRecipes, setMyRecipes ] = useState([]);
  let editRecipe = {};

  const [state, dispatch] = useReducer(dataReducer, {
    isModalOpenEdit: false,
  });

  const closeEditModal = () => {
    dispatch({ type: MODAL_EDIT });
  };

  const openEditModal = async (recipe) => {
    editRecipe = recipe;
    await dispatch({ type: MODAL_EDIT });
  };
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    setMyRecipes(recipes.filter((recipe) => recipe.user_id == userId));
  }, []);

  
  const deleteRecipe = (id) => { 
    axios.delete(`http://localhost:8080/api/recipes/${id}`)
    .then((response) => console.log("Deleted recipe with id", id, response))
    .catch(err => console.error('Error deleting recipe', err)) 
    setMyRecipes(myRecipes.filter(recipe => recipe.id !== id));
  };
  
  const customStylesEdit = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    content: {
      width: "600px",
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1001,
    },
  };

  return(
    <div className="stuff">
      <h1 className="title">My Recipes</h1>
      <table className="table">
        <tbody> 
          <tr className="title-row">
            <td className="title-data">Recipes</td>
            <td className="title-data">Edit Recipe </td>
            <td className="title-data">Delete Recipe</td>
          </tr>
        {myRecipes.map(recipe => 
          <tr key={recipe.id} className="content-row">
            <Modal
                isOpen={state.isModalOpenEdit}
                onRequestClose={closeEditModal}
                contentLabel="Edit Recipe Modal"
                style={customStylesEdit}
              >
              <MdClose
                  onClick={closeEditModal}
                  className="text-red-500 text-4xl bold cursor-pointer"
              />
              <RecipeEdit closeEditModal={closeEditModal} 
    
                id={recipe.id}
                recipe_name={recipe.recipe_name}
                chef_name={recipe.chef_name}
                budget={recipe.budget}
                time={recipe.cook_time}
                cuisine={recipe.cuisine_name}
                description={recipe.description}
                photo_link={recipe.photo_link}
                 />
            </Modal>
            <td className="content-data">{recipe.recipe_name}</td>
            <td className="content-data"><button onClick={() => openEditModal(recipe)}>Edit</button></td>
            <td className="content-data"><button onClick={()=> deleteRecipe(recipe.id)}>Delete</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    
    )
  };
  
  export default MyRecipes;  