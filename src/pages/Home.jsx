import React from 'react'
import { NavLink } from 'react-router-dom'
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Hero />
      <ProductList />
    </div>
  );
}

export default Home