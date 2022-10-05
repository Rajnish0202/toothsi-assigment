import React, { useState } from 'react';
import products from '../data/products.json';

import Filter from '../components/filter/filter';
import ProductList from '../components/productList/productList';

const Product = () => {
  // const [product, setProduct] = useState(products);
  const [filterByName, setFilterByName] = useState('');
  const [filterBySize, setFilterBySize] = useState('');
  const [search, setSearch] = useState('');

  // console.log(product);
  return (
    <div className='products'>
      <Filter
        products={products}
        filterByName={filterByName}
        setFilterByName={setFilterByName}
        filterBySize={filterBySize}
        setFilterBySize={setFilterBySize}
        search={search}
        setSearch={setSearch}
      />
      <ProductList search={search} products={products} filterByName={filterByName} filterBySize={filterBySize} />
    </div>
  );
};

export default Product;
