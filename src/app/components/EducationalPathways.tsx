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
  FaArrowRight,
  FaMapMarkedAlt,
  FaRocket,
  FaLightbulb,
  FaChevronRight,
  FaChevronLeft,
  FaCheckCircle,
  FaStar,
  FaTrophy,
  FaMagic
} from 'react-icons/fa';

// Define skill sets for pathway
type Skill = {
  name: string;
  level: 'basic' | 'intermediate' | 'advanced';
};

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
  skills?: Skill[];
  eligibility?: string[];
};

// Journey modes
type JourneyMode = 
  | 'intro' 
  | 'interest-selection' 
  | 'journey-start' 
  | 'stage-exploration' 
  | 'decision-point' 
  | 'pathway-comparison'
  | 'career-outcome';
  
// User profile based on interests
type UserProfile = {
  interests: string[];
  currentStage: string;
  educationHistory: string[];
  suggestedPathways: string[];
  decisions: Record<string, string>;
};

// Animated character states
type CharacterMood = 'happy' | 'curious' | 'thinking' | 'excited' | 'proud';

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
    color: '#ED8936',
    skills: [
      { name: 'Critical Thinking', level: 'advanced' },
      { name: 'Research Skills', level: 'advanced' },
      { name: 'Writing & Communication', level: 'advanced' },
      { name: 'Subject Expertise', level: 'advanced' },
      { name: 'Analytical Skills', level: 'intermediate' }
    ],
    eligibility: [
      'Minimum 45-50% marks in 10+2 for most undergraduate programs',
      'Minimum 50-55% in undergraduate for postgraduate programs',
      'Entrance exams like CUET for central universities',
      'NET/JRF qualification for research fellowships'
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering & Technology Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'higher-secondary', 'undergraduate-engineering', 'postgraduate-engineering', 'doctoral'],
    description: 'Technical education focusing on engineering disciplines',
    careerOutcomes: ['Software Engineer', 'Civil Engineer', 'Mechanical Engineer', 'IT Professional', 'Data Scientist'],
    color: '#3182CE',
    skills: [
      { name: 'Technical Knowledge', level: 'advanced' },
      { name: 'Problem-Solving', level: 'advanced' },
      { name: 'Mathematical Skills', level: 'advanced' },
      { name: 'Design Thinking', level: 'intermediate' },
      { name: 'Project Management', level: 'intermediate' }
    ],
    eligibility: [
      'Science stream (PCM) in 10+2 with minimum 60-75% marks',
      'JEE Main/Advanced for IITs, NITs, and other premier institutions',
      'State-level engineering entrance exams',
      'GATE for postgraduate engineering programs'
    ]
  },
  {
    id: 'medical',
    name: 'Medical & Healthcare Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'higher-secondary', 'undergraduate-medical', 'postgraduate-medical', 'doctoral-medical'],
    description: 'Path to healthcare and medical professions',
    careerOutcomes: ['Doctor', 'Surgeon', 'Dentist', 'Pharmacist', 'Healthcare Administrator'],
    color: '#E53E3E',
    skills: [
      { name: 'Medical Knowledge', level: 'advanced' },
      { name: 'Clinical Skills', level: 'advanced' },
      { name: 'Patient Care', level: 'advanced' },
      { name: 'Diagnostic Abilities', level: 'advanced' },
      { name: 'Ethical Decision Making', level: 'advanced' }
    ],
    eligibility: [
      'Science stream (PCB) in 10+2 with minimum 50-60% marks',
      'NEET-UG for MBBS, BDS, and other medical courses',
      'NEET-PG for postgraduate medical specializations',
      'Specific entrance exams for AIIMS, JIPMER, etc.'
    ]
  },
  {
    id: 'legal',
    name: 'Legal Education Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'higher-secondary', 'undergraduate-law', 'postgraduate-law'],
    description: 'Path to legal professions and judiciary',
    careerOutcomes: ['Lawyer', 'Judge', 'Legal Consultant', 'Corporate Legal Advisor'],
    color: '#718096',
    skills: [
      { name: 'Legal Knowledge', level: 'advanced' },
      { name: 'Critical Analysis', level: 'advanced' },
      { name: 'Research Skills', level: 'advanced' },
      { name: 'Negotiation Skills', level: 'intermediate' },
      { name: 'Verbal Communication', level: 'advanced' }
    ],
    eligibility: [
      'Minimum 45-50% in 10+2 from any stream for 5-year integrated programs',
      'Bachelor\'s degree with minimum 45-50% for 3-year LLB',
      'CLAT, AILET, or state-level law entrance exams',
      'LLB degree for LLM programs'
    ]
  },
  {
    id: 'vocational',
    name: 'Vocational & Technical Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'vocational-training', 'work'],
    description: 'Direct skill-based training for specific trades',
    careerOutcomes: ['Electrician', 'Plumber', 'Mechanic', 'Carpenter', 'Beautician'],
    color: '#38B2AC',
    skills: [
      { name: 'Technical Skills', level: 'advanced' },
      { name: 'Hands-on Training', level: 'advanced' },
      { name: 'Trade-specific Knowledge', level: 'advanced' },
      { name: 'Problem-Solving', level: 'intermediate' },
      { name: 'Customer Service', level: 'intermediate' }
    ],
    eligibility: [
      'Minimum 8th or 10th pass for most ITI courses',
      'Different age requirements based on trade (usually 14-40 years)',
      'Specific physical fitness requirements for certain trades',
      'Entrance tests for some popular vocational programs'
    ]
  },
  {
    id: 'diploma',
    name: 'Diploma to Degree Path',
    stages: ['pre-primary', 'primary', 'middle', 'secondary', 'diploma', 'undergraduate-engineering', 'work'],
    description: 'Alternative technical path via diploma courses',
    careerOutcomes: ['Technical Supervisor', 'Junior Engineer', 'Technical Specialist'],
    color: '#805AD5',
    skills: [
      { name: 'Practical Skills', level: 'advanced' },
      { name: 'Technical Knowledge', level: 'intermediate' },
      { name: 'Problem-Solving', level: 'intermediate' },
      { name: 'Supervision', level: 'intermediate' },
      { name: 'Project Implementation', level: 'intermediate' }
    ],
    eligibility: [
      '10th pass with minimum 35-50% marks for most diploma programs',
      'Polytechnic entrance exams in some states',
      'Lateral entry to 2nd year of B.Tech/BE after diploma',
      'Different eligibility criteria for various specializations'
    ]
  }
];

