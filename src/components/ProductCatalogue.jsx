import { Card, Button } from 'react-bootstrap';




function ProductCatalogue({ image, price, addToCart }) {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h5>{price}</h5>
              <Card.Title></Card.Title>
              <Card.Text>
                {/* You can add more description here */}
              </Card.Text>
            </div>
            <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default ProductCatalogue;