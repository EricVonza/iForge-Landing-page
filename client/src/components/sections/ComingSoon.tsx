import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm coming-soon-overlay">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-md text-gray-600 mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <button
          className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;