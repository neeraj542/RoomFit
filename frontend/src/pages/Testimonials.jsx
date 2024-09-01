import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
    // Dummy data for testimonials
    const testimonials = [
        {
            id: 1,
            name: 'Tania Andrew',
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
            position: 'Frontend Lead @ Google',
            rating: 5,
            content: 'I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!',
        },
        {
            id: 2,
            name: 'John Doe',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            position: 'Designer @ Facebook',
            rating: 4,
            content: 'Creative Tim has been instrumental in my design journey. Their resources are top-notch and highly recommended!',
        },
        {
            id: 3,
            name: 'Jane Smith',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            position: 'UX/UI Specialist @ Amazon',
            rating: 5,
            content: 'I love using Creative Tim\'s templates and components. They save me so much time!',
        },
        {
            id: 4,
            name: 'Michael Brown',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            position: 'Software Engineer @ Microsoft',
            rating: 4,
            content: 'Creative Tim provides excellent design assets that have boosted our project timelines. Highly recommended!',
        },
        {
            id: 5,
            name: 'Emily Clark',
            avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
            position: 'Product Manager @ Apple',
            rating: 5,
            content: 'Using Creative Tim\'s components has streamlined our UI development process. Great quality and easy integration!',
        },
    ];

    // Filter most loved testimonials (rating 5)
    const mostLovedTestimonials = testimonials.filter(testimonial => testimonial.rating === 5);

    return (
        <div className="container mx-auto my-8">
            <div className="text-center mx-auto">
                <h2 className="text-3xl font-semibold mb-2">Testimonials</h2>
                <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-6" />
            </div>

            {/* Most Loved Testimonials */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Most Loved</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mostLovedTestimonials.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>

            {/* All Testimonials */}
            <div>
                <h3 className="text-2xl font-semibold mb-2">All Testimonials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
