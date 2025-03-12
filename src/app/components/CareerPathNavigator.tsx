'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Skill = {
  id: string;
  name: string;
  description: string;
  level: number; // 1-10 scale 
  type: 'technical' | 'soft'; // Add skill type
};

type CareerPath = {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  salaryRange: string;
  growthProspect: string;
  educationLevel: string;
};

type EducationLevel = {
  id: string;
  name: string;
  years: string;
  skills: Skill[];
  careers: CareerPath[];
};

const allSkills: Skill[] = [
  // Technical skills
  { id: 'programming', name: 'Programming', description: 'Ability to write code and develop software', level: 7, type: 'technical' },
  { id: 'data-analysis', name: 'Data Analysis', description: 'Extract insights from data', level: 6, type: 'technical' },
  { id: 'math', name: 'Mathematics', description: 'Advanced mathematical concepts', level: 8, type: 'technical' },
  { id: 'research', name: 'Research', description: 'Conducting systematic investigation', level: 9, type: 'technical' },
  { id: 'design', name: 'Design', description: 'Creating visual solutions to problems', level: 5, type: 'technical' },
  { id: 'writing', name: 'Technical Writing', description: 'Communicating complex information clearly', level: 6, type: 'technical' },
  
  // Adding more specialized technical skills
  { id: 'machine-learning', name: 'Machine Learning', description: 'Developing systems that learn from data', level: 9, type: 'technical' },
  { id: 'cloud-computing', name: 'Cloud Computing', description: 'Building and maintaining cloud infrastructure', level: 7, type: 'technical' },
  { id: 'cybersecurity', name: 'Cybersecurity', description: 'Protecting systems from digital attacks', level: 8, type: 'technical' },
  { id: 'database', name: 'Database Management', description: 'Organizing and retrieving data efficiently', level: 6, type: 'technical' },
  { id: 'ui-ux', name: 'UI/UX Design', description: 'Creating intuitive user interfaces and experiences', level: 7, type: 'technical' },
  { id: 'mobile-dev', name: 'Mobile Development', description: 'Building applications for mobile devices', level: 7, type: 'technical' },
  { id: 'devops', name: 'DevOps', description: 'Streamlining development and operations processes', level: 8, type: 'technical' },
  { id: 'blockchain', name: 'Blockchain', description: 'Developing decentralized applications and systems', level: 9, type: 'technical' },
  
  // New technical skills
  { id: 'ai', name: 'Artificial Intelligence', description: 'Creating intelligent machines that work and react like humans', level: 9, type: 'technical' },
  { id: 'ar-vr', name: 'AR/VR Development', description: 'Creating immersive digital experiences', level: 8, type: 'technical' },
  { id: 'data-visualization', name: 'Data Visualization', description: 'Presenting data in visual formats for better understanding', level: 7, type: 'technical' },
  { id: 'iot', name: 'Internet of Things', description: 'Building connected devices and systems', level: 8, type: 'technical' },
  { id: 'game-design', name: 'Game Design', description: 'Creating rules and content for interactive entertainment', level: 7, type: 'technical' },
  { id: 'quantum-computing', name: 'Quantum Computing', description: 'Working with quantum-mechanical phenomena for computation', level: 10, type: 'technical' },
  { id: 'robotics', name: 'Robotics', description: 'Designing and building automated machines', level: 9, type: 'technical' },
  { id: 'bioinformatics', name: 'Bioinformatics', description: 'Using computational methods to analyze biological data', level: 9, type: 'technical' },
  { id: 'network-engineering', name: 'Network Engineering', description: 'Designing and implementing computer networks', level: 7, type: 'technical' },
  { id: '3d-modeling', name: '3D Modeling', description: 'Creating three-dimensional representations of objects', level: 6, type: 'technical' },
  { id: 'digital-marketing', name: 'Digital Marketing', description: 'Promoting products through online channels', level: 5, type: 'technical' },
  { id: 'seo', name: 'SEO', description: 'Optimizing content for search engines', level: 6, type: 'technical' },
  
  // Soft skills
  { id: 'critical-thinking', name: 'Critical Thinking', description: 'Analyzing facts to form a judgment', level: 7, type: 'soft' },
  { id: 'communication', name: 'Communication', description: 'Exchanging information effectively', level: 8, type: 'soft' },
  { id: 'teamwork', name: 'Teamwork', description: 'Working collaboratively with others', level: 6, type: 'soft' },
  { id: 'leadership', name: 'Leadership', description: 'Guiding and influencing others', level: 9, type: 'soft' },
  { id: 'problem-solving', name: 'Problem Solving', description: 'Finding solutions to complex issues', level: 8, type: 'soft' },
  { id: 'adaptability', name: 'Adaptability', description: 'Adjusting to new conditions', level: 7, type: 'soft' },
  
  // Adding more specialized soft skills
  { id: 'negotiation', name: 'Negotiation', description: 'Finding mutually beneficial agreements', level: 8, type: 'soft' },
  { id: 'time-management', name: 'Time Management', description: 'Organizing and planning time effectively', level: 7, type: 'soft' },
  { id: 'emotional-intelligence', name: 'Emotional Intelligence', description: 'Recognizing and managing emotions', level: 9, type: 'soft' },
  { id: 'creativity', name: 'Creativity', description: 'Generating original ideas and solutions', level: 8, type: 'soft' },
  { id: 'public-speaking', name: 'Public Speaking', description: 'Presenting information clearly to an audience', level: 7, type: 'soft' },
  { id: 'conflict-resolution', name: 'Conflict Resolution', description: 'Addressing and resolving disagreements', level: 8, type: 'soft' },
  { id: 'cultural-awareness', name: 'Cultural Awareness', description: 'Understanding diverse perspectives and cultures', level: 6, type: 'soft' },
  { id: 'networking', name: 'Networking', description: 'Building and maintaining professional relationships', level: 7, type: 'soft' },
  
  // New soft skills
  { id: 'empathy', name: 'Empathy', description: 'Understanding and sharing feelings of others', level: 8, type: 'soft' },
  { id: 'strategic-thinking', name: 'Strategic Thinking', description: 'Planning to achieve long-term goals', level: 9, type: 'soft' },
  { id: 'mentoring', name: 'Mentoring', description: 'Guiding others in personal and professional development', level: 7, type: 'soft' },
  { id: 'persuasion', name: 'Persuasion', description: 'Influencing others through reasoning and emotion', level: 8, type: 'soft' },
  { id: 'decision-making', name: 'Decision Making', description: 'Making choices between alternatives effectively', level: 8, type: 'soft' },
  { id: 'active-listening', name: 'Active Listening', description: 'Fully concentrating, understanding, and responding to speakers', level: 7, type: 'soft' },
  { id: 'resilience', name: 'Resilience', description: 'Recovering quickly from difficulties', level: 8, type: 'soft' },
  { id: 'project-planning', name: 'Project Planning', description: 'Organizing tasks and resources to achieve objectives', level: 7, type: 'soft' },
  { id: 'customer-service', name: 'Customer Service', description: 'Assisting and advising customers effectively', level: 6, type: 'soft' },
  { id: 'work-ethic', name: 'Work Ethic', description: 'Demonstrating commitment and diligence in tasks', level: 8, type: 'soft' },
  { id: 'ethical-reasoning', name: 'Ethical Reasoning', description: 'Applying moral principles to decision-making', level: 9, type: 'soft' },
];

