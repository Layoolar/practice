import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Index';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then(res => res.json())
      .then(data => setProducts(data));
      console.log(typeof products);
  }, []);

  return (
    <div>
      <p>Products Page</p>
      <Link to="/">Go to Home</Link>
      <div>
        {products.length > 0 && products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
