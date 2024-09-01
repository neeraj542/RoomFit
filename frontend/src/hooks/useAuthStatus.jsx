// useAuthStatus.js
import { useState, useEffect } from 'react';

const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true); // Default to true while checking

    useEffect(() => {
        // Check authentication status (e.g., by validating token)
        const token = localStorage.getItem('token'); // Adjust according to your token storage
        if (token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        setCheckingStatus(false); // Done checking status
    }, []);

    return { loggedIn, checkingStatus };
};

export default useAuthStatus;
