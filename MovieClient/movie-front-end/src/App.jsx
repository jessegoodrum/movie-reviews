
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

import Layout from './components/Layout';
import { Routes, Route } from 'react-router';
import Home from './components/home/Home';



function App() {

  const {movies, setMovies} = useState();

  const getMovies = async () =>{
    

    try {
      const response = await api.get("/api/v1/movies");
      
      setMovies(response.data);

    } 
    catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() =>{
    getMovies();
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path='/' element ={<Home movies = {movies}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;