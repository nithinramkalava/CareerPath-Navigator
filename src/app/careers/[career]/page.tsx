'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { careers } from '../../data/careers';
import { motion } from 'framer-motion';

const categoryLabels: Record<string, string> = {
  technology: 'Technology',
  arts: 'Arts',
  law: 'Law',
  finance: 'Banking & Finance',
  medicine: 'Medicine',
  political: 'Political Sciences',
  civil: 'Civil Services',
  transportation: 'Transportation',
  education: 'Education',
  business: 'Business',
  healthcare: 'Healthcare',
  creative: 'Creative',
  science: 'Science',
  hospitality: 'Hospitality',
  engineering: 'Engineering',
  media: 'Media'
};

export default function CareerCategoryPage() {
  const params = useParams();
  const categoryId = params.career as string;
  const categoryName = categoryLabels[categoryId] || categoryId;
  
  const careerList = careers[categoryId] || [];
  const [selectedCareer, setSelectedCareer] = useState(careerList[0]?.id || '');

  const career = careerList.find(c => c.id === selectedCareer);

  if (careerList.length === 0) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Category Not Found
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Sorry, we couldn&apos;t find any careers in this category.
            </p>
            <div className="mt-6">
              <Link href="/careers" className="text-indigo-600 hover:text-indigo-500">
                Back to All Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Careers in {categoryName}
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore various career opportunities in the {categoryName.toLowerCase()} field and understand what it takes to succeed.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Career Selection Sidebar */}
          <motion.div 
            className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Options</h2>
              <div className="space-y-2">
                {careerList.map((c) => (
                  <button
                    key={c.id}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedCareer === c.id
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCareer(c.id)}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Career Details */}
          {career && (
            <motion.div 
              className="w-full lg:w-3/4 bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              key={career.id}
            >
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{career.title}</h2>
                <p className="text-gray-700 mb-6">{career.description}</p>

                <div className="space-y-8">
                  {/* Education Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {career.educationRequirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Skill Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {career.skillRequirements.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Insights */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Insights</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Roles: </span>
                        {career.careerInsights.roles.join(', ')}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Salary Range: </span>
                        {career.careerInsights.salaryRange}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Growth Prospects: </span>
                        {career.careerInsights.growthProspects}
                      </p>
                    </div>
                  </div>

                  {/* Educational Institutions */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Educational Institutions</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {career.institutions.map((institution, index) => (
                        <li key={index}>{institution}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Industry Trends */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Trends</h3>
                    <p className="text-gray-700">{career.industryTrends}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link href="/careers" className="text-indigo-600 hover:text-indigo-500">
            Back to All Categories
          </Link>
        </div>
      </div>
    </div>
  );
} 