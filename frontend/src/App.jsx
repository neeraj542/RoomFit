import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute component
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Testimonials from './pages/Testimonials';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ForgotPass from './pages/ForgotPass';
import AllPostsPage from './pages/AllPostsPage';
import SinglePostPage from './pages/SinglePostPage';
import NotFound from './pages/NotFound';
import { AuthProvider } from './AuthContext';
// import { AuthContext } from '../AuthContext';
function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPass />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/edit" element={<ProfileEdit />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/edit-post/:id" element={<EditPost />} />
                    {/* Protected routes */}
                    {/* <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />  
                    <Route path="/profile/edit" element={<PrivateRoute element={<ProfileEdit />} />} />
                    <Route path="/create-post" element={<PrivateRoute element={<CreatePost />} />} />
                    <Route path="/edit-post/:id" element={<PrivateRoute element={<EditPost />} />} /> */}
                    {/* Public routes */}
                    <Route path="/all-posts" element={<AllPostsPage />} />
                    <Route path="/post/:postId" element={<SinglePostPage />} />
                    {/* Not found route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
