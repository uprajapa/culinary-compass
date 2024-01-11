import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useTopRecipes = () => {
    const [topRecipes, setTopRecipes] = useState([])
    
    useEffect(()=> {
      axios.get("http://localhost:8080/api/topratedrecipes")
        .then((response) => setTopRecipes(response.data.recipes))
        .catch(err => console.error('Error fetching recipes', err)) 
    }, []);
    
    return { topRecipes }
  }
  
  
  export default useTopRecipes;
