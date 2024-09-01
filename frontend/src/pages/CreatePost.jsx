import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    Typography,
    Container,
    FormControlLabel,
    Checkbox,
    CircularProgress,
} from '@mui/material';
import { makeStyles } from '@mui/styles'; 
import { axiosInstancePosts } from '../axiosInstance';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(4),
        },
    },
    form: {
        backgroundColor: '#f3f4f6',
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    button: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(3),
        },
    },
}));

const CreatePost = () => {
    const [post, setPost] = useState({
        title: '',
        location: '',
        pincode: '',
        availability: '',
        rent: '',
        facilities: '',
        washroomType: '',
        additionalInfo: '',
        images: [],
        contact: {
            name: '',
            phone: '',
            email: '',
        },
        indianWashroom: false,
        acAvailable: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setPost({ ...post, [name]: checked });
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, contact: { ...post.contact, [name]: value } });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const images = files.map((file) => URL.createObjectURL(file));
        setPost({ ...post, images: [...post.images, ...images] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const formData = new FormData();
            formData.append('title', post.title);
            formData.append('location', post.location);
            formData.append('pincode', post.pincode);
            formData.append('availability', post.availability);
            formData.append('rent', post.rent);
            formData.append('washroomType', post.washroomType);
            formData.append('additionalInfo', post.additionalInfo);
            formData.append('contact[name]', post.contact.name);
            formData.append('contact[phone]', post.contact.phone);
            formData.append('contact[email]', post.contact.email);
            formData.append('indianWashroom', post.indianWashroom);
            formData.append('acAvailable', post.acAvailable);
    
            // Append images to formData
            post.images.forEach((image) => {
                formData.append('images', image); // Ensure 'images' matches multer setup
            });
    
            const token = Cookies.get('authToken');
    
            const response = await axiosInstancePosts.post('/createpost', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success('Post created successfully!');
            console.log('Post created:', response.data);
            setLoading(false);
            setError('');
            setPost({
                title: '',
                location: '',
                pincode: '',
                availability: '',
                rent: '',
                facilities: '',
                washroomType: '',
                additionalInfo: '',
                images: [],
                contact: {
                    name: '',
                    phone: '',
                    email: '',
                },
                indianWashroom: false,
                acAvailable: false,
            });
        } catch (error) {
            console.error('Error creating post:', error.response);
            setLoading(false);
            setError('Failed to create post. Please try again.');
        }
    };
    
    

    return (
        <>
        <ToastContainer />
        <Container maxWidth="md" style={{ marginTop: 32, marginBottom: 16 }}>
            <div style={{ backgroundColor: '#f3f4f6', padding: 16, borderRadius: 8, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h5" gutterBottom align="center">
                        Create New Post
                    </Typography>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                            <TextField
                                type="text"
                                name="title"
                                label="Title"
                                variant="outlined"
                                value={post.title}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="location"
                                label="Location"
                                variant="outlined"
                                value={post.location}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="pincode"
                                label="Pin Code"
                                variant="outlined"
                                value={post.pincode}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="availability"
                                label="Availability"
                                variant="outlined"
                                value={post.availability}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="rent"
                                label="Rent"
                                variant="outlined"
                                value={post.rent}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="facilities"
                                label="Facilities"
                                variant="outlined"
                                value={post.facilities}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="washroomType"
                                label="Washroom Type"
                                variant="outlined"
                                value={post.washroomType}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        {/* Other fields */}
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                name="additionalInfo"
                                label="Additional Info"
                                variant="outlined"
                                value={post.additionalInfo}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                                minRows={4}  // Updated from rows to minRows
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                name="name"
                                label="Contact Name"
                                variant="outlined"
                                value={post.contact.name}
                                onChange={handleContactChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="phone"
                                label="Contact Phone"
                                variant="outlined"
                                value={post.contact.phone}
                                onChange={handleContactChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                name="email"
                                label="Contact Email"
                                variant="outlined"
                                value={post.contact.email}
                                onChange={handleContactChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={post.indianWashroom}
                                        onChange={handleCheckboxChange}
                                        name="indianWashroom"
                                        color="primary"
                                    />
                                }
                                label="Indian-style Washroom"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={post.acAvailable}
                                        onChange={handleCheckboxChange}
                                        name="acAvailable"
                                        color="primary"
                                    />
                                }
                                label="AC Available"
                            />
                        </Grid>
                        {/* Image Upload */}
                        <Grid item xs={12}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                multiple
                                style={{ display: 'none' }}
                                id="image-upload"
                            />
                            <label htmlFor="image-upload">
                                <Button
                                    variant="contained"
                                    component="span"
                                    color="primary"
                                    fullWidth
                                >
                                    Upload Images
                                </Button>
                            </label>
                            {post.images.length > 0 && (
                                <div>
                                    {post.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Uploaded ${index}`}
                                            style={{ maxWidth: '100%', marginTop: 10 }}
                                        />
                                    ))}
                                </div>
                            )}
                        </Grid>
                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Post'}
                            </Button>
                            {error && (
                                <Typography variant="body2" color="error" style={{ marginTop: 10 }}>
                                    {error}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
        </>
    );
};

export default CreatePost;