// Main component
export default function EducationalPathways() {
  // Interactive journey state
  const [journeyMode, setJourneyMode] = useState<JourneyMode>('intro');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    interests: [],
    currentStage: educationStages[0].id, // Use the first stage from the array instead of hardcoding
    educationHistory: [],
    suggestedPathways: [],
    decisions: {}
  });
  const [characterMood, setCharacterMood] = useState<CharacterMood>('happy');
  
  // Animation control
  const [_isAnimating, setIsAnimating] = useState<boolean>(false);
  
  // Legacy state (to be gradually replaced)
  const [selectedPathway, setSelectedPathway] = useState<string>('general-academic');
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [_viewMode, setViewMode] = useState<'pathway' | 'comparison'>('pathway');
  const [_showGuidance, setShowGuidance] = useState<boolean>(false);
  const [_showFilter, setShowFilter] = useState<boolean>(false);
  const [filterInterests, setFilterInterests] = useState<string[]>([]);
  
  // Interest areas for filtering
  const interestAreas = [
    { id: 'technology', name: 'Technology & Computing', pathways: ['engineering', 'diploma'], icon: FaLaptopCode },
    { id: 'science', name: 'Science & Research', pathways: ['engineering', 'medical', 'general-academic'], icon: FaMicroscope },
    { id: 'healthcare', name: 'Healthcare & Medicine', pathways: ['medical'], icon: FaStethoscope },
    { id: 'humanities', name: 'Humanities & Social Sciences', pathways: ['general-academic', 'legal'], icon: FaBook },
    { id: 'law', name: 'Law & Public Policy', pathways: ['legal'], icon: FaBalanceScale },
    { id: 'practical', name: 'Hands-on & Practical Work', pathways: ['vocational', 'diploma'], icon: FaBriefcase },
    { id: 'creative', name: 'Creative & Arts', pathways: ['general-academic'], icon: FaLightbulb }
  ];
  
  // Get the currently selected pathway
  const _getCurrentSelectedPathway = () => educationPathways.find(pathway => pathway.id === selectedPathway);
  
  // Get filtered pathways based on interests
  const _getFilteredPathways = () => filterInterests.length > 0 
    ? educationPathways.filter(pathway => 
        filterInterests.some(interest => 
          interestAreas.find(area => area.id === interest)?.pathways.includes(pathway.id)
        )
      )
    : educationPathways;
  
  // Handler for selecting a pathway
  const _handleSelectPathway = (pathwayId: string) => {
    setSelectedPathway(pathwayId);
    setSelectedStage(null);
  };
  
  // Handle stage selection
  const _selectStage = (stageId: string) => {
    setSelectedStage(stageId === selectedStage ? null : stageId);
  };
  
  // Handle interest filter toggle
  const _toggleInterest = (interestId: string) => {
    if (filterInterests.includes(interestId)) {
      setFilterInterests(filterInterests.filter(id => id !== interestId));
    } else {
      setFilterInterests([...filterInterests, interestId]);
    }
  };
  
  // New interactive journey functions
  
  // Detect decision points
  const isDecisionPoint = (stageId: string) => {
    if (!stageId) return false;
    
    const stage = educationStages.find(s => s.id === stageId);
    if (!stage || !stage.nextStages) return false;
    
    return stage.nextStages.length > 1;
  };
  
  // Update user profile with interests
  const handleInterestSelection = (interestId: string) => {
    setIsAnimating(true);
    
    // Toggle interest selection
    const newInterests = userProfile.interests.includes(interestId)
      ? userProfile.interests.filter(id => id !== interestId)
      : [...userProfile.interests, interestId];
      
    // Find suggested pathways based on selected interests
    const suggestedPathways = newInterests.length > 0
      ? [...new Set(
          newInterests.flatMap(interest => 
            interestAreas.find(area => area.id === interest)?.pathways || []
          )
        )]
      : [];
      
    // Update user profile
    setUserProfile(prev => ({
      ...prev,
      interests: newInterests,
      suggestedPathways,
      // Reset decisions when interests change, since they may lead to different pathways
      decisions: {},
      // Reset education history when interests change
      educationHistory: []
    }));
    
    // Update character mood based on number of interests
    if (newInterests.length > 2) {
      setCharacterMood('excited');
    } else if (newInterests.length > 0) {
      setCharacterMood('curious');
    } else {
      setCharacterMood('thinking');
    }
    
    // Reset selected pathway if it's not compatible with new interests
    if (selectedPathway && newInterests.length > 0) {
      const isSelectedPathwayStillValid = suggestedPathways.includes(selectedPathway);
      if (!isSelectedPathwayStillValid && suggestedPathways.length > 0) {
        setSelectedPathway(suggestedPathways[0]);
      }
    }
    
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  // Move to next stage in the journey
  const continueJourney = () => {
    setIsAnimating(true);
    
    console.log(`Continuing journey from mode: ${journeyMode}`);
    
    // Handle journey transitions
    switch (journeyMode) {
      case 'intro':
        setJourneyMode('interest-selection');
        setCharacterMood('curious');
        break;
      case 'interest-selection':
        if (userProfile.interests.length > 0) {
          setJourneyMode('journey-start');
          setCharacterMood('excited');
          
          // If user has suggestedPathways, select the first one
          if (userProfile.suggestedPathways.length > 0) {
            console.log(`Selecting pathway from interests: ${userProfile.suggestedPathways[0]}`);
            setSelectedPathway(userProfile.suggestedPathways[0]);
          }
        } else {
          // Don't proceed if no interests selected
          setIsAnimating(false);
          return;
        }
        break;
      case 'journey-start':
        setJourneyMode('stage-exploration');
        setCharacterMood('happy');
        break;
      case 'stage-exploration':
        // Check if current stage is a decision point
        if (isDecisionPoint(userProfile.currentStage)) {
          console.log(`Moving to decision point from stage: ${userProfile.currentStage}`);
          setJourneyMode('decision-point');
          setCharacterMood('thinking');
        } else {
          // Move to next stage in the current path
          console.log(`Advancing to next stage from: ${userProfile.currentStage}`);
          advanceToNextStage();
        }
        break;
      case 'decision-point':
        // Decision already made, continue to next stage
        if (userProfile.decisions[userProfile.currentStage]) {
          console.log(`Decision already made for ${userProfile.currentStage}, advancing`);
          advanceToNextStage();
          setJourneyMode('stage-exploration');
          setCharacterMood('happy');
        } else {
          // Don't proceed if no decision made
          console.log(`No decision made for ${userProfile.currentStage}, can't continue`);
          setIsAnimating(false);
          return;
        }
        break;
      case 'pathway-comparison':
        // Return to stage exploration from comparison view
        setJourneyMode('stage-exploration');
        break;
      case 'career-outcome':
        // Restart journey
        resetJourney();
        break;
      default:
        break;
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Handle decision at a decision point
  const makeDecision = (nextStageId: string) => {
    console.log(`Making decision: ${userProfile.currentStage} -> ${nextStageId}`);
    
    // Determine if we're transitioning to a professional (work) stage
    const isWorkStage = nextStageId === 'work';
    const currentStage = educationStages.find(stage => stage.id === userProfile.currentStage);
    const nextStage = educationStages.find(stage => stage.id === nextStageId);
    
    if (!currentStage || !nextStage) {
      console.error('Invalid stage transition');
      return;
    }
    
    // Get current pathway
    const currentPathway = selectedPathway;
    console.log(`Current selected pathway: ${currentPathway}`);
    
    // Special case for work stage - it appears in multiple pathways
    // We want to preserve the current pathway rather than changing it
    let newPathway = currentPathway;
    
    if (!isWorkStage) {
      // Calculate which pathways include this next stage
      const relevantPathways = educationPathways
        .filter((pathway: EducationPathway) => pathway.stages.includes(nextStageId))
        .map((pathway: EducationPathway) => pathway.id);
      
      console.log(`Relevant pathways for stage ${nextStageId}:`, relevantPathways);
      
      // If current selected pathway is among the relevant ones, keep it
      // Otherwise pick the first relevant pathway
      if (relevantPathways.length > 0) {
        if (!relevantPathways.includes(currentPathway)) {
          newPathway = relevantPathways[0];
          console.log(`Selected pathway updated to: ${newPathway}`);
        }
      }
    } else {
      console.log(`Work stage selected - preserving current pathway: ${currentPathway}`);
    }
    
    // Check if this is a professional stage or final stage
    const isProfessionalStage = nextStage.name.toLowerCase().includes('professional') || 
                              nextStage.description.toLowerCase().includes('professional');
    const isFinalStage = !nextStage.nextStages || nextStage.nextStages.length === 0;
    
    // Make a copy of user's current decisions
    const newDecisions = { ...userProfile.decisions };
    newDecisions[userProfile.currentStage] = nextStageId;
    
    // Update education history to include current stage if not already there
    const newHistory = [...userProfile.educationHistory];
    if (!newHistory.includes(userProfile.currentStage)) {
      newHistory.push(userProfile.currentStage);
    }
    
    // Update user profile
    setUserProfile({
      ...userProfile,
      currentStage: nextStageId,
      decisions: newDecisions,
      educationHistory: newHistory
    });
    
    // Set the UI state based on whether this is an endpoint
    setJourneyMode(isProfessionalStage || isFinalStage ? 'career-outcome' : 'stage-exploration');
    setSelectedPathway(newPathway);
    
    // Refresh available pathways based on the new decision
    recalculatePathwaysFromDecisions(newDecisions, userProfile.interests);
  };
  
  // Advance to the next education stage
  const advanceToNextStage = () => {
    const currentStage = educationStages.find(s => s.id === userProfile.currentStage);
    
    if (!currentStage) return;
    
    console.log(`Advancing from stage ${currentStage.id}`);
    
    // If there's a decision recorded, use it
    const nextStageId = userProfile.decisions[userProfile.currentStage] || 
      (currentStage.nextStages.length > 0 ? currentStage.nextStages[0] : null);
    
    console.log(`Next stage determined to be: ${nextStageId}`);
    
    // If there's no next stage, we've reached the end (career)
    if (!nextStageId || nextStageId === 'work') {
      setJourneyMode('career-outcome');
      setCharacterMood('proud');
      return;
    }
    
    // Get the next stage object to check if it exists
    const nextStage = educationStages.find(s => s.id === nextStageId);
    if (!nextStage) return;
    
    // Create a copy of the decisions and add this stage progression
    const newDecisions = { ...userProfile.decisions };
    newDecisions[currentStage.id] = nextStageId;
    
    // Add current stage to history
    const newHistory = [...userProfile.educationHistory, currentStage.id];
    
    console.log('Updated decisions in advance:', newDecisions);
    console.log('Updated history in advance:', newHistory);
    
    // Update the current stage
    setUserProfile(prev => ({
      ...prev,
      currentStage: nextStageId,
      educationHistory: newHistory,
      decisions: newDecisions
    }));
    
    // Select the stage in the UI
    setSelectedStage(nextStageId);
    
    // Update character mood based on stage content
    if (isDecisionPoint(nextStageId)) {
      setCharacterMood('thinking');
    } else {
      setCharacterMood('happy');
    }
  };
  
  // Reset the journey
  const resetJourney = () => {
    // Reset user profile
    setUserProfile({
      interests: [],
      currentStage: educationStages[0].id,
      educationHistory: [],
      suggestedPathways: [],
      decisions: {}
    });
    
    // Reset UI state
    setSelectedPathway('general-academic');
    setSelectedStage(null);
    setJourneyMode('intro');
    setCharacterMood('happy');
    setIsAnimating(false);
    setViewMode('pathway');
    setShowGuidance(false);
    setShowFilter(false);
    setFilterInterests([]);
  };
  
  // Go back to previous step in the journey
  const goBack = () => {
    setIsAnimating(true);
    
    switch (journeyMode) {
      case 'interest-selection':
        setJourneyMode('intro');
        setCharacterMood('happy');
        break;
      
      case 'journey-start':
        // Going back to interest selection - should preserve interests but clear other selections
        setJourneyMode('interest-selection');
        setCharacterMood('curious');
        break;
      
      case 'stage-exploration':
        // If we have history, go back to the previous stage
        if (userProfile.educationHistory.length > 0) {
          const previousStage = userProfile.educationHistory[userProfile.educationHistory.length - 1];
          
          // Verify the previous stage exists
          const prevStageObj = educationStages.find(s => s.id === previousStage);
          if (prevStageObj) {
            // Create new decisions object without the decision that led to current stage
            const newDecisions = { ...userProfile.decisions };
            
            // Find which stage's decision led to current stage
            const decisionEntries = Object.entries(newDecisions);
            const stagesThatLedHere = decisionEntries
              .filter(([_, nextStage]) => nextStage === userProfile.currentStage)
              .map(([stageId]) => stageId);
            
            // Remove decisions that led to current stage
            stagesThatLedHere.forEach(stageId => {
              delete newDecisions[stageId];
            });
            
            // Create new education history without the current stage
            const newHistory = userProfile.educationHistory.slice(0, -1);
            
            // Update state
            setUserProfile(prev => ({
              ...prev,
              currentStage: previousStage,
              educationHistory: newHistory,
              decisions: newDecisions
            }));
            
            // Recalculate suggested pathways based on remaining decisions
            const pathwaysAfterBacktrack = recalculatePathwaysFromDecisions(newDecisions, userProfile.interests);
            if (pathwaysAfterBacktrack.length > 0) {
              // If current selected pathway is no longer valid, update it
              if (!pathwaysAfterBacktrack.includes(selectedPathway)) {
                setSelectedPathway(pathwaysAfterBacktrack[0]);
              }
              
              // Update suggested pathways in user profile
              setUserProfile(prev => ({
                ...prev,
                suggestedPathways: pathwaysAfterBacktrack
              }));
            }
            
            setSelectedStage(previousStage);
            setCharacterMood('thinking');
          } else {
            // If previous stage doesn't exist, go back to journey start
            setJourneyMode('journey-start');
            setCharacterMood('excited');
          }
        } else {
          // If no history, go back to journey start
          setJourneyMode('journey-start');
          setCharacterMood('excited');
        }
        break;
      
      case 'decision-point':
        // Going back from decision to stage exploration
        setJourneyMode('stage-exploration');
        setCharacterMood('happy');
        break;
      
      case 'pathway-comparison':
        // Going back from comparison to exploration
        setJourneyMode('stage-exploration');
        setCharacterMood('happy');
        break;
      
      case 'career-outcome':
        // Going back from career outcome - remove any final decisions
        // Find the last decision made
        {
          const lastStageId = userProfile.educationHistory[userProfile.educationHistory.length - 1];
          if (lastStageId) {
            // Remove the last decision
            const newDecisions = { ...userProfile.decisions };
            delete newDecisions[lastStageId];
            
            // Update state
            setUserProfile(prev => ({
              ...prev,
              decisions: newDecisions
            }));
          }
        }
        
        setJourneyMode('stage-exploration');
        setCharacterMood('happy');
        break;
      
      default:
        break;
    }
    
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  // Get the current stage data
  const getCurrentStage = () => {
    return educationStages.find(stage => stage.id === userProfile.currentStage);
  };
  
  // Get available next stages for decision points
  const getNextStageOptions = () => {
    const currentStage = getCurrentStage();
    if (!currentStage) return [];
    
    if (!currentStage.nextStages || currentStage.nextStages.length === 0) {
      return [];
    }
    
    return currentStage.nextStages
      .map(stageId => educationStages.find(stage => stage.id === stageId))
      .filter((stage): stage is EducationStage => !!stage);
  };
  
  // Helper function to recalculate valid pathways based on decisions
  const recalculatePathwaysFromDecisions = (
    decisions: Record<string, string>,
    interests: string[]
  ): string[] => {
    // If no decisions, use interests to determine pathways
    if (Object.keys(decisions).length === 0) {
      if (interests.length === 0) {
        return educationPathways.map(p => p.id); // All pathways
      }
      
      // Get pathways from interests
      return [...new Set(
        interests.flatMap(interest => 
          interestAreas.find(area => area.id === interest)?.pathways || []
        )
      )];
    }
    
    // Find pathways that include all decisions made
    const validPathways = educationPathways.filter(pathway => {
      // Check if all decisions are included in this pathway
      for (const [_stageId, nextStageId] of Object.entries(decisions)) {
        if (!pathway.stages.includes(nextStageId)) {
          return false;
        }
      }
      return true;
    }).map(pathway => pathway.id);
    
    // Further filter by interests if both interests and decisions exist
    if (interests.length > 0) {
      const interestPathways = [...new Set(
        interests.flatMap(interest => 
          interestAreas.find(area => area.id === interest)?.pathways || []
        )
      )];
      
      return validPathways.filter(pathwayId => 
        interestPathways.includes(pathwayId)
      );
    }
    
    return validPathways;
  };
  
  // Get the current path based on decisions made
  const getCurrentPath = () => {
    // If a pathway is explicitly selected, use that
    if (selectedPathway) {
      return educationPathways.find(path => path.id === selectedPathway);
    }
    
    // If user has suggested pathways based on interests, use the first one
    if (userProfile.suggestedPathways.length > 0) {
      const suggestedPathId = userProfile.suggestedPathways[0];
      return educationPathways.find(path => path.id === suggestedPathId);
    }
    
    // Try to infer path from the current stage and previous decisions
    if (userProfile.currentStage) {
      // Get all pathways that include the current stage
      const pathsWithCurrentStage = educationPathways.filter(pathway => 
        pathway.stages.includes(userProfile.currentStage)
      );
      
      // If only one pathway includes this stage, use it
      if (pathsWithCurrentStage.length === 1) {
        return pathsWithCurrentStage[0];
      }
      
      // If multiple pathways include this stage, check previous decisions
      if (pathsWithCurrentStage.length > 1 && Object.keys(userProfile.decisions).length > 0) {
        // Find pathways that include all decisions made
        const compatiblePaths = pathsWithCurrentStage.filter(pathway => {
          // Check if all decisions are included in this pathway
          for (const [stageId, nextStageId] of Object.entries(userProfile.decisions)) {
            if (pathway.stages.includes(stageId) && !pathway.stages.includes(nextStageId)) {
              return false;
            }
          }
          return true;
        });
        
        // Return the first compatible path
        if (compatiblePaths.length > 0) {
          return compatiblePaths[0];
        }
      }
    }
    
    // Default to general academic path if we can't determine
    return educationPathways.find(path => path.id === 'general-academic') || educationPathways[0];
  };
  
  // Main render
  return (
    <div className="py-8 px-4 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        {renderJourneyContent()}
      </div>
    </div>
  );
  
  // Render content based on journey mode
  function renderJourneyContent() {
    switch (journeyMode) {
      case 'intro':
        return renderIntroScreen();
      case 'interest-selection':
        return renderInterestSelection();
      case 'journey-start':
        return renderJourneyStart();
      case 'stage-exploration':
        return renderStageExploration();
      case 'decision-point':
        return renderDecisionPoint();
      case 'pathway-comparison':
        return renderPathwayComparison();
      case 'career-outcome':
        return renderCareerOutcome();
      default:
        return null;
    }
  }
  
  // Render the intro screen
  function renderIntroScreen() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10"
      >
        <div className="relative mb-10 inline-block">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 p-1 rounded-full inline-block"
          >
            <div className="bg-white rounded-full p-5">
              <FaMagic className="text-7xl text-indigo-600" />
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2"
          >
            <FaStar className="text-xl text-white" />
          </motion.div>
        </div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 pb-1 tracking-wide"
        >
          Your Magical Education Journey
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto"
        >
          Discover amazing pathways that will lead you to exciting careers! Let&apos;s explore together what your future can look like.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-2 inline-block">
                <FaMapMarkedAlt className="text-3xl text-blue-600" />
              </div>
              <p className="text-sm font-medium">Explore Paths</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full mb-2 inline-block">
                <FaLightbulb className="text-3xl text-green-600" />
              </div>
              <p className="text-sm font-medium">Discover Skills</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-2 inline-block">
                <FaRocket className="text-3xl text-purple-600" />
              </div>
              <p className="text-sm font-medium">Find Careers</p>
            </div>
          </div>
        </motion.div>
        
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={continueJourney}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Begin Your Adventure
          <FaChevronRight className="inline-block ml-2" />
        </motion.button>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 text-gray-500 text-sm"
        >
          A fun way to explore educational paths in India
        </motion.p>
      </motion.div>
    );
  }
  
  // Render interest selection screen
  function renderInterestSelection() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-8"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={goBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <FaChevronLeft className="mr-1" />
            <span>Back</span>
          </motion.button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700"
          >
            Step 1 of 3: Choose Your Interests
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3 text-gray-800">What subjects interest you?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick what you love and we&apos;ll show you educational paths that match your interests!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {interestAreas.map((interest, index) => {
              const isSelected = userProfile.interests.includes(interest.id);
              const Icon = interest.icon;
              
              return (
                <motion.div
              key={interest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleInterestSelection(interest.id)}
                  className={`cursor-pointer rounded-xl p-6 transition-all ${
                    isSelected 
                      ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 shadow-md transform -translate-y-1' 
                      : 'bg-white border border-gray-200 hover:border-indigo-200 hover:shadow'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className={`p-3 rounded-full ${
                        isSelected ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <Icon className="text-2xl" />
        </div>
                    <div className="flex-1">
            <div className="flex justify-between items-center">
                        <h3 className={`font-bold text-lg ${isSelected ? 'text-indigo-700' : 'text-gray-700'}`}>
                          {interest.name}
                        </h3>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                            className="text-indigo-600"
                          >
                            <FaCheckCircle />
                          </motion.div>
                        )}
            </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {getInterestDescription(interest.id)}
                      </p>
          </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-between items-center"
        >
          <div className="text-gray-500 text-sm">
            {userProfile.interests.length === 0 ? (
              "Select at least one interest to continue"
            ) : (
              <>
                <span className="font-medium text-indigo-600">{userProfile.interests.length}</span> interest{userProfile.interests.length !== 1 ? 's' : ''} selected
              </>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={continueJourney}
            disabled={userProfile.interests.length === 0}
            className={`px-6 py-3 rounded-lg font-bold ${
              userProfile.interests.length > 0
                ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue to Pathways
            <FaChevronRight className="inline-block ml-2" />
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }
  
  // Helper function to get interest descriptions
  function getInterestDescription(interestId: string): string {
    switch (interestId) {
      case 'technology':
        return 'Computers, coding, and creating digital solutions';
      case 'science':
        return 'Exploring and understanding how the world works';
      case 'healthcare':
        return 'Helping people stay healthy and treating illness';
      case 'humanities':
        return 'Literature, history, philosophy, and social studies';
      case 'law':
        return 'Rules, rights, and justice in society';
      case 'practical':
        return 'Building things and working with your hands';
      case 'creative':
        return 'Art, design, music, and creative expression';
      default:
        return 'Explore this area of interest';
    }
  }
  
  // Render journey start screen
  function renderJourneyStart() {
    // Get the current path based on interests
    const suggestedPath = userProfile.suggestedPathways.length > 0 
      ? educationPathways.find(path => path.id === userProfile.suggestedPathways[0])
      : educationPathways.find(path => path.id === selectedPathway);
      
    // Get selected interests names
    const selectedInterests = userProfile.interests.map(id => 
      interestAreas.find(area => area.id === id)?.name || ''
    );
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="py-8"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={goBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <FaChevronLeft className="mr-1" />
            <span>Back to Interests</span>
          </motion.button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700"
          >
            Step 2 of 3: Your Journey Map
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Education Adventure!</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
              <h3 className="font-bold text-xl mb-3">Based on your interests:</h3>
              
              <div className="space-y-2 mb-6">
                {selectedInterests.map((interest, idx) => (
                  <div key={idx} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
              
              {suggestedPath && (
                <>
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h3 className="font-bold text-lg mb-2">Recommended Path:</h3>
                    <div 
                      className="text-lg font-medium p-2 rounded-md mb-2"
                      style={{ backgroundColor: `${suggestedPath.color}20`, color: suggestedPath.color }}
                    >
                      {suggestedPath.name}
                    </div>
                    <p className="text-gray-600 text-sm">{suggestedPath.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Potential Careers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {suggestedPath.careerOutcomes.slice(0, 3).map((career, idx) => (
                        <span 
                          key={idx} 
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                        >
                          {career}
                        </span>
                      ))}
                      {suggestedPath.careerOutcomes.length > 3 && (
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          +{suggestedPath.careerOutcomes.length - 3} more
                        </span>
                  )}
                </div>
              </div>
                </>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={continueJourney}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-md hover:bg-indigo-700 transition-colors"
            >
              Start My Journey
              <FaChevronRight className="inline-block ml-2" />
            </motion.button>
            </motion.div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Character background */}
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ 
                  scale: [0.9, 1, 0.9],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3
                }}
                className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-purple-100 rounded-full opacity-70 z-0 transform -translate-y-5 translate-x-2 scale-[1.15]"
              />
              
              {/* Character */}
              <div className="relative z-10 w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  {renderCharacter(characterMood)}
        </div>
        
                {/* Character speech bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-20 -right-10 bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-200 max-w-[220px]"
                >
                  <div className="font-medium text-sm mb-1">
                    {getCharacterSpeech(characterMood, suggestedPath?.name)}
                  </div>
                  <div className="absolute bottom-[-8px] right-10 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                </motion.div>
              </div>
              
              <div className="mt-6 text-center">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  onClick={() => setJourneyMode('pathway-comparison')}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  Compare All Pathways
                </motion.button>
          </div>
        </div>
          </motion.div>
      </div>
      </motion.div>
    );
  }
  
  // Character component based on mood
  function renderCharacter(mood: CharacterMood) {
    // This would be even better with actual character images
    // For now we'll use emojis and styling to represent different moods
    const moodEmojis: Record<CharacterMood, string> = {
      happy: '😊',
      curious: '🤔',
      thinking: '🧐',
      excited: '😃',
      proud: '😎'
    };
    
    const emoji = moodEmojis[mood];
    const moodColors: Record<CharacterMood, string> = {
      happy: 'bg-green-100 border-green-300',
      curious: 'bg-yellow-100 border-yellow-300',
      thinking: 'bg-blue-100 border-blue-300',
      excited: 'bg-purple-100 border-purple-300',
      proud: 'bg-indigo-100 border-indigo-300'
    };
    
    return (
      <motion.div
        animate={{ 
          y: [0, -5, 0],
          rotate: mood === 'thinking' ? [-2, 2, -2] : 0
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 2 },
          rotate: { repeat: Infinity, duration: 1.5 }
        }}
        className={`text-7xl w-32 h-32 flex items-center justify-center rounded-full border-4 ${moodColors[mood]}`}
      >
        {emoji}
      </motion.div>
    );
  }
  
  // Get character speech based on mood and context
  function getCharacterSpeech(mood: CharacterMood, pathwayName?: string): string {
    switch (mood) {
      case 'happy':
        return "I'm excited to guide you through your education journey!";
      case 'curious':
        return "Hmm, let's explore what options we have based on your interests.";
      case 'thinking':
        return "Let me think about the best path for you...";
      case 'excited':
        return pathwayName 
          ? `Wow! The ${pathwayName} looks perfect for you!` 
          : "I've found some amazing options for you!";
      case 'proud':
        return "You've made some great choices for your future!";
      default:
        return "Let's explore your education options together!";
    }
  }
  
  // Render stage exploration screen
  function renderStageExploration() {
    const currentStage = getCurrentStage();
    if (!currentStage) return null;
    
    const currentPath = getCurrentPath();
    const currentStageIndex = currentPath?.stages.indexOf(currentStage.id) || 0;
    const progress = currentPath ? ((currentStageIndex + 1) / currentPath.stages.length) * 100 : 0;
    
    // Get all stages in the current pathway
    const pathwayStages = currentPath 
      ? currentPath.stages.map(stageId => educationStages.find(s => s.id === stageId)).filter(Boolean) as EducationStage[]
      : [];
    
    // Get previous, current, and next stages for visualization
    const currentIndex = pathwayStages.findIndex(stage => stage.id === currentStage.id);
    const _previousStages = pathwayStages.slice(0, currentIndex);
    const nextStages = pathwayStages.slice(currentIndex + 1);
    
    // Check if this is a decision point
    const isCurrentStageDecisionPoint = isDecisionPoint(currentStage.id);
        
    const Icon = currentStage.icon;
          
          return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-6"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={goBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <FaChevronLeft className="mr-1" />
            <span>Back</span>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700"
          >
            Step 3 of 3: Exploring Your Path
          </motion.div>
                </div>

        {/* Path Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Start</span>
            <span>Your Progress</span>
            <span>Career</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-4 rounded-full"
              style={{ backgroundColor: currentPath?.color || '#4f46e5' }}
            ></motion.div>
            {/* Current stage marker */}
            <motion.div
              initial={{ scale: 0, x: "-50%" }}
              animate={{ scale: 1, x: "-50%" }}
              transition={{ type: "spring", delay: 1 }}
              className="absolute top-0 w-8 h-8 rounded-full bg-white border-4 border-indigo-600 transform -translate-y-1/4"
              style={{ 
                left: `${progress}%`,
                borderColor: currentPath?.color || '#4f46e5'
              }}
            ></motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Timeline Navigation Panel */}
          <div className="md:col-span-1 bg-white rounded-lg shadow-md border border-gray-200 p-4 h-max">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Your Education Journey</h3>
            <div className="space-y-1">
              {pathwayStages.map((stage, idx) => {
                const StageIcon = stage.icon;
                const isCurrentItem = stage.id === userProfile.currentStage;
                const isPastItem = userProfile.educationHistory.includes(stage.id);
                const isDecisionMadeForThisStage = userProfile.decisions[stage.id] !== undefined;
                const _isFutureItem = idx > currentIndex;
                
                return (
                  <motion.div
                    key={stage.id}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    onClick={() => {
                      if (isPastItem || isCurrentItem) {
                        setUserProfile(prev => ({ 
                          ...prev, 
                          currentStage: stage.id,
                          // If going back to previous stage, trim the history
                          educationHistory: isPastItem ? 
                            prev.educationHistory.slice(0, prev.educationHistory.indexOf(stage.id)) :
                            prev.educationHistory
                        }));
                        setSelectedStage(stage.id);
                      }
                    }}
                    className={`flex items-center p-2 rounded-md cursor-pointer relative ${
                      isCurrentItem 
                        ? 'bg-indigo-100 border border-indigo-300' 
                        : isPastItem 
                          ? 'bg-gray-100 opacity-80 hover:bg-gray-200' 
                          : (isDecisionMadeForThisStage ? 'bg-gray-50 hover:bg-gray-100' : 'hover:bg-gray-100')
                    }`}
                  >
                    {/* Connector line */}
                    {idx !== 0 && (
                      <div className="absolute left-[1.25rem] top-0 h-2 w-0.5 -mt-2 bg-gray-300 z-0"></div>
                    )}
                    
                    <div className={`mr-3 z-10 p-2 rounded-full text-lg ${
                      isCurrentItem 
                        ? 'bg-indigo-500 text-white' 
                        : isPastItem 
                          ? 'bg-green-400 text-white' 
                          : (isDecisionMadeForThisStage ? 'bg-yellow-300 text-gray-700' : 'bg-gray-200 text-gray-500')
                    }`}>
                      <StageIcon />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">
                          {stage.name}
                        </div>
                        {isPastItem && (
                          <FaCheckCircle className="text-green-500 ml-2" />
                        )}
                        {isDecisionMadeForThisStage && !isPastItem && !isCurrentItem && (
                          <FaArrowRight className="text-yellow-500 ml-2" />
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stage.ageRange}
                      </div>
                      
                      {/* Show the decision made for this stage if any */}
                      {isDecisionMadeForThisStage && (
                        <div className="mt-1 text-xs bg-yellow-50 px-2 py-1 rounded">
                          <span className="font-medium">Next: </span> 
                          {educationStages.find(s => s.id === userProfile.decisions[stage.id])?.name || ''}
                        </div>
                      )}
                    </div>
                    
                    {isDecisionPoint(stage.id) && (
                      <div className="absolute right-0 top-0 w-2 h-2 rounded-full bg-yellow-400 transform -translate-y-1/4 translate-x-1/4"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Current Stage Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Current Stage Card */}
              <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-md border border-l-4 p-6"
              style={{ borderLeftColor: currentStage.color }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div 
                    className="p-3 rounded-full mr-4 text-2xl"
                    style={{ backgroundColor: `${currentStage.color}30`, color: currentStage.color }}
                  >
                          <Icon />
                        </div>
                  
                        <div>
                    <h2 className="text-2xl font-bold">{currentStage.name}</h2>
                          <div className="flex space-x-2 mt-1">
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-800">
                        {currentStage.ageRange}
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {currentStage.years}
                            </span>
                      {isCurrentStageDecisionPoint && (
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center">
                          <FaInfoCircle className="mr-1" size={10} />
                          Decision Point
                        </span>
                      )}
                        </div>
                      </div>
                    </div>
                    
                {currentPath && (
                  <div 
                    className="px-3 py-1 rounded-md text-sm font-medium"
                    style={{ backgroundColor: `${currentPath.color}20`, color: currentPath.color }}
                  >
                    {currentPath.name}
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <p className="text-gray-700">{currentStage.description}</p>
                
                {currentStage.examinations.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-bold text-gray-700 mb-2">Key Examinations:</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentStage.examinations.map((exam, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                                    {exam}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
              </div>
            </motion.div>
            
            {/* Next Steps or Decision Points */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {isCurrentStageDecisionPoint ? (
                <div>
                  <div className="flex items-center mb-4">
                    <FaLightbulb className="text-yellow-500 mr-2" />
                    <h3 className="font-bold text-xl">Decision Point: Choose Your Next Step</h3>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    This is an important point in your educational journey where you need to make a choice.
                    Your decision here will influence your future career options.
                  </div>
                  
                  {/* Simple grid layout with consistent buttons - no expanded menu */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {getNextStageOptions().map((option, idx) => {
                      const OptionIcon = option.icon;
                      
                      // Find related pathways for this option
                      const relatedPathways = educationPathways.filter(
                        pathway => pathway.stages.includes(option.id)
                      );
                      
                      return (
                        <motion.div
                          key={option.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + (idx * 0.1) }}
                          className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 cursor-pointer hover:shadow-md transition-all h-full flex flex-col"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${option.color}20`, color: option.color }}>
                              <OptionIcon className="text-xl" />
                            </div>
                            <h4 className="font-bold text-lg">{option.name}</h4>
                          </div>
                          
                          <div className="mb-3">
                            <div className="flex space-x-2 mb-2">
                              <span className="px-2 py-1 text-sm rounded-full bg-gray-200 text-gray-800 whitespace-nowrap">
                                {option.ageRange}
                              </span>
                              <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800 whitespace-nowrap">
                                {option.years}
                              </span>
                            </div>
                            <p className="text-gray-600">{option.description}</p>
                          </div>
                          
                          {relatedPathways.length > 0 && (
                            <div className="mt-auto pt-3 border-t border-gray-100">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {relatedPathways.map(pathway => (
                                  <span
                                    key={pathway.id}
                                    className="px-3 py-1 rounded-full text-sm whitespace-nowrap"
                                    style={{ backgroundColor: `${pathway.color}20`, color: pathway.color }}
                                  >
                                    {pathway.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="mt-4 text-right">
                            <button
                              onClick={() => makeDecision(option.id)}
                              className="px-4 py-1.5 rounded-lg text-white font-medium"
                              style={{ backgroundColor: option.color }}
                            >
                              Choose This Path
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-xl">Continue Your Journey</h3>
                    
                    <button
                      onClick={() => setJourneyMode('pathway-comparison')}
                      className="text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      Compare Pathways
                    </button>
                        </div>
                  
                  {nextStages.length > 0 ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={continueJourney}
                      className="bg-white border-2 border-indigo-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <FaArrowRight className="text-indigo-500 mr-3" />
                          <div>
                            <h4 className="font-bold">Next: {nextStages[0]?.name}</h4>
                            <p className="text-sm text-gray-600">{nextStages[0]?.ageRange} · {nextStages[0]?.years}</p>
                          </div>
                        </div>
                        <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                          Continue
                  </div>
                </div>
              </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={continueJourney}
                      className="bg-white border-2 border-green-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <FaTrophy className="text-green-500 mr-3" />
                          <div>
                            <h4 className="font-bold">Ready for Your Career!</h4>
                            <p className="text-sm text-gray-600">See what career options await you</p>
      </div>
        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          Finish Journey
      </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
            
            {/* Skills & Learning Outcomes */}
            {currentPath?.skills && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
              >
                <h3 className="font-bold text-lg mb-4">Skills You'll Develop</h3>
            <div className="space-y-3">
                  {currentPath.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                  <span>{skill.name}</span>
                  <div className="w-36 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full" 
                      style={{ 
                        width: skill.level === 'basic' ? '33%' : skill.level === 'intermediate' ? '67%' : '100%',
                        backgroundColor: currentPath.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Render decision point screen
  function renderDecisionPoint() {
    const currentStage = getCurrentStage();
    if (!currentStage) return null;
    
    const nextOptions = getNextStageOptions();
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-6"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={goBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <FaChevronLeft className="mr-1" />
            <span>Back</span>
          </motion.button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700 flex items-center"
          >
            <FaInfoCircle className="mr-1" />
            Important Decision Point
          </motion.div>
        </div>
        
        {/* Restructured to a vertical layout for side panel and main content */}
        <div className="flex flex-col gap-8">
          {/* Info panel */}
          <div className="w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-yellow-200 p-6 shadow-md"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-full bg-yellow-200 text-yellow-700">
                  <FaLightbulb />
                </div>
                <h2 className="text-xl font-bold text-yellow-800">You are at {currentStage.name}</h2>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-yellow-700 mb-4">{currentStage.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-bold text-yellow-800 mb-2">This is an important crossroads!</h3>
                    <p className="text-sm text-yellow-600">
                      The choice you make now will determine your future educational path and career options.
                      Take your time to consider each option carefully.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-md border border-yellow-200 mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">Current Stage</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-800">
                        {currentStage.ageRange}
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {currentStage.years}
                      </span>
                    </div>
                    
                    {currentStage.examinations.length > 0 && (
                      <div className="mt-3">
                        <h4 className="font-medium text-gray-700 mb-1">Examinations</h4>
                        <div className="flex flex-wrap gap-1">
                          {currentStage.examinations.map((exam, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                              {exam}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {renderCharacter('thinking')}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="absolute -top-16 -right-10 bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-200 max-w-[220px]"
                    >
                      <div className="font-medium text-sm mb-1">
                        Which path should I choose? Each leads to different opportunities!
                      </div>
                      <div className="absolute bottom-[-8px] right-10 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Options panel - two wide cards per row */}
          <div className="w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">Choose Your Path Forward</h2>
              <p className="text-gray-600 mb-6">
                Each option below represents a different educational pathway. Consider your interests, strengths, and future goals.
              </p>
              
              {/* Two wide cards per row with auto-adjustment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {nextOptions.map((option, idx) => {
                  const OptionIcon = option.icon;
                  
                  // Find pathway that contains this option
                  const relatedPathways = educationPathways.filter(
                    pathway => pathway.stages.includes(option.id)
                  );
                  
                  // Check if this is an endpoint (professional career or final stage)
                  const isProfessional = option.name.toLowerCase().includes('professional') || 
                                        option.description.toLowerCase().includes('professional');
                  const isFinalStage = option.nextStages.length === 0;
                  const isEndpoint = isProfessional || isFinalStage;
                  
                  return (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white rounded-xl border-2 shadow-md cursor-pointer transition-all overflow-hidden h-full flex flex-col"
                      style={{ borderColor: option.color }}
                    >
                      <div className="h-3" style={{ backgroundColor: option.color }}></div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${option.color}20`, color: option.color }}>
                            <OptionIcon className="text-xl" />
                          </div>
                          <h3 className="font-bold text-xl">{option.name}</h3>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex space-x-2 mb-2">
                            <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800 whitespace-nowrap">
                              {option.ageRange}
                            </span>
                            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 whitespace-nowrap">
                              {option.years}
                            </span>
                            {isEndpoint && (
                              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800 whitespace-nowrap flex items-center">
                                <FaCheckCircle className="mr-1 text-xs" />
                                End Point
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600">{option.description}</p>
                        </div>
                        
                        {relatedPathways.length > 0 && (
                          <div className="mt-auto pt-4 border-t border-gray-100">
                            <h4 className="font-medium text-gray-700 mb-2">
                              {relatedPathways.length === 1 ? 'This leads to:' : 'This can lead to:'}
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {relatedPathways.map(pathway => (
                                <span
                                  key={pathway.id}
                                  className="px-3 py-1.5 text-sm rounded-full whitespace-nowrap"
                                  style={{ backgroundColor: `${pathway.color}20`, color: pathway.color }}
                                >
                                  {pathway.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-6 text-right">
                          <motion.button
                            onClick={() => {
                              // Save the current section before proceeding
                              const currentPath = getCurrentPath();
                              if (currentPath) {
                                // Store this decision
                                setUserProfile(prev => ({
                                  ...prev,
                                  decisions: {
                                    ...prev.decisions,
                                    [currentStage.id]: option.id
                                  }
                                }));
                                
                                // If this is an endpoint, go to career outcome
                                if (isEndpoint) {
                                  setJourneyMode('career-outcome');
                                } else {
                                  // Otherwise make the decision and continue
                                  makeDecision(option.id);
                                }
                              }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 rounded-lg text-white font-medium"
                            style={{ backgroundColor: option.color }}
                          >
                            {isEndpoint ? 'Complete Journey' : 'Choose This Path'}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-center text-gray-500 text-sm mt-8"
            >
              Don&apos;t worry! You&apos;re not locked in forever. Many students change their educational paths later.
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Render pathway comparison screen
  function renderPathwayComparison() {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-6"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={goBack}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <FaChevronLeft className="mr-1" />
            <span>Back to Journey</span>
          </motion.button>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3">Compare Educational Pathways</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how different educational paths compare across key stages. This helps you understand
            the different options and requirements for various career paths.
          </p>
        </motion.div>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 mb-8 overflow-hidden">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="font-bold text-xl">Educational Stages Comparison</h3>
            <div className="text-sm text-gray-500">
              Swipe horizontally to see all pathways
            </div>
              </div>
            
            <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 gap-4 mb-4">
                <div className="col-span-1"></div>
                {educationPathways.map((pathway, idx) => (
                  <motion.div
                    key={pathway.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="col-span-1 text-center font-bold"
                  >
                    <div 
                      className="h-2 rounded-t-full mb-1" 
                      style={{ backgroundColor: pathway.color }}
                    ></div>
                    <div 
                      className="p-2 rounded-b-lg text-sm"
                      style={{ backgroundColor: `${pathway.color}10`, color: pathway.color }}
                    >
                        {pathway.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {['Pre-Primary', 'Primary & Middle', 'Secondary', 'Higher Secondary', 'Undergraduate', 'Postgraduate', 'Doctoral'].map((stageGroup, rowIdx) => (
                <motion.div
                  key={stageGroup}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (rowIdx * 0.1) }}
                  className={`grid grid-cols-7 gap-4 py-4 ${rowIdx % 2 === 0 ? 'bg-gray-50' : ''}`}
                >
                  <div className="col-span-1 font-medium flex items-center">
                        {stageGroup}
                  </div>
                  
                      {educationPathways.map(pathway => {
                        const relevantStages = educationStages.filter(stage => 
                          pathway.stages.includes(stage.id) && 
                          (
                            (stageGroup === 'Pre-Primary' && stage.id === 'pre-primary') ||
                            (stageGroup === 'Primary & Middle' && ['primary', 'middle'].includes(stage.id)) ||
                            (stageGroup === 'Secondary' && stage.id === 'secondary') ||
                            (stageGroup === 'Higher Secondary' && stage.id === 'higher-secondary') ||
                        (stageGroup === 'Undergraduate' && (stage.id.startsWith('undergraduate') || stage.id === 'diploma' || stage.id === 'vocational-training')) ||
                            (stageGroup === 'Postgraduate' && stage.id.startsWith('postgraduate')) ||
                            (stageGroup === 'Doctoral' && stage.id.includes('doctoral'))
                          )
                        );
                        
                        return (
                      <div 
                        key={pathway.id} 
                        className="col-span-1 text-center"
                      >
                            {relevantStages.length > 0 ? (
                              <div className="space-y-2">
                            {relevantStages.map(stage => {
                              const StageIcon = stage.icon;
                              return (
                                <div 
                                  key={stage.id} 
                                  className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                                  onClick={() => {
                                    setUserProfile(prev => ({
                                      ...prev,
                                      currentStage: stage.id,
                                      educationHistory: []
                                    }));
                                    setSelectedPathway(pathway.id);
                                    setJourneyMode('stage-exploration');
                                  }}
                                >
                                  <div 
                                    className="p-2 rounded-full mb-1"
                                    style={{ backgroundColor: `${stage.color}20`, color: stage.color }}
                                  >
                                    <StageIcon className="text-sm" />
                                  </div>
                                  <div className="text-xs font-medium">{stage.name.split(' ').slice(0, 2).join(' ')}</div>
                                  <div className="text-xs text-gray-500">{stage.years}</div>
                                </div>
                              );
                            })}
                              </div>
                            ) : (
                          <div className="h-full flex items-center justify-center text-gray-300">
                            —
                          </div>
                            )}
                      </div>
                        );
                      })}
                </motion.div>
                  ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-white rounded-lg border border-gray-200 shadow-md p-6"
          >
            <h3 className="font-bold text-xl mb-4">Career Outcomes</h3>
            <div className="space-y-3">
              {educationPathways.map(pathway => (
                <div 
                  key={pathway.id}
                  className="border-l-4 pl-3 py-1"
                  style={{ borderColor: pathway.color }}
                >
                  <div className="font-medium mb-1">{pathway.name}</div>
                  <div className="flex flex-wrap gap-1">
                    {pathway.careerOutcomes.slice(0, 3).map((career, idx) => (
                      <span 
                        key={idx}
                        className="inline-block px-2 py-0.5 text-xs bg-gray-100 rounded-full"
                      >
                        {career}
                      </span>
                    ))}
                    {pathway.careerOutcomes.length > 3 && (
                      <span className="inline-block px-2 py-0.5 text-xs bg-gray-100 rounded-full">
                        +{pathway.careerOutcomes.length - 3} more
                      </span>
        )}
      </div>
    </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-white rounded-lg border border-gray-200 shadow-md p-6"
          >
            <h3 className="font-bold text-xl mb-4">Skills Developed</h3>
            
            <div className="grid grid-cols-3 gap-3">
              {['Critical Thinking', 'Technical Knowledge', 'Problem-Solving', 'Research Skills', 'Communication', 'Subject Expertise'].map((skill) => (
                <div
                  key={skill}
                  className="relative overflow-hidden rounded-lg border border-gray-200 p-3"
                >
                  <div className="font-medium text-sm mb-2">{skill}</div>
                  <div className="flex space-x-1">
                    {educationPathways.map(pathway => {
                      const pathwaySkill = pathway.skills?.find(s => s.name === skill);
                      if (!pathwaySkill) return null;
                      
                      const skillLevel = pathwaySkill.level === 'basic' ? 1 : pathwaySkill.level === 'intermediate' ? 2 : 3;
                      
                      return (
                        <div
                          key={pathway.id}
                          className="h-1 rounded-full flex-1"
                          style={{ 
                            backgroundColor: pathway.color,
                            opacity: skillLevel * 0.25,
                            height: `${skillLevel * 3}px`
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setJourneyMode('stage-exploration')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-md hover:bg-indigo-700 transition-colors"
          >
            Return to Your Journey
          </button>
        </motion.div>
      </motion.div>
    );
  }
  
  // Render career outcome screen
  function renderCareerOutcome() {
    console.log("Rendering career outcome with selected pathway:", selectedPathway);
    console.log("User journey:", getUserJourneyFromDecisions().map(s => s.id));
    console.log("User decisions:", userProfile.decisions);
    
    // Get the current pathway
    const pathway = educationPathways.find(p => p.id === selectedPathway);
    if (!pathway) {
      console.error("No pathway selected for career outcome");
      return <div>Error: No pathway selected</div>;
    }
    
    // Get the user's journey
    const journey = getUserJourneyFromDecisions();
    
    // Get expanded career options based on the selected pathway
    let careerOptions = [];
    if (pathway.id === 'arts') {
      careerOptions = [
        'Graphic Designer', 
        'UX/UI Designer', 
        'Artist', 
        'Illustrator', 
        'Writer', 
        'Content Creator',
        'Art Director',
        'Creative Director',
        'Animator',
        'Museum Curator'
      ];
    } else if (pathway.id === 'engineering') {
      careerOptions = [
        'Software Engineer', 
        'Civil Engineer', 
        'Electrical Engineer',
        'Mechanical Engineer',
        'Chemical Engineer',
        'Biomedical Engineer',
        'Environmental Engineer',
        'Systems Engineer',
        'Industrial Engineer',
        'Aerospace Engineer'
      ];
    } else if (pathway.id === 'science') {
      careerOptions = [
        'Research Scientist', 
        'Lab Technician', 
        'Data Scientist',
        'Biologist',
        'Chemist',
        'Physicist',
        'Environmental Scientist',
        'Medical Scientist',
        'Geologist',
        'Meteorologist'
      ];
    } else if (pathway.id === 'business') {
      careerOptions = [
        'Business Analyst', 
        'Financial Analyst',
        'Marketing Manager', 
        'Human Resources Manager',
        'Entrepreneur', 
        'Project Manager',
        'Operations Manager',
        'Management Consultant',
        'Investment Banker',
        'Supply Chain Manager'
      ];
    } else if (pathway.id === 'diploma') {
      careerOptions = [
        'Technician', 
        'IT Support Specialist', 
        'Network Administrator',
        'Dental Hygienist',
        'Radiologic Technologist',
        'Legal Assistant',
        'Accounting Technician',
        'Medical Laboratory Technician',
        'Web Developer',
        'Paramedic'
      ];
    } else {
      careerOptions = [
        'Professional', 
        'Specialist', 
        'Consultant',
        'Advisor',
        'Coordinator',
        'Manager',
        'Analyst',
        'Administrator',
        'Director',
        'Executive'
      ];
    }
    
    // Generate web resources based on the pathway
    const webResources = [
      {
        name: `${pathway.name} Courses on Coursera`,
        url: 'https://www.coursera.org/',
        description: `Online courses in ${pathway.name.toLowerCase()}`
      },
      {
        name: `${pathway.name} Programs on edX`,
        url: 'https://www.edx.org/',
        description: 'University-level online courses'
      },
      {
        name: 'Khan Academy',
        url: 'https://www.khanacademy.org/',
        description: 'Free educational resources and practice exercises'
      },
      {
        name: 'MIT OpenCourseWare',
        url: 'https://ocw.mit.edu/',
        description: 'Free course materials from MIT'
      },
      {
        name: 'LinkedIn Learning',
        url: 'https://www.linkedin.com/learning/',
        description: 'Professional courses and certifications'
      }
    ];
    
    return (
      <div className="career-outcome">
        <h2 className="text-2xl font-bold mb-6">
          Your {pathway.name} Pathway Summary
        </h2>
        
        <div className="journey-summary bg-slate-50 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Educational Journey</h3>
          
          <div className="journey-timeline">
            {journey.map((stage, index) => (
              <div key={stage.id} className="journey-stage mb-8 border-b pb-6 border-gray-200">
                <div className="flex items-start mb-4">
                  <div className="journey-stage-icon bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <div className="journey-stage-info">
                    <h4 className="font-medium text-lg">{stage.name}</h4>
                    <p className="text-gray-600 mb-2">{stage.description}</p>
                    <div className="flex space-x-2 mb-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-800">
                        {stage.ageRange}
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {stage.years}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Key exams */}
                {stage.examinations && stage.examinations.length > 0 && (
                  <div className="ml-12 mb-3">
                    <h5 className="font-medium text-sm text-gray-700 mb-2">Key Examinations:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {stage.examinations.map((exam, i) => (
                        <li key={i} className="text-sm">
                          <span className="font-medium">{exam}</span>
                          {exam.includes('Entrance') && ' - Required for admission to next level'}
                          {exam.includes('Certificate') && ' - Provides qualification certificate'}
                          {exam.includes('Assessment') && ' - Evaluates progress and readiness'}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Recommended actions */}
                <div className="ml-12 mb-3">
                  <h5 className="font-medium text-sm text-gray-700 mb-2">Recommended Actions:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {stage.id.includes('primary') && (
                      <>
                        <li className="text-sm">Focus on building foundational knowledge and skills</li>
                        <li className="text-sm">Explore different subjects to identify areas of interest</li>
                        <li className="text-sm">Develop good study habits and time management skills</li>
                      </>
                    )}
                    {stage.id.includes('secondary') && (
                      <>
                        <li className="text-sm">Choose subjects aligned with future educational goals</li>
                        <li className="text-sm">Prepare for standardized tests and examinations</li>
                        <li className="text-sm">Begin exploring potential career paths and interests</li>
                      </>
                    )}
                    {stage.id.includes('college') || stage.id.includes('university') || stage.id.includes('undergraduate') && (
                      <>
                        <li className="text-sm">Select major/specialization based on career objectives</li>
                        <li className="text-sm">Gain relevant internship or work experience</li>
                        <li className="text-sm">Build professional network and skills portfolio</li>
                      </>
                    )}
                    {stage.id.includes('graduate') && (
                      <>
                        <li className="text-sm">Focus on specialized research or advanced coursework</li>
                        <li className="text-sm">Engage with professional communities and conferences</li>
                        <li className="text-sm">Seek mentorship from experts in the field</li>
                      </>
                    )}
                    {stage.id.includes('work') && (
                      <>
                        <li className="text-sm">Continuously update skills through professional development</li>
                        <li className="text-sm">Seek opportunities for advancement and specialization</li>
                        <li className="text-sm">Consider additional certifications or education if needed</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="career-possibilities bg-emerald-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Career Possibilities</h3>
            <p className="mb-4">
              Based on this educational pathway, here are potential career paths:
            </p>
            <ul className="career-list list-disc pl-6 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              {careerOptions.map(career => (
                <li key={career} className="mb-2">{career}</li>
              ))}
            </ul>
          </div>
          
          <div className="web-resources bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Helpful Resources</h3>
            <p className="mb-4">
              These resources can help you succeed in your educational journey:
            </p>
            <ul className="resource-list space-y-3">
              {webResources.map(resource => (
                <li key={resource.name} className="pb-2 border-b border-blue-100">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 hover:text-blue-900"
                  >
                    {resource.name}
                  </a>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="actions mt-8 flex justify-center">
          <button 
            onClick={resetJourney}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }
  
  // Helper function to get user's journey based on decisions
  function getUserJourneyFromDecisions(): EducationStage[] {
    console.log("Building user journey from decisions:", userProfile.decisions);
    console.log("Current history:", userProfile.educationHistory);
    
    // Start with the initial stage
    const initialStage = educationStages.find(stage => stage.id === educationStages[0].id);
    if (!initialStage) return [];
    
    // If no decisions have been made, just return the initial stage
    if (Object.keys(userProfile.decisions).length === 0) {
      return [initialStage];
    }
    
    // Build complete journey path
    let journey: EducationStage[] = [];
    
    // Start by adding all stages from the user's education history
    const historyStages = userProfile.educationHistory
      .map(stageId => educationStages.find(stage => stage.id === stageId))
      .filter((stage): stage is EducationStage => !!stage);
    
    // Add initial stage if not already included
    if (!historyStages.some(stage => stage.id === initialStage.id)) {
      journey.push(initialStage);
    }
    
    // Add all history stages
    journey = [...journey, ...historyStages];
    
    // Add current stage if not in history
    const currentStage = educationStages.find(stage => stage.id === userProfile.currentStage);
    if (currentStage && !journey.some(stage => stage.id === currentStage.id)) {
      journey.push(currentStage);
    }
    
    // Ensure no duplicates
    const uniqueStages = journey.filter((stage, index, self) => 
      index === self.findIndex(s => s.id === stage.id)
    );
    
    // Sort stages to match the path order
    const currentPath = getCurrentPath();
    if (currentPath) {
      console.log(`Sorting journey stages according to path: ${currentPath.name}`);
      return uniqueStages.sort((a, b) => {
        const indexA = currentPath.stages.indexOf(a.id);
        const indexB = currentPath.stages.indexOf(b.id);
        
        // If both stages are in the pathway, sort by pathway order
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        
        // If only one stage is in the pathway, prioritize it
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        
        // Otherwise maintain original order
        return 0;
      });
    }
    
    console.log("Final journey stages:", uniqueStages.map(s => s.id));
    return uniqueStages;
  }
} 