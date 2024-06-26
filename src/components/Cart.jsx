
function Cart({ items }) {
    return (
      <div className='cart'>
        <h2>Cart Items</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Cart;