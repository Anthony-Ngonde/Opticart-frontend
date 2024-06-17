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
        itemPurchased: '',
        totalPrice: '',
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
            setGlasses(data); // If you want to do something with the fetched glasses data
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
                itemPurchased: itemPurchased || '',
                totalPrice: totalPrice || '',
            }));
        }
    }, [state, itemPurchased, totalPrice]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => {
            const newData = { ...prevData, [id]: value };
            console.log(newData);
            return newData;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert("Order submitted!");
        console.log(formData);
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
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="itemPurchased" className="mt-3">
                    <Form.Label>Item Purchased</Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.itemPurchased}
                        readOnly
                    />
                </Form.Group>
                <Form.Group controlId="totalPrice" className="mt-3">
                    <Form.Label>Total Price</Form.Label>
                    <Form.Control
                        type="text"
                        value={formData.totalPrice}
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