import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Pages/Form";
import CreateForm from "./Pages/CreateForm";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import AdminPanel from "./Pages/AdminPanel";
import Navbar from "./Components/Navbar";
import { ToastContainer } from 'react-toastify';
import NotFound from "./Pages/NotFound";
import {  ProtectedRoutes } from "./Components/ProtectedRoutes";
import Sucess from './Pages/Sucess';

const App = () => {
  return (
    <div>
       <div>
      <ToastContainer />
     </div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<CreateForm />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
          <Route path="/sucess" element={<Sucess/>}/>
          <Route path="/admin" element={<ProtectedRoutes adminOnly><AdminPanel /></ProtectedRoutes>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;