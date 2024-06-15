import { Card, Button, ListGroup } from 'react-bootstrap';


function ShoppingCart({ cartItems = [], removeFromCart }) {
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = typeof item.price === 'number' ? item.price * item.quantity : 0;
            return total + price;
        }, 0).toFixed(2);
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
                    </>
                )}
            </ListGroup>
        </Card>
    );
}

export default ShoppingCart;