'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    id: 'career-path-navigator',
    title: 'Career Path Navigator',
    description: 'Discover career paths that match your skills and interests. Get personalized recommendations based on your skillset.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
    color: 'from-purple-600 to-indigo-600',
    lightColor: 'from-purple-200 to-indigo-200',
    darkColor: 'from-purple-800 to-indigo-900',
    textColor: 'text-white',
    href: '/career-path-navigator',
    tagline: 'Find Your Path'
  },
  {
    id: 'educational-pathways',
    title: 'Educational Pathways',
    description: 'Explore different educational journeys from childhood to career. Understand the educational requirements for various career paths.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    color: 'from-emerald-600 to-teal-600',
    lightColor: 'from-emerald-200 to-teal-200',
    darkColor: 'from-emerald-800 to-teal-900',
    textColor: 'text-white',
    href: '/educational-pathways',
    tagline: 'Learn Your Way'
  },
  {
    id: 'career-assessment',
    title: 'Career Assessment',
    description: 'Take a personalized assessment to evaluate your skills and interests. Get insights on which careers might be the best fit for you.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
    color: 'from-rose-600 to-pink-600',
    lightColor: 'from-rose-200 to-pink-200',
    darkColor: 'from-rose-800 to-pink-900',
    textColor: 'text-white',
    href: '/career-assessment',
    tagline: 'Discover Yourself'
  },
  {
    id: 'career-categories',
    title: 'Career Categories',
    description: 'Explore various career fields and understand what it takes to succeed in each one. Discover careers in different industries.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    color: 'from-blue-600 to-cyan-500',
    lightColor: 'from-blue-200 to-cyan-200',
    darkColor: 'from-blue-800 to-cyan-900',
    textColor: 'text-white',
    href: '/career-categories',
    tagline: 'Explore Possibilities'
  }
];

export default function FeaturedTools() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  const backgroundPatternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };

  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={backgroundPatternStyle}
    >
      {/* Decorative Shapes */}
      <div className="hidden lg:block absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 opacity-20 blur-3xl transform -translate-y-1/2 translate-x-1/3"></div>
      <div className="hidden lg:block absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-teal-300 to-emerald-300 opacity-20 blur-3xl transform translate-y-1/2 -translate-x-1/3"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-600 rounded-full mb-4">
            Plan Your Career Journey
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Powerful Career Planning Tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our specialized tools designed to help you navigate your career journey with confidence
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
              className="relative group"
            >
              <Link href={feature.href} className="block">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.darkColor} transform transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1 -z-10`}></div>
                
                <div className={`h-full relative rounded-2xl overflow-hidden bg-gradient-to-br ${feature.color} shadow-lg transition-all duration-300 group-hover:shadow-xl z-10`}>
                  <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>
                  
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10 z-0">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`pattern-${feature.id}`} patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                          <rect width="2" height="2" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${feature.id})`} />
                    </svg>
                  </div>
                  
                  <div className="p-8 relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start">
                      <motion.div 
                        className={`rounded-full p-3 w-fit ${feature.textColor} bg-white/20 shadow-inner`}
                        animate={activeFeature === feature.id ? pulseAnimation : {}}
                      >
                        {feature.icon}
                      </motion.div>
                      
                      <motion.span 
                        className="px-3 py-1 text-sm font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white"
                        animate={activeFeature === feature.id ? floatingAnimation : {}}
                      >
                        {feature.tagline}
                      </motion.span>
                    </div>
                    
                    <h3 className={`mt-6 text-2xl font-bold ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`mt-4 ${feature.textColor} opacity-90 flex-grow leading-relaxed`}>
                      {feature.description}
                    </p>
                    
                    <div className="mt-8 pt-4 border-t border-white/20">
                      <div className={`inline-flex items-center ${feature.textColor} font-semibold group-hover:translate-x-1 transition-transform duration-300`}>
                        Explore now
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-xl shadow-md hover:shadow-lg border border-indigo-100 transition-all duration-300 inline-flex items-center"
            >
              Learn more about our mission
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 