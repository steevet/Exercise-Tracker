import React from 'react';
import ReactDOM from 'react-dom';
//We won't be writting nay custom CSS
//import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </ BrowserRouter>
);

// ReactDOM.render(<App />, document.getElementById('root'));