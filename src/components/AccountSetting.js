import React, { useState, useEffect } from 'react';
import { EditOutlined, UserOutlined, CreditCardOutlined, TransactionOutlined, LogoutOutlined, SettingOutlined, BellOutlined, SafetyOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/componentsStyle/AccountSetting.css';

const AccountSetting = () => {
  const navigate = useNavigate();
  const { user, updateUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    language: 'English',
    country: 'Philippines',
    timezone: 'Asia/Manila'
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    username: false,
    email: false,
    phone: false,
    country: false
  });

  const [editValues, setEditValues] = useState({
    name: profileData.name,
    username: profileData.username,
    email: profileData.email,
    phone: profileData.phone,
    country: profileData.country
  });

  const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  // Initialize profile data from user context
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || user.username || '',
        username: user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        language: user.language || 'English',
        country: user.country || 'Philippines',
        timezone: user.timezone || 'Asia/Manila'
      });
      setEditValues({
        name: user.name || user.username || '',
        username: user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        country: user.country || 'Philippines'
      });
    }
  }, [user]);
  const [paymentFormData, setPaymentFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: 'Philippines'
  });

  const handleEdit = (field) => {
    setIsEditing(prev => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    const newValue = editValues[field];
    setProfileData(prev => ({ ...prev, [field]: newValue }));
    setIsEditing(prev => ({ ...prev, [field]: false }));
    
    // Update user data in AuthContext
    updateUser({ [field]: newValue });
  };

  const handleCancel = (field) => {
    setEditValues(prev => ({ ...prev, [field]: profileData[field] }));
    setIsEditing(prev => ({ ...prev, [field]: false }));
  };

  const handleInputChange = (field, value) => {
    setEditValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const handleSignOutClick = () => {
    setIsSignOutModalOpen(true);
  };

  const handleConfirmSignOut = () => {
    setIsSignOutModalOpen(false);
    logout();
    navigate('/');
  };

  const handleCancelSignOut = () => {
    setIsSignOutModalOpen(false);
  };

  const handleAddPaymentMethod = () => {
    setIsAddPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsAddPaymentModalOpen(false);
    setPaymentFormData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
      billingAddress: '',
      city: '',
      zipCode: '',
      country: 'Philippines'
    });
  };

  const handlePaymentFormChange = (field, value) => {
    setPaymentFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitPaymentMethod = (e) => {
    e.preventDefault();
    // Here you would typically send the payment method data to your backend
    console.log('Payment method data:', paymentFormData);
    // For now, just close the modal
    handleClosePaymentModal();
    // You could add a success notification here
  };

  const renderProfileField = (label, field, value, icon, isEditable = true) => (
    <div className="profile-field">
      <div className="field-header">
        <div className="field-icon">
          {icon}
        </div>
        <div className="field-info">
          <div className="field-label">{label}</div>
          <div className="field-value">
            {isEditing[field] ? (
              <div className="edit-mode">
                <input
                  type="text"
                  value={editValues[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="edit-input"
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
                <div className="edit-actions">
                  <button 
                    className="save-btn"
                    onClick={() => handleSave(field)}
                  >
                    Save
                  </button>
                  <button 
                    className="cancel-btn"
                    onClick={() => handleCancel(field)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="display-mode">
                <span className="field-text">{value}</span>
                {isEditable && (
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(field)}
                  >
                    <EditOutlined />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="content-title">Profile Settings</h2>
              <p className="content-subtitle">Manage your account information and preferences</p>
            </div>
            
            <div className="profile-sections">
              <div className="profile-section">
                <h3 className="section-title">Personal Information</h3>
                <div className="profile-fields">
                  {renderProfileField('Full Name', 'name', profileData.name, <UserOutlined />)}
                  {renderProfileField('Username', 'username', profileData.username, <UserOutlined />)}
                  {renderProfileField('Email Address', 'email', profileData.email, <UserOutlined />)}
                  {renderProfileField('Phone Number', 'phone', profileData.phone, <UserOutlined />)}
                </div>
              </div>

              <div className="profile-section">
                <h3 className="section-title">Preferences</h3>
                <div className="profile-fields">
                  {renderProfileField('Language', 'language', profileData.language, <SettingOutlined />, false)}
                  {renderProfileField('Country', 'country', profileData.country, <SettingOutlined />)}
                  {renderProfileField('Timezone', 'timezone', profileData.timezone, <SettingOutlined />, false)}
                </div>
              </div>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="content-title">Payment Methods</h2>
              <p className="content-subtitle">Manage your payment options and billing information</p>
            </div>
            <div className="payment-content">
              <div className="empty-state">
                <CreditCardOutlined className="empty-icon" />
                <h3>No Payment Methods</h3>
                <p>Add a payment method to start making purchases</p>
                <button className="primary-btn" onClick={handleAddPaymentMethod}>
                  <PlusOutlined /> Add Payment Method
                </button>
              </div>
            </div>
          </div>
        );
      case 'transactions':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="content-title">Transaction History</h2>
              <p className="content-subtitle">View your purchase history and receipts</p>
            </div>
            <div className="transactions-content">
              <div className="empty-state">
                <TransactionOutlined className="empty-icon" />
                <h3>No Transactions Yet</h3>
                <p>Your purchase history will appear here</p>
                <button className="primary-btn" onClick={() => navigate('/browse')}>Browse Games</button>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="content-section">
            <div className="section-header">
              <h2 className="content-title">Security Settings</h2>
              <p className="content-subtitle">Manage your account security and privacy</p>
            </div>
            <div className="security-content">
              <div className="security-options">
                <div className="security-option">
                  <div className="option-info">
                    <SafetyOutlined className="option-icon" />
                    <div>
                      <h4>Two-Factor Authentication</h4>
                      <p>Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <button className="secondary-btn">Enable</button>
                </div>
                <div className="security-option">
                  <div className="option-info">
                    <BellOutlined className="option-icon" />
                    <div>
                      <h4>Login Notifications</h4>
                      <p>Get notified when someone logs into your account</p>
                    </div>
                  </div>
                  <button className="secondary-btn">Configure</button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const navItems = [
    { key: 'profile', label: 'Profile', icon: <UserOutlined /> },
    { key: 'payment', label: 'Payment', icon: <CreditCardOutlined /> },
    { key: 'transactions', label: 'Transactions', icon: <TransactionOutlined /> },
    { key: 'security', label: 'Security', icon: <SafetyOutlined /> }
  ];

  return (
    <div className="account-settings-page">
      <div className="account-container">
        {/* Desktop Sidebar */}
        <div className="sidebar">
          <div className="profile-section">
            <div className="profile-avatar">
              <UserOutlined className="avatar-icon" />
            </div>
            <div className="username">{user?.username || 'User'}</div>
          </div>
          
          <div className="account-nav">
            <h3 className="nav-title">Account</h3>
            <ul className="nav-links">
              <li>
                <button 
                  className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <UserOutlined /> Profile
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${activeTab === 'payment' ? 'active' : ''}`}
                  onClick={() => setActiveTab('payment')}
                >
                  <CreditCardOutlined /> Payment Method
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${activeTab === 'transactions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('transactions')}
                >
                  <TransactionOutlined /> Transactions
                </button>
              </li>
              <li>
                <button 
                  className="nav-link sign-out"
                  onClick={handleSignOutClick}
                >
                  <LogoutOutlined /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="account-header">
          <div className="header-content">
            <div className="user-info">
              <div className="user-avatar">
                <UserOutlined className="avatar-icon" />
              </div>
              <div className="user-details">
                <h1 className="user-name">{user?.username || 'User'}</h1>
                <p className="user-email">{user?.email || 'No email provided'}</p>
              </div>
            </div>
            <button className="sign-out-btn" onClick={handleSignOutClick}>
              <LogoutOutlined />
              Sign Out
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="account-navigation">
          <nav className="nav-tabs">
            {navItems.map(item => (
              <button
                key={item.key}
                className={`nav-tab ${activeTab === item.key ? 'active' : ''}`}
                onClick={() => setActiveTab(item.key)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {renderContent()}
        </div>
      </div>

      {/* Add Payment Method Modal */}
      {isAddPaymentModalOpen && (
        <div className="modal-overlay" onClick={handleClosePaymentModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add Payment Method</h2>
              <button className="modal-close-btn" onClick={handleClosePaymentModal}>
                <CloseOutlined />
              </button>
            </div>
            
            <form className="modal-body" onSubmit={handleSubmitPaymentMethod}>
              <div className="form-sections-container">
                <div className="form-section">
                  <h3 className="form-section-title">Card Information</h3>
                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="1234 5678 9012 3456"
                    value={paymentFormData.cardNumber}
                    onChange={(e) => handlePaymentFormChange('cardNumber', e.target.value)}
                    maxLength="19"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="MM/YY"
                      value={paymentFormData.expiryDate}
                      onChange={(e) => handlePaymentFormChange('expiryDate', e.target.value)}
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="123"
                      value={paymentFormData.cvv}
                      onChange={(e) => handlePaymentFormChange('cvv', e.target.value)}
                      maxLength="4"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Cardholder Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={paymentFormData.cardholderName}
                    onChange={(e) => handlePaymentFormChange('cardholderName', e.target.value)}
                  />
                </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Billing Address</h3>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="123 Main Street"
                    value={paymentFormData.billingAddress}
                    onChange={(e) => handlePaymentFormChange('billingAddress', e.target.value)}
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Manila"
                      value={paymentFormData.city}
                      onChange={(e) => handlePaymentFormChange('city', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="1000"
                      value={paymentFormData.zipCode}
                      onChange={(e) => handlePaymentFormChange('zipCode', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select"
                    value={paymentFormData.country}
                    onChange={(e) => handlePaymentFormChange('country', e.target.value)}
                  >
                    <option value="Philippines">Philippines</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="cancel-btn" onClick={handleClosePaymentModal}>
                  Cancel
                </button>
                <button type="submit" className="primary-btn">
                  <CreditCardOutlined /> Add Payment Method
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sign Out Confirmation Modal */}
      {isSignOutModalOpen && (
        <div className="modal-overlay" onClick={handleCancelSignOut}>
          <div className="modal-content sign-out-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Sign Out</h2>
              <button className="modal-close-btn" onClick={handleCancelSignOut}>
                <CloseOutlined />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="sign-out-content">
                <LogoutOutlined className="sign-out-icon" />
                <h3>Are you sure you want to sign out?</h3>
                <p>You'll need to sign in again to access your account and continue your gaming experience.</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={handleCancelSignOut}>
                Cancel
              </button>
              <button className="sign-out-confirm-btn" onClick={handleConfirmSignOut}>
                <LogoutOutlined /> Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSetting;
