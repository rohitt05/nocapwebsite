/* eslint-disable @typescript-eslint/no-require-imports */
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of image paths
    const images = [
        '/mainImages/lg0.jpg',
        '/mainImages/lg1.jpg',
        '/mainImages/lg2.jpg',
        '/mainImages/lg3.jpg',
        '/mainImages/lg4.jpg',
        '/mainImages/lg5.jpg'
    ];

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full h-screen p-4">
            <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg">
                {/* Logo centered over the carousel */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <Image
                        src={require("../../../public/logo/logo2.png")}
                        alt="No Cap Logo"
                        width={520}
                        height={105}
                        className="cursor-pointer"
                        priority={true}
                    />
                </div>

                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Carousel image ${index}`}
                            fill={true}
                            sizes="100vw"
                            priority={index === 0}
                            className="object-cover w-full h-full rounded-3xl"
                            quality={95}
                        />
                    </div>
                ))}

                {/* Navigation dots */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 rounded-full transition-all duration-300 
        ${index === currentIndex ? 'bg-white w-5' : 'bg-black w-3'}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                {/* Navigation arrows with increased horizontal padding */}
                <button
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white px-5 py-3 rounded-full z-10"
                    onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    aria-label="Previous slide"
                >
                    &#10094;
                </button>
                <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white px-5 py-3 rounded-full z-10"
                    onClick={() => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    aria-label="Next slide"
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Carousel;