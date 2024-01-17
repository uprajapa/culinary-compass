import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useMyRecipes = () => {
  const [myRecipes, setMyRecipes] = useState([])
  const id = localStorage.getItem("user_id");
  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${id}`)
      .then((response) => setMyRecipes(response.data.recipes))
      .catch(err => console.error('Error fetching recipes', err))
  }, []);

  return { myRecipes, setMyRecipes }
}


export default useMyRecipes;