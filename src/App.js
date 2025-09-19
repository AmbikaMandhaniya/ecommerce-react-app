import React, { useState } from 'react';
import { AuthProvider, useAuth } from './components/Auth/AuthContext';
import LoginScreen from './components/Auth/LoginScreen';
import UserProfile from './components/Profile/UserProfile';
import ProductsList from './components/Products/ProductsList';
import ProductDetail from './components/Products/ProductDetail';
import Navigation from './components/Layout/Navigation';
import TabNavigation from './components/Layout/TabNavigation';

const MainApp = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedProductId, setSelectedProductId] = useState(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleBackToProducts = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {!selectedProductId && (
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      <main className="py-8">
        {selectedProductId ? (
          <ProductDetail productId={selectedProductId} onBack={handleBackToProducts} />
        ) : activeTab === 'profile' ? (
          <UserProfile />
        ) : (
          <ProductsList onProductClick={handleProductClick} />
        )}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;