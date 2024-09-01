import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axiosInstance from '../axiosInstance';
import { AuthContext } from '../AuthContext';
import { axiosInstanceUser } from '../axiosInstance';


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            setError('Please fill in all fields.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            try {
                const response = await axiosInstanceUser.post('/register', {
                    username: username,
                    email: email,
                    password: password,
                });
                console.log('Registration successful:', response.data);
                login(response.data.token); // Use login from context
                navigate('/all-posts'); // Redirect to a protected route after registration
            } catch (error) {
                console.error('Registration failed:', error.response?.data || error.message);
                setError(error.response?.data?.error || 'An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='container mx-auto my-8'>
            <div className="text-center mx-auto">
                <h2 className='text-3xl font-semibold mb-4'>Register Page</h2>
                <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-6" />
            </div>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-gray-100 shadow-lg rounded-lg'>
                {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
                <div className='mb-4'>
                    <label htmlFor='username' className='block text-sm font-bold mb-2'>Username</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary'
                        placeholder='Enter your username'
                        required
                    />
                </div>
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
                <div className='mb-4'>
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
                <div className='mb-6'>
                    <label htmlFor='confirmPassword' className='block text-sm font-bold mb-2'>Confirm Password</label>
                    <input
                        type='password'
                        id='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary'
                        placeholder='Confirm your password'
                        required
                    />
                </div>
                <button type='submit' className='w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'>
                    Register
                </button>
            </form>
            <p className='mt-4 text-center'>
                Already have an account? <Link to='/login' className='text-primary hover:underline'>Login</Link>
            </p>
        </div>
    );
}

export default Register;
