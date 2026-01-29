import '../styles/Home.css';
import DataCard from '../components/DataCard';
import { useEffect, useState } from 'react';

const DashboardHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const stats = [
    { id: 1, label: 'Total Users', value: '2,547', icon: '👥', color: '#667eea' },
    { id: 2, label: 'Revenue', value: '$89,420', icon: '💰', color: '#4caf50' },
    { id: 3, label: 'Orders', value: '1,234', icon: '📦', color: '#ff9800' },
    { id: 4, label: 'Growth', value: '+12.5%', icon: '📈', color: '#f44336' }
  ];

  return (
    <div className="dashboard-home">
      <h1>Dashboard Overview</h1>
      
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Featured Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-section">
          {products.map((product) => (
            <div key={product.id} className="product-preview">
              <img src={product.image} alt={product.title} />
              <h4>{product.title.substring(0, 30)}...</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
