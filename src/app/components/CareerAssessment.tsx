'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define interfaces for our data types
interface Skill {
  id: string;
  name: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

interface Interest {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface Value {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface WorkEnvironment {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface SalaryRange {
  id: string;
  label: string;
}

interface Industry {
  id: string;
  name: string;
}

interface CareerPath {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  education: string;
  growth: string;
  salary: string;
  skills: string[];
  interests: string[];
  values: string[];
  environment: string;
  workStyle: string;
  industry: string;
  salaryRange: string;
  tags: string[];
  category?: CareerCategory;
  matchPercentage?: number;
}

type AssessmentStep = 'intro' | 'interests' | 'skills' | 'values' | 'preferences' | 'results';

// Career categories
type CareerCategory = 'Technology & IT' | 'Business & Management' | 'Healthcare & Medicine' | 'Education & Research' | 'Creative & Design';

export default function CareerAssessment() {
  // State for assessment data, steps, and calculated results
  const [currentStep, setCurrentStep] = useState<AssessmentStep>('intro');
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory | 'All'>('All');
  const [_selectedCareer, setSelectedCareer] = useState<string | null>(null);

  // User assessment selections state
  const [assessmentData, setAssessmentData] = useState<{
    interests: string[];
    skills: string[];
    values: string[];
    preferences: {
      environment: string;
      workStyle: string;
      industry: string;
      salary: string;
    }
  }>({
    interests: [],
    skills: [],
    values: [],
    preferences: {
      environment: '',
      workStyle: '',
      industry: '',
      salary: ''
    }
  });

  // Interest categories
  const interestCategories: Interest[] = [
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
        { id: 'web-development', name: 'Web Development' },
        { id: 'database-management', name: 'Database Management' },
        { id: 'mobile-development', name: 'Mobile App Development' },
        { id: 'data-science', name: 'Data Science & Machine Learning' },
        { id: 'cybersecurity', name: 'Cybersecurity' },
        { id: 'seo', name: 'SEO & Content Strategy' }
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
        { id: 'presentation', name: 'Presentation & Public Speaking' },
        { id: 'sales', name: 'Sales & Persuasion' },
        { id: 'customer-service', name: 'Customer Service' },
        { id: 'decision-making', name: 'Decision Making' },
        { id: 'mentoring', name: 'Mentoring & Coaching' }
      ]
    },
    {
      id: 'industry',
      name: 'Industry-Specific Skills',
      skills: [
        { id: 'healthcare', name: 'Healthcare & Patient Care' },
        { id: 'legal', name: 'Legal Knowledge' },
        { id: 'marketing', name: 'Marketing Strategy' },
        { id: 'finance', name: 'Financial Planning' },
        { id: 'hr', name: 'Human Resources' },
        { id: 'education', name: 'Educational Planning' },
        { id: 'journalism', name: 'Reporting & Journalism' },
        { id: 'counseling', name: 'Counseling & Mental Health' },
        { id: 'hospitality', name: 'Hospitality & Customer Experience' },
        { id: 'retail', name: 'Retail & Sales Management' },
        { id: 'manufacturing', name: 'Manufacturing & Production' },
        { id: 'engineering', name: 'Engineering & Product Design' },
        { id: 'agriculture', name: 'Agriculture & Sustainability' },
        { id: 'science', name: 'Scientific Research' }
      ]
    },
    {
      id: 'creative',
      name: 'Creative Skills',
      skills: [
        { id: 'graphic-design', name: 'Graphic Design' },
        { id: 'content-creation', name: 'Content Creation' },
        { id: 'photography', name: 'Photography & Videography' },
        { id: 'music', name: 'Music & Audio Production' },
        { id: 'writing-creative', name: 'Creative Writing' },
        { id: 'art', name: 'Visual Arts' },
        { id: 'ux-design', name: 'UX/UI Design' },
        { id: 'animation', name: '3D & Animation' },
        { id: 'fashion', name: 'Fashion Design' },
        { id: 'culinary', name: 'Culinary Arts' },
        { id: 'product-design', name: 'Product Design' },
        { id: 'interior-design', name: 'Interior Design' }
      ]
    }
  ];

