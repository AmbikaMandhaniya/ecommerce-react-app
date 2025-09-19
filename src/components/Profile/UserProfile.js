import React from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../Auth/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.firstName} {user.lastName}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">@{user.username}</p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Age:</span> {user.age}</p>
              <p><span className="font-medium">Gender:</span> {user.gender}</p>
              <p><span className="font-medium">Phone:</span> {user.phone}</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
            <div className="space-y-1 text-sm">
              <p>{user.address?.address}</p>
              <p>{user.address?.city}, {user.address?.state}</p>
              <p>{user.address?.postalCode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;