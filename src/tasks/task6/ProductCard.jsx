import './ProductCard.css';

const ProductCard = ({ title, price, image, stockStatus }) => {
  const isOutOfStock = stockStatus === 'out of stock';

  return (
    <div className={`product-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
      <div className="product-image">
        <img src={image} alt={title} />
        {isOutOfStock && <div className="out-of-stock-overlay">Out of Stock</div>}
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        
        <div className="product-footer">
          <div className="price-section">
            <span className="price">${price}</span>
            <span className={`stock-status ${stockStatus.replace(' ', '-')}`}>
              {stockStatus}
            </span>
          </div>

          <button 
            className={`buy-btn ${isOutOfStock ? 'disabled' : ''}`}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? '❌ Out of Stock' : '🛒 Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