  // Values
  const valueItems: Value[] = [
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
  
  // Available career categories
  const careerCategories: CareerCategory[] = [
    'Technology & IT',
    'Business & Management',
    'Healthcare & Medicine',
    'Education & Research',
    'Creative & Design'
  ];

  // Environment options
  const workEnvironmentOptions: WorkEnvironment[] = [
    { 
      id: 'remote', 
      name: 'Remote Work', 
      icon: '🏠', 
      description: 'Work from anywhere with flexibility' 
    },
    { 
      id: 'office', 
      name: 'Office Based', 
      icon: '🏢', 
      description: 'Traditional workplace with structure' 
    },
    { 
      id: 'hybrid', 
      name: 'Hybrid', 
      icon: '🔄', 
      description: 'Mix of remote and in-office work' 
    },
    { 
      id: 'field', 
      name: 'Field Work', 
      icon: '🌍', 
      description: 'Work outside in various locations' 
    }
  ];

  // Salary range options 
  const salaryRangeOptions: SalaryRange[] = [
    { id: 'entry', label: 'Entry Level (₹3L-₹6L)' },
    { id: 'mid', label: 'Mid Level (₹6L-₹15L)' },
    { id: 'senior', label: 'Senior Level (₹15L-₹30L)' },
    { id: 'executive', label: 'Executive Level (₹30L+)' }
  ];

  // Industry options
  const industryOptions: Industry[] = [
    { id: 'tech', name: 'Technology' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'education', name: 'Education' },
    { id: 'retail', name: 'Retail' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'creative', name: 'Creative' },
    { id: 'nonprofit', name: 'Non-profit' }
  ];

  // Sample career paths data
  const careerPaths: CareerPath[] = [
    // Technology careers
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      icon: '📊',
      shortDescription: 'Analyze data to help organizations make better decisions',
      description: 'Data Scientists analyze complex data to help organizations make better decisions. They use statistical analysis, machine learning, and programming to extract insights.',
      responsibilities: [
        'Develop machine learning models',
        'Clean and prepare data for analysis',
        'Communicate insights to stakeholders',
        'Identify patterns and trends in data'
      ],
      education: 'Usually requires a Master\'s degree in a related field',
      growth: 'High',
      salary: '₹8L - ₹30L per year',
      skills: ['programming', 'data-analysis', 'math', 'critical-thinking', 'data-science'],
      interests: ['technology', 'science'],
      values: ['challenge', 'achievement'],
      environment: 'hybrid',
      workStyle: 'analytical',
      industry: 'tech',
      salaryRange: 'senior',
      tags: ['Analytics', 'Machine Learning', 'AI'],
      category: 'Technology & IT'
    },
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      icon: '💻',
      shortDescription: 'Design and develop software applications',
      description: 'Software Engineers design, develop, and maintain software systems. They write code, test software, and solve technical problems.',
      responsibilities: [
        'Write and test code',
        'Debug software issues',
        'Design software architecture',
        'Collaborate with cross-functional teams'
      ],
      education: 'Bachelor\'s degree in Computer Science or related field',
      growth: 'Very High',
      salary: '₹6L - ₹25L per year',
      skills: ['programming', 'problem-solving', 'teamwork', 'web-development', 'mobile-development'],
      interests: ['technology'],
      values: ['creativity', 'challenge'],
      environment: 'hybrid',
      workStyle: 'collaborative',
      industry: 'tech',
      salaryRange: 'mid',
      tags: ['Development', 'Coding', 'Engineering'],
      category: 'Technology & IT'
    },
    {
      id: 'cybersecurity-analyst',
      title: 'Cybersecurity Analyst',
      icon: '🔒',
      shortDescription: 'Protect systems and data from cyber threats',
      description: 'Cybersecurity Analysts protect computer systems and networks from cyber threats and attacks. They monitor for breaches, implement security measures, and respond to incidents.',
      responsibilities: [
        'Monitor networks for security breaches',
        'Implement security measures and controls',
        'Respond to security incidents',
        'Conduct security assessments'
      ],
      education: 'Bachelor\'s degree in Cybersecurity or related field',
      growth: 'Very High',
      salary: '₹7L - ₹25L per year',
      skills: ['cybersecurity', 'technical-troubleshooting', 'critical-thinking', 'problem-solving'],
      interests: ['technology', 'science'],
      values: ['challenge', 'stability'],
      environment: 'hybrid',
      workStyle: 'analytical',
      industry: 'tech',
      salaryRange: 'mid',
      tags: ['Security', 'Risk Management', 'Tech'],
      category: 'Technology & IT'
    },
    
    // Design careers
    {
      id: 'ux-designer',
      title: 'UX Designer',
      icon: '🎨',
      shortDescription: 'Create user-friendly digital experiences',
      description: 'UX Designers create intuitive, accessible, and engaging user experiences for digital products. They conduct research and create wireframes and prototypes.',
      responsibilities: [
        'Conduct user research',
        'Create wireframes and prototypes',
        'Design user flows',
        'Collaborate with developers'
      ],
      education: 'Bachelor\'s degree in Design or related field',
      growth: 'High',
      salary: '₹5L - ₹20L per year',
      skills: ['design', 'communication', 'research', 'ux-design', 'creativity'],
      interests: ['arts', 'technology'],
      values: ['creativity', 'teamwork'],
      environment: 'office',
      workStyle: 'creative',
      industry: 'creative',
      salaryRange: 'mid',
      tags: ['Design', 'User Experience', 'Interface'],
      category: 'Creative & Design'
    },
    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      icon: '🖌️',
      shortDescription: 'Create visual content for various media',
      description: 'Graphic Designers create visual content for print and digital media. They design logos, marketing materials, websites, and other visual assets.',
      responsibilities: [
        'Create visual designs and graphics',
        'Develop brand identity elements',
        'Design marketing materials',
        'Prepare files for print or digital use'
      ],
      education: 'Bachelor\'s degree in Graphic Design or related field',
      growth: 'Moderate',
      salary: '₹4L - ₹15L per year',
      skills: ['design', 'creativity', 'graphic-design', 'art'],
      interests: ['arts', 'media'],
      values: ['creativity', 'independence'],
      environment: 'hybrid',
      workStyle: 'creative',
      industry: 'creative',
      salaryRange: 'mid',
      tags: ['Design', 'Visual Arts', 'Creative'],
      category: 'Creative & Design'
    },
    
    // Business careers
    {
      id: 'product-manager',
      title: 'Product Manager',
      icon: '📱',
      shortDescription: 'Lead product development from concept to launch',
      description: 'Product Managers oversee the development of products, defining strategy, gathering requirements, and coordinating with different teams.',
      responsibilities: [
        'Define product strategy',
        'Gather and prioritize requirements',
        'Coordinate with cross-functional teams',
        'Analyze market trends'
      ],
      education: 'Bachelor\'s degree in Business or related field',
      growth: 'High',
      salary: '₹10L - ₹30L per year',
      skills: ['leadership', 'communication', 'strategic-thinking', 'project-management'],
      interests: ['business', 'technology'],
      values: ['achievement', 'leadership'],
      environment: 'office',
      workStyle: 'collaborative',
      industry: 'tech',
      salaryRange: 'senior',
      tags: ['Product Development', 'Strategy', 'Management'],
      category: 'Business & Management'
    },
    {
      id: 'marketing-manager',
      title: 'Marketing Manager',
      icon: '📣',
      shortDescription: 'Develop and implement marketing strategies',
      description: 'Marketing Managers develop and execute marketing strategies to promote products or services. They oversee campaigns, analyze market trends, and manage teams.',
      responsibilities: [
        'Develop marketing strategies',
        'Manage marketing campaigns',
        'Analyze market trends and competition',
        'Manage marketing team and budget'
      ],
      education: 'Bachelor\'s degree in Marketing or Business',
      growth: 'Moderate',
      salary: '₹8L - ₹25L per year',
      skills: ['marketing', 'communication', 'leadership', 'digital-marketing', 'seo'],
      interests: ['business', 'media'],
      values: ['creativity', 'leadership'],
      environment: 'office',
      workStyle: 'collaborative',
      industry: 'creative',
      salaryRange: 'mid',
      tags: ['Marketing', 'Strategy', 'Management'],
      category: 'Business & Management'
    },
    
