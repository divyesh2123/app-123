import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyApp from './MyApp';
import ParentC from './ParentC';
import MyFullFormExample from './MyFullFormExample';
import FullFormFunction from './MyFullFormExample';
import MyParent from './MyParent';
import ShowMoreTextToggle from './ShowMoreTextToggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShowMoreTextToggle  text="This is the javascript This is the javascript This is the javascript THis is the javascript This is the javascript THi s is the react"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
