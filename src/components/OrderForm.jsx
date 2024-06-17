import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils';



function OrderForm() {
    const [glasses, setGlasses] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        item_purchased: '',
        total_price: '',
    });

    useEffect(() => {
        fetch(`${BASE_URL}/glasses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setGlasses(data);
        })
        .catch((err) => console.log(err));
    }, []);

    const location = useLocation();
    const { state } = location;
    const { itemPurchased, lensCustomization, totalPrice } = state || {};

    useEffect(() => {
        if (state) {
            setFormData(prevData => ({
                ...prevData,
                item_purchased: itemPurchased || '',
                total_price: totalPrice || '',
            }));
        }
    }, [state, itemPurchased, totalPrice]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData, [id]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
       
        console.log("Submitting form data:", formData);
        
        try {
            const response = await fetch(`${BASE_URL}/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Order submitted!");
                console.log(formData);
            } else {
                const errorData = await response.json();
                console.error('Error submitting order:', errorData);
                alert('Failed to submit order!');
            }
        } catch (error) {
            console.error('There was an error submitting the order!', error);
            alert('An error occurred while submitting the order.');
        }
    };

    return (
        <Container className="mt-5">
            <h1>Order Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mt-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email" className="mt-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="address" className="mt-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="item_purchased" className="mt-3">
                    <Form.Label>Item Purchased</Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.item_purchased}
                        readOnly
                    />
                </Form.Group>
                <Form.Group controlId="total_price" className="mt-3">
                    <Form.Label>Total Price</Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.total_price}
                        readOnly
                    />
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