    // Healthcare careers
    {
      id: 'healthcare-admin',
      title: 'Healthcare Administrator',
      icon: '🏥',
      shortDescription: 'Manage healthcare facilities and services',
      description: 'Healthcare Administrators manage healthcare facilities, overseeing operations, staff, and ensuring compliance with regulations.',
      responsibilities: [
        'Oversee facility operations',
        'Manage staff and resources',
        'Ensure regulatory compliance',
        'Develop and implement policies'
      ],
      education: 'Bachelor\'s or Master\'s in Healthcare Administration',
      growth: 'Moderate',
      salary: '₹7L - ₹18L per year',
      skills: ['leadership', 'communication', 'problem-solving', 'healthcare'],
      interests: ['health', 'business'],
      values: ['helping-others', 'stability'],
      environment: 'office',
      workStyle: 'structured',
      industry: 'healthcare',
      salaryRange: 'mid',
      tags: ['Healthcare', 'Administration', 'Management'],
      category: 'Healthcare & Medicine'
    },
    {
      id: 'mental-health-counselor',
      title: 'Mental Health Counselor',
      icon: '🧠',
      shortDescription: 'Help people manage mental health challenges',
      description: 'Mental Health Counselors help individuals, couples, and families cope with mental health issues and life challenges through therapeutic techniques.',
      responsibilities: [
        'Provide counseling and therapy services',
        'Assess mental health needs',
        'Develop treatment plans',
        'Maintain client records and confidentiality'
      ],
      education: 'Master\'s degree in Counseling or Psychology',
      growth: 'High',
      salary: '₹5L - ₹15L per year',
      skills: ['counseling', 'emotional-intelligence', 'communication', 'empathy'],
      interests: ['social', 'health'],
      values: ['helping-others', 'work-life-balance'],
      environment: 'office',
      workStyle: 'structured',
      industry: 'healthcare',
      salaryRange: 'mid',
      tags: ['Counseling', 'Mental Health', 'Therapy'],
      category: 'Healthcare & Medicine'
    },
    
    // Education careers
    {
      id: 'teacher',
      title: 'Teacher',
      icon: '📚',
      shortDescription: 'Educate and inspire students',
      description: 'Teachers educate students, develop lesson plans, assess progress, and create a positive learning environment.',
      responsibilities: [
        'Develop and deliver lessons',
        'Assess student progress',
        'Create engaging learning materials',
        'Communicate with parents and staff'
      ],
      education: 'Bachelor\'s degree in Education or subject area',
      growth: 'Stable',
      salary: '₹4L - ₹12L per year',
      skills: ['teaching', 'communication', 'patience', 'education'],
      interests: ['education', 'social'],
      values: ['helping-others', 'work-life-balance'],
      environment: 'field',
      workStyle: 'structured',
      industry: 'education',
      salaryRange: 'entry',
      tags: ['Education', 'Teaching', 'Learning'],
      category: 'Education & Research'
    },
    {
      id: 'instructional-designer',
      title: 'Instructional Designer',
      icon: '📝',
      shortDescription: 'Create effective learning experiences',
      description: 'Instructional Designers develop educational programs, courses, and materials that facilitate effective learning experiences.',
      responsibilities: [
        'Design and develop learning materials',
        'Create engaging multimedia content',
        'Assess learning effectiveness',
        'Collaborate with subject matter experts'
      ],
      education: 'Master\'s degree in Instructional Design or Education',
      growth: 'Moderate',
      salary: '₹5L - ₹18L per year',
      skills: ['design', 'education', 'content-creation', 'writing'],
      interests: ['education', 'technology'],
      values: ['creativity', 'helping-others'],
      environment: 'hybrid',
      workStyle: 'creative',
      industry: 'education',
      salaryRange: 'mid',
      tags: ['Education', 'Course Design', 'E-learning'],
      category: 'Education & Research'
    },
    
    // Add more career paths
    
    // Additional Technology careers
    {
      id: 'cloud-architect',
      title: 'Cloud Architect',
      icon: '☁️',
      shortDescription: 'Design and manage cloud computing systems',
      description: 'Cloud Architects design, implement, and manage cloud computing systems for organizations. They develop cloud strategies, select appropriate technologies, and ensure security and scalability.',
      responsibilities: [
        'Design cloud infrastructure',
        'Implement migration strategies',
        'Optimize cloud resources',
        'Ensure security and compliance'
      ],
      education: 'Bachelor\'s degree in Computer Science or related field with cloud certifications',
      growth: 'Very High',
      salary: '₹12L - ₹35L per year',
      skills: ['programming', 'technical-troubleshooting', 'problem-solving', 'cybersecurity'],
      interests: ['technology'],
      values: ['challenge', 'achievement'],
      environment: 'hybrid',
      workStyle: 'analytical',
      industry: 'tech',
      salaryRange: 'senior',
      tags: ['Cloud Computing', 'Infrastructure', 'Architecture'],
      category: 'Technology & IT'
    },
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      icon: '🤖',
      shortDescription: 'Build artificial intelligence systems and solutions',
      description: 'AI Engineers develop and implement artificial intelligence systems and algorithms. They create machine learning models, natural language processing systems, and other AI solutions.',
      responsibilities: [
        'Design and implement AI algorithms',
        'Train and optimize machine learning models',
        'Integrate AI with existing systems',
        'Research and apply new AI techniques'
      ],
      education: 'Master\'s degree in AI, Machine Learning, or Computer Science',
      growth: 'Very High',
      salary: '₹10L - ₹40L per year',
      skills: ['programming', 'data-science', 'math', 'critical-thinking'],
      interests: ['technology', 'science'],
      values: ['challenge', 'achievement', 'creativity'],
      environment: 'hybrid',
      workStyle: 'analytical',
      industry: 'tech',
      salaryRange: 'senior',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
      category: 'Technology & IT'
    },
    
