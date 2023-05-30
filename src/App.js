import Container from './components/Container';
import item from './src/products.json';

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      { /* TODO */ }
      <img src="thumbnail here">{item.thumbnail}</img>
      <h4> {item.title} </h4>
      <p> {item.description} </p>
      <span> {item.brand} </span>
      <span> {item.price} </span>
    </li>
  )
}

function App() {
  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        { /* TODO */ }
        <Item />
      </ul>
    </Container>
  );
}

export default App;
