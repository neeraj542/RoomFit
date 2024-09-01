import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Typography, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, CircularProgress } from '@material-ui/core';
import { LocationOn as LocationOnIcon, CurrencyRupee as CurrencyRupeeIcon } from '@mui/icons-material';
import { Apartment as ApartmentIcon, Wifi as WifiIcon, AcUnit as AcUnitIcon, FlashOn as FlashOnIcon, Bathroom as BathroomIcon, ContactMail as ContactMailIcon, Person as PersonIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,  
    padding: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: theme.spacing(2),
  },
  detailsContainer: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  rent: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  location: {
    marginBottom: theme.spacing(2),
  },
  additionalDetails: {
    whiteSpace: 'pre-line',
    marginBottom: theme.spacing(2),
  },
  facilities: {
    marginBottom: theme.spacing(2),
  },
  contactDetails: {
    marginTop: theme.spacing(2),
  },
  iconText: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

function SinglePostPage() {
  const classes = useStyles();
  const { postId } = useParams(); // Assuming postId is retrieved from URL params
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulating fetching data from an API
    // Replace with actual API call logic
    setTimeout(() => {
      const dummyPost = {
        id: postId,
        title: '1 HK Apartment',
        image: 'https://t.ly/9YUfX',
        vacancy: 1,
        for: 'Male',
        rent: '6500 / month',
        location: 'Sector 17, Rohini',
        additionalDetails: 'RO provided',
        facilities: [
          { icon: <BathroomIcon />, text: 'Indian washroom' },
          { icon: <AcUnitIcon />, text: 'AC provided' },
          { icon: <WifiIcon />, text: 'Wifi not included' },
          { icon: <FlashOnIcon />, text: 'Electricity provided' },
        ],
        contactDetails: [
          { icon: <PersonIcon color="primary" />, text: 'Shivam Sinha' },
          { icon: <PhoneIcon color="primary" />, text: '+91 7420182821' },
          { icon: <ContactMailIcon color="primary" />, text: 'shivam@example.com' },
        ],
        zipCode: '110085'
      };
    // Simulate geocoding based on zip code
    const geocodeAddress = async (zipCode) => {
    try {
      // Example geocoding function using a dummy API or service
      const geolocation = await geocode(zipCode); // Replace with actual geocoding API call
      return geolocation;
    } catch (error) {
      console.error('Error fetching geolocation:', error);
      return null;
    }
    };

    // Dummy geocoding function (replace with real API call)
    const geocode = async (zipCode) => {
    // Simulating a geocoding service call
    return { lat: 28.7041, lng: 77.1025 }; // Example coordinates for Sector 17, Rohini
    };

    // Fetch geolocation based on ZIP code
    geocodeAddress(dummyPost.zipCode).then((geolocation) => {
    if (geolocation) {
      dummyPost.geolocation = geolocation;
      setPost(dummyPost);
      setLoading(false);
    } else {
      setLoading(false);
    }
    });
    }, 1000); // Simulating a delay of 1 second for fetching data
  }, [postId]);

  if (loading) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (!post) {
    return <Typography variant="h6">Post not found</Typography>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img src={post.image} alt={post.title} className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.detailsContainer} elevation={3}>
            <Typography variant="body1" className={classes.location}>
              <LocationOnIcon fontSize="small" color="primary" />
              {post.location}
            </Typography>
            <Typography variant="h2" className={classes.title}>
              {post.title}
            </Typography>
            <Typography variant="body1" className={classes.rent}>
              <CurrencyRupeeIcon color="primary" />
              {post.rent}
            </Typography>
            <Divider />
            <Typography variant="body1" className={classes.additionalDetails}>
              Additional Details: {post.additionalDetails}
            </Typography>
            <Divider />
            <div className={classes.facilities}>
              <Typography variant="h6">Facilities:</Typography>
              <List dense>
                {post.facilities.map((facility, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {facility.icon}
                    </ListItemIcon>
                    <ListItemText primary={facility.text} />
                  </ListItem>
                ))}
              </List>
            </div>
            <Divider className={classes.contactDetails} />
            <div className={classes.contactDetails}>
              <Typography variant="h6">Contact Details</Typography>
              <List dense>
                {post.contactDetails.map((detail, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {detail.icon}
                    </ListItemIcon>
                    <ListItemText primary={detail.text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {/* Map section */}
          <div style={{ height: '400px', width: '100%' }}>
            <MapContainer center={[post.geolocation.lat, post.geolocation.lng]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[post.geolocation.lat, post.geolocation.lng]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SinglePostPage;
