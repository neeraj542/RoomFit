import React, { useState } from 'react';

function ForgotPass() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulate API call to send password reset email
            // Replace with actual API call
            await sendPasswordResetEmail(email);
            setMessage(`Password reset email sent to: ${email}`);
            setError('');
            setEmail('');
        } catch (err) {
            setMessage('');
            setError('Failed to send password reset email. Please try again later.');
        }
    };

    const sendPasswordResetEmail = (email) => {
        // Simulate API call delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mocking successful API call
                resolve();
            }, 1500); // Adjust delay as needed
        });
    };

    return (
        <div className="container mx-auto">
            <div className="text-center mx-auto">
                <h2 className="text-3xl font-semibold mb-2">Forgot Password</h2>
                <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-6" />
            </div>

            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                {message && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                        <p className="font-bold">Success</p>
                        <p>{message}</p>
                    </div>
                )}
                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                        <p className="font-bold">Error</p>
                        <p>{error}</p>
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
}

export default ForgotPass;
