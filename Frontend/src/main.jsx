import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Teaching from './Components/Faculty/Teaching.jsx'
import NonTeaching from './Components/Faculty/NonTeaching.jsx'
import HodDesk from "./Components/Faculty/HodDesk";
import AboutPage from './Components/About/About';
import Event from './Components/EventPage/Event';
import Academics from './Components/Academics/Academics';
// import AdminDashboard from './Components/Admin/AdminDashboard.jsx';
// import Login from './Components/Auth/Login.jsx';  //

// // Protect Admin Route
// const PrivateRoute = ({ element }) => {
//   const token = localStorage.getItem("token");
//   return token ? element : <Navigate to="/login" />;
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} /> 
      <Route path="/HodDesk" element={<HodDesk/>} />
      <Route path="/Teaching" element={<Teaching />} /> 
      <Route path="/NonTeaching" element={<NonTeaching />} /> 
      <Route path="/Event" element={<Event/>} /> 
      <Route path="/Academics" element={<Academics/>} /> 
     
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="admin" element={<PrivateRoute element={<AdminDashboard />} />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
