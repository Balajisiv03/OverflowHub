import {BrowserRouter as Router} from 'react-router-dom'; 
import './App.css';
import Navbar from './components/navbar/navbar';
import AllRoutes from './AllRoutes'
import React from 'react'
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchAllQuestions} from './actions/question';
import { fetchAllUsers } from './actions/users';


function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
         <Navbar />
         <AllRoutes />
      </Router>
    </div>
  )
}

export default App;



