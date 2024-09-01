import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosInstance.get('/auth'); // Adjust endpoint as per your backend
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // if (!userData) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* Display other user data as needed */}
        </div>
    );
};

export default UserProfile;
