import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';

const Home = () => {
  const APP_ID = "80da54c7";
  const APP_KEY = "c23a7f86fcdeddf5d8f0a3b60023f94c";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([])

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  const getData = async () => {
    const { data } = await axios(url)
    setRecipes(data.hits)
  }
  console.log(recipes);

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Header setQuery={setQuery} />
    </div>
  )
}

export default Home
