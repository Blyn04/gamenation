import React, { useState } from 'react';
import { EditOutlined, UserOutlined, CreditCardOutlined, TransactionOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/componentsStyle/AccountSetting.css';

const AccountSetting = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Berlene F. Bernabe',
    username: 'blynsu',
    language: 'English',
    country: 'Philippines'
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    username: false,
    country: false
  });

  const [editValues, setEditValues] = useState({
    name: profileData.name,
    username: profileData.username,
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
    // Handle sign out logic here
    navigate('/');
  };

  const renderProfileField = (label, field, value, isEditable = true) => (
    <div className="profile-field">
      <div className="field-label">{label}</div>
      <div className="field-value">
        {isEditing[field] ? (
          <div className="edit-mode">
            <input
              type="text"
              value={editValues[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              className="edit-input"
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
            <span>{value}</span>
            {isEditable && (
              <button 
                className="edit-btn"
                onClick={() => handleEdit(field)}
              >
                <EditOutlined /> Edit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="content-section">
            <h2 className="content-title">Profile Information</h2>
            <div className="profile-fields">
              {renderProfileField('Name', 'name', profileData.name)}
              {renderProfileField('Username', 'username', profileData.username)}
              {renderProfileField('Language', 'language', profileData.language, false)}
              {renderProfileField('Country', 'country', profileData.country)}
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="content-section">
            <h2 className="content-title">Payment Methods</h2>
            <div className="payment-content">
              <p>Payment method settings will be displayed here.</p>
            </div>
          </div>
        );
      case 'transactions':
        return (
          <div className="content-section">
            <h2 className="content-title">Transaction History</h2>
            <div className="transactions-content">
              <p>Your transaction history will be displayed here.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="account-settings-page">
      <div className="account-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="profile-section">
            <div className="profile-avatar">
              <UserOutlined className="avatar-icon" />
            </div>
            <div className="username">Username</div>
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

        {/* Main Content */}
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
