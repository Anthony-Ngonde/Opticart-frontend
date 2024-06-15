import React, { useState } from 'react';
import { Card, Button, ListGroup, Form } from 'react-bootstrap';


function ShoppingCart({ cartItems = [], removeFromCart }) {
    const [showForm, setShowForm] = useState(false);
  
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => {
        const price = typeof item.price === 'number' ? item.price * item.quantity : 0;
        return total + price;
      }, 0).toFixed(2);
    };
  
    const handleProceedClick = () => {
      setShowForm(true);
    };
  
    const handleCheckoutClick = (event) => {
      event.preventDefault();
      // Handle the checkout process here
      alert("Checked out!");
    };
  
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Shopping Cart</Card.Header>
        <ListGroup variant="flush">
          {cartItems.length === 0 ? (
            <ListGroup.Item>Your cart is empty</ListGroup.Item>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={item.image} alt="" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                      <div>
                        <div>{item.name} x {item.quantity}</div>
                        <div>${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                    <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
                  </div>
                </ListGroup.Item>
              ))}
              <ListGroup.Item>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>Total Price:</strong>
                  <span>${calculateTotalPrice()}</span>
                </div>
              </ListGroup.Item>
              {!showForm && (
                <ListGroup.Item>
                  <Button className="proceed-button" onClick={handleProceedClick}>Proceed</Button>
                </ListGroup.Item>
              )}
            </>
          )}
        </ListGroup>
        {showForm && (
          <Form onSubmit={handleCheckoutClick} style={{ padding: '10px' }}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" required />
            </Form.Group>
            <Button className="checkout-button mt-3" type="submit">Checkout</Button>
          </Form>
        )}
      </Card>
    );
  }
  
  export default ShoppingCart;