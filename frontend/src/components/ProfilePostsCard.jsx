import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import VisibilityIcon from '@mui/icons-material/Visibility';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        border: '1px solid #ccc',
        borderRadius: '8px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-2px)',
        },
    },
    cardContent: {
        flexGrow: 1,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        backgroundColor: '#f5f7f6',
    },
    iconText: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    priceLocationRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8px',
    },
    cardImage: {
        height: '150px',
        objectFit: 'cover',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
    },
    actionButton: {
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#007bff', // Hover background color
            color: '#ffffff', // Hover text color
        },
    },
    cardRow: {
        background: 'rgba(0, 123, 235, 0.1)', // Slightly tinted background color
        padding: '8px',
        borderRadius: '6px',
        marginBottom: '4px',
    },
});

const ProfilePostsCard = ({ post, onDelete }) => {
    const classes = useStyles();

    // Destructure post data
    const { id, title, image, location, price } = post;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                {/* Image */}
                <img src={image} alt={title} className={classes.cardImage} />
                
                {/* Content */}
                <CardContent className={classes.cardContent}>
                    {/* Title */}
                    <div className={classes.cardRow}>
                        <Typography variant="h6" gutterBottom>{title}</Typography>
                    </div>
                    
                    {/* Price and Location */}
                    <div className={`${classes.cardRow} ${classes.priceLocationRow}`}>
                        <div className={classes.iconText}>
                            <CurrencyRupeeIcon color="primary" />
                            <Typography variant="body1">{price}</Typography>
                        </div>
                        <div className={classes.iconText}>
                            <LocationOnIcon fontSize="small" style={{ color: '#f44336' }} />
                            <Typography variant="body1">{location}</Typography>
                        </div>
                    </div>
                </CardContent>
                
                {/* Actions */}
                <div className={classes.cardActions}>
                    {/* Buttons */}
                    <div className={classes.iconText}>
                        <Button component={Link} to={`/edit/${id}`} variant="contained" color="primary" className={classes.actionButton}>Edit</Button>
                        <Button onClick={() => onDelete(id)} variant="contained" color="secondary" className={classes.actionButton}>Delete</Button>
                        <Button component={Link} to={`/post/${id}`} variant="outlined" color="inherit" className={classes.actionButton}><VisibilityIcon /></Button>
                    </div>
                </div>
            </Card>
        </Grid>
    );
};

export default ProfilePostsCard;
