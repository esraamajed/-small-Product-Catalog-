import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
useEffect(() => {
  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      
      if (!response.ok) throw new Error('Failed to fetch product details');

      const data = await response.json();
      setProduct(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProductDetails();
}, [id]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (loading) {
    return (
      <div className="product-details-container">
        <div className="loading">Loading product details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-details-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="error">Product not found</div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <Link to="/" className="back-button">← Back to Products</Link>
      
      <div className="product-details">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-detail-image"
          />
        </div>

        <div className="product-info-section">
          <h1 className="product-detail-title">{product.title}</h1>
          
          <div className="product-rating">
            <span className="rating-stars">
              {'⭐'.repeat(Math.round(product.rating?.rate || 0))}
            </span>
            <span className="rating-text">
              ({product.rating?.count || 0} reviews)
            </span>
          </div>

          <p className="product-detail-price">${product.price.toFixed(2)}</p>

          <div className="product-category">
            <span className="category-label">Category:</span>
            <span className="category-value">{product.category}</span>
          </div>

          <p className="product-description">{product.description}</p>

          <button 
            className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;