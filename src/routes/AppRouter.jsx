import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
/* Rutar publicas*/
import { Index } from '../pages/home/Index';
import { UserRouter } from './UserRouter';

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Index /> } />
            <Route path="/user/*" element={ <UserRouter /> } />
        </Routes>
      </BrowserRouter>
  )
}