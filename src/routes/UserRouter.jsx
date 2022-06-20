import React from 'react'
import { Routes, Route } from "react-router-dom";
import { CreateUser } from '../components/user/CreateUser';
import { EditUser } from '../components/user/EditUser';
import { ListUser } from '../components/user/ListUser';
import { ViewUser } from '../components/user/ViewUser';
export const UserRouter = () => {
  return (
        <Routes>
            <Route path="" element={ <ListUser /> } />
            <Route path="view/:id" element={ <ViewUser /> } />
            <Route path="edit/:id" element={ <EditUser /> } />
            <Route path="create" element={ <CreateUser /> } />
            <Route path="*" element={ <ListUser /> } />
        </Routes>
  )
}
