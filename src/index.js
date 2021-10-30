import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Person from './components/Person';
import Man from './components/Man';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Person/>


  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
