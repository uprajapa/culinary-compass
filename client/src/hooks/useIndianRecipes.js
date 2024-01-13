import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useIndianRecipes = () => {
    const [indianRecipes, setIndianRecipes] = useState([])
   
    useEffect(()=> {
      axios.get("http://localhost:8080/api/indianrecipes")
        .then((response) => setIndianRecipes(response.data.recipes))
        .catch(err => console.error('Error fetching recipes', err)) 
    }, []);
    
    return { indianRecipes }
  }
  
  
  export default useIndianRecipes;