import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
                <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default NotFound;
