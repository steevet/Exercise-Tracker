import React from 'react';
// "npm intall bootstrap" in terminal in main folder so 'Exercise-Tracker'
//Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. 
// It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components
import "bootstrap/dist/css/bootstrap.min.css";

// "npm install react-router-dom" in terminal in main folder so 'Exercise-Tracker'
// This will make it easier to route differnet URLs to different react components
import { BrowserRouter as Router, Route } from "react-router-dom";

// Name of different compoents and where they are located
// "components" folder created, inside 'src'
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} /> 
      <Route path="/edit/:id" component={EditExercise} /> 
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
