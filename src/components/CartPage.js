import React, { useState } from 'react';
import { DeleteOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../styles/componentsStyle/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Cyberpunk 2077",
      description: "Open-world action-adventure RPG",
      price: 59.99,
      quantity: 1,
      image: "cyberpunk-2077.png"
    },
    {
      id: 2,
      title: "Elden Ring",
      description: "Action role-playing game",
      price: 49.99,
      quantity: 2,
      image: "er.png"
    },
    {
      id: 3,
      title: "God of War Ragnarök",
      description: "Action-adventure game",
      price: 69.99,
      quantity: 1,
      image: "gta-online.png"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 10.00; // Example discount
  const total = subtotal - discount;

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Cart Items Section */}
        <div className="cart-items-section">
          <h2 className="section-title">Cart Items</h2>
          
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingCartOutlined className="empty-cart-icon" />
              <h3>Your cart is empty</h3>
              <p>Add some games to get started!</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/ps5Games/${item.image}`} 
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = `${process.env.PUBLIC_URL}/assets/ps5Games/cyberpunk-2077.png`;
                      }}
                    />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-description">{item.description}</p>
                    <div className="item-price">P ${item.price.toFixed(2)}</div>
                  </div>
                  
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <MinusOutlined />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <PlusOutlined />
                    </button>
                  </div>
                  
                  <div className="item-total">
                    <div className="total-price">P ${(item.price * item.quantity).toFixed(2)}</div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="cart-actions">
            <button className="action-btn">
              Add Vouchers
            </button>
            <button className="action-btn">
              Change Payment Method
            </button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="order-summary">
          <h3 className="summary-title">Order Summary</h3>
          
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>P ${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-item">
            <span>Discount:</span>
            <span>-P ${discount.toFixed(2)}</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-item total">
            <span>Total:</span>
            <span>P ${total.toFixed(2)}</span>
          </div>
          
          <button className="buy-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
