import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const ProductDetail = ({ productId, onBack }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center p-8">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-8">
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-sm text-green-600">
                  {product.discountPercentage}% off
                </span>
              )}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Brand:</span>
                <span className="font-medium">{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stock:</span>
                <span className="font-medium">{product.stock} units</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Rating:</span>
                <span className="font-medium">{product.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;