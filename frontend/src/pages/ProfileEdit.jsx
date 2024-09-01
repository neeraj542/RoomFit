import React, { useState } from 'react';
import { Avatar } from "@material-tailwind/react";

const ProfileEdit = () => {
    // Mock initial profile data
    const initialProfileData = {
        fullName: 'John Doe',
        username: 'johndoe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis eget ipsum venenatis condimentum.',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg', // Use null instead of URL for avatar
        email: 'johndoe@example.com',
        phone: '123-456-7890',
    };

    // State to manage profile data
    const [profileData, setProfileData] = useState(initialProfileData);

    // Handler to update profile data
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    // Handler for file input change (for avatar upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Assume single file upload
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData({ ...profileData, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    // Handler to save profile changes (dummy function)
    const saveProfile = () => {
        // Here you can implement saving logic (e.g., API call to update profile)
        alert('Profile saved successfully!');
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <div className="text-xl font-semibold mb-4">Edit Profile</div>
                    <div className="flex items-center mb-4">
                        <div className="relative">
                            <Avatar
                                size="xl"
                                src={profileData.avatar}
                                alt="Avatar"
                                className="rounded-full w-32 h-32"
                            />
                            <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </label>
                            <input
                                type="file"
                                name="avatar"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="hidden"
                                id="avatar-upload"
                            />
                        </div>
                        <div className="ml-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Upload Profile Picture</label>
                            <p className="text-gray-500 text-sm">Choose a square image for best results.</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={profileData.fullName}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={profileData.username}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Bio</label>
                        <textarea
                            name="bio"
                            value={profileData.bio}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                            placeholder="Enter your bio"
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={saveProfile}
                    >
                        Save Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;
