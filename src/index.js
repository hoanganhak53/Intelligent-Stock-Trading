import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyAdmin } from './comp/admin/MyAdmin';
import { Register } from './comp/register/Register';
import Login from './features/login/Login';

ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter> 
       <Routes>
         <Route path="*" element={<App/>} />
         <Route path="admin/*" element={<MyAdmin/>} />
         <Route path="register/*" element={<Register />} />
         <Route path="login/*" element={<Login />} />
       </Routes>   
       </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
