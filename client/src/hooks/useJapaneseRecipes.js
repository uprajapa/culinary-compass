import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useJapaneseRecipes = () => {
    const [japaneseRecipes, setJapaneseRecipes] = useState([])
   
    useEffect(()=> {
      axios.get("http://localhost:8080/api/japaneserecipes")
        .then((response) => setJapaneseRecipes(response.data.recipes))
        .catch(err => console.error('Error fetching recipes', err)) 
    }, []);
    
    return { japaneseRecipes }
  }
  
  
  export default useJapaneseRecipes;