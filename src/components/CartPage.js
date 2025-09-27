import React, { useState } from 'react';
import { DeleteOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../customs/Footer';
import '../styles/componentsStyle/CartPage.css';

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
      title: "ELDEN RING",
      description: "Action role-playing game",
      price: 49.99,
      quantity: 2,
      image: "er.png"
    },
    {
      id: 3,
      title: "Grand Theft Auto Online",
      description: "Action-adventure game",
      price: 69.99,
      quantity: 1,
      image: "gta-online.png"
    },
    {
      id: 4,
      title: "Call of Duty® Black Ops 6",
      description: "First-person shooter",
      price: 79.99,
      quantity: 1,
      image: "codbo6.png"
    },
    {
      id: 5,
      title: "NBA 2K26",
      description: "Basketball simulation game",
      price: 69.99,
      quantity: 1,
      image: "nba2k26.png"
    },
    {
      id: 6,
      title: "Gran Turismo® 7",
      description: "Racing simulation game",
      price: 59.99,
      quantity: 1,
      image: "gt7.png"
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
                    <p className="item-description">{item.description}</p>
                    <div className="item-price">P {item.price.toFixed(2)}</div>
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
                    <div className="total-price">P {(item.price * item.quantity).toFixed(2)}</div>
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
            <span>P {subtotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-item">
            <span>Discount:</span>
            <span>-P {discount.toFixed(2)}</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-item total">
            <span>Total:</span>
            <span>P {total.toFixed(2)}</span>
          </div>
          
          <button className="buy-btn">
            Buy Now
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CartPage;
