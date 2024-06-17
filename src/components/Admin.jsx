import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Admin() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:8001/orders');
                const data = await response.json();
                setOrders(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setOrders([]);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Admin Panel</h1>
            {orders.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Item Purchased</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.item_purchased}</td>
                                <td>{order.total_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
}

export default Admin;