import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useKoreanRecipes = () => {
    const [koreanRecipes, setKoreanRecipes] = useState([])
   
    useEffect(()=> {
      axios.get("http://localhost:8080/api/cuisines/Korean")
        .then((response) => setKoreanRecipes(response.data.recipes))
        .catch(err => console.error('Error fetching recipes', err)) 
    }, []);
    
    return { koreanRecipes }
  }
  
  
  export default useKoreanRecipes;