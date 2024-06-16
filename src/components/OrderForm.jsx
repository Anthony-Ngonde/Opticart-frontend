import { useLocation } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';



function OrderForm() {
    const location = useLocation();
    const { state } = location;
    const { itemPurchased, lensCustomization } = state || {};

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert("Order submitted!");
    };

    return (
        <Container className="mt-5">
            <h1>Order Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mt-3">
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
                <Form.Group controlId="formItemPurchased" className="mt-3">
                    <Form.Label>Item Purchased</Form.Label>
                    <Form.Control type="text" value={itemPurchased || ''} readOnly />
                </Form.Group>
                {lensCustomization && (
                    <div className="mt-3">
                        <p>Lens Customization Form has been filled.</p>
                    </div>
                )}
                <Button className="mt-3" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default OrderForm;