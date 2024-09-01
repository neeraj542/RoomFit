import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstanceUser } from '../axiosInstance';
 // Make sure to adjust the path to your axiosInstance
import { AuthContext } from '../AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Please fill in all fields.');
        } else {
            try {
                const response = await axiosInstanceUser.post('/login', {
                    email: email,
                    password: password,
                });
                console.log('Login successful:', response.data);
                login(response.data.token); // Use login from context
                navigate('/all-posts'); // Redirect to a protected route after login
            } catch (error) {
                console.error('Login failed:', error.response?.data || error.message);
                setError(error.response?.data?.error || 'An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='container mx-auto my-8'>
            <div className="text-center mx-auto">
                <h2 className='text-3xl font-semibold mb-4'>Login Page</h2>
                <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-6" />
            </div>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-gray-100 shadow-lg rounded-lg'>
                {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-bold mb-2'>Email Address</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary'
                        placeholder='Enter your email address'
                        required
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor='password' className='block text-sm font-bold mb-2'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary'
                        placeholder='Enter your password'
                        required
                    />
                </div>
                <button type='submit' className='w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'>
                    Login
                </button>
            </form>
            <p className='mt-4 text-center'>
                Don't have an account? <Link to='/register' className='text-primary hover:underline'>Register</Link>
            </p>
        </div>
    );
}

export default Login;
