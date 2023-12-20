import { useState } from 'react'

import './App.css'
import ResumeForm from './components/formInput'
import { Provider } from './context/resumeContext'
import Login from './components/login'
import SignUp from './components/signUp'

import LogOut from './components/logOut'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/AppRouter'

function App() {

  return (
    <BrowserRouter>
      <Provider>
        <AppRoutes></AppRoutes>
      </Provider>
    </BrowserRouter>
  

  )
}

export default App
