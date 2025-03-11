import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type AssessmentStep = 'intro' | 'interests' | 'skills' | 'values' | 'preferences' | 'results';

// Define interest categories
type InterestCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

// Define skill categories
type SkillCategory = {
  id: string;
  name: string;
  skills: {
    id: string;
    name: string;
  }[];
};

// Define value categories
type ValueItem = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

// Define preference options
type PreferenceOption = {
  id: string;
  label: string;
};

// User responses for each step
type AssessmentData = {
  interests: string[];
  skills: string[];
  values: string[];
  preferences: {
    workStyle: string;
    industry: string;
    environment: string;
    salary: string;
  };
};

// Sample career paths for recommendations
type CareerPath = {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  salaryRange: string;
  growthProspect: string;
  educationLevel: string;
  matchPercentage?: number;
};

export default function CareerAssessment({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState<AssessmentStep>('intro');
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    interests: [],
    skills: [],
    values: [],
    preferences: {
      workStyle: '',
      industry: '',
      environment: '',
      salary: '',
    },
  });
  const [recommendedCareers, setRecommendedCareers] = useState<CareerPath[]>([]);
  const [isGeneratingResults, setIsGeneratingResults] = useState(false);
  
  // Interest categories
  const interestCategories: InterestCategory[] = [
    {
      id: 'technology',
      name: 'Technology',
      description: 'Computers, software, electronics, and digital innovation',
      icon: '💻',
    },
    {
      id: 'arts',
      name: 'Arts & Design',
      description: 'Creative expression, visual design, and aesthetics',
      icon: '🎨',
    },
    {
      id: 'science',
      name: 'Science & Research',
      description: 'Exploration, discovery, and understanding natural phenomena',
      icon: '🔬',
    },
    {
      id: 'business',
      name: 'Business & Management',
      description: 'Entrepreneurship, leadership, and organizational systems',
      icon: '📊',
    },
    {
      id: 'education',
      name: 'Education & Training',
      description: 'Teaching, learning, and knowledge transfer',
      icon: '📚',
    },
    {
      id: 'health',
      name: 'Healthcare & Medicine',
      description: 'Health, wellness, and medical services',
      icon: '🩺',
    },
    {
      id: 'environment',
      name: 'Environment & Nature',
      description: 'Sustainability, conservation, and the natural world',
      icon: '🌱',
    },
    {
      id: 'social',
      name: 'Social Impact',
      description: 'Community service, social change, and helping others',
      icon: '🤝',
    },
    {
      id: 'media',
      name: 'Media & Communication',
      description: 'Information sharing, storytelling, and public messaging',
      icon: '📱',
    },
  ];

  // Skill categories
  const skillCategories: SkillCategory[] = [
    {
      id: 'technical',
      name: 'Technical Skills',
      skills: [
        { id: 'programming', name: 'Programming & Coding' },
        { id: 'data-analysis', name: 'Data Analysis' },
        { id: 'design', name: 'Design & Visual Creation' },
        { id: 'research', name: 'Research & Analysis' },
        { id: 'math', name: 'Mathematical Reasoning' },
        { id: 'writing', name: 'Writing & Content Creation' },
        { id: 'languages', name: 'Foreign Languages' },
        { id: 'technical-troubleshooting', name: 'Technical Troubleshooting' },
        { id: 'project-management', name: 'Project Management' },
        { id: 'financial-analysis', name: 'Financial Analysis' },
        { id: 'teaching', name: 'Teaching & Training' },
        { id: 'digital-marketing', name: 'Digital Marketing' },
      ]
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      skills: [
        { id: 'communication', name: 'Communication' },
        { id: 'teamwork', name: 'Teamwork & Collaboration' },
        { id: 'leadership', name: 'Leadership' },
        { id: 'problem-solving', name: 'Problem Solving' },
        { id: 'critical-thinking', name: 'Critical Thinking' },
        { id: 'creativity', name: 'Creativity & Innovation' },
        { id: 'adaptability', name: 'Adaptability' },
        { id: 'time-management', name: 'Time Management' },
        { id: 'emotional-intelligence', name: 'Emotional Intelligence' },
        { id: 'conflict-resolution', name: 'Conflict Resolution' },
        { id: 'negotiation', name: 'Negotiation' },
        { id: 'networking', name: 'Networking' },
      ]
    }
  ];

  // Values
  const valueItems: ValueItem[] = [
    {
      id: 'creativity',
      name: 'Creativity & Innovation',
      description: 'The ability to express yourself and create new ideas or solutions',
      icon: '✨',
    },
    {
      id: 'stability',
      name: 'Stability & Security',
      description: 'A predictable, secure environment with reliable income and benefits',
      icon: '🛡️',
    },
    {
      id: 'independence',
      name: 'Independence & Autonomy',
      description: 'Freedom to work on your own terms and make your own decisions',
      icon: '🦅',
    },
    {
      id: 'helping-others',
      name: 'Helping Others',
      description: "Making a positive difference in people's lives or society",
      icon: '🤲',
    },
    {
      id: 'achievement',
      name: 'Achievement & Success',
      description: 'Accomplishing challenging goals and gaining recognition',
      icon: '🏆',
    },
    {
      id: 'work-life-balance',
      name: 'Work-Life Balance',
      description: 'Having time for personal life, family, and outside interests',
      icon: '⚖️',
    },
    {
      id: 'challenge',
      name: 'Intellectual Challenge',
      description: 'Solving complex problems and continuous learning',
      icon: '🧠',
    },
    {
      id: 'leadership',
      name: 'Leadership & Influence',
      description: 'Guiding and inspiring others, having decision-making power',
      icon: '👑',
    },
    {
      id: 'financial-rewards',
      name: 'Financial Rewards',
      description: 'High income potential and monetary compensation',
      icon: '💰',
    },
    {
      id: 'environment',
      name: 'Environmental Stewardship',
      description: 'Protecting natural resources and promoting sustainability',
      icon: '🌍',
    },
    {
      id: 'social-impact',
      name: 'Social Impact',
      description: 'Creating meaningful change in communities and society',
      icon: '🌟',
    },
    {
      id: 'teamwork',
      name: 'Teamwork & Collaboration',
      description: 'Working closely with others toward shared goals',
      icon: '👥',
    },
  ];
  
  // Preference options
  const preferenceOptions = {
    workStyle: [
      { id: 'remote', label: 'Remote Work' },
      { id: 'office', label: 'Office-based' },
      { id: 'hybrid', label: 'Hybrid' },
      { id: 'flexible', label: 'Flexible Hours' },
      { id: 'structured', label: 'Structured Hours' },
      { id: 'fulltime', label: 'Full-time' },
      { id: 'parttime', label: 'Part-time' },
      { id: 'freelance', label: 'Freelance/Contract' },
    ],
    industry: [
      { id: 'tech', label: 'Technology & IT' },
      { id: 'healthcare', label: 'Healthcare & Medicine' },
      { id: 'education', label: 'Education & Training' },
      { id: 'finance', label: 'Finance & Banking' },
      { id: 'creative', label: 'Creative & Design' },
      { id: 'manufacturing', label: 'Manufacturing & Engineering' },
      { id: 'retail', label: 'Retail & E-commerce' },
      { id: 'nonprofit', label: 'Nonprofit & Social Services' },
    ],
    environment: [
      { id: 'startup', label: 'Startup/Small Company' },
      { id: 'corporate', label: 'Corporate/Large Enterprise' },
      { id: 'nonprofit', label: 'Nonprofit Organization' },
      { id: 'academic', label: 'Academic/Research' },
      { id: 'government', label: 'Government/Public Sector' },
      { id: 'creative', label: 'Creative/Design Studio' },
    ],
    salary: [
      { id: 'entry', label: 'Entry Level (₹3L-₹6L)' },
      { id: 'mid', label: 'Mid Level (₹6L-₹15L)' },
      { id: 'senior', label: 'Senior Level (₹15L-₹30L)' },
      { id: 'executive', label: 'Executive Level (₹30L+)' },
    ],
  };
  
  // Sample career paths database - in a real app this would come from an API or backend
  const careerPaths: CareerPath[] = [
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Analyze and interpret complex data to help organizations make better decisions',
      requiredSkills: ['data-analysis', 'programming', 'math', 'critical-thinking', 'problem-solving'],
      salaryRange: '₹8L - ₹30L',
      growthProspect: 'High',
      educationLevel: 'graduate'
    },
    {
      id: 'software-developer',
      title: 'Software Developer',
      description: 'Design and build applications and systems',
      requiredSkills: ['programming', 'problem-solving', 'teamwork', 'creativity'],
      salaryRange: '₹5L - ₹35L',
      growthProspect: 'Very High',
      educationLevel: 'undergraduate'
    },
    {
      id: 'ux-designer',
      title: 'UX Designer',
      description: 'Create meaningful and relevant experiences for users',
      requiredSkills: ['design', 'creativity', 'communication', 'empathy', 'research'],
      salaryRange: '₹6L - ₹25L',
      growthProspect: 'High',
      educationLevel: 'undergraduate'
    },
    {
      id: 'digital-marketing-specialist',
      title: 'Digital Marketing Specialist',
      description: 'Plan and execute digital marketing campaigns',
      requiredSkills: ['digital-marketing', 'communication', 'creativity', 'data-analysis'],
      salaryRange: '₹4L - ₹20L',
      growthProspect: 'High',
      educationLevel: 'undergraduate'
    },
    {
      id: 'cybersecurity-analyst',
      title: 'Cybersecurity Analyst',
      description: 'Protect systems and networks from digital attacks',
      requiredSkills: ['programming', 'critical-thinking', 'technical-troubleshooting'],
      salaryRange: '₹7L - ₹25L',
      growthProspect: 'Very High',
      educationLevel: 'undergraduate'
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      description: 'Guide the development of a product from conception to launch',
      requiredSkills: ['leadership', 'communication', 'problem-solving', 'project-management'],
      salaryRange: '₹10L - ₹40L',
      growthProspect: 'High',
      educationLevel: 'undergraduate'
    },
    {
      id: 'ai-researcher',
      title: 'AI Researcher',
      description: 'Develop and improve artificial intelligence algorithms and systems',
      requiredSkills: ['programming', 'math', 'research', 'critical-thinking'],
      salaryRange: '₹10L - ₹40L',
      growthProspect: 'Very High',
      educationLevel: 'graduate'
    },
    {
      id: 'data-visualization-specialist',
      title: 'Data Visualization Specialist',
      description: 'Create visual representations of data for easy understanding',
      requiredSkills: ['data-visualization', 'design', 'data-analysis', 'communication', 'creativity'],
      salaryRange: '₹6L - ₹25L',
      growthProspect: 'High',
      educationLevel: 'undergraduate'
    },
  ];
  
  const startAssessment = () => {
    setCurrentStep('interests');
  };
  
  // Progress bar calculation
  const getProgress = () => {
    const steps: AssessmentStep[] = ['intro', 'interests', 'skills', 'values', 'preferences', 'results'];
    const currentIndex = steps.indexOf(currentStep);
    return currentIndex === 0 ? 0 : (currentIndex / (steps.length - 1)) * 100;
  };

  // Go to next step
  const goToNextStep = () => {
    const steps: AssessmentStep[] = ['intro', 'interests', 'skills', 'values', 'preferences', 'results'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  // Go to previous step
  const goToPreviousStep = () => {
    const steps: AssessmentStep[] = ['intro', 'interests', 'skills', 'values', 'preferences', 'results'];
    const currentIndex = steps.indexOf(currentStep);
    
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };
  
  // Toggle interest selection
  const toggleInterest = (interestId: string) => {
    setAssessmentData(prev => {
      if (prev.interests.includes(interestId)) {
        return {
          ...prev,
          interests: prev.interests.filter(id => id !== interestId)
        };
      } else {
        return {
          ...prev,
          interests: [...prev.interests, interestId]
        };
      }
    });
  };

  // Toggle skill selection
  const toggleSkill = (skillId: string) => {
    setAssessmentData(prev => {
      if (prev.skills.includes(skillId)) {
        return {
          ...prev,
          skills: prev.skills.filter(id => id !== skillId)
        };
      } else {
        return {
          ...prev,
          skills: [...prev.skills, skillId]
        };
      }
    });
  };

  // Toggle value selection
  const toggleValue = (valueId: string) => {
    setAssessmentData(prev => {
      if (prev.values.includes(valueId)) {
        return {
          ...prev,
          values: prev.values.filter(id => id !== valueId)
        };
      } else {
        // Limit to 5 values max
        if (prev.values.length >= 5) {
          return {
            ...prev,
            values: [...prev.values.filter((_, i) => i !== 0), valueId]
          };
        } else {
          return {
            ...prev,
            values: [...prev.values, valueId]
          };
        }
      }
    });
  };

  // Set preference
  const setPreference = (category: keyof AssessmentData['preferences'], value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [category]: value === prev.preferences[category] ? '' : value
      }
    }));
  };

  // Check if all preference categories have a selection
  const hasAllPreferences = () => {
    const { workStyle, industry, environment, salary } = assessmentData.preferences;
    return workStyle && industry && environment && salary;
  };

  // Sample career data for recommendations
  const sampleCareers: CareerPath[] = [
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Analyze and interpret complex data to help organizations make better decisions',
      requiredSkills: ['data-analysis', 'programming', 'math', 'critical-thinking', 'problem-solving'],
      salaryRange: '₹8L - ₹30L',
      growthProspect: 'High',
      educationLevel: 'graduate',
      matchPercentage: 94,
    },
    {
      id: 'machine-learning-engineer',
      title: 'Machine Learning Engineer',
      description: 'Design and implement machine learning models and systems',
      requiredSkills: ['programming', 'math', 'critical-thinking', 'problem-solving'],
      salaryRange: '₹10L - ₹35L',
      growthProspect: 'Very High',
      educationLevel: 'graduate',
      matchPercentage: 87,
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      description: 'Collect, analyze and interpret data to inform business decisions',
      requiredSkills: ['data-analysis', 'critical-thinking', 'communication'],
      salaryRange: '₹5L - ₹20L',
      growthProspect: 'High',
      educationLevel: 'undergraduate',
      matchPercentage: 82,
    },
    {
      id: 'business-intelligence-analyst',
      title: 'Business Intelligence Analyst',
      description: 'Transform data into insights that drive business value',
      requiredSkills: ['data-analysis', 'communication', 'critical-thinking'],
      salaryRange: '₹6L - ₹25L',
      growthProspect: 'Moderate',
      educationLevel: 'undergraduate',
      matchPercentage: 78,
    },
  ];

  // Generate career results when reaching the results step
  useEffect(() => {
    if (currentStep === 'results') {
      setIsGeneratingResults(true);
      // Simulate API call or processing time
      setTimeout(() => {
        setRecommendedCareers(sampleCareers);
        setIsGeneratingResults(false);
      }, 1500);
    }
  }, [currentStep]);

  // Results step
  const renderResults = () => {
    if (isGeneratingResults) {
      return (
        <div className="bg-indigo-50 rounded-xl p-8 text-center">
          <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
            <motion.div 
              className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <h4 className="text-xl font-semibold text-gray-800">Analyzing your profile...</h4>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            We're matching your interests, skills, values, and preferences with potential career paths.
          </p>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        {recommendedCareers.length > 0 ? (
          <>
            {recommendedCareers.map((career) => (
              <motion.div 
                key={career.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: recommendedCareers.indexOf(career) * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{career.title}</h4>
                      <p className="text-gray-600 mt-1">{career.description}</p>
                    </div>
                    <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-14 w-14 flex items-center justify-center text-lg">
                      {career.matchPercentage}%
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {career.requiredSkills.map((skill) => (
                      <span 
                        key={skill} 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          assessmentData.skills.includes(skill)
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {skill.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {career.salaryRange}
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {career.growthProspect} Growth
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      {career.educationLevel.charAt(0).toUpperCase() + career.educationLevel.slice(1)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center">
              <p className="text-gray-700 text-sm">
                These recommendations are based on your assessment responses. Consider exploring these career paths further by researching job requirements, speaking with professionals in the field, and gaining relevant experience.
              </p>
            </div>
          </>
        ) : (
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <p className="text-gray-700">No career matches found. Try adjusting your skills and interests.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Personalized Career Assessment</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-indigo-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress bar - only show after intro */}
          {currentStep !== 'intro' && (
            <div className="mt-4">
              <div className="w-full bg-white bg-opacity-20 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-white h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1 text-indigo-100">
                <span>Getting Started</span>
                <span>Career Match</span>
              </div>
            </div>
          )}
        </div>

        {/* Content area with proper scrolling */}
        <div className="flex-1 overflow-y-auto">
          {/* Introduction Step */}
          {currentStep === 'intro' && (
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Discover Your Ideal Career Path</h3>
                  <p className="text-gray-600 mb-4">
                    This interactive assessment will help you identify career paths that align with your:
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      { icon: "🔍", title: "Personal Interests", desc: "What subjects and activities naturally engage you" },
                      { icon: "💡", title: "Skill Preferences", desc: "What you're good at and want to develop further" },
                      { icon: "⭐", title: "Core Values", desc: "What matters most to you in your work life" },
                      { icon: "🌟", title: "Work Style", desc: "Your ideal work environment and conditions" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start p-3 bg-indigo-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                          <h4 className="font-medium text-indigo-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">5-Minute Assessment</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Answer a few questions to get personalized career recommendations that match your profile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interests Step */}
          {currentStep === 'interests' && (
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What are your interests?</h3>
                <p className="text-gray-600">
                  Select the areas that naturally engage your curiosity and attention. Choose as many as you like.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {interestCategories.map((interest) => (
                  <motion.div
                    key={interest.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      assessmentData.interests.includes(interest.id)
                        ? 'bg-indigo-50 border-indigo-400 shadow-md'
                        : 'bg-white border-gray-200 hover:border-indigo-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleInterest(interest.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: interestCategories.indexOf(interest) * 0.05 }}
                  >
                    <div className="flex items-start">
                      <span className="text-3xl mr-3">{interest.icon}</span>
                      <div>
                        <h4 className="font-medium text-gray-900">{interest.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{interest.description}</p>
                      </div>
                    </div>
                    
                    {/* Selection indicator */}
                    {assessmentData.interests.includes(interest.id) && (
                      <div className="mt-2 bg-indigo-500 text-white text-xs font-medium py-1 px-2 rounded-full inline-block">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Selected
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Step */}
          {currentStep === 'skills' && (
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What skills do you excel at or enjoy using?</h3>
                <p className="text-gray-600">
                  Choose skills that you're either proficient in or would like to develop further in your career.
                </p>
              </div>
              
              <div className="space-y-8">
                {skillCategories.map((category) => (
                  <div key={category.id} className="bg-gray-50 rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">{category.name}</h4>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.id}
                          className={`px-4 py-3 rounded-lg cursor-pointer transition-all ${
                            assessmentData.skills.includes(skill.id)
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                              : 'bg-white border border-gray-200 hover:border-indigo-300 text-gray-800'
                          }`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleSkill(skill.id)}
                        >
                          <div className="flex items-center space-x-2">
                            {assessmentData.skills.includes(skill.id) ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            )}
                            <span className="text-sm">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Step */}
          {currentStep === 'values' && (
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What values are most important to you?</h3>
                <p className="text-gray-600">
                  Select up to 5 values that matter most to you in your career. These influence your job satisfaction and work-life alignment.
                </p>
                {assessmentData.values.length > 0 && (
                  <div className="mt-2 text-sm text-indigo-600 font-medium">
                    {assessmentData.values.length}/5 values selected
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {valueItems.map((value) => (
                  <motion.div
                    key={value.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      assessmentData.values.includes(value.id)
                        ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-400 shadow-md'
                        : 'bg-white border-gray-200 hover:border-purple-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleValue(value.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: valueItems.indexOf(value) * 0.05 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-4xl mb-3">{value.icon}</span>
                      <h4 className="font-medium text-gray-900">{value.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                      
                      {/* Ring indicator for selected values */}
                      {assessmentData.values.includes(value.id) && (
                        <div className="w-full mt-3 bg-purple-600 h-1 rounded-full"></div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences Step */}
          {currentStep === 'preferences' && (
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What are your work preferences?</h3>
                <p className="text-gray-600">
                  Select your preferences for each category to help us find the best career matches for you.
                </p>
              </div>

              <div className="space-y-8">
                {/* Work Style Preferences */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Preferred Work Style</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {preferenceOptions.workStyle.map((option) => (
                      <motion.div
                        key={option.id}
                        className={`px-4 py-3 rounded-lg cursor-pointer transition-all ${
                          assessmentData.preferences.workStyle === option.id
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                            : 'bg-white border border-gray-200 hover:border-indigo-300 text-gray-800'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPreference('workStyle', option.id)}
                      >
                        <div className="text-center text-sm">{option.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Industry Preferences */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Preferred Industry</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {preferenceOptions.industry.map((option) => (
                      <motion.div
                        key={option.id}
                        className={`px-4 py-3 rounded-lg cursor-pointer transition-all ${
                          assessmentData.preferences.industry === option.id
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                            : 'bg-white border border-gray-200 hover:border-indigo-300 text-gray-800'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPreference('industry', option.id)}
                      >
                        <div className="text-center text-sm">{option.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Work Environment Preferences */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Preferred Work Environment</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {preferenceOptions.environment.map((option) => (
                      <motion.div
                        key={option.id}
                        className={`px-4 py-3 rounded-lg cursor-pointer transition-all ${
                          assessmentData.preferences.environment === option.id
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                            : 'bg-white border border-gray-200 hover:border-indigo-300 text-gray-800'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPreference('environment', option.id)}
                      >
                        <div className="text-center text-sm">{option.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Salary Range Preferences */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Expected Salary Range</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {preferenceOptions.salary.map((option) => (
                      <motion.div
                        key={option.id}
                        className={`px-4 py-3 rounded-lg cursor-pointer transition-all ${
                          assessmentData.preferences.salary === option.id
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                            : 'bg-white border border-gray-200 hover:border-indigo-300 text-gray-800'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPreference('salary', option.id)}
                      >
                        <div className="text-center text-sm">{option.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Step */}
          {currentStep === 'results' && (
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Your Career Recommendations</h3>
                <p className="text-gray-600 mt-2">
                  Based on your interests, skills, values, and preferences, we've identified these career paths for you.
                </p>
              </div>
              {renderResults()}
            </div>
          )}
        </div>

        {/* Fixed navigation footer */}
        <div className="p-6 border-t border-gray-200 bg-white flex justify-between items-center flex-shrink-0">
          {currentStep === 'intro' ? (
            <>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Maybe Later
              </button>
              <button
                onClick={startAssessment}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md font-medium"
              >
                Start Assessment
              </button>
            </>
          ) : currentStep === 'results' ? (
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md font-medium ml-auto"
            >
              Done
            </button>
          ) : (
            <>
              <button
                onClick={goToPreviousStep}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Back
              </button>
              <button
                onClick={goToNextStep}
                className={`px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md font-medium ${
                  (currentStep === 'skills' && assessmentData.skills.length === 0) ||
                  (currentStep === 'interests' && assessmentData.interests.length === 0) ||
                  (currentStep === 'values' && assessmentData.values.length === 0)
                    ? 'opacity-50 cursor-not-allowed' 
                    : ''
                }`}
                disabled={
                  (currentStep === 'skills' && assessmentData.skills.length === 0) ||
                  (currentStep === 'interests' && assessmentData.interests.length === 0) ||
                  (currentStep === 'values' && assessmentData.values.length === 0)
                }
              >
                Continue
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
} 