import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.3s',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-4px)',
        },
    },
    cardContent: {
        padding: '16px',
    },
    imageWrapper: {
        position: 'relative',
        overflow: 'hidden',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    image: {
        width: '100%',
        height: '200px',  // Fixed height for image
        objectFit: 'cover',  // Maintain aspect ratio
        transition: 'opacity 0.3s, transform 0.3s',
        '&:hover': {
            opacity: 0.8,
            transform: 'scale(1.05)',
            filter: 'blur(3px)',
        },
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        opacity: 0,
        transition: 'opacity 0.3s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',  // Padding adjusted
        backgroundColor: '#e6e8e7',
    },
    iconText: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
    link: {
        textDecoration: 'none', // Ensure no underline for the link
        color: 'inherit', // Inherit the color from parent
    },
});

function RecentPostCard({ post }) {
    const classes = useStyles();

    return (
        <Link to={`/post/${post.id}`} className={classes.link}>
            <Card className={classes.card}>
                <div className={classes.imageWrapper}>
                    <img src={post.image} alt={post.title} className={classes.image} />
                    <div className={classes.imageOverlay}>
                        View Details
                    </div>
                </div>
                <CardContent className={classes.cardContent}>
                    <div className={classes.iconText}>
                        <LocationOnIcon fontSize="small" style={{ color: '#f44336' }} />
                        <Typography variant="body2">{post.location}</Typography>
                    </div>
                </CardContent>
                <div className={classes.cardFooter}>
                    <div className={classes.iconText}>
                        <CurrencyRupeeIcon color="primary" />
                        <Typography variant="body2">{post.price}</Typography>
                    </div>
                    <div className={classes.iconText}>
                        <ApartmentIcon color="primary" />
                        <Typography variant="body2">{post.type}</Typography>
                    </div>
                </div>
            </Card>
        </Link>
    );
}

export default RecentPostCard;
