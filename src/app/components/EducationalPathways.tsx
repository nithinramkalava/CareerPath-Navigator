'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap,
  FaBook,
  FaSchool,
  FaUniversity,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBriefcase,
  FaLaptopCode,
  FaMicroscope,
  FaFlask,
  FaStethoscope,
  FaBalanceScale,
  FaCalculator,
  FaInfoCircle,
  FaArrowRight
} from 'react-icons/fa';

// Define education stages
type EducationStage = {
  id: string;
  name: string;
  ageRange: string;
  years: string;
  description: string;
  examinations: string[];
  nextStages: string[];
  icon: React.ElementType;
  color: string;
};

// Define education pathways
type EducationPathway = {
  id: string;
  name: string;
  stages: string[];
  description: string;
  careerOutcomes: string[];
  color: string;
};

// Define education stages in India
const educationStages: EducationStage[] = [
  {
    id: 'pre-primary',
    name: 'Pre-Primary Education',
    ageRange: '3-6 years',
    years: '3 years',
    description: 'Foundational stage focusing on basic cognitive and social development',
    examinations: [],
    nextStages: ['primary'],
    icon: FaSchool,
    color: '#48BB78'
  },
  {
    id: 'primary',
    name: 'Primary Education',
    ageRange: '6-11 years',
    years: '5 years (Class 1-5)',
    description: 'Focuses on fundamental literacy, numeracy, and basic knowledge',
    examinations: [],
    nextStages: ['middle'],
    icon: FaBook,
    color: '#4299E1'
  },
  {
    id: 'middle',
    name: 'Middle School',
    ageRange: '11-14 years',
    years: '3 years (Class 6-8)',
    description: 'Introduces more subjects and builds on primary education fundamentals',
    examinations: [],
    nextStages: ['secondary'],
    icon: FaChalkboardTeacher,
    color: '#9F7AEA'
  },
  {
    id: 'secondary',
    name: 'Secondary Education',
    ageRange: '14-16 years',
    years: '2 years (Class 9-10)',
    description: 'Prepares students for higher education with more specialized subjects',
    examinations: ['CBSE 10th', 'ICSE 10th', 'State Board 10th'],
    nextStages: ['higher-secondary'],
    icon: FaGraduationCap,
    color: '#ED8936'
  },
  {
    id: 'higher-secondary',
    name: 'Higher Secondary Education',
    ageRange: '16-18 years',
    years: '2 years (Class 11-12)',
    description: 'Specialization in science, commerce, arts, or vocational streams',
    examinations: ['CBSE 12th', 'ISC 12th', 'State Board 12th'],
    nextStages: ['undergraduate-general', 'undergraduate-engineering', 'undergraduate-medical', 'undergraduate-law', 'vocational-training', 'diploma'],
    icon: FaUniversity,
    color: '#F56565'
  },
  {
    id: 'diploma',
    name: 'Diploma Programs',
    ageRange: '16+ years',
    years: '1-3 years',
    description: 'Technical and vocational education in various fields',
    examinations: ['Polytechnic Diploma Exams'],
    nextStages: ['undergraduate-engineering', 'work'],
    icon: FaLaptopCode,
    color: '#805AD5'
  },
  {
    id: 'undergraduate-general',
    name: 'Undergraduate (General)',
    ageRange: '18+ years',
    years: '3-4 years',
    description: 'Bachelor\'s degrees in arts, science, commerce, and other fields',
    examinations: ['University Exams', 'CUET'],
    nextStages: ['postgraduate-general', 'work'],
    icon: FaUserGraduate,
    color: '#DD6B20'
  },
  {
    id: 'undergraduate-engineering',
    name: 'Undergraduate (Engineering)',
    ageRange: '18+ years',
    years: '4 years',
    description: 'Bachelor\'s in engineering and technology fields',
    examinations: ['JEE Main', 'JEE Advanced', 'BITSAT', 'University Exams'],
    nextStages: ['postgraduate-engineering', 'work'],
    icon: FaCalculator,
    color: '#3182CE'
  },
  {
    id: 'undergraduate-medical',
    name: 'Undergraduate (Medical)',
    ageRange: '18+ years',
    years: '5.5 years (MBBS)',
    description: 'Medicine, dentistry, pharmacy, nursing, and allied health fields',
    examinations: ['NEET UG', 'AIIMS', 'University Exams'],
    nextStages: ['postgraduate-medical', 'work'],
    icon: FaStethoscope,
    color: '#E53E3E'
  },
  {
    id: 'undergraduate-law',
    name: 'Undergraduate (Law)',
    ageRange: '18+ years',
    years: '3-5 years',
    description: 'Legal education leading to LLB or integrated law degrees',
    examinations: ['CLAT', 'AILET', 'University Exams'],
    nextStages: ['postgraduate-law', 'work'],
    icon: FaBalanceScale,
    color: '#718096'
  },
  {
    id: 'vocational-training',
    name: 'Vocational Training',
    ageRange: '16+ years',
    years: '6 months - 2 years',
    description: 'Skill-based training in various trades and crafts',
    examinations: ['ITI Exams', 'NCVT Exams'],
    nextStages: ['work'],
    icon: FaBriefcase,
    color: '#38B2AC'
  },
  {
    id: 'postgraduate-general',
    name: 'Postgraduate (General)',
    ageRange: '21+ years',
    years: '2-3 years',
    description: 'Master\'s degrees in arts, science, commerce, and other fields',
    examinations: ['University Exams', 'NET', 'GATE'],
    nextStages: ['doctoral', 'work'],
    icon: FaUserGraduate,
    color: '#D69E2E'
  },
  {
    id: 'postgraduate-engineering',
    name: 'Postgraduate (Engineering)',
    ageRange: '22+ years',
    years: '2 years',
    description: 'Master\'s in engineering and technology fields',
    examinations: ['GATE', 'University Exams'],
    nextStages: ['doctoral', 'work'],
    icon: FaLaptopCode,
    color: '#2B6CB0'
  },
  {
    id: 'postgraduate-medical',
    name: 'Postgraduate (Medical)',
    ageRange: '23+ years',
    years: '2-3 years',
    description: 'Specialization in medical fields (MD/MS/DNB)',
    examinations: ['NEET PG', 'University Exams'],
    nextStages: ['doctoral-medical', 'work'],
    icon: FaStethoscope,
    color: '#C53030'
  },
  {
    id: 'postgraduate-law',
    name: 'Postgraduate (Law)',
    ageRange: '21+ years',
    years: '1-2 years',
    description: 'Advanced legal studies (LLM)',
    examinations: ['CLAT PG', 'University Exams'],
    nextStages: ['doctoral', 'work'],
    icon: FaBalanceScale,
    color: '#4A5568'
  },
  {
    id: 'doctoral',
    name: 'Doctoral Studies',
    ageRange: '23+ years',
    years: '3-5 years',
    description: 'PhD and research-oriented advanced degrees',
    examinations: ['University Exams', 'Thesis Defense'],
    nextStages: ['work', 'post-doctoral'],
    icon: FaMicroscope,
    color: '#6B46C1'
  },
  {
    id: 'doctoral-medical',
    name: 'Doctoral (Medical)',
    ageRange: '26+ years',
    years: '3 years',
    description: 'Super-specialization in medical fields (DM/MCh)',
    examinations: ['University Exams', 'Super Specialty Entrance'],
    nextStages: ['work'],
    icon: FaFlask,
    color: '#B83280'
  },
  {
    id: 'post-doctoral',
    name: 'Post-Doctoral Research',
    ageRange: '28+ years',
    years: '1-3 years',
    description: 'Advanced research and specialization after PhD',
    examinations: ['Research Presentations'],
    nextStages: ['work'],
    icon: FaMicroscope,
    color: '#553C9A'
  },
  {
    id: 'work',
    name: 'Professional Career',
    ageRange: 'Varies',
    years: 'Lifetime',
    description: 'Professional employment in chosen career field',
    examinations: [],
    nextStages: [],
    icon: FaBriefcase,
    color: '#2D3748'
  }
];

