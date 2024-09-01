import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                </div>
            </div>
            <p className="text-gray-800">{testimonial.content}</p>
        </div>
    );
};

export default TestimonialCard;