const careerPaths: CareerPath[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Design and develop software systems',
    requiredSkills: ['programming', 'problem-solving', 'teamwork', 'critical-thinking'],
    salaryRange: '₹5L - ₹30L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze and interpret complex data',
    requiredSkills: ['data-analysis', 'programming', 'math', 'critical-thinking', 'machine-learning'],
    salaryRange: '₹8L - ₹35L',
    growthProspect: 'Very High',
    educationLevel: 'graduate'
  },
  {
    id: 'researcher',
    title: 'Academic Researcher',
    description: 'Conduct original research in specialized fields',
    requiredSkills: ['research', 'writing', 'critical-thinking', 'time-management'],
    salaryRange: '₹4L - ₹15L',
    growthProspect: 'Moderate',
    educationLevel: 'doctoral'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Oversee product development from conception to launch',
    requiredSkills: ['leadership', 'communication', 'problem-solving', 'negotiation', 'time-management'],
    salaryRange: '₹12L - ₹40L', 
    growthProspect: 'High',
    educationLevel: 'professional'
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    description: 'Create intuitive and engaging user experiences',
    requiredSkills: ['design', 'communication', 'problem-solving', 'ui-ux', 'creativity'],
    salaryRange: '₹6L - ₹25L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    description: 'Create documentation for complex technical products',
    requiredSkills: ['writing', 'communication', 'research', 'time-management'],
    salaryRange: '₹4L - ₹18L',
    growthProspect: 'Moderate',
    educationLevel: 'undergraduate'
  },
  
  // Add new career paths
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    description: 'Protect information systems from threats and vulnerabilities',
    requiredSkills: ['cybersecurity', 'problem-solving', 'critical-thinking', 'adaptability'],
    salaryRange: '₹7L - ₹30L',
    growthProspect: 'Very High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'Design and implement cloud-based solutions',
    requiredSkills: ['cloud-computing', 'programming', 'database', 'problem-solving'],
    salaryRange: '₹15L - ₹45L',
    growthProspect: 'High',
    educationLevel: 'graduate'
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    description: 'Build and deploy machine learning models',
    requiredSkills: ['machine-learning', 'programming', 'math', 'problem-solving', 'critical-thinking'],
    salaryRange: '₹10L - ₹40L',
    growthProspect: 'Very High',
    educationLevel: 'graduate'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Implement and maintain CI/CD pipelines and infrastructure',
    requiredSkills: ['devops', 'programming', 'cloud-computing', 'problem-solving'],
    salaryRange: '₹8L - ₹35L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    description: 'Create applications for mobile platforms',
    requiredSkills: ['mobile-dev', 'programming', 'ui-ux', 'problem-solving'],
    salaryRange: '₹6L - ₹28L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    description: 'Plan and execute projects to meet requirements',
    requiredSkills: ['leadership', 'communication', 'time-management', 'conflict-resolution', 'project-planning'],
    salaryRange: '₹10L - ₹35L',
    growthProspect: 'Moderate',
    educationLevel: 'professional'
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    description: 'Develop blockchain applications and smart contracts',
    requiredSkills: ['blockchain', 'programming', 'critical-thinking', 'problem-solving'],
    salaryRange: '₹12L - ₹40L',
    growthProspect: 'High',
    educationLevel: 'graduate'
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    description: 'Build systems to collect, store, and analyze data',
    requiredSkills: ['database', 'programming', 'data-analysis', 'problem-solving'],
    salaryRange: '₹7L - ₹30L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  
  // New diverse career paths
  {
    id: 'ai-ethicist',
    title: 'AI Ethicist',
    description: 'Ensure AI systems are developed and deployed ethically',
    requiredSkills: ['ai', 'critical-thinking', 'ethical-reasoning', 'research', 'communication'],
    salaryRange: '₹9L - ₹28L',
    growthProspect: 'High',
    educationLevel: 'graduate'
  },
  {
    id: 'bioinformatician',
    title: 'Bioinformatician',
    description: 'Analyze biological data using computational methods',
    requiredSkills: ['bioinformatics', 'programming', 'data-analysis', 'research', 'critical-thinking'],
    salaryRange: '₹7L - ₹25L',
    growthProspect: 'High',
    educationLevel: 'graduate'
  },
  {
    id: 'digital-content-creator',
    title: 'Digital Content Creator',
    description: 'Create engaging digital content for various platforms',
    requiredSkills: ['creativity', 'communication', 'design', 'digital-marketing', 'adaptability'],
    salaryRange: '₹4L - ₹20L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'quantum-computing-researcher',
    title: 'Quantum Computing Researcher',
    description: 'Advance the field of quantum computing through research',
    requiredSkills: ['quantum-computing', 'math', 'research', 'programming', 'critical-thinking'],
    salaryRange: '₹15L - ₹45L',
    growthProspect: 'Very High',
    educationLevel: 'doctoral'
  },
  {
    id: 'game-developer',
    title: 'Game Developer',
    description: 'Design and develop video games',
    requiredSkills: ['programming', 'game-design', '3d-modeling', 'creativity', 'teamwork'],
    salaryRange: '₹5L - ₹25L',
    growthProspect: 'Moderate',
    educationLevel: 'undergraduate'
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    description: 'Design, implement and maintain computer networks',
    requiredSkills: ['network-engineering', 'problem-solving', 'critical-thinking', 'adaptability'],
    salaryRange: '₹6L - ₹25L',
    growthProspect: 'Moderate',
    educationLevel: 'undergraduate'
  },
  {
    id: 'ar-vr-developer',
    title: 'AR/VR Developer',
    description: 'Create immersive augmented and virtual reality experiences',
    requiredSkills: ['ar-vr', 'programming', '3d-modeling', 'design', 'creativity'],
    salaryRange: '₹7L - ₹30L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    description: 'Design, build and maintain robotic systems',
    requiredSkills: ['robotics', 'programming', 'math', 'problem-solving', 'critical-thinking'],
    salaryRange: '₹8L - ₹35L',
    growthProspect: 'High',
    educationLevel: 'graduate'
  },
  {
    id: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    description: 'Plan and execute digital marketing campaigns',
    requiredSkills: ['digital-marketing', 'seo', 'communication', 'creativity', 'data-analysis'],
    salaryRange: '₹4L - ₹20L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
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
  {
    id: 'iot-developer',
    title: 'IoT Developer',
    description: 'Design and develop connected devices and systems',
    requiredSkills: ['iot', 'programming', 'network-engineering', 'problem-solving', 'critical-thinking'],
    salaryRange: '₹7L - ₹30L',
    growthProspect: 'Very High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'ai-researcher',
    title: 'AI Researcher',
    description: 'Conduct cutting-edge research in artificial intelligence',
    requiredSkills: ['ai', 'machine-learning', 'math', 'research', 'critical-thinking'],
    salaryRange: '₹10L - ₹40L',
    growthProspect: 'Very High',
    educationLevel: 'doctoral'
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    description: 'Ensure customers achieve desired outcomes while using a product or service',
    requiredSkills: ['customer-service', 'communication', 'empathy', 'problem-solving', 'adaptability'],
    salaryRange: '₹5L - ₹25L',
    growthProspect: 'High',
    educationLevel: 'undergraduate'
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master',
    description: 'Facilitate Agile development teams and processes',
    requiredSkills: ['leadership', 'communication', 'problem-solving', 'adaptability', 'conflict-resolution'],
    salaryRange: '₹8L - ₹30L',
    growthProspect: 'Moderate',
    educationLevel: 'professional'
  },
];

