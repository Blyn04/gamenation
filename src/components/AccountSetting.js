import React, { useState } from 'react';
import { EditOutlined, UserOutlined, CreditCardOutlined, TransactionOutlined, LogoutOutlined, SettingOutlined, BellOutlined, SafetyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/componentsStyle/AccountSetting.css';

const AccountSetting = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Berlene F. Bernabe',
    username: 'blynsu',
    email: 'berlene.bernabe@example.com',
    phone: '+63 912 345 6789',
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

  const handleEdit = (field) => {
    setIsEditing(prev => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setProfileData(prev => ({ ...prev, [field]: editValues[field] }));
    setIsEditing(prev => ({ ...prev, [field]: false }));
  };

  const handleCancel = (field) => {
    setEditValues(prev => ({ ...prev, [field]: profileData[field] }));
    setIsEditing(prev => ({ ...prev, [field]: false }));
  };

  const handleInputChange = (field, value) => {
    setEditValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSignOut = () => {
    navigate('/');
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
                <button className="primary-btn">Add Payment Method</button>
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
                <button className="primary-btn">Browse Games</button>
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
            <div className="username">{profileData.name}</div>
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
                  onClick={handleSignOut}
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
                <h1 className="user-name">{profileData.name}</h1>
                <p className="user-email">{profileData.email}</p>
              </div>
            </div>
            <button className="sign-out-btn" onClick={handleSignOut}>
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
    </div>
  );
};

export default AccountSetting;