// Define education pathways
const educationPathways: EducationPathway[] = [
  {
    id: 'general-academic',
    name: 'General Academic Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'higher-secondary', 'undergraduate-general', 'postgraduate-general', 'doctoral'],
    description: 'Traditional academic path through general education',
    careerOutcomes: ['Teacher', 'Professor', 'Researcher', 'Civil Servant', 'Management Professional'],
    color: '#ED8936'
  },
  {
    id: 'engineering',
    name: 'Engineering & Technology Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'higher-secondary', 'undergraduate-engineering', 'postgraduate-engineering', 'doctoral'],
    description: 'Technical education focusing on engineering disciplines',
    careerOutcomes: ['Software Engineer', 'Civil Engineer', 'Mechanical Engineer', 'IT Professional', 'Data Scientist'],
    color: '#3182CE'
  },
  {
    id: 'medical',
    name: 'Medical & Healthcare Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'higher-secondary', 'undergraduate-medical', 'postgraduate-medical', 'doctoral-medical'],
    description: 'Path to healthcare and medical professions',
    careerOutcomes: ['Doctor', 'Surgeon', 'Dentist', 'Pharmacist', 'Healthcare Administrator'],
    color: '#E53E3E'
  },
  {
    id: 'legal',
    name: 'Legal Education Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'higher-secondary', 'undergraduate-law', 'postgraduate-law'],
    description: 'Path to legal professions and judiciary',
    careerOutcomes: ['Lawyer', 'Judge', 'Legal Consultant', 'Corporate Legal Advisor'],
    color: '#718096'
  },
  {
    id: 'vocational',
    name: 'Vocational & Technical Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'vocational-training', 'work'],
    description: 'Direct skill-based training for specific trades',
    careerOutcomes: ['Electrician', 'Plumber', 'Mechanic', 'Carpenter', 'Beautician'],
    color: '#38B2AC'
  },
  {
    id: 'diploma',
    name: 'Diploma to Degree Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'diploma', 'undergraduate-engineering', 'work'],
    description: 'Alternative technical path via diploma courses',
    careerOutcomes: ['Technical Supervisor', 'Junior Engineer', 'Technical Specialist'],
    color: '#805AD5'
  }
];