const educationLevels: EducationLevel[] = [
  {
    id: 'high-school',
    name: 'High School',
    years: '4 years',
    skills: allSkills.filter(skill => 
      ['critical-thinking', 'teamwork', 'adaptability', 'communication', 'creativity', 'active-listening', 'resilience', 'work-ethic'].includes(skill.id)
    ).map(skill => ({ ...skill, level: Math.min(skill.level, 4) })),
    careers: []
  },
  {
    id: 'undergraduate',
    name: 'Undergraduate',
    years: '4 years',
    skills: allSkills.filter(skill => 
      ['programming', 'writing', 'design', 'communication', 'problem-solving', 'critical-thinking', 'teamwork', 
      'mobile-dev', 'ui-ux', 'database', 'digital-marketing', 'seo', '3d-modeling', 'network-engineering', 'iot',
      'game-design', 'customer-service', 'time-management', 'adaptability', 'data-visualization', 'ar-vr'].includes(skill.id)
    ).map(skill => ({ ...skill, level: Math.min(skill.level, 7) })),
    careers: careerPaths.filter(career => career.educationLevel === 'undergraduate')
  },
  {
    id: 'graduate',
    name: 'Graduate',
    years: '1-2 years',
    skills: allSkills.filter(skill => 
      ['data-analysis', 'research', 'leadership', 'communication', 'problem-solving', 'critical-thinking',
      'machine-learning', 'cloud-computing', 'ai', 'devops', 'blockchain', 'bioinformatics', 'strategic-thinking',
      'project-planning', 'mentoring', 'decision-making', 'persuasion', 'robotics', 'ethical-reasoning'].includes(skill.id)
    ).map(skill => ({ ...skill, level: Math.min(skill.level, 9) })),
    careers: careerPaths.filter(career => career.educationLevel === 'graduate')
  },
  {
    id: 'doctoral',
    name: 'Doctoral',
    years: '4-7 years',
    skills: allSkills.filter(skill => 
      ['research', 'writing', 'critical-thinking', 'math', 'quantum-computing', 'ai', 
      'bioinformatics', 'machine-learning', 'strategic-thinking'].includes(skill.id)
    ).map(skill => ({ ...skill, level: skill.level })),
    careers: careerPaths.filter(career => career.educationLevel === 'doctoral')
  },
  {
    id: 'professional',
    name: 'Professional',
    years: 'Varies',
    skills: allSkills.filter(skill => 
      ['leadership', 'communication', 'adaptability', 'teamwork', 'negotiation', 'time-management',
      'conflict-resolution', 'networking', 'strategic-thinking', 'project-planning', 'decision-making',
      'customer-service', 'empathy', 'persuasion'].includes(skill.id)
    ).map(skill => ({ ...skill, level: Math.min(skill.level, 8) })),
    careers: careerPaths.filter(career => career.educationLevel === 'professional')
  }
];

