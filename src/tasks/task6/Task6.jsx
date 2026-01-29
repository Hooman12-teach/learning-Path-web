import ProductCard from './ProductCard';
import './Task6.css';

const Task6 = () => {
  const products = [
    {
      id: 1,
      title: 'Wireless Headphones',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      stockStatus: 'in stock'
    },
    {
      id: 2,
      title: 'USB-C Cable',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      stockStatus: 'in stock'
    },
    {
      id: 3,
      title: 'Mechanical Keyboard',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1587829191301-db59166e89b3?w=300&h=300&fit=crop',
      stockStatus: 'low stock'
    },
    {
      id: 4,
      title: 'Phone Case',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1595432707802-0b0bdf1fdd70?w=300&h=300&fit=crop',
      stockStatus: 'out of stock'
    },
    {
      id: 5,
      title: 'Screen Protector',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1535080566849-b0d7a5f14915?w=300&h=300&fit=crop',
      stockStatus: 'in stock'
    },
    {
      id: 6,
      title: 'External Hard Drive',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop',
      stockStatus: 'out of stock'
    }
  ];

  return (
    <div className="task6-container">
      <div className="task6-header">
        <h1>Task 6: Product Card Generator</h1>
        <p>Reusable ProductCard Component with Props</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            stockStatus={product.stockStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Task6;