// Main component
export default function EducationalPathways() {
  const [selectedPathway, setSelectedPathway] = useState<string>('general-academic');
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  
  // Get the currently selected pathway
  const currentPathway = educationPathways.find(pathway => pathway.id === selectedPathway);
  
  // Handle pathway selection
  const selectPathway = (pathwayId: string) => {
    setSelectedPathway(pathwayId);
    setSelectedStage(null);
  };
  
  // Handle stage selection
  const selectStage = (stageId: string) => {
    setSelectedStage(stageId === selectedStage ? null : stageId);
  };
  
  // Render pathway selector
  const renderPathwaySelector = () => {
    return (
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Education Pathways in India</h3>
        <select
          value={selectedPathway}
          onChange={(e) => selectPathway(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {educationPathways.map(pathway => (
            <option key={pathway.id} value={pathway.id}>{pathway.name}</option>
          ))}
        </select>
        
        <p className="mt-2 text-sm text-gray-600">
          {currentPathway?.description}
        </p>
      </div>
    );
  };
  
  // Render education stages
  const renderEducationStages = () => {
    if (!currentPathway) return null;
    
    return (
      <div className="space-y-4 w-full">
        {currentPathway.stages.map((stageId, index) => {
          const stage = educationStages.find(s => s.id === stageId);
          if (!stage) return null;
          
          const isSelected = selectedStage === stageId;
          const Icon = stage.icon;
          
          return (
            <React.Fragment key={stage.id}>
              {index > 0 && (
                <div className="flex justify-center py-1">
                  <FaArrowRight className="text-gray-400" />
                </div>
              )}
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`border rounded-lg shadow-sm overflow-hidden cursor-pointer
                              ${isSelected ? 'border-2' : 'border'}`}
                  style={{ borderLeftWidth: '4px', borderLeftColor: stage.color, borderColor: isSelected ? stage.color : '#e2e8f0' }}
                  onClick={() => selectStage(stage.id)}
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4 items-center">
                        <div style={{ color: stage.color }} className="text-xl">
                          <Icon />
                        </div>
                        <div>
                          <h4 className="font-bold">{stage.name}</h4>
                          <div className="flex space-x-2 mt-1">
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-800">
                              {stage.ageRange}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              {stage.years}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <hr className="my-3 border-gray-200" />
                        <div className="space-y-3">
                          <p className="text-sm text-gray-600">{stage.description}</p>
                          
                          {stage.examinations.length > 0 && (
                            <div className="w-full">
                              <p className="font-bold text-sm">Key Examinations:</p>
                              <div className="mt-1 flex flex-wrap gap-2">
                                {stage.examinations.map(exam => (
                                  <span key={exam} className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                                    {exam}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {stage.nextStages.length > 0 && (
                            <div className="w-full">
                              <p className="font-bold text-sm">Next Stages:</p>
                              <div className="mt-1 flex flex-wrap gap-2">
                                {stage.nextStages.map(nextStageId => {
                                  const nextStage = educationStages.find(s => s.id === nextStageId);
                                  if (!nextStage) return null;
                                  const NextIcon = nextStage.icon;
                                  return (
                                    <span key={nextStageId} className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-teal-100 text-teal-800">
                                      <NextIcon className="mr-1" size={12} />
                                      {nextStage.name}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    );
  };
  
  // Render career outcomes
  const renderCareerOutcomes = () => {
    if (!currentPathway) return null;
    
    return (
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-3">Career Outcomes</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <ul className="space-y-2">
            {currentPathway.careerOutcomes.map((career, index) => (
              <li key={index} className="flex items-center">
                <FaBriefcase style={{ color: currentPathway.color }} className="mr-2" />
                <span>{career}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  // Main render
  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">
            Educational Pathways in India
          </h1>
          <p className="text-lg text-gray-600">
            Explore different educational journeys from childhood to career
          </p>
        </div>
        
        {renderPathwaySelector()}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Education Journey</h3>
            {renderEducationStages()}
          </div>
          <div>
            {renderCareerOutcomes()}
            <div className="mt-8 p-4 border border-gray-200 rounded-md bg-white">
              <h3 className="text-md font-bold mb-3 flex items-center">
                <FaInfoCircle className="mr-2" />
                Did You Know?
              </h3>
              <p className="text-sm text-gray-600">
                India has one of the largest education systems in the world with over 1.5 million schools,
                more than 50,000 higher education institutions, and approximately 260 million students enrolled at various levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 