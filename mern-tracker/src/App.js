import React from 'react';
// "npm intall bootstrap" in terminal in main folder so 'Exercise-Tracker'
//Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. 
// It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components
import "bootstrap/dist/css/bootstrap.min.css";

// "npm install react-router-dom" in terminal in main folder so 'Exercise-Tracker'
// This will make it easier to route differnet URLs to different react components
import { Router, Routes, Route } from "react-router-dom";

// Name of different compoents and where they are located
// "components" folder created, inside 'src'
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

// We will be making a Router element
// We will be creating all these components
const App = () => {
  return (
    // <div className='App'>
    //   Hello World!
    // </div>
    <Router>
        <Navbar />
        <br />
        <Route path="/" element={<ExercisesList />} /> 
        <Route path="/edit/:id" element={<EditExercise />} /> 
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
    </Router>
  );
}

export default App;
