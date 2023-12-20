import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../signUp'
import Login from '../login'
import LogOut from '../logOut'

export default function Home() {
  return (
    <div className='flex'>
        <SignUp/>
        <Login/>
        <LogOut/>
    </div>
  )
}
