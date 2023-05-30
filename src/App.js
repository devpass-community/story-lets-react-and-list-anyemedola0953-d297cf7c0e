import React from 'react';
import Container from './components/Container';
import products from './src/products.json';

const Item = ({ product }) => {
  return (
    <li className='item' data-testid='product-item'>
      <img src={product.thumbnail} alt="Thumbnail" />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <span>{product.brand}</span>
      <span>{product.price}</span>
    </li>
  );
}

function App() {
  const filteredProducts = products.filter(product => product.category === 'smartphones');

  const productItems = filteredProducts.map(product => (
    <Item product={product} key={product.id} />
  ));

  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {productItems}
      </ul>
    </Container>
  );
}

export default App;