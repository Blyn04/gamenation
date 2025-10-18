import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('gamenation_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('gamenation_users') || '[]');
      const foundUser = users.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const userData = { ...foundUser };
        delete userData.password; // Don't store password in user state
        setUser(userData);
        localStorage.setItem('gamenation_user', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const signup = async (username, email, password) => {
    try {
      // Get existing users
      const users = JSON.parse(localStorage.getItem('gamenation_users') || '[]');
      
      // Check if email already exists
      if (users.find(u => u.email === email)) {
        return { success: false, error: 'Email already exists' };
      }
      
      // Check if username already exists
      if (users.find(u => u.username === username)) {
        return { success: false, error: 'Username already exists' };
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password, // In real app, this would be hashed
        createdAt: new Date().toISOString(),
        avatar: null,
        preferences: {
          theme: 'dark',
          notifications: true
        }
      };

      // Save user to localStorage
      users.push(newUser);
      localStorage.setItem('gamenation_users', JSON.stringify(users));

      // Auto-login after signup
      const userData = { ...newUser };
      delete userData.password;
      setUser(userData);
      localStorage.setItem('gamenation_user', JSON.stringify(userData));

      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: 'Signup failed. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gamenation_user');
  };

  const updateUser = (updates) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('gamenation_user', JSON.stringify(updatedUser));
      
      // Also update in users array
      const users = JSON.parse(localStorage.getItem('gamenation_users') || '[]');
      const userIndex = users.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updates };
        localStorage.setItem('gamenation_users', JSON.stringify(users));
      }
    }
  };

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
    updateUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
