import React, { useState } from 'react';
import { DeleteOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined, CloseOutlined, GiftOutlined, CreditCardOutlined, BankOutlined, WalletOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Footer from '../customs/Footer';
import '../styles/componentsStyle/CartPage.css';
import '../styles/componentsStyle/ConfirmModal.css';
import { useCart } from '../contexts/CartContext';
import { usePurchase } from '../contexts/PurchaseContext';
import { useAuth } from '../contexts/AuthContext';
import LoadingButton from './LoadingButton';
import LoadingImage from './LoadingImage';

// Import all PS5 game images from Library and HomePage
import ittakes2 from '../assets/ps5Games/itt.png';
import eldenring from '../assets/ps5Games/er.png';
import gt7 from '../assets/ps5Games/gt7.png';
import thps from '../assets/ps5Games/thps.png';
import hellokitty from '../assets/ps5Games/hellokitty.png';
import dragonquest from '../assets/ps5Games/dragonquest.png';
import codeviolet from '../assets/ps5Games/codeviolet.png';
import tinycats from '../assets/ps5Games/tinycats.png';
import untildawn from '../assets/ps5Games/untildawn.png';
import swordart from '../assets/ps5Games/swordart.png';
import streetfighter from '../assets/ps5Games/streetfighter.png';
import kingdomhearts from '../assets/ps5Games/kingdomhearts.png';
import ffvr from '../assets/ps5Games/ffvr.png';
import goosebumps from '../assets/ps5Games/goosebumps.png';
import kingoffighters from '../assets/ps5Games/kingoffighters.png';
import dragonball from '../assets/ps5Games/dragonball.png';
import mhw from '../assets/ps5Games/mhw.png';
import itt from '../assets/ps5Games/itt.png';
import sh2 from '../assets/ps5Games/sh2.png';
import wwe from '../assets/ps5Games/wwe.png';
import badcat from '../assets/ps5Games/badcat.png';
import thelastofus from '../assets/ps5Games/thelastofus.png';
import wff from '../assets/ps5Games/wff.png';
import hitman from '../assets/ps5Games/hitman.png';
import hl from '../assets/ps5Games/hl.png';
import ab from '../assets/ps5Games/ab.png';
import phasmophobia from '../assets/ps5Games/phasmophobia.png';
import ijgc from '../assets/ps5Games/ijgc.png';
import doom from '../assets/ps5Games/doom.png';
import eaSportsFc from '../assets/ps5Games/ea-sports-fc.png';
import ds2tb from '../assets/ps5Games/ds2tb.png';
import mk from '../assets/ps5Games/mk.png';
import gy from '../assets/ps5Games/gy.png';
import cyberpunk2077 from '../assets/ps5Games/cyberpunk-2077.png';
import gtaOnline from '../assets/ps5Games/gta-online.png';
import mgsse from '../assets/ps5Games/mgsse.png';
import codbo6 from '../assets/ps5Games/codbo6.png';
import nba2k26 from '../assets/ps5Games/nba2k26.png';
import sf from '../assets/ps5Games/sf.png';
import carxStreet from '../assets/ps5Games/carx-street.png';
import fh5 from '../assets/ps5Games/fh5.png';
import borderlands4 from '../assets/ps5Games/borderlands4.png';
import coe33 from '../assets/ps5Games/coe33.png';
import dsKimetsu from '../assets/ps5Games/ds-kimetsu.png';
import octapath0 from '../assets/ps5Games/octapath0.png';
import shf from '../assets/ps5Games/shf.png';
import dytb from '../assets/ps5Games/dytb.png';
import catsritual from '../assets/ps5Games/catsritual.png';
import srcw from '../assets/ps5Games/srcw.png';
import digimon from '../assets/ps5Games/digimon.png';
import outerworld from '../assets/ps5Games/outerworld.png';
import readyornot from '../assets/ps5Games/readyornot.png';
import edenzero from '../assets/ps5Games/edenzero.png';
import hxh from '../assets/ps5Games/hxh.png';
import tekken8 from '../assets/ps5Games/tekken8.png';
import atelieryumia from '../assets/ps5Games/atelieryumia.png';
import firstberserker from '../assets/ps5Games/firstberserker.png';
import lego from '../assets/ps5Games/lego.png';
import lifestrange from '../assets/ps5Games/lifestrange.png';
import metaphor from '../assets/ps5Games/metaphor.png';
import spy from '../assets/ps5Games/spy.png';
import armoredcore from '../assets/ps5Games/armoredcore.png';
import ateliermarie from '../assets/ps5Games/ateliermarie.png';
import atelierryza from '../assets/ps5Games/atelierryza.png';
import battlefield6 from '../assets/ps5Games/battlefield6-standard.png';
import bmw from '../assets/ps5Games/bmw.png';
import dbd from '../assets/ps5Games/dbd.png';
import disney from '../assets/ps5Games/disney.png';
import disneydreamland from '../assets/ps5Games/disneydreamland.png';
import f1 from '../assets/ps5Games/f1.png';
import fuga from '../assets/ps5Games/fuga.png';
import ghostwire from '../assets/ps5Games/ghostwire.png';
import granblue from '../assets/ps5Games/granblue.png';
import shin from '../assets/ps5Games/shin.png';
import p3 from '../assets/ps5Games/p3.png';
import suicide from '../assets/ps5Games/suicide.png';
import p5 from '../assets/ps5Games/p5.png';
import harvestmoon from '../assets/ps5Games/harvestmoon.png';
import valkyrie from '../assets/ps5Games/valkyrie.png';
import hotwheels from '../assets/ps5Games/hotwheels.png';
import watchdog from '../assets/ps5Games/watchdog.png';
import rugby from '../assets/ps5Games/rugby.png';
import re3nemesis from '../assets/ps5Games/re3nemesis.png';

// Create comprehensive image mapping object
const cartImageMap = {
  'itt.png': ittakes2,
  'er.png': eldenring,
  'gt7.png': gt7,
  'thps.png': thps,
  'hellokitty.png': hellokitty,
  'dragonquest.png': dragonquest,
  'codeviolet.png': codeviolet,
  'tinycats.png': tinycats,
  'untildawn.png': untildawn,
  'swordart.png': swordart,
  'streetfighter.png': streetfighter,
  'kingdomhearts.png': kingdomhearts,
  'ffvr.png': ffvr,
  'goosebumps.png': goosebumps,
  'kingoffighters.png': kingoffighters,
  'dragonball.png': dragonball,
  'mhw.png': mhw,
  'sh2.png': sh2,
  'wwe.png': wwe,
  'badcat.png': badcat,
  'thelastofus.png': thelastofus,
  'wff.png': wff,
  'hitman.png': hitman,
  'hl.png': hl,
  'ab.png': ab,
  'phasmophobia.png': phasmophobia,
  'ijgc.png': ijgc,
  'doom.png': doom,
  'ea-sports-fc.png': eaSportsFc,
  'ds2tb.png': ds2tb,
  'mk.png': mk,
  'gy.png': gy,
  'cyberpunk-2077.png': cyberpunk2077,
  'gta-online.png': gtaOnline,
  'mgsse.png': mgsse,
  'codbo6.png': codbo6,
  'nba2k26.png': nba2k26,
  'sf.png': sf,
  'carx-street.png': carxStreet,
  'fh5.png': fh5,
  'borderlands4.png': borderlands4,
  'coe33.png': coe33,
  'ds-kimetsu.png': dsKimetsu,
  'octapath0.png': octapath0,
  'shf.png': shf,
  'dytb.png': dytb,
  'catsritual.png': catsritual,
  'srcw.png': srcw,
  'digimon.png': digimon,
  'outerworld.png': outerworld,
  'readyornot.png': readyornot,
  'edenzero.png': edenzero,
  'hxh.png': hxh,
  'tekken8.png': tekken8,
  'atelieryumia.png': atelieryumia,
  'firstberserker.png': firstberserker,
  'lego.png': lego,
  'lifestrange.png': lifestrange,
  'metaphor.png': metaphor,
  'spy.png': spy,
  'armoredcore.png': armoredcore,
  'ateliermarie.png': ateliermarie,
  'atelierryza.png': atelierryza,
  'battlefield6-standard.png': battlefield6,
  'bmw.png': bmw,
  'dbd.png': dbd,
  'disney.png': disney,
  'disneydreamland.png': disneydreamland,
  'f1.png': f1,
  'fuga.png': fuga,
  'ghostwire.png': ghostwire,
  'granblue.png': granblue,
  'shin.png': shin,
  'p3.png': p3,
  'suicide.png': suicide,
  'p5.png': p5,
  'harvestmoon.png': harvestmoon,
  'valkyrie.png': valkyrie,
  'hotwheels.png': hotwheels,
  'watchdog.png': watchdog,
  'rugby.png': rugby,
  're3nemesis.png': re3nemesis
};

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { processPurchase, isProcessing } = usePurchase();
  const { isAuthenticated, user } = useAuth();
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVouchers, setAppliedVouchers] = useState([]);
  const [voucherError, setVoucherError] = useState('');
  
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  
  // Use cart from context instead of hardcoded data
  const cartItems = cart;
  
  // Debug: Log cart items to see the actual data structure
  console.log('Cart items:', cartItems);
  console.log('Cart items with price details:', cartItems.map(item => ({
    title: item.title,
    price: item.price,
    priceType: typeof item.price,
    originalPrice: item.originalPrice
  })));

  // Cart functions using context
  const removeItem = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  // Helper function to parse price from string
  const parsePrice = (priceString) => {
    if (!priceString) return 0;
    console.log('Parsing price:', priceString); // Debug log
    
    // Handle different price formats
    let cleanPrice;
    if (typeof priceString === 'number') {
      return priceString;
    }
    
    if (typeof priceString === 'string') {
      // Remove currency symbols, commas, and any non-numeric characters except decimal point
      cleanPrice = priceString.replace(/[₱,]/g, '').replace(/[^\d.]/g, '').trim();
    } else {
      return 0;
    }
    
    console.log('Clean price:', cleanPrice); // Debug log
    const parsed = parseFloat(cleanPrice);
    console.log('Parsed price:', parsed); // Debug log
    
    if (isNaN(parsed) || parsed < 0) {
      console.warn('Invalid price format:', priceString);
      return 0;
    }
    
    return parsed;
  };

  // Enhanced parsePrice with better error handling
  const safeParsePrice = (priceValue) => {
    if (typeof priceValue === 'number' && !isNaN(priceValue)) {
      return priceValue;
    }
    
    if (typeof priceValue === 'string') {
      const cleaned = priceValue.replace(/[₱,]/g, '').replace(/[^\d.]/g, '').trim();
      const parsed = parseFloat(cleaned);
      return isNaN(parsed) ? 0 : parsed;
    }
    
    return 0;
  };

  // Voucher functionality
  const handleVoucherSubmit = (e) => {
    e.preventDefault();
    setVoucherError('');
    
    // Mock voucher validation
    const validVouchers = {
      'SAVE10': { code: 'SAVE10', discount: 10, type: 'percentage' },
      'SAVE20': { code: 'SAVE20', discount: 20, type: 'percentage' },
      'FIXED5': { code: 'FIXED5', discount: 5, type: 'fixed' },
      'WELCOME': { code: 'WELCOME', discount: 15, type: 'percentage' }
    };
    
    const voucher = validVouchers[voucherCode.toUpperCase()];
    
    if (!voucher) {
      setVoucherError('Invalid voucher code');
      return;
    }
    
    if (appliedVouchers.find(v => v.code === voucher.code)) {
      setVoucherError('Voucher already applied');
      return;
    }
    
    setAppliedVouchers(prev => [...prev, voucher]);
    setVoucherCode('');
    setIsVoucherModalOpen(false);
  };

  const removeVoucher = (voucherCode) => {
    setAppliedVouchers(prev => prev.filter(v => v.code !== voucherCode));
  };

  // Payment method functionality
  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    if (method === 'credit-card') {
      setIsPaymentModalOpen(false);
      setIsCardModalOpen(true);
    }
  };

  const handlePaymentMethodSubmit = () => {
    if (selectedPaymentMethod === 'digital-wallet') {
      setIsPaymentModalOpen(false);
      // Here you would typically save the payment method to state or send to backend
    }
  };

  // Card input functionality
  const handleCardInputChange = (field, value) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    setIsCardModalOpen(false);
    // Here you would typically validate and save the card data
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(.{2})/, '$1/');
  };

  // Purchase confirmation functionality
  const handleBuyNow = () => {
    // Don't proceed if cart is empty
    if (cartItems.length === 0) {
      return;
    }
    setIsConfirmModalOpen(true);
  };

  const handleConfirmPurchase = async () => {
    if (!isAuthenticated) {
      alert('Please log in to complete your purchase');
      return;
    }

    setIsConfirmModalOpen(false);
    
    try {
      // Process the purchase with email notification
      const result = await processPurchase(cartItems, getCartTotal());
      
      if (result.success) {
        // Store purchase details for display
        setPurchaseDetails({
          userName: user?.username || 'User',
          userEmail: user?.email || '',
          totalAmount: getCartTotal(),
          games: cartItems,
          purchaseDate: new Date().toLocaleDateString()
        });
        
        // Clear the cart after successful purchase
        clearCart();
        
        // Show success message
        alert(`Purchase completed successfully!\n\n${result.message}`);
        
        // You could add navigation to a success page here
        // navigate('/purchase-success');
      } else {
        alert(`Purchase failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Purchase error:', error);
      alert('An error occurred during purchase. Please try again.');
    }
  };

  const subtotal = getCartTotal();
  
  // Calculate total discount from applied vouchers
  const totalDiscount = appliedVouchers.reduce((total, voucher) => {
    if (voucher.type === 'percentage') {
      return total + (subtotal * voucher.discount / 100);
    } else {
      return total + voucher.discount;
    }
  }, 0);
  
  const total = subtotal - totalDiscount;

  return (
    <div className="cart-page">
      <div className="cart-main-content">
        <div className="cart-container">
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
                    <LoadingImage 
                      src={cartImageMap[item.image] || cartImageMap['cyberpunk-2077.png']} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                  
                    <div className="item-detailss">
                      <h3 className="item-title">{item.title}</h3>
                      <div className="item-price">{item.originalPrice || item.price}</div>
                    </div>
                  
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <MinusOutlined />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <PlusOutlined />
                    </button>
                  </div>
                  
                  <div className="item-total">
                    <div className="total-price">P {(safeParsePrice(item.price) * item.quantity).toFixed(2)}</div>
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
          
          <div className="cart-actions">
            <button 
              className="action-btn"
              onClick={() => setIsVoucherModalOpen(true)}
            >
              <GiftOutlined style={{ marginRight: '8px' }} />
              Add Vouchers
            </button>
            <button 
              className="action-btn"
              onClick={() => setIsPaymentModalOpen(true)}
            >
              <CreditCardOutlined style={{ marginRight: '8px' }} />
              Change Payment Method
            </button>
          </div>
        </div>
        
        <div className="order-summary">
          <h3 className="summary-title">Order Summary</h3>
          
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>P {subtotal.toFixed(2)}</span>
          </div>
          
          {appliedVouchers.length > 0 && (
            <div className="applied-vouchers">
              {appliedVouchers.map((voucher, index) => (
                <div key={index} className="voucher-item">
                  <span className="voucher-code">{voucher.code}</span>
                  <span className="voucher-discount">
                    -P {voucher.type === 'percentage' 
                      ? (subtotal * voucher.discount / 100).toFixed(2)
                      : voucher.discount.toFixed(2)
                    }
                  </span>
                  <button 
                    className="remove-voucher-btn"
                    onClick={() => removeVoucher(voucher.code)}
                  >
                    <CloseOutlined />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          <div className="summary-item">
            <span>Discount:</span>
            <span>-P {totalDiscount.toFixed(2)}</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-item total">
            <span>Total:</span>
            <span>P {total.toFixed(2)}</span>
          </div>
          
          <LoadingButton 
            className="buy-btn" 
            onClick={handleBuyNow}
            loading={isProcessing}
            loadingText="Processing Purchase..."
            disabled={cartItems.length === 0}
            size="large"
            variant="primary"
          >
            {cartItems.length === 0 ? 'Cart is Empty' : 'Buy Now'}
          </LoadingButton>
        </div>
      </div>
      
      {isVoucherModalOpen && (
        <div className="modal-overlay" onClick={() => setIsVoucherModalOpen(false)}>
          <div className="voucher-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <GiftOutlined style={{ marginRight: '8px' }} />
                Add Voucher
              </h3>
              <button 
                className="close-btn"
                onClick={() => setIsVoucherModalOpen(false)}
              >
                <CloseOutlined />
              </button>
            </div>
            
            <div className="modal-content">
              <form onSubmit={handleVoucherSubmit}>
                <div className="input-group">
                  <label htmlFor="voucher-code">Voucher Code</label>
                  <input
                    id="voucher-code"
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Enter voucher code"
                    className="voucher-input"
                    required
                  />
                  {voucherError && (
                    <div className="error-message">{voucherError}</div>
                  )}
                </div>
                
                <div className="modal-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setIsVoucherModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="apply-btn">
                    Apply Voucher
                  </button>
                </div>
              </form>
              
              <div className="voucher-info">
                <h4>Available Vouchers:</h4>
                <div className="voucher-list">
                  <div className="voucher-example">
                    <span className="code">SAVE10</span>
                    <span className="description">10% off</span>
                  </div>
                  <div className="voucher-example">
                    <span className="code">SAVE20</span>
                    <span className="description">20% off</span>
                  </div>
                  <div className="voucher-example">
                    <span className="code">FIXED5</span>
                    <span className="description">P5.00 off</span>
                  </div>
                  <div className="voucher-example">
                    <span className="code">WELCOME</span>
                    <span className="description">15% off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {isPaymentModalOpen && (
        <div className="modal-overlay" onClick={() => setIsPaymentModalOpen(false)}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <CreditCardOutlined style={{ marginRight: '8px' }} />
                Payment Method
              </h3>
              <button 
                className="close-btn"
                onClick={() => setIsPaymentModalOpen(false)}
              >
                <CloseOutlined />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="payment-options">
                <h4>Select Payment Method</h4>
                
                <div className="payment-method-list">
                  <div 
                    className={`payment-option ${selectedPaymentMethod === 'credit-card' ? 'selected' : ''}`}
                    onClick={() => handlePaymentMethodSelect('credit-card')}
                  >
                    <div className="payment-icon">
                      <CreditCardOutlined />
                    </div>
                    <div className="payment-details">
                      <h5>Credit/Debit Card</h5>
                      <p>Visa, Mastercard, American Express</p>
                    </div>
                    <div className="payment-radio">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="credit-card"
                        checked={selectedPaymentMethod === 'credit-card'}
                        onChange={() => handlePaymentMethodSelect('credit-card')}
                      />
                    </div>
                  </div>
                  
                  <div 
                    className={`payment-option ${selectedPaymentMethod === 'digital-wallet' ? 'selected' : ''}`}
                    onClick={() => handlePaymentMethodSelect('digital-wallet')}
                  >
                    <div className="payment-icon">
                      <WalletOutlined />
                    </div>
                    <div className="payment-details">
                      <h5>Digital Wallet</h5>
                      <p>PayPal, Apple Pay, Google Pay</p>
                    </div>
                    <div className="payment-radio">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="digital-wallet"
                        checked={selectedPaymentMethod === 'digital-wallet'}
                        onChange={() => handlePaymentMethodSelect('digital-wallet')}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setIsPaymentModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    className="apply-btn"
                    onClick={handlePaymentMethodSubmit}
                  >
                    Confirm Payment Method
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {isCardModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCardModalOpen(false)}>
          <div className="card-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <CreditCardOutlined style={{ marginRight: '8px' }} />
                Card Details
              </h3>
              <button 
                className="close-btn"
                onClick={() => setIsCardModalOpen(false)}
              >
                <CloseOutlined />
              </button>
            </div>
            
            <div className="modal-content">
              <form onSubmit={handleCardSubmit}>
                <div className="card-form">
                  <div className="form-group">
                    <label htmlFor="cardholder-name">Cardholder Name</label>
                    <input
                      id="cardholder-name"
                      type="text"
                      value={cardData.cardholderName}
                      onChange={(e) => handleCardInputChange('cardholderName', e.target.value)}
                      placeholder="Enter cardholder name"
                      className="card-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="text"
                      value={cardData.cardNumber}
                      onChange={(e) => handleCardInputChange('cardNumber', formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      className="card-input"
                      maxLength="19"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiry-date">Expiry Date</label>
                      <input
                        id="expiry-date"
                        type="text"
                        value={cardData.expiryDate}
                        onChange={(e) => handleCardInputChange('expiryDate', formatExpiryDate(e.target.value))}
                        placeholder="MM/YY"
                        className="card-input"
                        maxLength="5"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        id="cvv"
                        type="text"
                        value={cardData.cvv}
                        onChange={(e) => handleCardInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                        placeholder="123"
                        className="card-input"
                        maxLength="4"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <button 
                      type="button" 
                      className="cancel-btn"
                      onClick={() => setIsCardModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="apply-btn">
                      Save Card
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {isConfirmModalOpen && (
        <div className="modal-overlay" onClick={() => setIsConfirmModalOpen(false)}>
          <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <CheckCircleOutlined style={{ marginRight: '8px' }} />
                Confirm Purchase
              </h3>
              <button 
                className="close-btn"
                onClick={() => setIsConfirmModalOpen(false)}
              >
                <CloseOutlined />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="confirm-content">
                <div className="order-details">
                  <h4>Order Summary</h4>
                  <div className="order-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="order-item">
                        <span className="item-name">{item.title} x{item.quantity}</span>
                        <span className="item-price">P {(safeParsePrice(item.price) * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-totals">
                    <div className="total-line">
                      <span>Subtotal:</span>
                      <span>P {subtotal.toFixed(2)}</span>
                    </div>
                    {totalDiscount > 0 && (
                      <div className="total-line">
                        <span>Discount:</span>
                        <span>-P {totalDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="total-line final-total">
                      <span>Total:</span>
                      <span>P {total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="payment-info">
                    <h4>Payment Method</h4>
                    <p>{selectedPaymentMethod === 'credit-card' ? 'Credit/Debit Card' : 'Digital Wallet'}</p>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={() => setIsConfirmModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button" 
                    className="confirm-btn"
                    onClick={handleConfirmPurchase}
                  >
                    Confirm Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      
      {purchaseDetails && (
        <div className="purchase-overlay" onClick={() => setPurchaseDetails(null)}>
          <div className="purchase-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="purchase-header-section">
              <h2>🎮 Purchase Confirmation</h2>
              <button className="purchase-exit-btn" onClick={() => setPurchaseDetails(null)}>×</button>
            </div>
            
            <div className="purchase-content-section">
              <div className="purchase-details">
                <div className="success-icon">
                  <CheckCircleOutlined />
                </div>
                
                <h3>Thank you for your purchase, {purchaseDetails.userName}!</h3>
                
                <div className="purchase-info">
                  <div className="info-section">
                    <h4>📋 Purchase Details</h4>
                    <p><strong>Date:</strong> {purchaseDetails.purchaseDate}</p>
                    <p><strong>Total:</strong> ${purchaseDetails.totalAmount}</p>
                    <p><strong>User:</strong> {purchaseDetails.userEmail}</p>
                  </div>
                  
                  <div className="info-section">
                    <h4>🎯 Purchased Games</h4>
                    <div className="games-list">
                      {purchaseDetails.games.map((game, index) => (
                        <div key={index} className="game-item">
                          <span>{index + 1}. {game.title}</span>
                          <span>${game.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="email-notice">
                  <h4>📧 Email Notification</h4>
                  <p>Purchase details have been logged to the console and an email notification has been prepared.</p>
                  <p><strong>Email FROM:</strong> nulsnumoa@gmail.com</p>
                  <p><strong>Email TO:</strong> {purchaseDetails.userEmail}</p>
                </div>
              </div>
            </div>

            <div className="purchase-footer-section">
              <button className="purchase-done-btn" onClick={() => setPurchaseDetails(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartPage;
