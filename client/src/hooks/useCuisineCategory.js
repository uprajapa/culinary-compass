import React, { useState, useEffect } from 'react';
import axios from 'axios';


const useCuisineCategory = (id) => {
  const [cuisineCategory, setCuisineCategory] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/api/cuisines/${id}`)
      .then((response) => setCuisineCategory(response.data.recipes))
      .catch(err => console.error('Error fetching recipes', err))
  }, []);

  return { cuisineCategory }
}


export default useCuisineCategory;