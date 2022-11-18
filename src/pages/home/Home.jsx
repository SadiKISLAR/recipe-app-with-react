import axios from 'axios';
import React, { useState } from 'react'
import Cards from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import { HomeImg, ImgDiv } from './Home.style';
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const APP_ID = "80da54c7";
  const APP_KEY = "c23a7f86fcdeddf5d8f0a3b60023f94c";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState("");
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url)
        setRecipes(data.hits)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Please fill the Form")
    }


  }
  console.log(recipes);

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />

      {!recipes &&
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      }
      <Cards />
    </div>
  )
}

export default Home
