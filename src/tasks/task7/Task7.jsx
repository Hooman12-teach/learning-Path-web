import { useEffect, useState } from 'react';
import './Task7.css';

const Task7 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://fakestoreapi.com/products?limit=8');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="task7-container">
      <div className="task7-header">
        <h1>Task 7: Fake Store Viewer</h1>
        <p>Fetching products from Fake Store API</p>
      </div>

      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      )}

      {error && (
        <div className="error-state">
          <p>❌ Error: {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p className="category">Category: {product.category}</p>
                <p className="description">{product.description.substring(0, 80)}...</p>
                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <span className="rating">⭐ {product.rating?.rate || 'N/A'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="empty-state">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default Task7;
