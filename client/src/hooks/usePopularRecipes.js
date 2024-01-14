import React, { useState, useEffect } from 'react';
import axios from 'axios';


const usePopularRecipes = () => {
    const [popularRecipes, setPopularRecipes] = useState([])
   
    useEffect(()=> {
      axios.get("http://localhost:8080/api/cuisines/popular")
        .then((response) => setPopularRecipes(response.data.recipes))
        .catch(err => console.error('Error fetching recipes', err)) 
    }, []);
    
    return { popularRecipes }
  }
  
  
  export default usePopularRecipes;