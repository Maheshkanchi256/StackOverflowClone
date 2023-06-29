import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Questions from './Pages/Questions/Questions';
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';
import Tags from './Pages/Tags/Tags';
import Users from './Pages/Users/Users.jsx';
import UserProfile from './Pages/UserProfile/UserProfile';

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home />} />
        <Route exact path='/Auth'  element={<Auth />}/>
        <Route exact path='/Questions' element={<Questions />} />
        <Route exact path='/AskQuestion' element={<AskQuestion />} /> 
        <Route exact path='/Questions/:id' element={<DisplayQuestion />} /> 
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>} />
    </Routes>
  )
}

export default AllRoutes
