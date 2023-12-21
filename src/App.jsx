import { useState } from 'react'

import './App.css'
import ResumeForm from './components/formInput'
import { Provider } from './context/resumeContext'
import Login from './components/login'
import SignUp from './components/signUp'

import LogOut from './components/logOut'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/AppRouter'
import styled from 'styled-components'

  const Wrapper = styled.div`font-family: 'Dosis', sans-serif;`

function App() {

  return (
    <Wrapper>
    <BrowserRouter>
      <Provider>
        <AppRoutes></AppRoutes>
      </Provider>
    </BrowserRouter>
    </Wrapper>
  

  )
}

export default App
