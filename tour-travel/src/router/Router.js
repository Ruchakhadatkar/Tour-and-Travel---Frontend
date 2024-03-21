import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ToursPage from '../pages/ToursPage'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'

const Router = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigate to='/HomePage'/>}/>
    <Route path='/HomePage' element={<HomePage/>}/>
    <Route path='/Tours' element={<ToursPage/>}/>
    <Route path='/Tours/:id' element={<TourDetails/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Tours/search' element={<SearchResultList/>}/>



   </Routes>

  )
}

export default Router