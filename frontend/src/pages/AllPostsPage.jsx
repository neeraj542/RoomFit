import React from 'react';
import RecentPostCard from '../components/RecentPostCard'; // Adjust path as per your project structure

function AllPostsPage() {
    // Dummy data for all posts (assuming allPosts is fetched from backend)
    const allPosts = [
        { id: 1, title: 'Luxury Apartment in Downtown', image: 'https://t.ly/9YUfX', location: 'Moti Doongri, Jaipur', type: '1 RK / 1 HK', price: '8000 / month' },
        { id: 2, title: 'Spacious Condo with City View', image: 'https://tinyurl.com/24bb7pr7', location: 'Sector 51, Gurgaon', type: '1 BHK', price: '12000 / month' },
        { id: 3, title: 'Modern Studio near the Lake', image: 'https://tinyurl.com/ys79aejc', location: 'Street 115, Haryana', type: '2 BHK', price: '15000 / month' },
        { id: 4, title: 'Cozy Apartment in Downtown SF', image: 'https://tinyurl.com/ynep7yzz', location: 'Sector 17, Rohini, Delhi', type: '1 RK', price: '9000 / month' },
        { id: 5, title: 'Charming Loft in Historic District', image: 'https://tinyurl.com/6e62r4y4', location: 'Boston', type: '1 BHK', price: '11000 / month' },
        { id: 6, title: 'Urban Apartment with City View', image: 'https://tinyurl.com/4bww4b26', location: 'Seattle', type: '1 RK', price: '8500 / month' },
        { id: 7, title: 'Beachfront Condo with Pool Access', image: 'https://tinyurl.com/55hwnk8a', location: 'Miami', type: '2 BHK', price: '16000 / month' },
        { id: 8, title: 'Modern Apartment near Tech Hub', image: 'https://tinyurl.com/4eendwek', location: 'Austin', type: '1 BHK', price: '12000 / month' },
        // Add more posts as needed
    ];

    return (
        <div>
            <div className="container mx-auto my-8">
                <div className="text-center mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">All Posts</h2>
                    <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-6" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {allPosts.map(post => (
                        <RecentPostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
            {/* Additional components or sections can be added below */}
        </div>
    );
}

export default AllPostsPage;
