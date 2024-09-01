import React from 'react';
import { Grid, Typography, Avatar, Rating, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dashboardContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    userImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: '180px',
        height: '180px',
        border: '2px solid #fff',
    },
    userInfo: {
        marginLeft: '20px',
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    ratingBox: {
        display: 'flex',
        alignItems: 'center',
    },
});

const UserDashboard = ({ user }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.dashboardContainer}>
            {/* Column 1: User Profile Picture */}
            <Grid item xs={12} sm={4} className={classes.userImageContainer}>
                <Avatar alt={user.fullName} src={user.profilePic} className={classes.profilePic} />
            </Grid>

            {/* Column 2: User Info */}
            <Grid item xs={12} sm={4} className={classes.userInfo}>
                <Typography variant="h5">{user.fullName}</Typography>
                <Typography variant="body1">@{user.username}</Typography>
                <Typography variant="body1">{user.email}</Typography>
                <Typography variant="body1">{user.phone}</Typography>
            </Grid>

            {/* Column 3: Stats (Total Posts and Rating) */}
            <Grid item xs={12} sm={4} className={classes.statsContainer}>
                <Box>
                    <Typography variant="h6">{user.totalPosts}</Typography>
                    <Typography variant="body2">Total Posts: </Typography>
                </Box>
                <Box className={classes.ratingBox}>
                    {user.rating !== undefined ? (
                        <>
                            <Rating name="read-only" value={user.rating} readOnly precision={0.5} />
                            <Typography variant="body2">{user.rating.toFixed(1)}</Typography>
                        </>
                    ) : (
                        <Typography variant="body2">N/A</Typography>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
};

export default UserDashboard;
