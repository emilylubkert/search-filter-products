import { useState } from 'react';
import { useProducts } from '../../contexts/products';
import Search from '../Search/Search';
import './Products.css';

function Products() {
  const products = useProducts();
  const [display, setDisplay] = useState(products.products);
  const [searchInput, setSearchInput] = useState('');

  function formatPrice(num) {
    return (num / 100).toFixed(2);
  }

  function onSubmit(event) {
    event.preventDefault();
    filterProducts(searchInput);
  }

  function handleChange(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  function filterProducts(input) {
    input = input.toLowerCase();
    const filteredProducts = products.products.filter(
      (product) =>
        product.name.toLowerCase().includes(input) ||
        product.description.toLowerCase().includes(input)
    );
    setDisplay(filteredProducts);
    setSearchInput('');
  }

  function restoreProducts() {
    setDisplay(products.products);
  }

  const productsList = display.map((product, index) => {
    return (
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>${formatPrice(product.price)}</td>
      </tr>
    );
  });

  return (
    <>
      <Search
        onSubmit={onSubmit}
        handleChange={handleChange}
        searchInput={searchInput}
      />
      <button className='restore-button' onClick={restoreProducts}>
        See Full Product List
      </button>
      {display.length > 0 ? (
        <table className='product-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{productsList}</tbody>
        </table>
      ) : (
        <h2>No Results Found</h2>
      )}
    </>
  );
}

export default Products;
