import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home'
import SignUp from '../signUp'
import ResumeForm from '../formInput'
import ResumeShow from '../resumeShow'
import ShowAllResume from '../resumeShow/showAllResume'

export default function AppRoutes() {
  return (
    <div>
         <Routes>
                <Route path='/createResume' element={<ResumeForm />} />
                <Route path='/showResume' element={<ResumeShow />} />
                <Route path='/showAllResume' element={<ShowAllResume />} />
                <Route path='/' element={<Home />} />
            </Routes>
    </div>
  )
}
