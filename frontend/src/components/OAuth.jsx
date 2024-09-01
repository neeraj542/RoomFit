import React from 'react';

function OAuth() {
    const handleOAuthLogin = (provider) => {
        // Add logic to handle OAuth login, e.g., redirect to OAuth provider
        console.log(`Logging in with ${provider}`);
    };

    return (
        <div className='container mx-auto'>
            <button
                onClick={() => handleOAuthLogin('Google')}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2'
            >
                Continue with Google
            </button>
            <button
                onClick={() => handleOAuthLogin('Facebook')}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
                Continue with Facebook
            </button>
        </div>
    );
}

export default OAuth;
