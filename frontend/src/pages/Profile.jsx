import React, { useState, useEffect, useContext } from 'react';
import { Container, Grid, Typography, Button, CircularProgress } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import ProfilePostsCard from '../components/ProfilePostsCard';
import UserDashboard from '../components/UserDashboard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext'; // Import AuthContext directly
import Cookies from 'js-cookie';

const useStyles = makeStyles({
    dashboardContainer: {
        marginTop: '20px',
    },
    postContainer: {
        marginTop: '20px',
    },
});

const Profile = () => {
    const classes = useStyles();
    const { isAuthenticated } = useContext(AuthContext);
    const [userPosts, setUserPosts] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect or handle unauthenticated state
            return;
        }

        const fetchUserData = async () => {
            try {
                const token = Cookies.get('authToken');
                const userResponse = await axios.get('/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUserDetails(userResponse.data);

                const postsResponse = await axios.get('/posts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUserPosts(postsResponse.data);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Failed to load user data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, [isAuthenticated]);

    const handleDeletePost = (postId) => {
        const updatedPosts = userPosts.filter(post => post.id !== postId);
        setUserPosts(updatedPosts);
    };

    if (loading) {
        return (
            <Container maxWidth="lg">
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                    <CircularProgress />
                </Grid>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>Error</Typography>
                <Typography variant="body1" gutterBottom>{error}</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.dashboardContainer}>
                <Grid item xs={12}>
                    <div className="text-center mx-auto">
                        <h2 className='text-3xl font-semibold mb-4'>User Dashboard</h2>
                        <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-6" />
                    </div>
                    {userDetails && (
                        <div>
                            <Typography variant="h6">Name: {userDetails.username || 'N/A'}</Typography>
                            <Typography variant="h6">Email: {userDetails.email || 'N/A'}</Typography>
                        </div>
                    )}
                    <Button
                        component={Link}
                        to="/profile/edit"
                        variant="contained"
                        color="primary"
                        style={{ marginRight: '10px' }}
                    >
                        Edit Profile
                    </Button>
                    <Button
                        component={Link}
                        to="/create-post"
                        variant="contained"
                        color="primary"
                    >
                        Create New Post
                    </Button>
                </Grid>
                
                {/* <h4>{console.log("Token:" + Cookies.get('authToken'))}</h4> */}
            </Grid>

            

            {userDetails && (
                <UserDashboard user={userDetails} />
            )}

            <Grid container spacing={3} className={classes.postContainer}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>My Posts</Typography>
                </Grid>
                {/* {userPosts.length === 0 ? (
                    <Typography variant="h6">No Posts created</Typography>
                ) : (
                    userPosts.map(post => (
                        <ProfilePostsCard key={post.id} post={post} onDelete={handleDeletePost} />
                    ))
                )} */}
            </Grid>
        </Container>
    );
};

export default Profile;