    // Additional Business careers
    {
      id: 'financial-analyst',
      title: 'Financial Analyst',
      icon: '💹',
      shortDescription: 'Analyze financial data to guide business decisions',
      description: 'Financial Analysts evaluate financial data and market trends to help organizations make investment decisions and strategic plans. They create financial models and forecast business performance.',
      responsibilities: [
        'Analyze financial statements',
        'Create financial models and forecasts',
        'Evaluate investment opportunities',
        'Prepare financial reports'
      ],
      education: 'Bachelor\'s degree in Finance, Economics, or Accounting',
      growth: 'High',
      salary: '₹6L - ₹20L per year',
      skills: ['financial-analysis', 'math', 'data-analysis', 'critical-thinking'],
      interests: ['business', 'finance'],
      values: ['achievement', 'stability'],
      environment: 'office',
      workStyle: 'analytical',
      industry: 'finance',
      salaryRange: 'mid',
      tags: ['Finance', 'Analysis', 'Investment'],
      category: 'Business & Management'
    },
    {
      id: 'human-resources-manager',
      title: 'HR Manager',
      icon: '👥',
      shortDescription: 'Manage workforce and organizational culture',
      description: 'Human Resources Managers oversee recruitment, employee relations, compensation, benefits, and organizational development. They help build and maintain a positive workplace culture.',
      responsibilities: [
        'Recruit and onboard employees',
        'Develop HR policies and procedures',
        'Manage employee relations and conflicts',
        'Oversee compensation and benefits'
      ],
      education: 'Bachelor\'s degree in Human Resources or Business Administration',
      growth: 'Moderate',
      salary: '₹7L - ₹22L per year',
      skills: ['hr', 'communication', 'leadership', 'conflict-resolution', 'emotional-intelligence'],
      interests: ['business', 'social'],
      values: ['helping-others', 'teamwork'],
      environment: 'office',
      workStyle: 'collaborative',
      industry: 'business',
      salaryRange: 'mid',
      tags: ['Human Resources', 'People Management', 'Organizational Development'],
      category: 'Business & Management'
    },
    
    // Additional Healthcare careers
    {
      id: 'doctor',
      title: 'Doctor',
      icon: '👨‍⚕️',
      shortDescription: 'Diagnose and treat medical conditions',
      description: 'Doctors diagnose and treat illnesses, injuries, and other health conditions. They examine patients, order tests, prescribe medications, and provide healthcare advice.',
      responsibilities: [
        'Diagnose medical conditions',
        'Develop treatment plans',
        'Perform medical procedures',
        'Communicate with patients about their health'
      ],
      education: 'MBBS degree with specialty training for specific fields',
      growth: 'High',
      salary: '₹10L - ₹50L+ per year',
      skills: ['healthcare', 'problem-solving', 'communication', 'critical-thinking'],
      interests: ['health', 'science'],
      values: ['helping-others', 'achievement'],
      environment: 'field',
      workStyle: 'structured',
      industry: 'healthcare',
      salaryRange: 'senior',
      tags: ['Medicine', 'Healthcare', 'Treatment'],
      category: 'Healthcare & Medicine'
    },
    {
      id: 'biomedical-researcher',
      title: 'Biomedical Researcher',
      icon: '🔬',
      shortDescription: 'Conduct research to improve medical treatments',
      description: 'Biomedical Researchers study diseases, medications, and medical treatments to advance healthcare. They conduct experiments, analyze data, and publish findings to improve medical knowledge.',
      responsibilities: [
        'Design and conduct scientific experiments',
        'Analyze research data',
        'Develop new treatments or medical technologies',
        'Publish research findings'
      ],
      education: 'Ph.D. in Biomedical Science or related field',
      growth: 'Moderate',
      salary: '₹8L - ₹25L per year',
      skills: ['research', 'data-analysis', 'critical-thinking', 'science'],
      interests: ['science', 'health'],
      values: ['challenge', 'achievement'],
      environment: 'office',
      workStyle: 'analytical',
      industry: 'healthcare',
      salaryRange: 'senior',
      tags: ['Research', 'Medicine', 'Science'],
      category: 'Healthcare & Medicine'
    },
    
    // Additional Creative careers
    {
      id: 'content-creator',
      title: 'Content Creator',
      icon: '📱',
      shortDescription: 'Create engaging digital media content',
      description: 'Content Creators develop and produce digital media including videos, podcasts, blogs, and social media content. They build audiences and create engaging material across platforms.',
      responsibilities: [
        'Create multimedia content',
        'Develop content strategies',
        'Engage with audience',
        'Analyze content performance'
      ],
      education: 'Bachelor\'s degree in Media, Communications, or related field (not always required)',
      growth: 'Very High',
      salary: '₹3L - ₹25L+ per year (highly variable)',
      skills: ['content-creation', 'writing-creative', 'communication', 'digital-marketing'],
      interests: ['media', 'arts', 'technology'],
      values: ['creativity', 'independence'],
      environment: 'remote',
      workStyle: 'creative',
      industry: 'creative',
      salaryRange: 'mid',
      tags: ['Digital Media', 'Social Media', 'Creator Economy'],
      category: 'Creative & Design'
    },
    {
      id: 'interior-designer',
      title: 'Interior Designer',
      icon: '🏠',
      shortDescription: 'Design functional and beautiful interior spaces',
      description: 'Interior Designers create aesthetic and functional interior spaces for homes, offices, and commercial buildings. They select furnishings, materials, and colors to create desired atmospheres.',
      responsibilities: [
        'Develop design concepts',
        'Select furniture, materials, and colors',
        'Create space plans and layouts',
        'Manage design projects and budgets'
      ],
      education: 'Bachelor\'s degree in Interior Design or related field',
      growth: 'Moderate',
      salary: '₹4L - ₹18L per year',
      skills: ['design', 'creativity', 'art', 'project-management'],
      interests: ['arts', 'environment'],
      values: ['creativity', 'achievement'],
      environment: 'field',
      workStyle: 'creative',
      industry: 'creative',
      salaryRange: 'mid',
      tags: ['Design', 'Interiors', 'Architecture'],
      category: 'Creative & Design'
    },
    
