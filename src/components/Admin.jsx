import React, { useState, useEffect } from 'react';

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from an API or any other source
    // Assuming the fetchOrders function returns a promise that resolves to an array
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders'); // Replace with your API endpoint
        const data = await response.json();
        setOrders(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setOrders([]); // Set to an empty array on error
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order.name}</li>
          ))}
        </ul>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}

export default Admin;