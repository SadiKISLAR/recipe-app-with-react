import React from 'react'
import { Card, Header, MainContainer } from './Cards.style'

const Cards = ({ recipes }) => {
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        return (
          <Card key={index}>
            <Header> {recipe.label}</Header>
          </Card>
        )
      })}
    </MainContainer>
  )
}

export default Cards
