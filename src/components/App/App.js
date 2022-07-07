import React from 'react';
import { ProductProvider } from '../../contexts/products';
import Products from '../Products/Products';
// import Search from '../Search/Search';
import './App.css';

function App() {

  return (
    <ProductProvider>
      <div className='App'>
          <Products />
      </div>
    </ProductProvider>
  );
}

export default App;
