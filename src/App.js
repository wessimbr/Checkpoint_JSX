import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from './Product';

var name='Wessim';


function App() {
  return (
    <div className="App">

      <Card style={{ width: '18rem' , border: '3px solid green'}}>
      <Card.Img variant="top" src={Product.image} />
      <Card.Body>
      <Card.Title style={{color:'green' , fontSize: '25px'}}>Mechanical Assistant </Card.Title>
      <Name/>
      <Price/>
      <Description/>
      <Button variant="primary">Buy</Button>
      </Card.Body>
      </Card>
      <h6>Hello {name}</h6>

    </div>
  );
}

export default App;
