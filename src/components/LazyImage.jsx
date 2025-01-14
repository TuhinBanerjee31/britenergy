import {useState} from 'react'

const LazyImage = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    return (
      <div className={`relative ${className}`}>
        {/* Placeholder for lazy loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
        )}
        {/* Image */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover rounded-lg shadow transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  };

export default LazyImage
