'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Career representation objects with more detailed and fun illustrations
const careerIllustrations = [
  {
    id: 'tech',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Computer Monitor */}
            <div className="absolute w-28 h-20 bg-gray-800 rounded-t-lg border-2 border-gray-700"></div>
            <div className="absolute top-2 w-24 h-16 bg-indigo-400 rounded-sm flex items-center justify-center">
              <div className="w-20 h-12 bg-indigo-300 rounded-sm flex flex-wrap p-1">
                <div className="w-2 h-2 bg-indigo-600 m-0.5"></div>
                <div className="w-2 h-2 bg-indigo-500 m-0.5"></div>
                <div className="w-2 h-2 bg-indigo-600 m-0.5"></div>
                <div className="w-2 h-2 bg-indigo-500 m-0.5"></div>
              </div>
            </div>
            {/* Monitor Stand */}
            <div className="absolute top-20 h-4 w-6 bg-gray-700"></div>
            <div className="absolute top-24 h-1 w-10 bg-gray-700 rounded"></div>
            {/* Keyboard */}
            <div className="absolute top-26 h-3 w-20 bg-gray-700 rounded"></div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Software Development
        </motion.div>
      </div>
    )
  },
  {
    id: 'hospital',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Hospital Building */}
            <div className="absolute w-28 h-24 bg-white rounded-md border-2 border-gray-300"></div>
            
            {/* Hospital Sign */}
            <div className="absolute top-3 w-16 h-6 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">HOSPITAL</span>
            </div>
            
            {/* Windows */}
            <div className="absolute top-12 left-4 w-4 h-4 bg-blue-200 border border-blue-300"></div>
            <div className="absolute top-12 right-4 w-4 h-4 bg-blue-200 border border-blue-300"></div>
            <div className="absolute top-18 left-4 w-4 h-4 bg-blue-200 border border-blue-300"></div>
            <div className="absolute top-18 right-4 w-4 h-4 bg-blue-200 border border-blue-300"></div>
            
            {/* Door - properly centered */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-8 h-8 bg-gray-300 border border-gray-400 flex justify-center">
              <div className="w-4 h-full bg-gray-400"></div>
            </div>
            
            {/* Red Cross */}
            <div className="absolute top-30 w-8 h-8">
              <div className="absolute top-2 left-3 w-2 h-6 bg-red-600"></div>
              <div className="absolute top-4 w-8 h-2 bg-red-600"></div>
            </div>
            
            {/* Improved Ambulance */}
            <motion.div
              animate={{ x: [-40, 40] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -bottom-4 w-14 h-6 bg-white rounded-sm border border-gray-400"
            >
              {/* Ambulance Body */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-sm border-b border-gray-300"></div>
              <div className="absolute top-0 right-0 w-6 h-4 bg-white border-l border-gray-300"></div>
              
              {/* Red Stripe */}
              <div className="absolute top-1.5 w-full h-1 bg-red-500"></div>
              
              {/* Emergency Lights */}
              <div className="absolute top-0 right-2 w-3 h-1 bg-red-500 rounded-sm"></div>
              <div className="absolute top-0 right-5 w-3 h-1 bg-blue-500 rounded-sm"></div>
              
              {/* Front Window */}
              <div className="absolute top-0.5 left-1 w-4 h-2 bg-blue-200 border border-blue-300 rounded-sm"></div>
              
              {/* Wheels */}
              <div className="absolute bottom-0 left-2 w-2.5 h-2.5 bg-gray-700 rounded-full border border-gray-800">
                <div className="absolute inset-0.5 rounded-full bg-gray-600"></div>
              </div>
              <div className="absolute bottom-0 right-2 w-2.5 h-2.5 bg-gray-700 rounded-full border border-gray-800">
                <div className="absolute inset-0.5 rounded-full bg-gray-600"></div>
              </div>
              
              {/* Cross Symbol */}
              <div className="absolute top-0.5 right-8 w-3 h-3">
                <div className="absolute top-1 left-1.5 w-0.5 h-1.5 bg-red-600"></div>
                <div className="absolute top-1.5 left-0.5 w-1.5 h-0.5 bg-red-600"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Healthcare
        </motion.div>
      </div>
    )
  },
  {
    id: 'cricket',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Cricket field */}
            <div className="absolute bottom-0 w-full h-3 bg-green-600 rounded-sm"></div>
            
            {/* Cricket stumps */}
            <div className="absolute bottom-3 left-2 flex space-x-0.5">
              <div className="w-0.5 h-5 bg-gray-300"></div>
              <div className="w-0.5 h-5 bg-gray-300"></div>
              <div className="w-0.5 h-5 bg-gray-300"></div>
              <div className="absolute top-0 w-3 h-0.5 bg-gray-300"></div>
            </div>
            
            {/* Batsman */}
            <motion.div
              className="absolute bottom-3 left-8 w-10 h-16"
              animate={{
                rotateZ: [0, 45, 0],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                times: [0, 0.2, 0.5]
              }}
            >
              {/* Body */}
              <div className="absolute bottom-0 left-2 w-4 h-8 bg-blue-600 rounded-md"></div>
              
              {/* Head */}
              <div className="absolute bottom-8 left-2 w-4 h-4 bg-orange-300 rounded-full"></div>
              
              {/* Helmet */}
              <div className="absolute bottom-9 left-1.5 w-5 h-4 bg-blue-800 rounded-t-lg"></div>
              
              {/* Batting arms */}
              <motion.div
                className="absolute bottom-6 left-6 w-6 h-1.5 bg-orange-300 rounded-full origin-left"
                animate={{
                  rotateZ: [30, 60, 30],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  times: [0, 0.2, 0.5]
                }}
              ></motion.div>
              
              {/* Bat */}
              <motion.div
                className="absolute bottom-6 left-11 w-5 h-1.5 bg-yellow-800 rounded-r-sm origin-left"
                animate={{
                  rotateZ: [30, 60, 30],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  times: [0, 0.2, 0.5]
                }}
              ></motion.div>
              
              {/* Legs */}
              <div className="absolute bottom-0 left-1 w-1.5 h-4 bg-white rounded-full"></div>
              <div className="absolute bottom-0 left-5 w-1.5 h-4 bg-white rounded-full"></div>
            </motion.div>
            
            {/* Cricket Ball with Trace */}
            <motion.div
              className="absolute"
              initial={{ x: 10, y: 0, opacity: 0 }}
              animate={{
                x: [10, 22],
                y: [0, -23, -5],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                times: [0, 0.2, 1],
                delay: 0.2
              }}
            >
              {/* Ball */}
              <div className="w-2 h-2 bg-red-600 rounded-full shadow-md"></div>
              
              {/* Ball Trace */}
              <motion.div 
                className="absolute top-1 left-1 w-8 h-0.5 bg-red-400 rounded-full origin-left"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                  rotate: [0, -40, -40]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  times: [0, 0.2, 1],
                }}
              />
            </motion.div>
            
            {/* Six! Text that appears when ball is hit */}
            <motion.div
              className="absolute top-2 right-2 text-xs font-bold text-yellow-500"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 1],
                y: [0, -10, -15]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                times: [0.18, 0.3, 1],
                delay: 0.2
              }}
            >
              SIX!
            </motion.div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Physical Education
        </motion.div>
      </div>
    )
  },
  {
    id: 'law',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Scale of Justice */}
            <div className="absolute h-20 w-4 bg-gray-700 rounded-b-sm"></div>
            <div className="absolute top-2 h-1 w-28 bg-gray-700"></div>
            <motion.div
              animate={{ rotate: [-5, 5] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-2 w-28 h-8"
            >
              {/* Left Scale */}
              <div className="absolute left-2 top-0 w-1 h-10 bg-gray-700"></div>
              <div className="absolute left-0 top-10 w-6 h-2 bg-gray-700 rounded-full"></div>
              {/* Right Scale */}
              <div className="absolute right-2 top-0 w-1 h-10 bg-gray-700"></div>
              <div className="absolute right-0 top-10 w-6 h-2 bg-gray-700 rounded-full"></div>
            </motion.div>
            {/* Law Book */}
            <div className="absolute bottom-2 left-4 w-24 h-5 bg-indigo-800 rounded-sm"></div>
            <div className="absolute bottom-7 left-8 w-16 h-4 bg-indigo-700 rounded-sm"></div>
            <div className="absolute bottom-11 left-12 w-8 h-3 bg-indigo-600 rounded-sm"></div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Legal Practice
        </motion.div>
      </div>
    )
  },
  {
    id: 'finance',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Money & Finance Illustration */}
            <div className="absolute top-2 w-24 h-16 bg-green-200 rounded-sm border border-green-500 flex items-center justify-center">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">$</div>
            </div>
            {/* Chart Bars */}
            <div className="absolute bottom-2 w-28 h-12 flex items-end justify-between px-1">
              <motion.div
                initial={{ height: '2px' }}
                animate={{ height: '15px' }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="w-4 bg-blue-500 rounded-t-sm"
              ></motion.div>
              <motion.div
                initial={{ height: '5px' }}
                animate={{ height: '30px' }}
                transition={{ duration: 1.3, repeat: Infinity, repeatType: "reverse" }}
                className="w-4 bg-blue-500 rounded-t-sm"
              ></motion.div>
              <motion.div
                initial={{ height: '10px' }}
                animate={{ height: '25px' }}
                transition={{ duration: 1.1, repeat: Infinity, repeatType: "reverse" }}
                className="w-4 bg-blue-500 rounded-t-sm"
              ></motion.div>
              <motion.div
                initial={{ height: '8px' }}
                animate={{ height: '20px' }}
                transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse" }}
                className="w-4 bg-blue-500 rounded-t-sm"
              ></motion.div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Financial Services
        </motion.div>
      </div>
    )
  },
  {
    id: 'arts',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Artist Palette */}
            <div className="absolute w-24 h-18 bg-gray-300 rounded-full transform rotate-12"></div>
            {/* Palette Colors */}
            <div className="absolute top-4 left-7 w-5 h-5 bg-red-500 rounded-full"></div>
            <div className="absolute top-4 right-7 w-5 h-5 bg-blue-500 rounded-full"></div>
            <div className="absolute top-10 left-5 w-5 h-5 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-10 right-5 w-5 h-5 bg-green-500 rounded-full"></div>
            <div className="absolute top-16 left-12 w-5 h-5 bg-purple-500 rounded-full"></div>
            {/* Thumb Hole */}
            <div className="absolute top-18 left-9 w-6 h-3 bg-gray-100 rounded-full"></div>
            {/* Paintbrush */}
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 right-4 w-2 h-24 bg-yellow-800 rounded-b-sm transform rotate-45"
            >
              <div className="absolute -top-1 -left-0.5 w-3 h-6 bg-gray-200 rounded-t-md"></div>
            </motion.div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Creative Arts
        </motion.div>
      </div>
    )
  },
  {
    id: 'engineering',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Engineering elements */}
            <div className="absolute w-28 h-14 bg-gray-200 rounded-sm border border-gray-400"></div>
            {/* Gears */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-3 left-8 w-12 h-12 rounded-full border-4 border-gray-600 flex items-center justify-center"
            >
              <div className="absolute top-0 w-2 h-4 bg-gray-600"></div>
              <div className="absolute right-0 w-4 h-2 bg-gray-600"></div>
              <div className="absolute bottom-0 w-2 h-4 bg-gray-600"></div>
              <div className="absolute left-0 w-4 h-2 bg-gray-600"></div>
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-2 right-3 w-8 h-8 rounded-full border-3 border-gray-600 flex items-center justify-center"
            >
              <div className="absolute top-0 w-1.5 h-3 bg-gray-600"></div>
              <div className="absolute right-0 w-3 h-1.5 bg-gray-600"></div>
              <div className="absolute bottom-0 w-1.5 h-3 bg-gray-600"></div>
              <div className="absolute left-0 w-3 h-1.5 bg-gray-600"></div>
            </motion.div>
            {/* Blueprint */}
            <div className="absolute bottom-2 w-24 h-12 bg-blue-100 rounded-sm border border-blue-400">
              <div className="w-full h-full flex flex-wrap justify-center items-center">
                <div className="w-20 h-px bg-blue-500"></div>
                <div className="w-px h-8 bg-blue-500"></div>
                <div className="w-12 h-px bg-blue-500 transform translate-x-4 translate-y-2"></div>
                <div className="w-12 h-px bg-blue-500 transform translate-x-4 translate-y-4"></div>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Engineering
        </motion.div>
      </div>
    )
  },
  {
    id: 'education',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Education elements */}
            {/* Books */}
            <div className="absolute bottom-0 left-4 w-24 h-16 flex items-end">
              <div className="w-6 h-14 bg-red-400 rounded-t-sm border-t border-l border-r border-red-600"></div>
              <div className="w-6 h-12 bg-blue-400 rounded-t-sm border-t border-l border-r border-blue-600"></div>
              <div className="w-6 h-16 bg-green-400 rounded-t-sm border-t border-l border-r border-green-600"></div>
              <div className="w-6 h-10 bg-yellow-400 rounded-t-sm border-t border-l border-r border-yellow-600"></div>
            </div>
            {/* Graduation cap */}
            <div className="absolute top-0 left-8 w-16 h-10">
              <div className="absolute top-0 w-16 h-3 bg-gray-800 rounded-sm"></div>
              <div className="absolute top-3 left-3 w-10 h-6 bg-gray-800 rounded-b-sm"></div>
              <div className="absolute top-1 left-7 w-2 h-12 bg-gray-800"></div>
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-12 left-5.5 w-5 h-5 bg-gray-800"
              ></motion.div>
            </div>
            {/* Apple */}
            <div className="absolute top-6 right-6 w-6 h-6 bg-red-500 rounded-full">
              <div className="absolute top-0 right-2 w-2 h-3 bg-green-600 rounded-sm transform rotate-45"></div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Education
        </motion.div>
      </div>
    )
  },
  {
    id: 'culinary',
    element: (
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-40 bg-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Chef hat */}
            <div className="absolute top-0 left-8 w-16 h-12 bg-white rounded-t-full border border-gray-200"></div>
            <div className="absolute top-12 left-10 w-12 h-4 bg-white border-l border-r border-gray-200"></div>
            
            {/* Cooking pot */}
            <div className="absolute top-18 left-6 w-20 h-12 bg-gray-400 rounded-b-lg border-b border-l border-r border-gray-600"></div>
            <div className="absolute top-16 left-4 w-24 h-2 bg-gray-600 rounded-full"></div>
            
            {/* Steam animation */}
            <motion.div
              animate={{ y: [-10, -20], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 left-10 w-2 h-4 bg-white rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [-8, -18], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-10 left-14 w-2 h-4 bg-white rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [-12, -22], opacity: [0.8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
              className="absolute top-10 left-18 w-2 h-4 bg-white rounded-full"
            ></motion.div>
            
            {/* Spoon and spatula */}
            <div className="absolute bottom-0 right-4 w-3 h-14 bg-yellow-700 rounded-b-sm transform rotate-12"></div>
            <div className="absolute bottom-0 left-4 w-3 h-14 bg-yellow-700 rounded-b-sm transform -rotate-12">
              <div className="absolute top-0 w-6 h-4 bg-yellow-700 rounded-full transform -translate-x-1.5"></div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-indigo-700 font-medium"
        >
          Culinary Arts
        </motion.div>
      </div>
    )
  }
];

export default function CareerAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === careerIllustrations.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change illustration every 4 seconds to give more time to appreciate the animations

    return () => clearInterval(interval);
  }, []);

  const currentIllustration = careerIllustrations[currentIndex];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIllustration.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {currentIllustration.element}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 