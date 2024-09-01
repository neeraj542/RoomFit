import React, { useState, useEffect } from 'react';

const images = [
    'https://t.ly/dC9x7',
    'https://t.ly/iUP-j',
    'https://rb.gy/acufgn',
    'https://rb.gy/ryg9wa',
    'https://t.ly/IN1ad'
];

function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Auto slide every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    return (
        <div className="bg-gray-200 py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Slider Section</h2>
                <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-400 object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;
