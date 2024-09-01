import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import RecentPostCard from '../components/RecentPostCard'; // Adjust path as per your project structure

function Home() {
    // Dummy data for recent posts
    const recentPosts = [
        { id: 1, title: 'Luxury Apartment in Downtown', image: 'https://t.ly/9YUfX', location: 'Moti Doongri, Jaipur', type: '1 RK / 1 HK', price: '8000 / month' },
        { id: 2, title: 'Spacious Condo with City View', image: 'https://tinyurl.com/24bb7pr7', location: 'Sector 51, Gurgaon', type: '1 BHK', price: '12000 / month' },
        { id: 3, title: 'Modern Studio near the Lake', image: 'https://tinyurl.com/ys79aejc', location: 'Street 115, Haryana', type: '2 BHK', price: '15000 / month' },
        { id: 4, title: 'Cozy Apartment in Downtown SF', image: 'https://tinyurl.com/ynep7yzz', location: 'Sector 17, Rohini, Delhi', type: '1 RK', price: '9000 / month' },
        { id: 5, title: 'Charming Loft in Historic District', image: 'https://tinyurl.com/6e62r4y4', location: 'Boston', type: '1 BHK', price: '11000 / month' },
        { id: 6, title: 'Urban Apartment with City View', image: 'https://tinyurl.com/4bww4b26', location: 'Seattle', type: '1 RK', price: '8500 / month' },
        { id: 7, title: 'Beachfront Condo with Pool Access', image: 'https://tinyurl.com/55hwnk8a', location: 'Miami', type: '2 BHK', price: '16000 / month' },
        { id: 8, title: 'Modern Apartment near Tech Hub', image: 'https://tinyurl.com/4eendwek', location: 'Austin', type: '1 BHK', price: '12000 / month' }
    ];

    // Slice the recentPosts array to get only the first 4 posts
    const recentPostsToShow = recentPosts.slice(0, 4);

    return (
        <div>
            <RecentPosts recentPosts={recentPostsToShow} />
            <div className="text-center my-4">
                <Link to="/all-posts">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300">
                        See More
                    </button>
                </Link>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}

function RecentPosts({ recentPosts }) {
    return (
        <div className="container mx-auto my-8">
            <div className="text-center mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Recent Posts</h2>
                <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recentPosts.map(post => (
                    <RecentPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="bg-gray-300 py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Contact Section</h2>
                <p>Contact information goes here</p>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Home;
