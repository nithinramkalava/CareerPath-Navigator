'use client';

import Image from 'next/image';

// Define the images with their alt descriptions
const projectImages = [
  {
    src: '/images/1.jpg',
    alt: 'Students exploring career options',
  },
  {
    src: '/images/2.jpg',
    alt: 'Rural school classroom',
  },
  {
    src: '/images/3.jpg',
    alt: 'Student using technology for education',
  },
  {
    src: '/images/4.jpg',
    alt: 'Career mentorship session',
  },
];

const AboutImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {projectImages.map((image, index) => (
        <div key={index} className="relative h-[240px] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index < 2} // Prioritize loading the first two images
          />
        </div>
      ))}
    </div>
  );
};

export default AboutImageGrid; 