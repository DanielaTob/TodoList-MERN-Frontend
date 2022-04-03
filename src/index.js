import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './views/Landing';
import Tasks from './views/Tasks';
import Profile from './views/Profile';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index="/Landing" element={<Landing />}/>
      <Route path='/Tasks' element={<Tasks />}/>
      <Route path='/Profile' element={<Profile />}/>
    </Route>
    </Routes>
    </BrowserRouter>


  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
