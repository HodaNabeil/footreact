import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeandleCard from './components/HeandleCard';
import FliterMenu from './components/FliterMenu';
import Category from './components/Category';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import ScrollTopButton from './components/ScrollTopButton';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Hero/>
      <HeandleCard/>
      <FliterMenu/>
      <Category/>
      <Footer/>
      <ScrollTopButton/>
    </div>,
  },
  {
    path : '/servies',
    element:<>
      <Navbar/>
      <Services/>
    </>
  },
  {
    path:'/about',
    element: <>
    <Navbar/>
    <About/>
    </>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

