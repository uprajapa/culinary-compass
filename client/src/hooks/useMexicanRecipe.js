import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useMexicanRecipes = () => {
    const [mexicanRecipes, setMexicanRecipes] = useState([])
   
    useEffect(()=> {
      axios.get("http://localhost:8080/api/mexicanrecipes")
        .then((response) => setMexicanRecipes(response.data.recipes))
        .catch(err => console.error('Error fetching recipes', err)) 
    }, []);
    
    return { mexicanRecipes }
  }
  
  
  export default useMexicanRecipes;