'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CareerAnimation from './CareerAnimation';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block xl:inline">Discover Your Perfect</span>{' '}
                <span className="block text-indigo-600 xl:inline">Career Path</span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Explore various career opportunities and understand the educational requirements needed to pursue your dream career. CareerPath Navigator is your guide to making informed decisions about your future.
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link href="/careers" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-base md:px-7">
                    Explore Careers
                  </Link>
                </motion.div>
                <motion.div 
                  className="mt-3 sm:mt-0 sm:ml-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="/education" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-base md:px-7">
                    Educational Paths
                  </Link>
                </motion.div>
                <motion.div 
                  className="mt-3 sm:mt-0 sm:ml-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link href="/careers/navigator" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-3 md:text-base md:px-7">
                    Career Navigator
                  </Link>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div 
          className="h-56 w-full bg-indigo-50 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CareerAnimation />
        </motion.div>
      </div>
    </div>
  );
} 