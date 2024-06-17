import React, { useState } from 'react';
import { Card, Button, ListGroup, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LensCustomization from './LensCustomization';



function ShoppingCart({ cartItems = [], removeFromCart }) {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

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
        const itemPurchased = cartItems.map(item => `${item.name} x ${item.quantity}`).join(', ');
        const totalPrice = calculateTotalPrice();
        navigate('/order-form', { state: { itemPurchased, totalPrice } });
    };

    const handleCustomizationClick = () => {
        const itemPurchased = cartItems.map(item => `${item.name} x ${item.quantity}`).join(', ');
        const totalPrice = calculateTotalPrice();
        navigate('/lens-customization', { state: { itemPurchased, totalPrice } });
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
                <Form style={{ padding: '10px' }}>
                    <div className="d-flex justify-content-between mt-3">
                        <Button className="checkout-button" onClick={handleCheckoutClick}>Checkout</Button>
                        <Button className="customize-button" onClick={handleCustomizationClick}>Lens Customization</Button>
                    </div>
                </Form>
            )}
        </Card>
    );
}

export default ShoppingCart;