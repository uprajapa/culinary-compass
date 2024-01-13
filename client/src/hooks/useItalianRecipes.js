import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useItalianRecipes = () => {
    const [italianRecipes, setItalianRecipes] = useState([])
   
    useEffect(()=> {
      axios.get("http://localhost:8080/api/italianrecipes")
        .then((response) => setItalianRecipes(response.data.recipes))
        .catch(err => console.error('Error fetching recipes', err)) 
    }, []);
    
    return { italianRecipes }
  }
  
  
  export default useItalianRecipes;