    // Additional Education careers
    {
      id: 'education-administrator',
      title: 'Education Administrator',
      icon: '🏫',
      shortDescription: 'Manage educational institutions and programs',
      description: 'Education Administrators oversee the operations of schools, colleges, and other educational institutions. They manage staff, budgets, and educational programs.',
      responsibilities: [
        'Develop educational policies',
        'Manage school budgets and resources',
        'Oversee teaching staff',
        'Ensure compliance with regulations'
      ],
      education: 'Master\'s degree in Education Administration or Leadership',
      growth: 'Stable',
      salary: '₹7L - ₹20L per year',
      skills: ['leadership', 'education', 'communication', 'problem-solving'],
      interests: ['education', 'business'],
      values: ['helping-others', 'leadership'],
      environment: 'office',
      workStyle: 'structured',
      industry: 'education',
      salaryRange: 'mid',
      tags: ['Education', 'Administration', 'Leadership'],
      category: 'Education & Research'
    },
    {
      id: 'educational-researcher',
      title: 'Educational Researcher',
      icon: '📋',
      shortDescription: 'Study and improve educational methods',
      description: 'Educational Researchers study teaching methods, learning processes, and educational systems. They conduct research to improve education quality and effectiveness.',
      responsibilities: [
        'Design and conduct educational research',
        'Analyze educational data',
        'Develop and test new teaching methods',
        'Publish research findings'
      ],
      education: 'Ph.D. in Education or related field',
      growth: 'Moderate',
      salary: '₹6L - ₹18L per year',
      skills: ['research', 'data-analysis', 'critical-thinking', 'education'],
      interests: ['education', 'science'],
      values: ['challenge', 'helping-others'],
      environment: 'office',
      workStyle: 'analytical',
      industry: 'education',
      salaryRange: 'mid',
      tags: ['Research', 'Education', 'Academic'],
      category: 'Education & Research'
    },
    
    // Legal careers
    {
      id: 'lawyer',
      title: 'Lawyer',
      icon: '⚖️',
      shortDescription: 'Provide legal advice and representation',
      description: 'Lawyers advise and represent individuals, businesses, and organizations on legal matters. They research laws, prepare legal documents, and argue cases in court.',
      responsibilities: [
        'Provide legal advice to clients',
        'Prepare legal documents',
        'Represent clients in court',
        'Research legal precedents and regulations'
      ],
      education: 'Bachelor\'s degree in Law (LLB) with bar certification',
      growth: 'Moderate',
      salary: '₹5L - ₹40L+ per year',
      skills: ['legal', 'communication', 'critical-thinking', 'research', 'negotiation'],
      interests: ['business', 'social', 'political'],
      values: ['challenge', 'achievement', 'helping-others'],
      environment: 'office',
      workStyle: 'structured',
      industry: 'legal',
      salaryRange: 'senior',
      tags: ['Law', 'Legal', 'Advocacy'],
      category: 'Business & Management'
    },
    
    // Finance careers
    {
      id: 'investment-banker',
      title: 'Investment Banker',
      icon: '💰',
      shortDescription: 'Facilitate financial transactions for organizations',
      description: 'Investment Bankers help companies, governments, and other entities raise capital and execute financial transactions like mergers and acquisitions.',
      responsibilities: [
        'Facilitate capital raising activities',
        'Coordinate mergers and acquisitions',
        'Conduct financial analysis',
        'Advise clients on financial strategies'
      ],
      education: 'MBA or Master\'s in Finance from top-tier institutions',
      growth: 'High',
      salary: '₹15L - ₹80L+ per year',
      skills: ['financial-analysis', 'communication', 'negotiation', 'critical-thinking'],
      interests: ['business', 'finance'],
      values: ['achievement', 'financial-rewards'],
      environment: 'office',
      workStyle: 'structured',
      industry: 'finance',
      salaryRange: 'executive',
      tags: ['Finance', 'Banking', 'Investment'],
      category: 'Business & Management'
    },
    