// Function to render skill level bar
const SkillLevelBar = ({ level }: { level: number }) => {
  const maxBlocks = 5;
  const filledBlocks = Math.ceil((level / 10) * maxBlocks);
  
  return (
    <div className="flex space-x-1 mt-2">
      {Array.from({ length: maxBlocks }).map((_, index) => (
        <div 
          key={index}
          className={`h-1.5 rounded-full flex-1 ${
            index < filledBlocks 
              ? 'bg-indigo-600' 
              : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

export default function CareerPathNavigator() {
  const [selectedEducation, setSelectedEducation] = useState<string>('undergraduate');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [matchingCareers, setMatchingCareers] = useState<CareerPath[]>([]);
  const [userSkills, setUserSkills] = useState<string[]>([]);
  const [skillFilter, setSkillFilter] = useState<'all' | 'technical' | 'soft'>('all');
  const [preferHighGrowth, setPreferHighGrowth] = useState<boolean>(false);
  const [careersToCompare, setCareersToCompare] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  
  useEffect(() => {
    // Enhanced matching algorithm with weighted skills and growth prospects
    if (userSkills.length > 0) {
      // Weight for each skill type
      const skillWeights: Record<string, number> = {};
      userSkills.forEach(skillId => {
        const skill = allSkills.find(s => s.id === skillId);
        if (skill) {
          // Technical skills have slightly higher weight (1.2x) than soft skills (1.0x)
          skillWeights[skillId] = skill.type === 'technical' ? 1.2 : 1.0;
        }
      });
      
      // Score and filter careers
      const scoredCareers = careerPaths
        .map(career => {
          // Base score from matched skills with weighting
          let skillMatchScore = 0;
          let matchedSkillsCount = 0;
          
          career.requiredSkills.forEach(skillId => {
            if (userSkills.includes(skillId)) {
              matchedSkillsCount++;
              skillMatchScore += skillWeights[skillId] || 1.0;
            }
          });
          
          // Calculate the percentage match
          const rawMatchPercentage = career.requiredSkills.length > 0 
            ? (matchedSkillsCount / career.requiredSkills.length) * 100 
            : 0;
          
          // Growth prospect bonus (0 to 20%)
          const growthBonus = preferHighGrowth ? 
            (career.growthProspect === 'Very High' ? 20 :
             career.growthProspect === 'High' ? 10 : 0) 
            : 0;
            
          // Education level match bonus (0 to 10%)
          const educationBonus = career.educationLevel === selectedEducation ? 10 : 0;
          
          // Final adjusted score
          const finalScore = rawMatchPercentage + growthBonus + educationBonus;
          
          return {
            career,
            matchPercentage: Math.min(Math.round(finalScore), 100), // Cap at 100%
            skillMatchScore,
            matchedSkillsCount
          };
        })
        .filter(item => item.matchedSkillsCount >= 2) // Need at least 2 matching skills
        .sort((a, b) => b.matchPercentage - a.matchPercentage);
      
      setMatchingCareers(scoredCareers.map(item => item.career));
    } else {
      setMatchingCareers([]);
    }
  }, [userSkills, selectedEducation, preferHighGrowth]);
  
  // Find current education level
  const currentEducation = educationLevels.find(level => level.id === selectedEducation) || educationLevels[1];

  // Toggle skill selection
  const toggleSkill = (skillId: string) => {
    setUserSkills(prev => {
      if (prev.includes(skillId)) {
        return prev.filter(id => id !== skillId);
      } else {
        return [...prev, skillId];
      }
    });
    
    setSelectedSkill(skillId === selectedSkill ? null : skillId);
  };

  // Change education level
  const changeEducationLevel = (levelId: string) => {
    if (selectedEducation === levelId) return;
    setSelectedEducation(levelId);
  };

  // Define colors based on skill level
  const getSkillColor = (level: number) => {
    if (level <= 3) return 'from-blue-200 to-blue-400 text-blue-900';
    if (level <= 6) return 'from-indigo-300 to-indigo-500 text-white';
    return 'from-violet-400 to-violet-600 text-white';
  };

  // Filter skills based on the selected filter
  const filteredSkills = currentEducation.skills.filter(skill => {
    if (skillFilter === 'all') return true;
    return skill.type === skillFilter;
  });

  // Count careers that require each skill
  const getCareerCountForSkill = (skillId: string): number => {
    return careerPaths.filter(career => 
      career.requiredSkills.includes(skillId)
    ).length;
  };

  // Calculate match percentage for a career based on user's selected skills with improved algorithm
  const calculateMatchPercentage = (career: CareerPath): number => {
    if (userSkills.length === 0 || career.requiredSkills.length === 0) return 0;
    
    // Count matched skills with weighting
    let matchedSkillsCount = 0;
    
    career.requiredSkills.forEach(skillId => {
      if (userSkills.includes(skillId)) {
        matchedSkillsCount++;
      }
    });
    
    // Base match percentage
    const basePercentage = (matchedSkillsCount / career.requiredSkills.length) * 100;
    
    // Growth prospect bonus
    const growthBonus = preferHighGrowth ? 
      (career.growthProspect === 'Very High' ? 20 :
       career.growthProspect === 'High' ? 10 : 0) 
      : 0;
      
    // Education level match bonus
    const educationBonus = career.educationLevel === selectedEducation ? 10 : 0;
    
    // Final adjusted score
    return Math.min(Math.round(basePercentage + growthBonus + educationBonus), 100);
  };
  
  // Sort careers by match percentage
  const sortedMatchingCareers = [...matchingCareers].sort(
    (a, b) => calculateMatchPercentage(b) - calculateMatchPercentage(a)
  );

  // Toggle career selection for comparison
  const toggleCareerComparison = (careerId: string) => {
    setCareersToCompare(prev => {
      if (prev.includes(careerId)) {
        return prev.filter(id => id !== careerId);
      } else {
        // Limit to 3 careers for comparison
        if (prev.length >= 3) {
          return [...prev.slice(1), careerId];
        }
        return [...prev, careerId];
      }
    });
  };
  
  // Clear all selected careers
  const clearComparison = () => {
    setCareersToCompare([]);
    setShowComparison(false);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Skills & Career Path Explorer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover what skills you can develop and the career paths they unlock
          </p>
        </div>

        {/* Education Level Selection */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {educationLevels.map((level) => (
            <motion.button
              key={level.id}
              onClick={() => changeEducationLevel(level.id)}
              className={`px-4 py-3 rounded-xl shadow transition-all ${
                selectedEducation === level.id 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105 font-medium' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-semibold">{level.name}</div>
              <div className="text-xs opacity-75">{level.years}</div>
            </motion.button>
          ))}
        </div>

        {/* Increase horizontal space for both components */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {/* Skill Tree Visualization - increased width */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden min-h-[600px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Skills Development Tree
              </h3>

              {/* Skill type filter */}
              <div className="flex space-x-2">
                {(['all', 'technical', 'soft'] as const).map((type) => (
                  <button 
                    key={type}
                    onClick={() => setSkillFilter(type)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      skillFilter === type 
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Explore skills that are typically developed during {currentEducation.name.toLowerCase()} education
            </p>
            
            {/* Skills grid */}
            <div className="relative">
              {/* Central node - increase size and improve text fit */}
              <motion.div 
                className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center mx-auto mb-8 shadow-lg z-10 relative"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              >
                <div className="text-center p-2 w-full">
                  <div className="font-semibold text-sm leading-tight whitespace-normal">{currentEducation.name}</div>
                  <div className="text-xs opacity-80 mt-1">Education</div>
                </div>
              </motion.div>
              
              {/* Skills nodes */}
              <div className="flex flex-wrap justify-center gap-4 mt-4 relative z-10">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      className={`w-full cursor-pointer overflow-hidden`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: userSkills.includes(skill.id) ? 1.05 : 1
                      }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                      onClick={() => toggleSkill(skill.id)}
                    >
                      <div className={`rounded-xl shadow p-4 h-full 
                        ${userSkills.includes(skill.id) 
                          ? `bg-gradient-to-br ${getSkillColor(skill.level)} border-2 border-indigo-300` 
                          : 'bg-white hover:bg-indigo-50 border border-gray-100'}`
                      }>
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{skill.name}</h4>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            userSkills.includes(skill.id) 
                              ? 'bg-white text-gray-800 font-semibold' 
                              : 'bg-indigo-100 text-indigo-800'
                          }`}>
                            Lvl {skill.level}
                          </div>
                        </div>
                        <p className="text-sm mt-2 opacity-80">{skill.description}</p>
                        
                        {/* Skill level indicator bar */}
                        <SkillLevelBar level={skill.level} />
                        
                        {/* Skill metadata - type and career count */}
                        <div className="mt-3 flex justify-between items-center">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            skill.type === 'technical' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {skill.type === 'technical' ? 'Technical' : 'Soft Skill'}
                          </span>
                          
                          <div className="flex items-center text-xs text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <span>
                              {getCareerCountForSkill(skill.id)} career{getCareerCountForSkill(skill.id) !== 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-gray-500 text-sm">
              Select skills to see matching career paths
            </div>
          </div>

          {/* Career Matching Panel - increased width */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col h-full min-h-[600px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Career Path Matches
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
              <p className="text-gray-600">
                Careers that match your selected skills ({userSkills.length} selected)
              </p>
              
              {/* Growth Priority toggle with fixed-size container and hover tooltip */}
              <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 self-start sm:self-auto">
                <div className="mr-3">
                  <div className="text-sm font-medium text-gray-700">Growth Priority</div>
                </div>
                <div className="relative group">
                  <button 
                    onClick={() => setPreferHighGrowth(!preferHighGrowth)}
                    aria-pressed={preferHighGrowth}
                    aria-label="Toggle growth priority"
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 border flex-shrink-0 ${
                      preferHighGrowth 
                        ? 'bg-indigo-600 border-indigo-600 text-white' 
                        : 'bg-white border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    <span className="sr-only">{preferHighGrowth ? 'Disable growth priority' : 'Enable growth priority'}</span>
                    {preferHighGrowth && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  {/* Tooltip that appears on hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-10 pointer-events-none">
                    {preferHighGrowth 
                      ? "Prioritizing careers with high growth prospects" 
                      : "Standard career matching based on skills only"}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comparison bar */}
            {careersToCompare.length > 0 && (
              <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium text-indigo-800">
                      {careersToCompare.length} {careersToCompare.length === 1 ? 'career' : 'careers'} selected
                    </span>
                    <div className="flex mt-1 space-x-1">
                      {careersToCompare.map(careerId => {
                        const career = careerPaths.find(c => c.id === careerId);
                        return career ? (
                          <span key={careerId} className="text-xs bg-indigo-200 text-indigo-800 rounded px-2 py-1">
                            {career.title}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={clearComparison}
                      className="text-xs text-indigo-700 hover:text-indigo-900"
                    >
                      Clear
                    </button>
                    <button 
                      onClick={() => setShowComparison(true)}
                      disabled={careersToCompare.length < 2}
                      className={`text-xs px-3 py-1 rounded ${
                        careersToCompare.length >= 2 
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex-grow">
              {userSkills.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-3 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09Z" />
                  </svg>
                  <p className="text-lg font-medium">Select skills to see<br />matching career paths</p>
                </div>
              ) : matchingCareers.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-3 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  <p className="text-lg font-medium">No matching careers found.<br />Try selecting different skills.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedMatchingCareers.map((career) => {
                    const matchPercentage = calculateMatchPercentage(career);
                    const isSelected = careersToCompare.includes(career.id);
                    
                    return (
                      <motion.div
                        key={career.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-4 border rounded-xl hover:shadow-md transition-shadow ${
                          isSelected ? 'border-indigo-400 bg-indigo-50' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-indigo-700 truncate mr-2">{career.title}</h4>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full whitespace-nowrap">
                              {career.growthProspect}
                            </span>
                            <button
                              onClick={() => toggleCareerComparison(career.id)}
                              className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                                isSelected 
                                  ? 'border-indigo-600 bg-indigo-600 text-white' 
                                  : 'border-gray-300 hover:border-indigo-400'
                              }`}
                            >
                              {isSelected && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{career.description}</p>
                        
                        {/* Match percentage indicator */}
                        <div className="mt-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-gray-700">Skill Match</span>
                            <span className={`text-xs font-semibold ${
                              matchPercentage >= 80 ? 'text-green-600' :
                              matchPercentage >= 50 ? 'text-amber-600' : 'text-rose-600'
                            }`}>
                              {matchPercentage}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${
                                matchPercentage >= 80 ? 'bg-green-600' :
                                matchPercentage >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                              }`}
                              style={{ width: `${matchPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div className="text-sm font-medium text-gray-800 whitespace-nowrap">{career.salaryRange}</div>
                          <div className="flex flex-wrap gap-1">
                            {career.requiredSkills.map(skillId => {
                              const skill = allSkills.find(s => s.id === skillId);
                              const isSelected = userSkills.includes(skillId);
                              
                              return skill ? (
                                <span 
                                  key={skillId}
                                  className={`text-xs px-2 py-1 rounded-full ${
                                    isSelected 
                                      ? 'bg-indigo-100 text-indigo-800' 
                                      : 'bg-gray-100 text-gray-600'
                                  }`}
                                >
                                  {skill.name}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h4 className="font-medium text-gray-700 mb-2">How it works:</h4>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Select an education level to explore</li>
                <li>Click on skills you&apos;re interested in developing</li>
                <li>View careers that match your selected skills</li>
                <li>Adjust your selections to see different paths</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Career Comparison Modal */}
        {showComparison && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">Career Comparison</h3>
                  <button 
                    onClick={() => setShowComparison(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="p-3 whitespace-nowrap">Criteria</th>
                        {careersToCompare.map(careerId => {
                          const career = careerPaths.find(c => c.id === careerId);
                          return career ? (
                            <th key={careerId} className="p-3 whitespace-nowrap">
                              {career.title}
                            </th>
                          ) : null;
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Description</td>
                        {careersToCompare.map(careerId => {
                          const career = careerPaths.find(c => c.id === careerId);
                          return career ? (
                            <td key={careerId} className="p-3">{career.description}</td>
                          ) : null;
                        })}
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Required Skills</td>
                        {careersToCompare.map(careerId => {
                          const career = careerPaths.find(c => c.id === careerId);
                          return career ? (
                            <td key={careerId} className="p-3">
                              <div className="flex flex-wrap gap-1">
                                {career.requiredSkills.map(skillId => {
                                  const skill = allSkills.find(s => s.id === skillId);
                                  const isSelected = userSkills.includes(skillId);
                                  return skill ? (
                                    <span 
                                      key={skillId} 
                                      className={`inline-block px-2 py-1 rounded text-xs ${
                                        isSelected 
                                          ? 'bg-indigo-100 text-indigo-800 font-medium' 
                                          : 'bg-gray-100 text-gray-600'
                                      }`}
                                    >
                                      {skill.name}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </td>
                          ) : null;
                        })}
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Salary Range</td>
                        {careersToCompare.map(careerId => {
                          const career = careerPaths.find(c => c.id === careerId);
                          return career ? (
                            <td key={careerId} className="p-3 font-medium">{career.salaryRange}</td>
                          ) : null;
                        })}
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Growth Prospect</td>
                        {careersToCompare.map(careerId => {
                          const career = careerPaths.find(c => c.id === careerId);
                          return career ? (
                            <td key={careerId} className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                career.growthProspect === 'Very High' ? 'bg-green-100 text-green-800' :
                                career.growthProspect === 'High' ? 'bg-emerald-100 text-emerald-800' :
                                'bg-amber-100 text-amber-800'
                              }`}>
                                {career.growthProspect}
                              </span>
                            </td>
                          ) : null;
                        })}
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Education Level</td>
                        {careersToCompare.map(careerId => {
                          const career = careerPaths.find(c => c.id === careerId);
                          const educLevel = educationLevels.find(e => e.id === career?.educationLevel);
                          return career ? (
                            <td key={careerId} className="p-3">{educLevel?.name || career.educationLevel}</td>
                          ) : null;
                        })}
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Match Score</td>
                        {careersToCompare.map(careerId => {
                          const career = careerPaths.find(c => c.id === careerId);
                          return career ? (
                            <td key={careerId} className="p-3">
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2 mr-2 max-w-[100px]">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      calculateMatchPercentage(career) >= 80 ? 'bg-green-600' :
                                      calculateMatchPercentage(career) >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                                    }`}
                                    style={{ width: `${calculateMatchPercentage(career)}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">
                                  {calculateMatchPercentage(career)}%
                                </span>
                              </div>
                            </td>
                          ) : null;
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setShowComparison(false)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Close Comparison
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
} 