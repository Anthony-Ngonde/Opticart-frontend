import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';


import ProductCatalogue from '../components/ProductCatalogue';
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import ShoppingCart from '../components/ShoppingCart';



const products = [
  { image: "https://i.pinimg.com/236x/47/85/04/4785040eca2a6df5cdd89f2beaf47548.jpg", price: 20, name: 'Large Round Circle Frame' },
  { image: "https://i.pinimg.com/236x/ab/e4/70/abe4705eda3a04630edf33af85dfa408.jpg", price: 25, name: 'Small Round Circle Frame' },
  { image: "https://i.pinimg.com/236x/c5/1b/63/c51b63f36d6f7e881fc8a6864feee323.jpg", price: 30, name: 'Retro Round Sunglasses' },
  { image: "https://i.pinimg.com/236x/47/e7/b3/47e7b33d3b3f3b92805e8f065e82a97a.jpg", price: 25, name: 'Timeless Round Eyewear' },
  { image: "https://i.pinimg.com/236x/56/53/a9/5653a956a075fe1daa30e0491a84499f.jpg", price: 10, name: 'Minimalist Eyewear' },
  { image: "https://i.pinimg.com/236x/20/c6/2b/20c62b9199feb6c48b9863c73fa7c20b.jpg", price: 20, name: 'Rimless Rectangular Sunglasses' },
  { image: "https://i.pinimg.com/236x/29/53/80/29538003b5c55923487639dcea65da4b.jpg", price: 25, name: 'Tortoiseshell Wayfarer Glasses' },
  { image: "https://i.pinimg.com/474x/cd/9d/1b/cd9d1b0556770684ac4406b5c2a6ce8c.jpg", price: 10, name: 'Minimalist Frameless Glasses' },
  { image: "https://i.pinimg.com/236x/15/fa/40/15fa4046115d2fceedead2682240731c.jpg", price: 20, name: 'Wayfarer Frame Glasses' },
  { image: "https://i.pinimg.com/236x/1f/3b/0c/1f3b0c5b0ca51f850ff995c830d40660.jpg", price: 40, name: 'Clear Frame Angular Sunglasses' },
  { image: "https://i.pinimg.com/236x/4e/65/33/4e65336e68f1a2230198ab180e096e5c.jpg", price: 50, name: 'Gold-Rimmed Round Glasses' },
  { image: "https://i.pinimg.com/236x/7d/82/b6/7d82b6c5df517aadbce5c4136978c9d6.jpg", price: 35, name: 'Clear Square Fashion Glasses' },
  { image: "https://i.pinimg.com/236x/78/d7/80/78d78054403cf329d324613ba22abccc.jpg", price: 30, name: 'CatEye-Framed Sunglasses' },
  { image: "https://i.pinimg.com/236x/ad/d7/18/add718fe6829e1b037560ac01270f2b2.jpg", price: 15, name: 'Purple Cat-Eye Glasses' },
  { image: "https://i.pinimg.com/236x/50/25/0d/50250d2d506ff98adcb5b6240ffb2148.jpg", price: 15, name: 'Feline Chic Frames' },
  { image: "https://i.pinimg.com/236x/39/ae/dc/39aedc06e0b74952283f49f467a36a61.jpg", price: 20, name: 'CatEye Geometric Glasses' },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.name === product.name);
    if (existingProductIndex !== -1) {
      const newCartItems = cartItems.map((item, index) => 
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <>
      <NavBar />
      <Header />
      <Container className='mt-10' style={{ marginTop: 100 }}>
        <Row>
          <Col md={8}>
            <Row>
              {products.map((product, index) => (
                <Col key={index} className='mb-5'>
                  <ProductCatalogue
                    image={product.image}
                    price={product.price}
                    name={product.name}
                    addToCart={() => addToCart(product)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
