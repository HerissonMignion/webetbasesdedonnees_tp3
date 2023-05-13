import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useState } from "react";


import Home from "./home/Home";
import StudentsHome from './students/StudentsHome';
import MainNavBar from './shared/navigation/MainNavBar';



function App() {
  return (
    <Router>
      <MainNavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={
            <Home />
          } />
          <Route exact path="/students/home" element={
            <StudentsHome />
          } />
          <Route exact path="/interships/home" element={
            <Home />
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
