import React from 'react'
import { FormContainer, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './Login.style'
import meal from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const userInfo = {
    username: "admin"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    navigate(-1)
  }



  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <h1>Shady's Receipe</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder='Enter User Name' type="text" />
          <StyledInput placeholder='Enter password' type="password" />
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>

    </LoginContainer>
  )
}

export default Login