    // Civil Service careers
    {
      id: 'civil-service-officer',
      title: 'Civil Service Officer',
      icon: '🏛️',
      shortDescription: 'Manage government administration and policy',
      description: 'Civil Service Officers administer government policies and programs at various levels. They manage public services, implement regulations, and coordinate government initiatives.',
      responsibilities: [
        'Implement government policies',
        'Oversee public administration',
        'Manage government resources',
        'Coordinate with stakeholders'
      ],
      education: 'Bachelor\'s degree with civil service examination qualification',
      growth: 'Stable',
      salary: '₹6L - ₹25L per year',
      skills: ['leadership', 'communication', 'problem-solving', 'critical-thinking'],
      interests: ['political', 'social'],
      values: ['helping-others', 'stability', 'social-impact'],
      environment: 'office',
      workStyle: 'structured',
      industry: 'government',
      salaryRange: 'mid',
      tags: ['Government', 'Administration', 'Public Service'],
      category: 'Business & Management'
    }
  ];

  // Preference options - used for the preferences step UI
  const _preferenceOptions = {
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
  
  const startAssessment = () => {
    setCurrentStep('interests');
  };
  
  // Progress bar calculation - will be used in future UI enhancement
  const _progressPercent = (() => {
    const steps: AssessmentStep[] = ['intro', 'interests', 'skills', 'values', 'preferences', 'results'];
    const currentIndex = steps.indexOf(currentStep);
    return currentIndex === 0 ? 0 : (currentIndex / (steps.length - 1)) * 100;
  })();

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
  const setPreference = (category: 'environment' | 'workStyle' | 'industry' | 'salary', value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [category]: value
      }
    }));
  };

  // Calculate match percentage for career paths - memoized to prevent unnecessary recalculations
  const calculateMatches = useMemo(() => {
    // Transform the assessment data into a weighted score for each career path
    return careerPaths.map((career: CareerPath) => {
      // Skills match - 40%
      const skillsMatch = career.skills.filter((skillId: string) => 
        assessmentData.skills.includes(skillId)
      ).length / Math.max(1, career.skills.length);
      
      // Interest alignment - 30%
      const interestMatch = career.interests.filter((interestId: string) => 
        assessmentData.interests.includes(interestId)
      ).length / Math.max(1, career.interests.length);
      
      // Values alignment - 20%
      const valueMatch = career.values.filter((valueId: string) => 
        assessmentData.values.includes(valueId)
      ).length / Math.max(1, career.values.length);
      
      // Preferences match - 10%
      let preferenceMatch = 0;
      if (career.environment === assessmentData.preferences.environment) preferenceMatch += 0.25;
      if (career.workStyle === assessmentData.preferences.workStyle) preferenceMatch += 0.25;
      if (career.industry === assessmentData.preferences.industry) preferenceMatch += 0.25;
      if (career.salaryRange === assessmentData.preferences.salary) preferenceMatch += 0.25;
      
      // Calculate weighted score
      const matchScore = (
        (skillsMatch * 0.4) + 
        (interestMatch * 0.3) + 
        (valueMatch * 0.2) + 
        (preferenceMatch * 0.1)
      ) * 100;
      
      return {
        ...career,
        matchPercentage: Math.round(matchScore)
      };
    }).sort((a: CareerPath, b: CareerPath) => (b.matchPercentage || 0) - (a.matchPercentage || 0));
  }, [assessmentData.interests, assessmentData.skills, assessmentData.values, 
     assessmentData.preferences.environment, assessmentData.preferences.workStyle, 
     assessmentData.preferences.industry, assessmentData.preferences.salary, careerPaths]);

  // Generate career results when reaching the results step
  useEffect(() => {
    if (currentStep === 'results') {
      // Only set the selected category when reaching results
      setSelectedCategory('All');
    }
  }, [currentStep]);

  // Filter careers by selected category
  const filteredCareers = useMemo(() => {
    // Only apply filtering when we're on the results step
    if (currentStep !== 'results') return [];
    
    // Use calculateMatches directly instead of going through recommendedCareers state
    const matchedCareers = calculateMatches;
    
    if (selectedCategory === 'All') {
      return matchedCareers;
    }
    return matchedCareers
      .filter(career => career.category === selectedCategory);
  }, [
    selectedCategory, 
    currentStep, 
    assessmentData.interests, 
    assessmentData.skills, 
    assessmentData.values, 
    assessmentData.preferences.environment, 
    assessmentData.preferences.workStyle, 
    assessmentData.preferences.industry, 
    assessmentData.preferences.salary, 
    careerPaths
  ]);

  // Results step - kept for future UI implementation
  const _renderResults = () => {
    return (
      <div className="space-y-6">
        {filteredCareers.length > 0 ? (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                  selectedCategory === 'All'
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('All')}
              >
                All Categories
              </button>
              {careerCategories.map((category: CareerCategory) => (
                <button
                  key={category}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <div className="text-sm text-gray-500 font-medium mb-4">
              Showing {filteredCareers.length} {selectedCategory !== 'All' ? selectedCategory : ''} career paths
            </div>

            {filteredCareers.map((career) => (
              <motion.div 
                key={career.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: filteredCareers.indexOf(career) * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">
                          {career.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{career.title}</h4>
                      <p className="text-gray-600 mt-1">{career.description}</p>
                    </div>
                    <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-14 w-14 flex items-center justify-center text-lg">
                      {career.matchPercentage}%
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {career.skills.map((skill) => (
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
                      {career.growth} Growth
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      {career.education.charAt(0).toUpperCase() + career.education.slice(1)}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main content area */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Enhanced Introduction Step */}
        {currentStep === 'intro' && (
          <div className="mt-8">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Hero Section */}
                <div className="lg:col-span-12 bg-gradient-to-r from-indigo-500 to-purple-600 p-8 lg:p-12 text-white">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">Discover Your Ideal Career Path</h1>
                  <p className="text-xl opacity-90 max-w-3xl mb-6">
                    Take a few minutes to find the perfect career that matches your unique skills, interests, and values.
                  </p>
                  <button
                    onClick={startAssessment}
                    className="bg-white text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center text-lg"
                  >
                    Start Your Assessment
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                {/* Content Grid */}
                <div className="lg:col-span-12 p-8 lg:p-12">
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                          <span className="text-indigo-600 text-xl font-bold">1</span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Interests</h3>
                        <p className="text-gray-600">Select areas that naturally engage your curiosity and passion</p>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                          <span className="text-indigo-600 text-xl font-bold">2</span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Skills</h3>
                        <p className="text-gray-600">Identify your strongest abilities and areas of expertise</p>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                          <span className="text-indigo-600 text-xl font-bold">3</span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Values</h3>
                        <p className="text-gray-600">Select what matters most to you in your work life</p>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                          <span className="text-indigo-600 text-xl font-bold">4</span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Preferences</h3>
                        <p className="text-gray-600">Choose your ideal work environment and compensation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-100 p-2 rounded-full mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold text-gray-800">AI-Powered Matching</h3>
                            <p className="text-gray-600 text-sm">Our algorithm finds careers that match your unique profile with high accuracy</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-indigo-100 p-2 rounded-full mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold text-gray-800">Quick & Easy</h3>
                            <p className="text-gray-600 text-sm">Complete the assessment in just a few minutes and get instant results</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-indigo-100 p-2 rounded-full mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold text-gray-800">Personalized Insights</h3>
                            <p className="text-gray-600 text-sm">Get detailed information about each recommended career path</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Categories</h2>
                        <div className="space-y-3">
                          {careerCategories.map((category) => (
                            <div key={category} className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                              <span className="text-gray-800">{category}</span>
                              <span className="ml-auto text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                {careerPaths.filter(career => career.category === category).length} careers
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6">
                          <button
                            onClick={startAssessment}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                          >
                            Find Your Career Path
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        {/* Assessment content */}
        {currentStep !== 'intro' && (
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/* Step navigation sidebar */}
            <div className="md:w-64 shrink-0">
              <div className="bg-white rounded-xl shadow-md p-5 sticky top-20">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h3>
                
                <ul className="space-y-1.5">
                  {(['interests', 'skills', 'values', 'preferences', 'results'] as const).map((stepItem, index) => (
                    <li key={stepItem}>
                      <button
                        onClick={() => {
                          if (stepItem !== 'results') {
                            setCurrentStep(stepItem as Exclude<AssessmentStep, 'intro'>);
                          }
                        }}
                        disabled={stepItem === 'results' && currentStep !== 'results'}
                        className={`w-full rounded-lg py-2.5 px-3 text-left transition-all ${
                          currentStep === stepItem
                            ? 'bg-indigo-50 text-indigo-700'
                            : stepItem === 'results' && currentStep !== 'results'
                              ? 'text-gray-400 cursor-not-allowed'
                              : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 text-xs font-medium
                            ${currentStep === stepItem
                              ? 'bg-indigo-600 text-white' 
                              : stepItem === 'results' && currentStep !== 'results'
                                ? 'bg-gray-200 text-gray-400'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {index + 1}
                          </div>
                          <span className="font-medium">{stepItem.charAt(0).toUpperCase() + stepItem.slice(1)}</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
                
                {/* Tips card */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Why This Matters
                  </h4>
                  <p className="text-sm text-blue-700">
                    Your responses help us identify career paths that align with your unique skills, interests and preferences.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {currentStep === 'interests' ? 'What are your interests?' :
                 currentStep === 'skills' ? 'What skills do you excel at?' :
                 currentStep === 'values' ? 'What values are important to you?' :
                 currentStep === 'preferences' ? 'What are your workplace preferences?' : 
                 'Your Career Matches'}
              </h2>
              
              {/* Interests Step */}
              {currentStep === 'interests' && (
                <div>
                  <div className="mb-6">
                    <p className="text-gray-600">
                      Select the areas that naturally engage your curiosity. These will help us recommend matching career paths.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {interestCategories.map((interest) => (
                      <motion.div
                        key={interest.id}
                        className={`p-4 rounded-xl cursor-pointer transition-all ${
                          assessmentData.interests.includes(interest.id)
                            ? 'bg-gradient-to-br from-indigo-50 to-purple-50 ring-2 ring-indigo-400 shadow-md'
                            : 'bg-white hover:bg-gray-50 border border-gray-200'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleInterest(interest.id)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: interestCategories.indexOf(interest) * 0.05 }}
                      >
                        <div className="flex items-start">
                          <div className="text-3xl mr-3 mt-1">{interest.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-gray-900">{interest.name}</h3>
                              {assessmentData.interests.includes(interest.id) && (
                                <div className="bg-indigo-500 text-white h-5 w-5 rounded-full flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{interest.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {assessmentData.interests.length > 0 && (
                    <div className="mt-6 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        <span className="font-medium">{assessmentData.interests.length}</span> interests selected
                      </span>
                      <button 
                        onClick={() => setAssessmentData(prev => ({ ...prev, interests: [] }))}
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        Clear All
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Skills step */}
              {currentStep === 'skills' && (
                <div>
                  <div className="mb-6">
                    <p className="text-gray-600">
                      Select skills you&apos;re proficient in or would like to develop in your career. These help match you with suitable roles.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {skillCategories.map((category) => (
                      <div key={category.id} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                        </div>
                        
                        <div className="p-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {category.skills.map((skill) => (
                              <motion.button
                                key={skill.id}
                                className={`text-left px-4 py-3 rounded-lg transition-all ${
                                  assessmentData.skills.includes(skill.id)
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                                    : 'bg-gray-50 border border-gray-200 hover:border-indigo-300 text-gray-800'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => toggleSkill(skill.id)}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: category.skills.indexOf(skill) * 0.03 }}
                              >
                                <div className="flex items-center">
                                  {assessmentData.skills.includes(skill.id) ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                  )}
                                  <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {assessmentData.skills.length > 0 && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {assessmentData.skills.length}
                        </div>
                        <span className="text-gray-700">skills selected</span>
                      </div>
                      <button 
                        onClick={() => setAssessmentData(prev => ({ ...prev, skills: [] }))}
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        Clear All
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Values step */}
              {currentStep === 'values' && (
                <div>
                  <div className="mb-6">
                    <p className="text-gray-600">
                      Select values that matter most to you in your work life. Your selection helps match you with careers that align with your personal values.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {valueItems.map((value, index) => (
                      <motion.div
                        key={value.id}
                        className={`cursor-pointer rounded-xl overflow-hidden border transition-all ${
                          assessmentData.values.includes(value.id)
                            ? 'border-indigo-400 ring-2 ring-indigo-300 shadow-md'
                            : 'border-gray-200 hover:border-indigo-200 shadow-sm'
                        }`}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleValue(value.id)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className={`h-full flex flex-col ${
                          assessmentData.values.includes(value.id)
                            ? 'bg-gradient-to-br from-indigo-50 to-purple-50'
                            : 'bg-white'
                        }`}>
                          <div className={`p-5 flex items-center ${
                            assessmentData.values.includes(value.id) ? 'border-b border-indigo-200' : 'border-b border-gray-100'
                          }`}>
                            <div className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center ${
                              assessmentData.values.includes(value.id)
                                ? 'bg-indigo-500 text-white'
                                : 'bg-gray-100 text-gray-500'
                            }`}>
                              {value.icon}
                            </div>
                            <h3 className={`font-semibold ${
                              assessmentData.values.includes(value.id) ? 'text-indigo-800' : 'text-gray-800'
                            }`}>
                              {value.name}
                            </h3>
                            {assessmentData.values.includes(value.id) && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div className={`p-5 flex-grow text-sm ${
                            assessmentData.values.includes(value.id) ? 'text-indigo-900' : 'text-gray-600'
                          }`}>
                            {value.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {assessmentData.values.length > 0 && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {assessmentData.values.length}
                        </div>
                        <span className="text-gray-700">values selected</span>
                      </div>
                      <button 
                        onClick={() => setAssessmentData(prev => ({ ...prev, values: [] }))}
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        Clear All
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Preferences step */}
              {currentStep === 'preferences' && (
                <div>
                  <div className="mb-6">
                    <p className="text-gray-600">
                      Select your preferences for work environment, salary range, and other factors to find career paths that match your lifestyle needs.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {/* Work Environment Preference */}
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Work Environment</h3>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {workEnvironmentOptions.map((environment: WorkEnvironment, index: number) => (
                            <motion.div
                              key={environment.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`cursor-pointer p-4 rounded-lg border ${
                                assessmentData.preferences.environment === environment.id
                                  ? 'border-indigo-400 bg-indigo-50'
                                  : 'border-gray-200 hover:border-indigo-300'
                              }`}
                              onClick={() => setPreference('environment', environment.id)}
                            >
                              <div className="flex items-center">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                                  assessmentData.preferences.environment === environment.id 
                                    ? 'bg-indigo-500 text-white' 
                                    : 'bg-gray-100 text-gray-500'
                                }`}>
                                  {environment.icon}
                                </div>
                                <div className="ml-3">
                                  <h4 className="font-medium text-gray-800">{environment.name}</h4>
                                  <p className="text-sm text-gray-600 mt-1">{environment.description}</p>
                                </div>
                                {assessmentData.preferences.environment === environment.id && (
                                  <svg className="ml-auto h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Salary Range Preference */}
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Desired Salary Range</h3>
                      </div>
                      <div className="p-5">
                        <div className="space-y-4">
                          {salaryRangeOptions.map((range, index: number) => (
                            <motion.div
                              key={range.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`cursor-pointer p-3 rounded-lg border ${
                                assessmentData.preferences.salary === range.id
                                  ? 'border-indigo-400 bg-indigo-50'
                                  : 'border-gray-200 hover:border-indigo-300'
                              }`}
                              onClick={() => setPreference('salary', range.id)}
                            >
                              <div className="flex items-center">
                                <div className="flex-grow">
                                  <span className="font-medium text-gray-800">{range.label}</span>
                                </div>
                                {assessmentData.preferences.salary === range.id && (
                                  <svg className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Industry Preference */}
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-gray-50 px-5 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Preferred Industry</h3>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {industryOptions.map((industry: Industry, index: number) => (
                            <motion.div
                              key={industry.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className={`cursor-pointer p-3 rounded-lg border ${
                                assessmentData.preferences.industry === industry.id
                                  ? 'border-indigo-400 bg-indigo-50'
                                  : 'border-gray-200 hover:border-indigo-300'
                              }`}
                              onClick={() => setPreference('industry', industry.id)}
                            >
                              <div className="flex items-center">
                                <span className="font-medium text-gray-800">{industry.name}</span>
                                {assessmentData.preferences.industry === industry.id && (
                                  <svg className="ml-auto h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Results step */}
              {currentStep === 'results' && (
                <div>
                  <div className="mb-6">
                    <p className="text-gray-600">
                      Based on your assessment, here are the career paths that best match your profile. 
                      Click on any career to see more details.
                    </p>
                  </div>
                  
                  {/* Filter by category */}
                  <div className="mb-6">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            selectedCategory === 'All' 
                              ? 'bg-indigo-600 text-white' 
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                          onClick={() => setSelectedCategory('All')}
                        >
                          All Categories
                        </button>
                        {careerCategories.map((category: CareerCategory) => (
                          <button
                            key={category}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selectedCategory === category 
                                ? 'bg-indigo-600 text-white' 
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {filteredCareers.length > 0 ? (
                    <div className="space-y-4">
                      {filteredCareers
                        .slice(0, 8)
                        .map((career: CareerPath, index: number) => (
                          <motion.div 
                            key={career.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                          >
                            <button 
                              onClick={() => setSelectedCareer(career.id)}
                              className="w-full"
                            >
                              <div className="p-5">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg">
                                    {career.icon}
                                  </div>
                                  <div className="ml-4 flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-800">{career.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{career.shortDescription}</p>
                                  </div>
                                  <div className="ml-4 flex flex-col items-end">
                                    <div className="text-2xl font-bold text-indigo-600">{career.matchPercentage}%</div>
                                    <div className="text-sm text-gray-500">match</div>
                                  </div>
                                </div>
                                
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {career.tags.map((tag: string) => (
                                    <span 
                                      key={tag} 
                                      className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </button>
                          </motion.div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">No matches yet</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Complete all the assessment steps to get personalized career matches.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={() => setCurrentStep('interests')}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Start Assessment
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                <button
                  onClick={goToPreviousStep}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Back
                </button>
                
                {currentStep !== 'results' ? (
                  <button
                    onClick={goToNextStep}
                    className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-md flex items-center"
                  >
                    Continue
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <Link 
                    href="/"
                    className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700"
                  >
                    Done
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 