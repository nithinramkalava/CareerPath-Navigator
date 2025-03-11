export type Career = {
  id: string;
  title: string;
  category: string;
  description: string;
  educationRequirements: string[];
  skillRequirements: string[];
  careerInsights: {
    roles: string[];
    salaryRange: string;
    growthProspects: string;
  };
  institutions: string[];
  industryTrends: string;
};

export const careers: Record<string, Career[]> = {
  technology: [
    {
      id: "software-developer",
      title: "Software Developer",
      category: "technology",
      description: "Design, develop, and maintain software applications for various platforms and devices.",
      educationRequirements: [
        "Bachelor's degree in Computer Science, Information Technology, or related field",
        "Coding bootcamps or self-taught programming skills with a strong portfolio",
        "Advanced positions may require Master's degree"
      ],
      skillRequirements: [
        "Proficiency in programming languages (Java, Python, JavaScript, etc.)",
        "Knowledge of software development methodologies",
        "Problem-solving and debugging skills",
        "Version control systems (Git)",
        "Database management"
      ],
      careerInsights: {
        roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile App Developer"],
        salaryRange: "₹4,00,000 - ₹20,00,000 per year (Early to Mid-career)",
        growthProspects: "High demand across industries with opportunities for advancement to senior developer, team lead, or architect roles."
      },
      institutions: [
        "Indian Institute of Technology (IITs)",
        "National Institute of Technology (NITs)",
        "BITS Pilani",
        "Coding bootcamps like Masai School, Newton School"
      ],
      industryTrends: "Growing demand for AI, machine learning, and cloud computing skills. Remote work opportunities increasing."
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      category: "technology",
      description: "Analyze and interpret complex data to help organizations make better decisions.",
      educationRequirements: [
        "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field",
        "Master's or Ph.D. preferred for advanced positions",
        "Specialized certifications in data science and machine learning"
      ],
      skillRequirements: [
        "Statistical analysis and programming languages (R, Python)",
        "Machine learning algorithms",
        "Data visualization tools",
        "Big data technologies (Hadoop, Spark)",
        "SQL and database knowledge"
      ],
      careerInsights: {
        roles: ["Data Analyst", "Machine Learning Engineer", "AI Specialist", "Business Intelligence Analyst"],
        salaryRange: "₹5,00,000 - ₹25,00,000 per year (Early to Mid-career)",
        growthProspects: "Rapidly growing field with opportunities across industries like finance, healthcare, and e-commerce."
      },
      institutions: [
        "Indian Statistical Institute",
        "IITs with Data Science programs",
        "Indian Institute of Science (IISc)",
        "Great Lakes Institute of Management"
      ],
      industryTrends: "Integration of AI in data science, focus on ethical AI, and increased demand for specialized domain knowledge."
    },
    {
      id: "cybersecurity-specialist",
      title: "Cybersecurity Specialist",
      category: "technology",
      description: "Protect computer systems, networks, and data from security breaches, cyber attacks, and unauthorized access.",
      educationRequirements: [
        "Bachelor's degree in Cybersecurity, Computer Science, or related field",
        "Industry certifications like CISSP, CEH, CompTIA Security+",
        "Master's degree beneficial for advanced positions",
        "Continuous learning for emerging threats and technologies"
      ],
      skillRequirements: [
        "Network security and architecture",
        "Threat detection and incident response",
        "Security tools and technologies",
        "Vulnerability assessment and penetration testing",
        "Security policies and compliance"
      ],
      careerInsights: {
        roles: ["Security Analyst", "Ethical Hacker", "Security Engineer", "Chief Information Security Officer"],
        salaryRange: "₹5,00,000 - ₹25,00,000 per year",
        growthProspects: "Growing demand due to increasing cyber threats, with career paths to security management and leadership positions."
      },
      institutions: [
        "Indian Institute of Technology (IITs)",
        "National Institute of Technology (NITs)",
        "Centre for Development of Advanced Computing (CDAC)",
        "Indian Institute of Information Technology (IIITs)"
      ],
      industryTrends: "Zero trust security models, AI-powered threat detection, cloud security, and increased focus on supply chain security."
    },
    {
      id: "cloud-architect",
      title: "Cloud Architect",
      category: "technology",
      description: "Design, implement, and manage cloud computing strategies for organizations, optimizing cloud resources and ensuring scalability and security.",
      educationRequirements: [
        "Bachelor's degree in Computer Science, IT, or related field",
        "Cloud certifications (AWS, Azure, Google Cloud)",
        "Master's degree beneficial for senior positions",
        "Background in systems architecture or network engineering"
      ],
      skillRequirements: [
        "Cloud service platforms (AWS, Azure, GCP)",
        "Infrastructure as Code (IaC)",
        "Network design and security",
        "Containerization and orchestration (Docker, Kubernetes)",
        "Cost optimization and resource management"
      ],
      careerInsights: {
        roles: ["Cloud Solutions Architect", "Cloud Infrastructure Engineer", "DevOps Engineer", "Multi-Cloud Specialist"],
        salaryRange: "₹8,00,000 - ₹30,00,000 per year",
        growthProspects: "High demand across industries with advancement to senior architecture and cloud strategy roles."
      },
      institutions: [
        "Indian Institutes of Technology (IITs)",
        "Cloud certification training providers",
        "Cloud vendor-specific training programs",
        "Online platforms like Coursera, Udacity, and edX"
      ],
      industryTrends: "Multi-cloud strategies, serverless architecture, edge computing, and increased focus on cloud security and compliance."
    },
    {
      id: "blockchain-developer",
      title: "Blockchain Developer",
      category: "technology",
      description: "Design, develop, and implement blockchain technologies and applications for various industries, including finance, supply chain, and healthcare.",
      educationRequirements: [
        "Bachelor's degree in Computer Science, Software Engineering, or related field",
        "Blockchain-specific certifications and courses",
        "Strong background in cryptography and distributed systems",
        "Software development experience"
      ],
      skillRequirements: [
        "Blockchain platforms (Ethereum, Hyperledger, etc.)",
        "Smart contract development",
        "Cryptography principles",
        "Programming languages (Solidity, JavaScript, Go)",
        "Web3 technologies"
      ],
      careerInsights: {
        roles: ["Blockchain Engineer", "Smart Contract Developer", "Cryptocurrency Specialist", "DeFi Developer"],
        salaryRange: "₹6,00,000 - ₹25,00,000 per year",
        growthProspects: "Growing opportunities in fintech, supply chain, healthcare, and other industries adopting blockchain technology."
      },
      institutions: [
        "Indian Institute of Technology (IITs)",
        "Blockchain Council certification programs",
        "Indian Blockchain Institute",
        "Online specialized courses and bootcamps"
      ],
      industryTrends: "Enterprise blockchain solutions, decentralized finance (DeFi), NFTs, and regulatory compliance frameworks."
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      category: "technology",
      description: "Design, develop, and deploy artificial intelligence systems and solutions that solve real-world problems through machine learning and deep learning techniques.",
      educationRequirements: [
        "Bachelor's degree in Computer Science, AI, or related field",
        "Master's or Ph.D. preferred for research-intensive roles",
        "Specialized AI and ML certifications",
        "Strong mathematics and statistics background"
      ],
      skillRequirements: [
        "Machine learning algorithms and frameworks",
        "Deep learning and neural networks",
        "Natural language processing",
        "Computer vision",
        "Data preprocessing and feature engineering"
      ],
      careerInsights: {
        roles: ["AI Research Scientist", "ML Engineer", "NLP Engineer", "Computer Vision Engineer"],
        salaryRange: "₹7,00,000 - ₹30,00,000 per year",
        growthProspects: "Rapidly growing field with opportunities in tech companies, research labs, and AI-focused startups."
      },
      institutions: [
        "Indian Institute of Technology (IITs)",
        "Indian Institute of Science (IISc)",
        "International Institute of Information Technology (IIIT)",
        "AI-focused research institutions"
      ],
      industryTrends: "Explainable AI, generative AI models, AI ethics, multimodal AI systems, and edge AI applications."
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      category: "technology",
      description: "Bridge the gap between development and operations by implementing continuous integration, delivery, and deployment pipelines to ensure efficient software development lifecycles.",
      educationRequirements: [
        "Bachelor's degree in Computer Science, IT, or related field",
        "DevOps certifications (e.g., AWS DevOps, Azure DevOps)",
        "Background in either software development or IT operations",
        "Continuous learning of evolving DevOps tools and practices"
      ],
      skillRequirements: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code tools (Terraform, Ansible)",
        "Containerization and orchestration (Docker, Kubernetes)",
        "Monitoring and logging systems",
        "Cloud platforms and services"
      ],
      careerInsights: {
        roles: ["DevOps Specialist", "Site Reliability Engineer", "Platform Engineer", "Release Engineer"],
        salaryRange: "₹6,00,000 - ₹24,00,000 per year",
        growthProspects: "High demand across tech companies with advancement to DevOps architect and leadership roles."
      },
      institutions: [
        "DevOps certification programs",
        "Cloud provider training (AWS, Azure, GCP)",
        "Indian Institutes of Technology (IITs)",
        "Online platforms offering DevOps specializations"
      ],
      industryTrends: "GitOps, DevSecOps integration, AIOps, platform engineering, and FinOps for cost optimization."
    },
    {
      id: "iot-engineer",
      title: "IoT Engineer",
      category: "technology",
      description: "Design, develop, and implement Internet of Things systems that connect devices, sensors, and applications to enable data collection and automation across various domains.",
      educationRequirements: [
        "Bachelor's degree in Electronics, Computer Science, or related field",
        "IoT-specific certifications and courses",
        "Hardware and software integration experience",
        "Knowledge of embedded systems"
      ],
      skillRequirements: [
        "Embedded systems programming",
        "Sensor technology and integration",
        "Networking and communication protocols",
        "Cloud platforms for IoT",
        "Security for connected devices"
      ],
      careerInsights: {
        roles: ["IoT Solutions Architect", "Embedded Systems Engineer", "IoT Security Specialist", "IoT Product Manager"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Growing opportunities in smart cities, industrial automation, healthcare, and consumer electronics."
      },
      institutions: [
        "Indian Institutes of Technology (IITs)",
        "Centre for Development of Advanced Computing (CDAC)",
        "Electronics and IoT academies",
        "Industry-specific IoT training programs"
      ],
      industryTrends: "Edge computing for IoT, 5G integration, digital twins, AI-powered IoT analytics, and increased focus on IoT security."
    },
    {
      id: "ux-researcher",
      title: "UX Researcher",
      category: "technology",
      description: "Conduct user research to understand user behaviors, needs, and motivations to inform the design of digital products and services that provide optimal user experiences.",
      educationRequirements: [
        "Bachelor's or Master's degree in Human-Computer Interaction, Psychology, Design, or related field",
        "UX research certifications and courses",
        "Background in qualitative and quantitative research methods",
        "Understanding of design thinking principles"
      ],
      skillRequirements: [
        "User research methodologies",
        "Usability testing",
        "Data analysis and interpretation",
        "Interview and survey design",
        "Research planning and reporting"
      ],
      careerInsights: {
        roles: ["User Researcher", "UX Strategist", "Consumer Insights Specialist", "Design Researcher"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Growing demand in tech companies, design agencies, and product-focused organizations."
      },
      institutions: [
        "National Institute of Design (NID)",
        "Indian Institute of Technology (IIT Design departments)",
        "UX-focused institutions and academies",
        "Online UX research certification programs"
      ],
      industryTrends: "Remote user research methods, AI-assisted research tools, inclusivity in research, and quantitative UX metrics."
    },
    {
      id: "product-manager-tech",
      title: "Product Manager (Tech)",
      category: "technology",
      description: "Lead the development of technology products from conception to launch, balancing business goals, user needs, and technical constraints to create successful digital products.",
      educationRequirements: [
        "Bachelor's degree in Computer Science, Business, or related field",
        "MBA beneficial but not required",
        "Product management certifications",
        "Technical background preferred"
      ],
      skillRequirements: [
        "Product strategy and roadmapping",
        "User story creation and prioritization",
        "Agile and Scrum methodologies",
        "Data analysis for product decisions",
        "Cross-functional team collaboration"
      ],
      careerInsights: {
        roles: ["Technical Product Manager", "Product Owner", "Digital Product Manager", "Growth Product Manager"],
        salaryRange: "₹8,00,000 - ₹30,00,000 per year",
        growthProspects: "Career progression to senior product management, director of product, or CPO roles."
      },
      institutions: [
        "Product management courses at IIMs and ISB",
        "Product School programs",
        "Specialized product management bootcamps",
        "Industry-specific product management training"
      ],
      industryTrends: "AI product management, product-led growth, continuous discovery practices, and product operations specialization."
    }
  ],
  arts: [
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      category: "arts",
      description: "Create visual concepts to communicate ideas that inspire, inform, or captivate consumers.",
      educationRequirements: [
        "Bachelor's degree in Graphic Design, Fine Arts, or related field",
        "Portfolio-based education through design schools",
        "Self-taught with strong portfolio also acceptable"
      ],
      skillRequirements: [
        "Proficiency in design software (Adobe Creative Suite)",
        "Typography and color theory",
        "Layout design principles",
        "Branding and visual identity creation",
        "Understanding of user experience"
      ],
      careerInsights: {
        roles: ["Brand Designer", "UI Designer", "Illustrator", "Art Director"],
        salaryRange: "₹2,50,000 - ₹12,00,000 per year (Early to Mid-career)",
        growthProspects: "Opportunities in advertising agencies, publishing, tech companies, and freelance work."
      },
      institutions: [
        "National Institute of Design (NID)",
        "Industrial Design Centre, IIT Bombay",
        "Srishti Institute of Art, Design and Technology",
        "Symbiosis Institute of Design"
      ],
      industryTrends: "Motion graphics, 3D design, and interactive design skills in high demand. Increasing focus on digital design."
    },
    {
      id: "fine-artist",
      title: "Fine Artist",
      category: "arts",
      description: "Create original artwork using various media and techniques for aesthetic and expressive purposes.",
      educationRequirements: [
        "Bachelor's or Master's degree in Fine Arts",
        "Art school training",
        "Apprenticeship with established artists",
        "Self-taught with portfolio development"
      ],
      skillRequirements: [
        "Proficiency in chosen artistic media",
        "Visual composition and color theory",
        "Conceptual development",
        "Critical thinking and artistic vision",
        "Self-promotion and business skills"
      ],
      careerInsights: {
        roles: ["Painter", "Sculptor", "Installation Artist", "Printmaker"],
        salaryRange: "Highly variable, from ₹2,00,000 - ₹20,00,000+ per year based on recognition",
        growthProspects: "Career development through gallery representation, commissions, grants, and teaching positions."
      },
      institutions: [
        "Faculty of Fine Arts, M.S. University, Baroda",
        "J.J. School of Art, Mumbai",
        "College of Art, Delhi",
        "Kala Bhavana, Visva-Bharati University"
      ],
      industryTrends: "Digital art integration, immersive installations, socially engaged art, and NFT art markets."
    },
    {
      id: "performing-artist",
      title: "Performing Artist",
      category: "arts",
      description: "Entertain, inform, or express through dance, music, theater, or other performance arts.",
      educationRequirements: [
        "Training in specific performance discipline",
        "Bachelor's degree in Performing Arts or specific discipline",
        "Conservatory or specialized academy training",
        "Continuous development through workshops and masterclasses"
      ],
      skillRequirements: [
        "Performance technique in chosen discipline",
        "Stage presence and expression",
        "Interpretation and creative adaptation",
        "Physical and/or vocal skills",
        "Collaborative work in ensembles"
      ],
      careerInsights: {
        roles: ["Dancer", "Actor", "Musician", "Performance Artist"],
        salaryRange: "Highly variable, from ₹2,00,000 - ₹25,00,000+ per year based on recognition",
        growthProspects: "Career advancement through solo performances, company positions, commercial work, and teaching."
      },
      institutions: [
        "National School of Drama",
        "Kalakshetra Foundation",
        "Kathak Kendra",
        "KM Music Conservatory"
      ],
      industryTrends: "Digital performances, interdisciplinary approaches, immersive theater, and cultural fusion."
    },
    {
      id: "art-director",
      title: "Art Director",
      category: "arts",
      description: "Lead the visual style and creative direction of projects in advertising, publishing, film, or other visual media.",
      educationRequirements: [
        "Bachelor's degree in Fine Arts, Design, or related field",
        "Experience in graphic design or visual arts",
        "Portfolio demonstrating visual direction abilities",
        "Industry-specific training or experience"
      ],
      skillRequirements: [
        "Visual concept development",
        "Team leadership and direction",
        "Project management",
        "Client communication and presentation",
        "Diverse design knowledge"
      ],
      careerInsights: {
        roles: ["Advertising Art Director", "Editorial Art Director", "Film Art Director", "Brand Art Director"],
        salaryRange: "₹6,00,000 - ₹25,00,000 per year",
        growthProspects: "Advancement to creative director, design director, or independent creative consultancy."
      },
      institutions: [
        "National Institute of Design (NID)",
        "Mudra Institute of Communications (MICA)",
        "Film and Television Institute of India",
        "Art direction courses at design schools"
      ],
      industryTrends: "Integrated campaigns across multiple platforms, experiential design, and data-informed creative direction."
    },
    {
      id: "illustrator",
      title: "Illustrator",
      category: "arts",
      description: "Create visual imagery for books, magazines, advertisements, digital media, and other platforms to communicate ideas and stories.",
      educationRequirements: [
        "Bachelor's degree in Illustration, Fine Arts, or related field",
        "Specialized illustration courses",
        "Self-taught with strong portfolio also acceptable",
        "Continuous skill development in various techniques"
      ],
      skillRequirements: [
        "Drawing and visualization skills",
        "Digital illustration software proficiency",
        "Visual storytelling",
        "Understanding of print and digital requirements",
        "Personal style development"
      ],
      careerInsights: {
        roles: ["Editorial Illustrator", "Book Illustrator", "Concept Artist", "Medical Illustrator"],
        salaryRange: "₹3,00,000 - ₹15,00,000 per year (freelance rates vary widely)",
        growthProspects: "Career growth through specialized illustration fields, publishing contracts, and licensing artwork."
      },
      institutions: [
        "National Institute of Design (NID)",
        "College of Art, Delhi",
        "J.J. School of Art, Mumbai",
        "Illustration courses at design schools"
      ],
      industryTrends: "Digital illustration, animation integration, visual journalism, and children's book market growth."
    },
    {
      id: "art-curator",
      title: "Art Curator",
      category: "arts",
      description: "Research, select, and arrange artworks for exhibitions in galleries, museums, or other cultural institutions.",
      educationRequirements: [
        "Bachelor's degree in Art History, Museum Studies, or related field",
        "Master's or Ph.D. preferred for major institutions",
        "Knowledge of art history and contemporary practices",
        "International exposure to art scenes"
      ],
      skillRequirements: [
        "Art historical knowledge",
        "Exhibition design and planning",
        "Research and critical analysis",
        "Writing for catalogs and exhibitions",
        "Artist and stakeholder relationships"
      ],
      careerInsights: {
        roles: ["Museum Curator", "Gallery Curator", "Independent Curator", "Festival Curator"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Career advancement to senior curatorial positions, museum directorships, or independent curating."
      },
      institutions: [
        "National Museum Institute",
        "School of Arts and Aesthetics, JNU",
        "Faculty of Fine Arts, M.S. University, Baroda",
        "Museum studies programs at universities"
      ],
      industryTrends: "Digital curation, virtual exhibitions, community engagement, and decolonization of art institutions."
    },
    {
      id: "art-conservator",
      title: "Art Conservator",
      category: "arts",
      description: "Preserve, restore, and maintain artwork, cultural artifacts, and historical objects using specialized techniques and materials.",
      educationRequirements: [
        "Bachelor's degree in Conservation, Fine Arts, or related field",
        "Master's in Conservation or Restoration",
        "Specialized training in conservation techniques",
        "Chemistry and materials science knowledge"
      ],
      skillRequirements: [
        "Conservation techniques for various media",
        "Scientific analysis of materials",
        "Documentation and condition assessment",
        "Manual dexterity and attention to detail",
        "Knowledge of art history and cultural contexts"
      ],
      careerInsights: {
        roles: ["Painting Conservator", "Objects Conservator", "Paper Conservator", "Architectural Conservator"],
        salaryRange: "₹4,00,000 - ₹12,00,000 per year",
        growthProspects: "Opportunities in museums, cultural institutions, heritage sites, and private conservation practices."
      },
      institutions: [
        "National Museum Institute",
        "National Research Laboratory for Conservation of Cultural Property",
        "INTACH Conservation Institutes",
        "Conservation programs at art universities"
      ],
      industryTrends: "Digital documentation techniques, preventive conservation, and scientific approaches to conservation."
    },
    {
      id: "art-therapist",
      title: "Art Therapist",
      category: "arts",
      description: "Use art and creative processes to help people explore emotions, improve mental health, and enhance well-being.",
      educationRequirements: [
        "Bachelor's degree in Psychology, Art, or related field",
        "Master's degree in Art Therapy",
        "Certification from recognized art therapy associations",
        "Clinical training and supervision"
      ],
      skillRequirements: [
        "Art-making in various media",
        "Therapeutic techniques and interventions",
        "Psychology and mental health knowledge",
        "Assessment and treatment planning",
        "Empathy and communication skills"
      ],
      careerInsights: {
        roles: ["Clinical Art Therapist", "School Art Therapist", "Community Art Therapist", "Research Art Therapist"],
        salaryRange: "₹4,00,000 - ₹10,00,000 per year",
        growthProspects: "Career paths in healthcare facilities, schools, community organizations, and private practice."
      },
      institutions: [
        "Art Therapy programs at universities",
        "Workshops and training by professional associations",
        "Mental health institutions offering art therapy training",
        "International art therapy certification programs"
      ],
      industryTrends: "Integration with mainstream mental health treatment, digital art therapy, and trauma-informed approaches."
    },
    {
      id: "art-educator",
      title: "Art Educator",
      category: "arts",
      description: "Teach art principles, techniques, and appreciation to students at various educational levels.",
      educationRequirements: [
        "Bachelor's degree in Art Education or Fine Arts",
        "Teaching certification or license",
        "Master's degree for higher education positions",
        "Continuous professional development"
      ],
      skillRequirements: [
        "Proficiency in multiple art media",
        "Curriculum development and lesson planning",
        "Teaching and demonstration techniques",
        "Assessment of artistic development",
        "Classroom management"
      ],
      careerInsights: {
        roles: ["School Art Teacher", "College Art Professor", "Museum Educator", "Community Art Instructor"],
        salaryRange: "₹3,50,000 - ₹12,00,000 per year",
        growthProspects: "Career advancement through educational institutions, department leadership, or specialized art education."
      },
      institutions: [
        "Faculty of Education departments with art specialization",
        "College of Art, Delhi",
        "Faculty of Fine Arts, M.S. University, Baroda",
        "Education departments at art institutions"
      ],
      industryTrends: "Integration of digital tools, STEAM education approaches, and cultural diversity in art education."
    },
    {
      id: "textile-designer",
      title: "Textile Designer",
      category: "arts",
      description: "Create designs and patterns for fabrics used in fashion, home furnishings, and other textile products.",
      educationRequirements: [
        "Bachelor's degree in Textile Design or related field",
        "Specialized textile courses and workshops",
        "Traditional textile craft training",
        "Knowledge of textile production methods"
      ],
      skillRequirements: [
        "Pattern design and development",
        "Color theory for textiles",
        "Textile construction techniques",
        "Design software for textiles",
        "Understanding of material properties"
      ],
      careerInsights: {
        roles: ["Fashion Textile Designer", "Home Textile Designer", "Surface Pattern Designer", "Textile Artist"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year",
        growthProspects: "Opportunities in fashion houses, textile manufacturing, design studios, and independent practices."
      },
      institutions: [
        "National Institute of Design (Textile Design)",
        "National Institute of Fashion Technology",
        "Indian Institute of Crafts and Design",
        "Traditional textile centers and craft schools"
      ],
      industryTrends: "Sustainable textiles, digital textile printing, revival of traditional techniques, and smart textiles."
    }
  ],
  law: [
    {
      id: "lawyer",
      title: "Lawyer",
      category: "law",
      description: "Advise and represent individuals, businesses, or government agencies on legal issues or disputes.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB) - 3 years after graduation or 5-year integrated course after 12th",
        "Bar Council of India registration required to practice",
        "Specializations may require additional certifications",
        "Master's degree (LLM) for specialized or academic paths"
      ],
      skillRequirements: [
        "Legal research and analysis",
        "Critical thinking and problem-solving",
        "Negotiation skills",
        "Verbal and written communication",
        "Knowledge of legal procedures and documentation"
      ],
      careerInsights: {
        roles: ["Corporate Lawyer", "Criminal Lawyer", "Civil Lawyer", "Intellectual Property Lawyer"],
        salaryRange: "₹3,00,000 - ₹20,00,000 per year (Early to Mid-career in firms)",
        growthProspects: "Career progression to partner in law firms, independent practice, or legal counsel for corporations."
      },
      institutions: [
        "National Law Schools (NLSIU Bangalore, NALSAR Hyderabad, NLU Delhi)",
        "Faculty of Law, Delhi University",
        "Government Law Colleges in various states",
        "Symbiosis Law School"
      ],
      industryTrends: "Growing demand for expertise in cyber law, intellectual property, and corporate compliance."
    },
    {
      id: "corporate-lawyer",
      title: "Corporate Lawyer",
      category: "law",
      description: "Specialize in advising businesses on legal matters including contracts, compliance, mergers, acquisitions, and corporate governance.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB) with focus on corporate/business law",
        "Master's degree (LLM) in Corporate Law beneficial for career advancement",
        "Bar Council registration",
        "Additional certifications in corporate governance, securities law, etc."
      ],
      skillRequirements: [
        "Business law knowledge",
        "Contract drafting and review",
        "Corporate governance understanding",
        "Commercial acumen",
        "Negotiation and deal structuring"
      ],
      careerInsights: {
        roles: ["In-house Corporate Counsel", "M&A Lawyer", "Corporate Compliance Specialist", "Securities Lawyer"],
        salaryRange: "₹5,00,000 - ₹30,00,000+ per year",
        growthProspects: "Career progression to General Counsel, Partner in law firms, or specialized corporate law advisory roles."
      },
      institutions: [
        "National Law Schools with corporate law specialization",
        "Indian Institute of Corporate Affairs",
        "IIMs with law and business joint programs",
        "Top-tier law schools with corporate law centers"
      ],
      industryTrends: "ESG compliance, cross-border transaction expertise, regulatory technology integration, and startup ecosystem legal frameworks."
    },
    {
      id: "litigation-lawyer",
      title: "Litigation Lawyer",
      category: "law",
      description: "Represent clients in civil and criminal litigation before courts and tribunals, handling cases through trial and appeal processes.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB)",
        "Bar Council registration",
        "Courtroom training or apprenticeship under senior advocates",
        "Specialized knowledge in areas of practice (civil, criminal, commercial)"
      ],
      skillRequirements: [
        "Courtroom advocacy",
        "Legal drafting (pleadings, motions, briefs)",
        "Case strategy development",
        "Evidence analysis and presentation",
        "Oral argumentation"
      ],
      careerInsights: {
        roles: ["Trial Advocate", "Appellate Lawyer", "Commercial Litigator", "Class Action Litigator"],
        salaryRange: "₹3,00,000 - ₹25,00,000+ per year (varies widely by experience and location)",
        growthProspects: "Career path to Senior Advocate status, specialized litigation practice, or judicial appointments."
      },
      institutions: [
        "National Law Universities",
        "Government Law Colleges",
        "Bar Council training programs",
        "Litigation chambers of senior advocates"
      ],
      industryTrends: "Alternative dispute resolution integration, digital evidence handling, virtual court proceedings, and specialized litigation boutiques."
    },
    {
      id: "intellectual-property-lawyer",
      title: "Intellectual Property Lawyer",
      category: "law",
      description: "Handle legal matters related to patents, trademarks, copyrights, and trade secrets, protecting creative and innovative works.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB)",
        "Bar Council registration",
        "LLM specialization in IP Law beneficial",
        "Patent agent examination for patent practice",
        "Technical background often required for patent law"
      ],
      skillRequirements: [
        "IP rights knowledge (patents, trademarks, copyrights)",
        "IP application and registration processes",
        "IP litigation and enforcement",
        "Licensing and technology transfer",
        "International IP treaty knowledge"
      ],
      careerInsights: {
        roles: ["Patent Attorney", "Trademark Counsel", "Copyright Lawyer", "IP Litigator"],
        salaryRange: "₹5,00,000 - ₹25,00,000 per year",
        growthProspects: "Specialized practice in law firms, in-house IP counsel positions, or IP consulting roles."
      },
      institutions: [
        "Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur",
        "National Law Schools with IP specialization",
        "Institute of Intellectual Property Studies",
        "WIPO educational programs in India"
      ],
      industryTrends: "Digital content IP protection, AI and machine learning patents, global IP enforcement strategies, and IP valuation methodologies."
    },
    {
      id: "legal-consultant",
      title: "Legal Consultant",
      category: "law",
      description: "Provide specialized legal advice and solutions to clients on specific legal issues or industries without traditional legal representation.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB)",
        "Bar Council registration (may not be required for all consulting roles)",
        "Industry-specific expertise or specialization",
        "Advanced degrees or certifications in consulting areas"
      ],
      skillRequirements: [
        "Legal analysis and problem solving",
        "Industry-specific knowledge",
        "Project management",
        "Client relationship management",
        "Strategic advisory capabilities"
      ],
      careerInsights: {
        roles: ["Legal Risk Consultant", "Compliance Consultant", "Legal Strategy Advisor", "Legal Process Consultant"],
        salaryRange: "₹4,00,000 - ₹20,00,000 per year",
        growthProspects: "Career paths in consulting firms, independent practice, or specialized advisory services."
      },
      institutions: [
        "Law schools with consulting focus",
        "IIMs and other management institutes with legal tracks",
        "Professional consulting certification programs",
        "Legal consulting academies"
      ],
      industryTrends: "Legal operations optimization, technology implementation consulting, regulatory change management, and cross-functional advisory services."
    },
    {
      id: "legal-researcher",
      title: "Legal Researcher",
      category: "law",
      description: "Conduct in-depth legal research, analyze legal issues, and prepare reports and memoranda to support legal decision-making and policy development.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB)",
        "Master's degree (LLM) for advanced research positions",
        "Ph.D. in Law for academic and policy research",
        "Research methodology training"
      ],
      skillRequirements: [
        "Legal research methodologies",
        "Analysis of statutes, case law, and regulations",
        "Legal writing and citation",
        "Comparative law research",
        "Data collection and analysis"
      ],
      careerInsights: {
        roles: ["Judicial Law Researcher", "Academic Legal Researcher", "Policy Researcher", "Legal Information Specialist"],
        salaryRange: "₹3,50,000 - ₹12,00,000 per year",
        growthProspects: "Career paths in think tanks, research institutions, courts, law firms, or academic institutions."
      },
      institutions: [
        "National Law University research centers",
        "Indian Law Institute",
        "Research positions at High Courts and Supreme Court",
        "Legal research organizations and think tanks"
      ],
      industryTrends: "Legal data analytics, empirical legal research, interdisciplinary law studies, and evidence-based policy development."
    },
    {
      id: "judge",
      title: "Judge",
      category: "law",
      description: "Preside over court proceedings, interpret laws, adjudicate legal disputes, and administer justice in courts of various levels.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB)",
        "Practice experience as an advocate (7-10 years minimum)",
        "Judicial service examination for subordinate judiciary",
        "Selection through collegium for higher judiciary"
      ],
      skillRequirements: [
        "Judicial reasoning and legal interpretation",
        "Court management",
        "Evidence evaluation",
        "Judgment writing",
        "Ethical conduct and impartiality"
      ],
      careerInsights: {
        roles: ["District Judge", "High Court Judge", "Tribunal Member", "Special Court Judge"],
        salaryRange: "₹8,00,000 - ₹30,00,000+ per year (varies by court level)",
        growthProspects: "Career progression from subordinate judiciary to higher judicial positions based on merit and seniority."
      },
      institutions: [
        "State Judicial Academies",
        "National Judicial Academy",
        "Judiciary examination preparation institutes",
        "Continuing judicial education programs"
      ],
      industryTrends: "Court modernization, case management technology, specialized courts for subject matters, and judicial training enhancements."
    },
    {
      id: "legal-tech-professional",
      title: "Legal Tech Professional",
      category: "law",
      description: "Develop, implement, and manage technology solutions for legal services delivery, improving efficiency and access to justice.",
      educationRequirements: [
        "Bachelor's degree in Law, Computer Science, or both",
        "Technology certifications and training",
        "Legal practice experience beneficial",
        "Product management or software development background"
      ],
      skillRequirements: [
        "Legal process understanding",
        "Technology implementation",
        "Legal data management",
        "Project management",
        "User experience design for legal tools"
      ],
      careerInsights: {
        roles: ["Legal Solutions Architect", "Legal Operations Technologist", "Legal Data Scientist", "Legal Innovation Manager"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Career opportunities in legal tech startups, law firms with innovation departments, or corporate legal operations."
      },
      institutions: [
        "Law and technology joint programs at universities",
        "Legal technology certification courses",
        "Technology incubators with legal focus",
        "Online legal tech training platforms"
      ],
      industryTrends: "AI in legal research and document review, blockchain for legal transactions, automated compliance monitoring, and access to justice platforms."
    },
    {
      id: "mediator-arbitrator",
      title: "Mediator/Arbitrator",
      category: "law",
      description: "Facilitate dispute resolution outside traditional courts through mediation, arbitration, and other alternative dispute resolution processes.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB)",
        "Mediation and arbitration certification",
        "Practice experience in relevant legal areas",
        "Specialized training in negotiation and conflict resolution"
      ],
      skillRequirements: [
        "Conflict resolution techniques",
        "Negotiation facilitation",
        "Impartiality and neutrality",
        "Decision-making in arbitration",
        "Understanding of substantive law in practice areas"
      ],
      careerInsights: {
        roles: ["Commercial Mediator", "Family Mediator", "International Arbitrator", "Online Dispute Resolution Specialist"],
        salaryRange: "₹4,00,000 - ₹18,00,000 per year (plus case fees for independent practitioners)",
        growthProspects: "Career development through mediation centers, arbitration institutions, or independent ADR practice."
      },
      institutions: [
        "Indian Institute of Arbitration and Mediation",
        "Mediation and Conciliation Project Committee, Supreme Court",
        "Chartered Institute of Arbitrators - India Branch",
        "Alternative dispute resolution certification programs"
      ],
      industryTrends: "Online dispute resolution platforms, international commercial arbitration growth, mandatory mediation in certain cases, and specialized industry arbitration."
    },
    {
      id: "human-rights-lawyer",
      title: "Human Rights Lawyer",
      category: "law",
      description: "Advocate for and protect fundamental human rights and civil liberties through legal representation, policy work, and advocacy.",
      educationRequirements: [
        "Bachelor's degree in Law (LLB)",
        "Master's degree in Human Rights Law beneficial",
        "Bar Council registration",
        "International human rights law training"
      ],
      skillRequirements: [
        "Human rights laws and conventions knowledge",
        "Constitutional law expertise",
        "Public interest litigation skills",
        "Advocacy and campaigning abilities",
        "Documentation and fact-finding"
      ],
      careerInsights: {
        roles: ["Public Interest Litigator", "Human Rights Researcher", "UN Human Rights Officer", "Legal Aid Lawyer"],
        salaryRange: "₹3,00,000 - ₹15,00,000 per year (varies widely by organization)",
        growthProspects: "Career paths in human rights organizations, international bodies, legal aid services, and policy advocacy."
      },
      institutions: [
        "National Law Universities with human rights centers",
        "Indian Institute of Human Rights",
        "South Asian Institute of Human Rights",
        "Human rights law clinics at universities"
      ],
      industryTrends: "Digital rights protection, business and human rights integration, migrant rights advocacy, and gender justice."
    }
  ],
  finance: [
    {
      id: "financial-analyst",
      title: "Financial Analyst",
      category: "finance",
      description: "Evaluate financial data and market trends to help companies make investment decisions.",
      educationRequirements: [
        "Bachelor's degree in Finance, Economics, Accounting, or related field",
        "MBA or Master's in Finance for advanced positions",
        "Professional certifications like CFA, FRM beneficial"
      ],
      skillRequirements: [
        "Financial modeling and forecasting",
        "Data analysis and interpretation",
        "Understanding of financial markets",
        "Excel and financial software proficiency",
        "Financial reporting"
      ],
      careerInsights: {
        roles: ["Investment Analyst", "Risk Analyst", "Equity Research Analyst", "Credit Analyst"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year (Early to Mid-career)",
        growthProspects: "Advancement to senior analyst, portfolio manager, or finance manager positions."
      },
      institutions: [
        "Indian Institute of Management (IIMs)",
        "XLRI Jamshedpur",
        "Narsee Monjee Institute of Management Studies",
        "Chartered Financial Analyst (CFA) program"
      ],
      industryTrends: "Increasing use of AI and automation in financial analysis. Growing focus on ESG (Environmental, Social, Governance) investing."
    },
    {
      id: "investment-banker",
      title: "Investment Banker",
      category: "finance",
      description: "Assist corporations, governments, and other entities in raising capital and executing financial transactions like mergers and acquisitions.",
      educationRequirements: [
        "Bachelor's degree in Finance, Economics, or Business",
        "MBA from top-tier institutions preferred",
        "Professional certifications like CFA beneficial",
        "Technical knowledge of valuation and financial modeling"
      ],
      skillRequirements: [
        "Financial analysis and valuation",
        "Deal structuring and execution",
        "Client relationship management",
        "Pitch book preparation",
        "Advanced Excel and financial modeling"
      ],
      careerInsights: {
        roles: ["Investment Banking Analyst", "Associate", "Vice President", "Managing Director"],
        salaryRange: "₹10,00,000 - ₹50,00,000+ per year (plus bonuses)",
        growthProspects: "Hierarchical progression within investment banks or transition to private equity, hedge funds, or corporate development."
      },
      institutions: [
        "Indian Institute of Management (IIMs)",
        "Indian School of Business (ISB)",
        "XLRI Jamshedpur",
        "SP Jain Institute of Management and Research"
      ],
      industryTrends: "Increased specialization in sectors, integration of technology in deal processes, and emphasis on sustainable finance."
    },
    {
      id: "chartered-accountant",
      title: "Chartered Accountant",
      category: "finance",
      description: "Provide accounting, auditing, taxation, and financial advisory services to individuals and organizations.",
      educationRequirements: [
        "Bachelor's degree (any discipline)",
        "Clearing the CA Foundation, Intermediate, and Final examinations conducted by ICAI",
        "3-year articleship training under a practicing CA",
        "Continuous professional education for specializations"
      ],
      skillRequirements: [
        "Accounting standards and principles",
        "Auditing procedures and standards",
        "Taxation laws and compliance",
        "Financial statement analysis",
        "Business advisory skills"
      ],
      careerInsights: {
        roles: ["Audit Associate", "Tax Consultant", "Financial Advisor", "Chief Financial Officer"],
        salaryRange: "₹5,00,000 - ₹25,00,000 per year (varies by specialization and firm size)",
        growthProspects: "Career paths in accounting firms, industry finance departments, or independent practice."
      },
      institutions: [
        "Institute of Chartered Accountants of India (ICAI)",
        "CA coaching institutes",
        "Commerce colleges",
        "Professional development programs through ICAI"
      ],
      industryTrends: "Digital transformation of accounting, automation of compliance processes, and focus on business advisory services."
    },
    {
      id: "wealth-manager",
      title: "Wealth Manager",
      category: "finance",
      description: "Provide comprehensive financial planning and investment management services to high-net-worth individuals and families.",
      educationRequirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "Professional certifications such as CFP, CWM",
        "MBA or specialized finance degrees beneficial",
        "Licensing as per regulatory requirements"
      ],
      skillRequirements: [
        "Investment portfolio management",
        "Financial planning and analysis",
        "Estate and tax planning knowledge",
        "Relationship management",
        "Risk assessment and management"
      ],
      careerInsights: {
        roles: ["Financial Advisor", "Private Banker", "Portfolio Manager", "Estate Planner"],
        salaryRange: "₹6,00,000 - ₹30,00,000+ per year (plus commissions/bonuses)",
        growthProspects: "Career advancement in private banks, wealth management firms, or independent financial advisory."
      },
      institutions: [
        "National Institute of Securities Markets (NISM)",
        "Financial Planning Association of India programs",
        "Wealth management certifications from global institutions",
        "Specialized courses from financial institutions"
      ],
      industryTrends: "Democratization of wealth management, robo-advisory integration, focus on multi-generational wealth planning, and sustainable investing."
    },
    {
      id: "risk-analyst",
      title: "Risk Analyst",
      category: "finance",
      description: "Identify, analyze, and mitigate financial risks for organizations through research, modeling, and strategic planning.",
      educationRequirements: [
        "Bachelor's degree in Finance, Statistics, Mathematics, or related field",
        "Master's degree in Risk Management, Finance, or related field",
        "Professional certifications like FRM, PRM, or CFA",
        "Specialized training in risk models and frameworks"
      ],
      skillRequirements: [
        "Risk assessment methodologies",
        "Statistical analysis and modeling",
        "Financial markets knowledge",
        "Regulatory compliance understanding",
        "Data analysis and interpretation"
      ],
      careerInsights: {
        roles: ["Credit Risk Analyst", "Market Risk Analyst", "Operational Risk Specialist", "Enterprise Risk Manager"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Career paths in financial institutions, consulting firms, or corporate risk management departments."
      },
      institutions: [
        "Risk Management Association of India",
        "Global Association of Risk Professionals (GARP) India chapter",
        "IIMs with risk management specializations",
        "Professional certifications from international bodies"
      ],
      industryTrends: "Integration of AI in risk modeling, focus on cybersecurity risks, climate risk assessment, and regulatory technology solutions."
    },
    {
      id: "actuary",
      title: "Actuary",
      category: "finance",
      description: "Assess and manage financial risks using mathematics, statistics, and financial theory, primarily in insurance and pension industries.",
      educationRequirements: [
        "Bachelor's degree in Actuarial Science, Mathematics, Statistics, or related field",
        "Passing actuarial examinations from recognized institutes (IAI, IFoA)",
        "Continuous professional development",
        "Strong mathematical and statistical foundation"
      ],
      skillRequirements: [
        "Advanced mathematics and statistics",
        "Risk assessment and management",
        "Financial modeling and forecasting",
        "Data analysis and interpretation",
        "Regulatory framework knowledge"
      ],
      careerInsights: {
        roles: ["Life Insurance Actuary", "General Insurance Actuary", "Pension Actuary", "Risk Management Actuary"],
        salaryRange: "₹6,00,000 - ₹30,00,000+ per year (varies by qualification level)",
        growthProspects: "Progressive career path in insurance companies, consulting firms, or regulatory bodies."
      },
      institutions: [
        "Institute of Actuaries of India (IAI)",
        "Actuarial Science programs at universities",
        "Insurance Institute of India",
        "Specialized actuarial coaching institutes"
      ],
      industryTrends: "Predictive analytics in underwriting, data science integration, InsurTech disruption, and health insurance innovations."
    },
    {
      id: "tax-consultant",
      title: "Tax Consultant",
      category: "finance",
      description: "Provide advice on tax planning, compliance, and optimization strategies for individuals, businesses, and other organizations.",
      educationRequirements: [
        "Bachelor's degree in Commerce, Finance, or related field",
        "Professional qualification like CA, CS, or LLB with tax specialization",
        "Tax certification programs",
        "Master's in Taxation or MBA with finance specialization beneficial"
      ],
      skillRequirements: [
        "Tax laws and regulations knowledge",
        "Tax planning and strategy",
        "Compliance process management",
        "Financial analysis for tax implications",
        "Client advisory communication"
      ],
      careerInsights: {
        roles: ["Personal Tax Advisor", "Corporate Tax Specialist", "International Tax Consultant", "Tax Litigation Expert"],
        salaryRange: "₹4,00,000 - ₹20,00,000 per year",
        growthProspects: "Career advancement in tax consultancy firms, accounting practices, or corporate tax departments."
      },
      institutions: [
        "Institute of Chartered Accountants of India (ICAI)",
        "National Academy of Direct Taxes",
        "Tax research and training institutions",
        "Professional tax certification programs"
      ],
      industryTrends: "Digitalization of tax processes, global tax transparency initiatives, GST evolution, and technology-enabled compliance solutions."
    },
    {
      id: "credit-analyst",
      title: "Credit Analyst",
      category: "finance",
      description: "Evaluate the creditworthiness of individuals, businesses, and securities to make lending and investment recommendations.",
      educationRequirements: [
        "Bachelor's degree in Finance, Accounting, Economics, or related field",
        "Professional certifications like CFA, FRM beneficial",
        "Master's degree for advanced positions",
        "Banking and credit analysis training"
      ],
      skillRequirements: [
        "Financial statement analysis",
        "Credit risk assessment",
        "Industry and market analysis",
        "Regulatory compliance knowledge",
        "Risk modeling and quantitative skills"
      ],
      careerInsights: {
        roles: ["Corporate Credit Analyst", "Retail Credit Analyst", "Credit Rating Analyst", "Credit Risk Manager"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Career progression in banking, financial institutions, credit rating agencies, or corporate credit departments."
      },
      institutions: [
        "Indian Institute of Banking and Finance",
        "Risk Management Association courses",
        "Credit analysis programs at banking institutes",
        "Professional certification bodies"
      ],
      industryTrends: "AI and machine learning in credit scoring, alternative data in credit assessment, and real-time credit monitoring systems."
    },
    {
      id: "compliance-officer",
      title: "Compliance Officer",
      category: "finance",
      description: "Ensure that financial institutions and organizations adhere to laws, regulations, and internal policies to mitigate regulatory and reputational risks.",
      educationRequirements: [
        "Bachelor's degree in Law, Finance, Business, or related field",
        "Professional certifications in compliance (CAMS, CAMS, COCP)",
        "Advanced degrees in Law or Business beneficial",
        "Regulatory knowledge specific to financial sectors"
      ],
      skillRequirements: [
        "Financial regulations knowledge",
        "Risk assessment and management",
        "Compliance monitoring and testing",
        "Policy development and implementation",
        "Investigative and reporting skills"
      ],
      careerInsights: {
        roles: ["AML Compliance Officer", "Regulatory Compliance Specialist", "KYC Analyst", "Chief Compliance Officer"],
        salaryRange: "₹5,00,000 - ₹25,00,000 per year",
        growthProspects: "Career advancement in banking, securities firms, insurance companies, or regulatory bodies."
      },
      institutions: [
        "Indian Institute of Banking and Finance",
        "Compliance certification programs by NISM",
        "Association of Certified Anti-Money Laundering Specialists (ACAMS) India chapter",
        "Regulatory compliance courses by financial regulators"
      ],
      industryTrends: "RegTech solutions for compliance automation, enhanced KYC/AML requirements, data privacy compliance, and cross-border regulatory coordination."
    },
    {
      id: "financial-planner",
      title: "Financial Planner",
      category: "finance",
      description: "Develop comprehensive financial plans for individuals and families to help them achieve short and long-term financial goals.",
      educationRequirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "Certified Financial Planner (CFP) certification",
        "Additional certifications in specialized areas like retirement or estate planning",
        "Licensing as per regulatory requirements"
      ],
      skillRequirements: [
        "Financial goal planning and strategizing",
        "Investment portfolio construction",
        "Insurance and risk management",
        "Tax and estate planning",
        "Client relationship management"
      ],
      careerInsights: {
        roles: ["Personal Financial Planner", "Retirement Planning Specialist", "Estate Planning Advisor", "Insurance and Investment Consultant"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year (plus commissions/fees)",
        growthProspects: "Career paths in financial advisory firms, banks, insurance companies, or independent practice."
      },
      institutions: [
        "Financial Planning Standards Board India",
        "Professional financial planning certification programs",
        "Financial planning courses at management institutes",
        "Insurance and investment training academies"
      ],
      industryTrends: "Goal-based financial planning approaches, technology-enabled planning tools, fee-based advisory models, and financial wellness programs."
    }
  ],
  medicine: [
    {
      id: "doctor",
      title: "Doctor",
      category: "medicine",
      description: "Diagnose and treat illnesses, injuries, and other health conditions in patients.",
      educationRequirements: [
        "MBBS - 5.5 years (including internship)",
        "MD/MS - 3 additional years for specialization",
        "DM/MCh - 3 more years for super-specialization",
        "NEET examination for admission to medical colleges"
      ],
      skillRequirements: [
        "Clinical knowledge and diagnostic skills",
        "Patient care and communication",
        "Medical procedures and treatments",
        "Critical thinking and problem-solving",
        "Knowledge of medical ethics and regulations"
      ],
      careerInsights: {
        roles: ["General Physician", "Surgeon", "Pediatrician", "Cardiologist", "Dermatologist"],
        salaryRange: "₹6,00,000 - ₹40,00,000+ per year (varies widely by specialization and sector)",
        growthProspects: "Career growth through specialization, private practice, or positions in hospitals and healthcare organizations."
      },
      institutions: [
        "All India Institute of Medical Sciences (AIIMS)",
        "Christian Medical College, Vellore",
        "Armed Forces Medical College, Pune",
        "Government Medical Colleges in various states"
      ],
      industryTrends: "Telemedicine, AI in diagnostics, personalized medicine, and preventive healthcare gaining prominence."
    },
    {
      id: "dentist-medicine",
      title: "Dentist",
      category: "medicine",
      description: "Diagnose and treat problems affecting the teeth, gums, and oral cavity to maintain oral health.",
      educationRequirements: [
        "Bachelor of Dental Surgery (BDS) - 5 years",
        "Master of Dental Surgery (MDS) for specialization - 3 years",
        "NEET exam for admission to dental colleges",
        "Dental Council of India registration"
      ],
      skillRequirements: [
        "Dental procedures and techniques",
        "Patient management and communication",
        "Manual dexterity and precision",
        "Diagnostic abilities",
        "Knowledge of dental materials and technology"
      ],
      careerInsights: {
        roles: ["General Dentist", "Orthodontist", "Endodontist", "Oral Surgeon", "Periodontist"],
        salaryRange: "₹5,00,000 - ₹25,00,000+ per year (varies by specialization and practice)",
        growthProspects: "Career advancement through specialization, private practice establishment, or academic positions."
      },
      institutions: [
        "Maulana Azad Institute of Dental Sciences",
        "Manipal College of Dental Sciences",
        "Government Dental College and Hospital, Mumbai",
        "Saveetha Dental College"
      ],
      industryTrends: "Digital dentistry, minimally invasive procedures, dental implant technology, and cosmetic dentistry innovations."
    },
    {
      id: "nurse",
      title: "Nurse",
      category: "medicine",
      description: "Provide patient care, administer medications, assist with treatments, and coordinate healthcare services in various settings.",
      educationRequirements: [
        "General Nursing and Midwifery (GNM) - 3.5 years",
        "B.Sc. Nursing - 4 years",
        "M.Sc. Nursing for specialization - 2 years",
        "Registration with Nursing Council"
      ],
      skillRequirements: [
        "Clinical care procedures",
        "Patient assessment and monitoring",
        "Medical equipment operation",
        "Documentation and record-keeping",
        "Communication and empathy"
      ],
      careerInsights: {
        roles: ["Staff Nurse", "Nurse Practitioner", "Nurse Educator", "Nurse Manager", "Specialized Nurse"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year (varies by role and setting)",
        growthProspects: "Career progression to nursing management, education, or specialized clinical roles."
      },
      institutions: [
        "College of Nursing, AIIMS",
        "College of Nursing, CMC Vellore",
        "Manipal College of Nursing",
        "Government nursing colleges in different states"
      ],
      industryTrends: "Advanced practice nursing, telehealth nursing, specialized nursing certifications, and global nursing opportunities."
    },
    {
      id: "pharmacist-medicine",
      title: "Pharmacist",
      category: "medicine",
      description: "Dispense medications, provide information on drug use, and monitor patient health and medication efficacy.",
      educationRequirements: [
        "Bachelor of Pharmacy (B.Pharm) - 4 years",
        "Doctor of Pharmacy (Pharm.D) - 6 years",
        "M.Pharm for specialization - 2 years",
        "Registration with Pharmacy Council"
      ],
      skillRequirements: [
        "Pharmaceutical knowledge",
        "Medication dispensing and management",
        "Patient counseling",
        "Drug interaction awareness",
        "Inventory management"
      ],
      careerInsights: {
        roles: ["Clinical Pharmacist", "Hospital Pharmacist", "Community Pharmacist", "Industrial Pharmacist", "Regulatory Affairs Pharmacist"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Career paths in healthcare facilities, retail, pharmaceutical industry, or research."
      },
      institutions: [
        "National Institute of Pharmaceutical Education and Research (NIPER)",
        "Jamia Hamdard University",
        "Manipal College of Pharmaceutical Sciences",
        "Bombay College of Pharmacy"
      ],
      industryTrends: "Clinical pharmacy services, medication therapy management, pharmacogenomics, and automated dispensing systems."
    },
    {
      id: "physiotherapist-medicine",
      title: "Physiotherapist",
      category: "medicine",
      description: "Treat patients with physical difficulties resulting from illness, injury, disability, or aging through movement, exercise, and manual therapy.",
      educationRequirements: [
        "Bachelor of Physiotherapy (BPT) - 4.5 years",
        "Master of Physiotherapy (MPT) for specialization - 2 years",
        "Ph.D. for academic or research roles",
        "Registration with relevant physiotherapy association"
      ],
      skillRequirements: [
        "Assessment and diagnosis skills",
        "Treatment planning and execution",
        "Manual therapy techniques",
        "Exercise prescription",
        "Patient education and motivation"
      ],
      careerInsights: {
        roles: ["Orthopedic Physiotherapist", "Neurological Physiotherapist", "Sports Physiotherapist", "Pediatric Physiotherapist", "Geriatric Physiotherapist"],
        salaryRange: "₹3,50,000 - ₹12,00,000 per year",
        growthProspects: "Opportunities in hospitals, rehabilitation centers, sports teams, private practice, or home healthcare."
      },
      institutions: [
        "All India Institute of Physical Medicine and Rehabilitation",
        "Manipal College of Health Professions",
        "AIIMS Department of Physical Medicine and Rehabilitation",
        "Jamia Hamdard University"
      ],
      industryTrends: "Telerehabilitation, wearable technology in monitoring, evidence-based practice, and interdisciplinary rehabilitation approaches."
    },
    {
      id: "medical-laboratory-technologist",
      title: "Medical Laboratory Technologist",
      category: "medicine",
      description: "Perform laboratory tests on patient samples to provide critical information for disease diagnosis, treatment, and prevention.",
      educationRequirements: [
        "Bachelor's in Medical Laboratory Technology (B.MLT) - 3-4 years",
        "Master's in Medical Laboratory Technology (M.MLT) - 2 years",
        "Diploma courses for entry-level positions",
        "Specialized certifications for advanced techniques"
      ],
      skillRequirements: [
        "Laboratory testing procedures",
        "Sample collection and processing",
        "Equipment operation and maintenance",
        "Quality control protocols",
        "Data analysis and reporting"
      ],
      careerInsights: {
        roles: ["Clinical Laboratory Technologist", "Histotechnologist", "Cytotechnologist", "Microbiology Technologist", "Blood Bank Technologist"],
        salaryRange: "₹3,00,000 - ₹8,00,000 per year",
        growthProspects: "Career advancement to senior technologist, laboratory manager, or specialized areas of laboratory medicine."
      },
      institutions: [
        "All India Institute of Medical Sciences (Laboratory courses)",
        "Christian Medical College, Vellore",
        "Medical colleges offering MLT programs",
        "Specialized laboratory training institutes"
      ],
      industryTrends: "Automation of laboratory processes, molecular diagnostics, point-of-care testing, and digital pathology."
    },
    {
      id: "medical-imaging-technologist",
      title: "Medical Imaging Technologist",
      category: "medicine",
      description: "Operate imaging equipment to create diagnostic images for physicians to interpret and diagnose medical conditions.",
      educationRequirements: [
        "Bachelor's in Medical Imaging Technology (B.MIT) - 3-4 years",
        "Diploma in Radiography for entry-level positions",
        "Advanced certifications for specialized modalities",
        "Radiation safety training and certification"
      ],
      skillRequirements: [
        "Imaging equipment operation",
        "Patient positioning and care",
        "Radiation safety protocols",
        "Image quality assessment",
        "Basic anatomy and physiology knowledge"
      ],
      careerInsights: {
        roles: ["Radiographer", "CT Technologist", "MRI Technologist", "Sonographer", "Nuclear Medicine Technologist"],
        salaryRange: "₹3,50,000 - ₹10,00,000 per year",
        growthProspects: "Career paths in hospitals, diagnostic centers, or specialized imaging departments."
      },
      institutions: [
        "All India Institute of Medical Sciences (Radiography courses)",
        "Post Graduate Institute of Medical Education and Research",
        "Medical colleges offering imaging technology programs",
        "Specialized radiography institutes"
      ],
      industryTrends: "Advanced imaging modalities, 3D and 4D imaging, interventional radiology procedures, and AI in image interpretation."
    },
    {
      id: "public-health-professional",
      title: "Public Health Professional",
      category: "medicine",
      description: "Protect and improve community health through education, policy development, research, and health promotion programs.",
      educationRequirements: [
        "Bachelor's in Public Health or related field",
        "Master of Public Health (MPH) - 2 years",
        "Ph.D. in Public Health for research and academic positions",
        "Specialized certifications in public health areas"
      ],
      skillRequirements: [
        "Epidemiology and biostatistics",
        "Health policy and administration",
        "Community health assessment",
        "Program planning and evaluation",
        "Health communication"
      ],
      careerInsights: {
        roles: ["Epidemiologist", "Health Educator", "Public Health Administrator", "Environmental Health Specialist", "Global Health Consultant"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in government agencies, NGOs, international organizations, or research institutions."
      },
      institutions: [
        "All India Institute of Hygiene and Public Health",
        "Public Health Foundation of India",
        "Indian Institute of Public Health",
        "Schools of Public Health in medical universities"
      ],
      industryTrends: "Data-driven public health approaches, preparedness for emerging diseases, digital health interventions, and focus on social determinants of health."
    },
    {
      id: "healthcare-administrator",
      title: "Healthcare Administrator",
      category: "medicine",
      description: "Manage healthcare facilities, departments, or clinical practices to ensure efficient operations and quality patient care.",
      educationRequirements: [
        "Bachelor's degree in Healthcare Administration or related field",
        "Master's in Hospital Administration (MHA) or Healthcare Management",
        "MBA with healthcare specialization",
        "Healthcare management certifications"
      ],
      skillRequirements: [
        "Healthcare operations management",
        "Financial and resource management",
        "Healthcare regulations and compliance",
        "Staff supervision and development",
        "Quality improvement processes"
      ],
      careerInsights: {
        roles: ["Hospital Administrator", "Clinic Manager", "Department Administrator", "Healthcare Consultant", "Medical Practice Manager"],
        salaryRange: "₹5,00,000 - ₹25,00,000 per year",
        growthProspects: "Career advancement to executive positions in healthcare organizations or healthcare consulting."
      },
      institutions: [
        "All India Institute of Medical Sciences (Hospital Administration)",
        "Tata Institute of Social Sciences (Health Administration)",
        "Indian Institute of Health Management Research",
        "IIHMR, Symbiosis, and other institutions offering MHA programs"
      ],
      industryTrends: "Value-based healthcare models, healthcare technology implementation, patient experience focus, and healthcare analytics."
    },
    {
      id: "medical-scientist",
      title: "Medical Scientist",
      category: "medicine",
      description: "Conduct research to improve human health, develop treatments, and enhance understanding of diseases and medical conditions.",
      educationRequirements: [
        "MBBS or Bachelor's in Life Sciences",
        "Master's in relevant scientific field",
        "Ph.D. in medical sciences or related field",
        "Post-doctoral research experience for advanced positions"
      ],
      skillRequirements: [
        "Research methodology",
        "Laboratory techniques",
        "Data analysis and statistics",
        "Scientific writing and publication",
        "Grant writing and research funding"
      ],
      careerInsights: {
        roles: ["Clinical Researcher", "Biomedical Scientist", "Translational Researcher", "Medical Geneticist", "Pharmacologist"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Career paths in research institutions, pharmaceutical companies, academic medical centers, or biotechnology firms."
      },
      institutions: [
        "Indian Council of Medical Research (ICMR) institutes",
        "National Institute of Immunology",
        "Centre for Cellular and Molecular Biology",
        "Medical research departments at major universities"
      ],
      industryTrends: "Precision medicine, gene therapy, immunotherapy, regenerative medicine, and cross-disciplinary research approaches."
    }
  ],
  political: [
    {
      id: "policy-analyst",
      title: "Policy Analyst",
      category: "political",
      description: "Research, analyze, and evaluate government policies and their impacts on society and various stakeholders.",
      educationRequirements: [
        "Bachelor's degree in Political Science, Public Policy, Economics, or related field",
        "Master's degree in Public Policy, Public Administration, or related field often preferred",
        "Ph.D. for academic or high-level research positions"
      ],
      skillRequirements: [
        "Policy research and analysis",
        "Data analysis and statistics",
        "Understanding of political systems and governance",
        "Report writing and presentation skills",
        "Knowledge of social and economic issues"
      ],
      careerInsights: {
        roles: ["Government Policy Analyst", "Think Tank Researcher", "Policy Consultant", "Program Evaluator"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year (varies by sector)",
        growthProspects: "Advancement to senior policy roles in government, international organizations, or consulting firms."
      },
      institutions: [
        "Jawaharlal Nehru University (JNU)",
        "Tata Institute of Social Sciences (TISS)",
        "Delhi School of Economics",
        "Indian Institute of Public Administration"
      ],
      industryTrends: "Data-driven policy making, evidence-based approaches, and increasing focus on sustainable development policies."
    },
    {
      id: "diplomat",
      title: "Diplomat",
      category: "political",
      description: "Represent and protect a country's interests and citizens abroad while promoting diplomatic relations with other nations.",
      educationRequirements: [
        "Bachelor's degree (any discipline for Indian Foreign Service exam)",
        "Passing the Civil Services Examination with IFS allocation",
        "Training at Foreign Service Institute",
        "Language proficiency and international relations knowledge"
      ],
      skillRequirements: [
        "Diplomatic protocol and etiquette",
        "Negotiation and conflict resolution",
        "Political analysis and reporting",
        "Cross-cultural communication",
        "Policy implementation"
      ],
      careerInsights: {
        roles: ["Foreign Service Officer", "Consular Officer", "Economic Diplomat", "Cultural Attaché"],
        salaryRange: "₹60,000 - ₹2,50,000 per month (government pay scales)",
        growthProspects: "Career progression through diplomatic ranks from Third Secretary to Ambassador/High Commissioner."
      },
      institutions: [
        "Foreign Service Institute, Ministry of External Affairs",
        "Civil Services training institutes",
        "Schools of International Relations at universities",
        "Diplomatic academies"
      ],
      industryTrends: "Digital diplomacy, economic diplomacy focus, multilateral engagement on global challenges, and diaspora diplomacy."
    },
    {
      id: "political-consultant",
      title: "Political Consultant",
      category: "political",
      description: "Advise political candidates, parties, or organizations on campaign strategy, messaging, and policy positioning.",
      educationRequirements: [
        "Bachelor's degree in Political Science, Communications, Public Relations, or related field",
        "Master's degree often beneficial but not required",
        "Campaign experience and political knowledge more important than formal education",
        "Specialized training in political communication and strategy"
      ],
      skillRequirements: [
        "Political strategy development",
        "Campaign management",
        "Public opinion research",
        "Message development and communication",
        "Media relations and social media strategy"
      ],
      careerInsights: {
        roles: ["Campaign Strategist", "Political Advisor", "Media Consultant", "Opposition Researcher"],
        salaryRange: "₹5,00,000 - ₹30,00,000+ per year (highly variable based on client profile)",
        growthProspects: "Career growth through successfully managed campaigns, specialization in particular aspects of political consulting, or consulting firm leadership."
      },
      institutions: [
        "Political science departments at universities",
        "Political consulting firms",
        "Political party training programs",
        "Campaign management bootcamps"
      ],
      industryTrends: "Data-driven campaigning, micro-targeting voters, digital campaign strategies, and personal brand development for candidates."
    },
    {
      id: "political-scientist",
      title: "Political Scientist",
      category: "political",
      description: "Study political systems, theories, behavior, and institutions to analyze trends, predict developments, and inform political discourse.",
      educationRequirements: [
        "Bachelor's degree in Political Science or related field",
        "Master's degree in Political Science for research positions",
        "Ph.D. required for academic and advanced research roles",
        "Specialized training in research methodologies"
      ],
      skillRequirements: [
        "Research design and methodology",
        "Data analysis and statistical techniques",
        "Political theory and comparative politics",
        "Academic writing and publication",
        "Critical analysis of political phenomena"
      ],
      careerInsights: {
        roles: ["University Professor", "Political Researcher", "Political Theorist", "Comparative Politics Specialist"],
        salaryRange: "₹5,00,000 - ₹15,00,000 per year (academic positions)",
        growthProspects: "Career paths in academia, research institutes, think tanks, or political advisory roles."
      },
      institutions: [
        "Jawaharlal Nehru University (JNU)",
        "University of Delhi Political Science Department",
        "TISS School of Public Policy",
        "Political research institutes"
      ],
      industryTrends: "Quantitative approaches to political analysis, interdisciplinary research, and focus on emerging political phenomena like digital democracy and non-state actors."
    },
    {
      id: "international-relations-specialist",
      title: "International Relations Specialist",
      category: "political",
      description: "Analyze and interpret global political, economic, and social events and their impacts on international relationships and policies.",
      educationRequirements: [
        "Bachelor's degree in International Relations, Political Science, or related field",
        "Master's degree in International Relations, Global Studies, or Diplomacy",
        "Ph.D. for academic and advanced research roles",
        "Regional and language specializations beneficial"
      ],
      skillRequirements: [
        "Geopolitical analysis",
        "International organizations knowledge",
        "Foreign policy understanding",
        "Cross-cultural communication",
        "Conflict resolution approaches"
      ],
      careerInsights: {
        roles: ["International Affairs Analyst", "Foreign Policy Advisor", "International Organization Officer", "Global Risk Consultant"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Career opportunities in international organizations, government, think tanks, and global corporations."
      },
      institutions: [
        "School of International Studies, JNU",
        "Jindal School of International Affairs",
        "Department of International Relations, South Asian University",
        "International relations programs at major universities"
      ],
      industryTrends: "Non-traditional security issues, economic diplomacy, multilateral approaches to global challenges, and regional integration studies."
    },
    {
      id: "political-campaign-manager",
      title: "Political Campaign Manager",
      category: "political",
      description: "Direct and coordinate political campaigns, overseeing strategy, staffing, messaging, fundraising, and voter outreach.",
      educationRequirements: [
        "Bachelor's degree in Political Science, Communications, or related field",
        "Campaign experience often more valued than formal education",
        "Political management certifications beneficial",
        "Continuous learning through campaign workshops and training"
      ],
      skillRequirements: [
        "Campaign strategy and planning",
        "Team leadership and management",
        "Voter targeting and outreach",
        "Fundraising and budget management",
        "Crisis management and rapid response"
      ],
      careerInsights: {
        roles: ["Campaign Director", "Field Director", "Political Organizer", "Election Strategist"],
        salaryRange: "₹6,00,000 - ₹25,00,000 per campaign (varies widely by election level)",
        growthProspects: "Career progression from local to state to national campaigns, or transition to political consulting and strategy."
      },
      institutions: [
        "Political party training programs",
        "Campaign management courses",
        "Political leadership academies",
        "Grassroots organizing institutes"
      ],
      industryTrends: "Digital campaigning, data-driven voter targeting, year-round campaign structures, and integrated communications strategies."
    },
    {
      id: "legislative-assistant",
      title: "Legislative Assistant",
      category: "political",
      description: "Support elected officials by researching policy issues, drafting legislation, managing constituent services, and coordinating legislative activities.",
      educationRequirements: [
        "Bachelor's degree in Political Science, Public Administration, or related field",
        "Master's degree beneficial for senior positions",
        "Understanding of legislative processes and government systems",
        "Knowledge of specific policy areas relevant to the legislator"
      ],
      skillRequirements: [
        "Legislative research and analysis",
        "Bill drafting and tracking",
        "Constituent correspondence management",
        "Political environment understanding",
        "Administrative and organizational skills"
      ],
      careerInsights: {
        roles: ["Legislative Aide", "Policy Advisor", "Committee Staffer", "Chief of Staff"],
        salaryRange: "₹3,50,000 - ₹12,00,000 per year",
        growthProspects: "Career advancement within legislative offices, political committees, or transition to lobbying or policy consulting."
      },
      institutions: [
        "Political science programs at universities",
        "Legislative staff training programs",
        "Public administration institutes",
        "Government affairs training"
      ],
      industryTrends: "Increased specialization in policy areas, digital constituent engagement, and collaboration between legislative offices."
    },
    {
      id: "political-journalist",
      title: "Political Journalist",
      category: "political",
      description: "Report on political events, policies, elections, and governance, providing analysis and context to inform the public.",
      educationRequirements: [
        "Bachelor's degree in Journalism, Mass Communication, or Political Science",
        "Master's degree in Political Journalism or related field beneficial",
        "Political knowledge and journalistic training",
        "Continuous learning about evolving political landscapes"
      ],
      skillRequirements: [
        "Political reporting and writing",
        "Source development and interviewing",
        "Fact-checking and verification",
        "Political analysis and contextualization",
        "Multimedia journalism skills"
      ],
      careerInsights: {
        roles: ["Political Reporter", "Political Editor", "Political Columnist", "Political Analyst"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year (varies by publication and seniority)",
        growthProspects: "Career progression from reporter to editor, specialized political correspondent, or political commentator."
      },
      institutions: [
        "Indian Institute of Mass Communication",
        "Asian College of Journalism",
        "Symbiosis Institute of Media and Communication",
        "Media departments with political journalism focus"
      ],
      industryTrends: "Digital-first political reporting, data journalism in politics, audience engagement strategies, and specialized political news platforms."
    },
    {
      id: "civil-society-activist",
      title: "Civil Society Activist",
      category: "political",
      description: "Advocate for social, political, or environmental change through organizing, campaigning, and engaging with political processes and institutions.",
      educationRequirements: [
        "Background in Social Sciences, Politics, Law, or relevant fields beneficial but not required",
        "Experience and commitment to causes often more important than formal education",
        "Knowledge of advocacy techniques and community organizing",
        "Understanding of policy processes and governance systems"
      ],
      skillRequirements: [
        "Advocacy and campaigning",
        "Community organizing and mobilization",
        "Strategic planning for social change",
        "Communications and public speaking",
        "Coalition building and networking"
      ],
      careerInsights: {
        roles: ["NGO Director", "Campaign Coordinator", "Advocacy Specialist", "Community Organizer"],
        salaryRange: "₹2,50,000 - ₹10,00,000 per year (varies widely by organization size)",
        growthProspects: "Career paths in non-profit leadership, advocacy organizations, or transition to formal political engagement."
      },
      institutions: [
        "Organizations focused on social justice, environmental, or human rights issues",
        "Advocacy training programs",
        "Social work and community development institutes",
        "Global activist networks and training centers"
      ],
      industryTrends: "Digital advocacy tactics, data-driven campaigning, intersectional approaches to activism, and global solidarity networks."
    },
    {
      id: "political-risk-analyst",
      title: "Political Risk Analyst",
      category: "political",
      description: "Assess political developments and their potential impacts on businesses, investments, and operations in specific countries or regions.",
      educationRequirements: [
        "Bachelor's degree in Political Science, International Relations, Economics, or related field",
        "Master's degree in International Affairs, Security Studies, or Political Economy",
        "Region-specific expertise and language skills",
        "Analytical training and risk assessment methodologies"
      ],
      skillRequirements: [
        "Political environment analysis",
        "Risk assessment frameworks",
        "Country and regional expertise",
        "Economic and business understanding",
        "Forecasting and scenario planning"
      ],
      careerInsights: {
        roles: ["Country Risk Analyst", "Geopolitical Consultant", "Political Intelligence Analyst", "Global Security Advisor"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Career opportunities in consulting firms, financial institutions, multinational corporations, and specialized risk advisory services."
      },
      institutions: [
        "International relations and security studies programs",
        "Risk management institutions",
        "Economic and political intelligence firms",
        "Global affairs programs at business schools"
      ],
      industryTrends: "Integrated political-economic risk models, real-time risk monitoring platforms, climate politics risk assessment, and technological disruption analysis."
    }
  ],
  civil: [
    {
      id: "ias-officer",
      title: "IAS Officer",
      category: "civil",
      description: "Administer government policies and programs as part of the Indian Administrative Service, the premier civil service of India.",
      educationRequirements: [
        "Bachelor's degree in any discipline",
        "Clearing the UPSC Civil Services Examination (CSE)",
        "Training at Lal Bahadur Shastri National Academy of Administration (LBSNAA)"
      ],
      skillRequirements: [
        "Administrative and management skills",
        "Understanding of government policies and procedures",
        "Leadership and decision-making abilities",
        "Problem-solving and crisis management",
        "Communication and interpersonal skills"
      ],
      careerInsights: {
        roles: ["District Magistrate/Collector", "Divisional Commissioner", "Secretary to Government", "Chief Secretary"],
        salaryRange: "₹56,100 - ₹2,50,000 per month (Level 10-18 in Pay Matrix) plus allowances",
        growthProspects: "Hierarchical progression based on seniority and performance. Opportunities for central and state government postings."
      },
      institutions: [
        "Universities offering UPSC preparation",
        "Coaching institutes specializing in Civil Services",
        "Lal Bahadur Shastri National Academy of Administration (for selected candidates)",
        "Self-study with UPSC curriculum"
      ],
      industryTrends: "Increasing focus on technology implementation in governance, sustainable development, and citizen-centric administration."
    },
    {
      id: "ips-officer",
      title: "IPS Officer",
      category: "civil",
      description: "Lead police operations and enforce law and order as a member of the Indian Police Service, managing police forces at various levels.",
      educationRequirements: [
        "Bachelor's degree in any discipline",
        "Clearing the UPSC Civil Services Examination (CSE)",
        "Training at Sardar Vallabhbhai Patel National Police Academy"
      ],
      skillRequirements: [
        "Leadership and team management",
        "Crisis handling and decision-making",
        "Law enforcement knowledge",
        "Investigation and crime prevention skills",
        "Community relations management"
      ],
      careerInsights: {
        roles: ["Superintendent of Police", "Deputy Inspector General", "Inspector General", "Director General of Police"],
        salaryRange: "₹56,100 - ₹2,50,000 per month (Level 10-18 in Pay Matrix) plus allowances",
        growthProspects: "Hierarchical progression through police ranks with opportunities for specialized units and central police organizations."
      },
      institutions: [
        "Universities offering UPSC preparation",
        "Coaching institutes specializing in Civil Services",
        "Sardar Vallabhbhai Patel National Police Academy (for selected candidates)",
        "State police training academies"
      ],
      industryTrends: "Integration of technology in policing, community policing approaches, cybercrime expertise, and forensic advancements."
    },
    {
      id: "ifs-officer",
      title: "IFS Officer",
      category: "civil",
      description: "Represent India's interests in international diplomacy as part of the Indian Foreign Service, managing foreign relations and diplomatic missions.",
      educationRequirements: [
        "Bachelor's degree in any discipline",
        "Clearing the UPSC Civil Services Examination (CSE)",
        "Training at Foreign Service Institute"
      ],
      skillRequirements: [
        "Diplomatic skills and protocol knowledge",
        "International relations understanding",
        "Negotiation and conflict resolution",
        "Language proficiency",
        "Cross-cultural communication"
      ],
      careerInsights: {
        roles: ["Third Secretary", "Second Secretary", "First Secretary", "Ambassador/High Commissioner"],
        salaryRange: "₹56,100 - ₹2,50,000 per month (Level 10-18 in Pay Matrix) plus foreign allowances",
        growthProspects: "Career progression through diplomatic ranks with global posting opportunities and specialized diplomatic roles."
      },
      institutions: [
        "Universities offering UPSC preparation",
        "Coaching institutes specializing in Civil Services",
        "Foreign Service Institute (for selected candidates)",
        "International relations programs at universities"
      ],
      industryTrends: "Economic diplomacy focus, digital diplomacy, cultural diplomacy initiatives, and multilateral diplomatic engagement."
    },
    {
      id: "irs-officer",
      title: "IRS Officer",
      category: "civil",
      description: "Administer revenue collection and tax laws as a member of the Indian Revenue Service, working in income tax or customs and indirect taxes.",
      educationRequirements: [
        "Bachelor's degree in any discipline",
        "Clearing the UPSC Civil Services Examination (CSE)",
        "Training at National Academy of Direct Taxes (NADT) or National Academy of Customs, Indirect Taxes and Narcotics (NACIN)"
      ],
      skillRequirements: [
        "Taxation laws and procedures knowledge",
        "Financial analysis and investigation skills",
        "Administrative capabilities",
        "Legal interpretation abilities",
        "Audit and assessment expertise"
      ],
      careerInsights: {
        roles: ["Assistant Commissioner", "Joint Commissioner", "Commissioner", "Chief Commissioner"],
        salaryRange: "₹56,100 - ₹2,50,000 per month (Level 10-18 in Pay Matrix) plus allowances",
        growthProspects: "Progressive career path in tax administration with opportunities in specialized investigation units or international taxation."
      },
      institutions: [
        "Universities offering UPSC preparation",
        "Coaching institutes specializing in Civil Services",
        "National Academy of Direct Taxes (for IT service)",
        "National Academy of Customs, Indirect Taxes and Narcotics (for Customs service)"
      ],
      industryTrends: "Digital taxation systems, international tax cooperation, GST implementation evolution, and tax compliance technologies."
    },
    {
      id: "state-civil-service-officer",
      title: "State Civil Service Officer",
      category: "civil",
      description: "Administer state government policies and programs, managing district administration, revenue collection, and public services at the state level.",
      educationRequirements: [
        "Bachelor's degree in any discipline",
        "Clearing the respective State Public Service Commission examination",
        "Training at State Administrative Training Institutes"
      ],
      skillRequirements: [
        "Administrative and managerial abilities",
        "Knowledge of state government systems",
        "Public service delivery management",
        "Crisis handling and decision-making",
        "Community engagement skills"
      ],
      careerInsights: {
        roles: ["Deputy Collector", "Additional Collector", "District Collector", "State Department Director"],
        salaryRange: "₹45,000 - ₹1,50,000 per month (varies by state)",
        growthProspects: "Career progression in state administration with promotion to Indian Administrative Service through selection."
      },
      institutions: [
        "State universities with public administration programs",
        "State Public Service Commission coaching centers",
        "State Administrative Training Institutes",
        "Administrative academies in respective states"
      ],
      industryTrends: "E-governance initiatives, local development focus, disaster management systems, and citizen service delivery innovation."
    },
    {
      id: "railway-service-officer",
      title: "Railway Service Officer",
      category: "civil",
      description: "Manage and administer the Indian Railways through various specialized services including technical and non-technical railway operations.",
      educationRequirements: [
        "Bachelor's degree in relevant discipline (Engineering for technical services)",
        "Clearing UPSC Civil Services or Engineering Services Examination",
        "Training at respective railway training institutes"
      ],
      skillRequirements: [
        "Railway operations knowledge",
        "Technical expertise (for technical services)",
        "Administrative capabilities",
        "Project management skills",
        "Safety and service quality management"
      ],
      careerInsights: {
        roles: ["Assistant Officer", "Divisional Officer", "Senior Divisional Officer", "Principal Chief Officer"],
        salaryRange: "₹56,100 - ₹2,50,000 per month (Level 10-18 in Pay Matrix) plus allowances",
        growthProspects: "Specialized career path in railway administration with technical or non-technical tracks."
      },
      institutions: [
        "Universities offering UPSC preparation",
        "Engineering colleges for technical services",
        "Railway Staff College, Vadodara",
        "Indian Railways Institute of Transport Management"
      ],
      industryTrends: "Railway modernization, high-speed rail initiatives, station redevelopment programs, and technological upgradation."
    },
    {
      id: "defense-civilian-officer",
      title: "Defense Civilian Officer",
      category: "civil",
      description: "Manage administrative, technical, and logistical operations supporting India's defense forces as civilian officers in defense departments.",
      educationRequirements: [
        "Bachelor's degree in relevant discipline",
        "Clearing specific defense civilian service examinations",
        "Training at respective defense training institutes"
      ],
      skillRequirements: [
        "Defense administration knowledge",
        "Technical expertise (for technical services)",
        "Procurement and logistics management",
        "Security protocols understanding",
        "Personnel and resource management"
      ],
      careerInsights: {
        roles: ["Assistant Director", "Deputy Director", "Joint Director", "Director General"],
        salaryRange: "₹45,000 - ₹1,75,000 per month (varies by service and level)",
        growthProspects: "Career progression in defense civilian administration with specialized tracks in various defense departments."
      },
      institutions: [
        "Universities with defense studies programs",
        "Defense services administrative institutes",
        "Specialized defense training academies",
        "Engineering colleges for technical defense services"
      ],
      industryTrends: "Defense modernization support, indigenization initiatives, defense procurement reforms, and technology integration."
    },
    {
      id: "public-sector-undertaking-officer",
      title: "Public Sector Undertaking Officer",
      category: "civil",
      description: "Manage operations, administration, or technical functions in government-owned corporations and enterprises across various sectors.",
      educationRequirements: [
        "Bachelor's degree in relevant discipline (Engineering, Management, Finance, etc.)",
        "Clearing PSU-specific recruitment examinations",
        "Management trainee programs in PSUs",
        "Sector-specific professional qualifications"
      ],
      skillRequirements: [
        "Business administration knowledge",
        "Technical expertise (for technical roles)",
        "Public sector policy understanding",
        "Project management capabilities",
        "Corporate governance awareness"
      ],
      careerInsights: {
        roles: ["Management Trainee", "Assistant Manager", "Deputy General Manager", "Director"],
        salaryRange: "₹40,000 - ₹2,00,000 per month (varies by PSU and position)",
        growthProspects: "Career advancement in PSU hierarchy with opportunities for board-level positions in some cases."
      },
      institutions: [
        "Engineering colleges for technical PSUs",
        "Management institutes for managerial positions",
        "PSU-specific training academies",
        "Professional institutes aligned with specific PSU sectors"
      ],
      industryTrends: "PSU modernization, corporate governance enhancement, digital transformation, and performance-based management systems."
    },
    {
      id: "municipal-administrator",
      title: "Municipal Administrator",
      category: "civil",
      description: "Manage urban local bodies and municipal corporations, overseeing city services, urban planning, and local governance.",
      educationRequirements: [
        "Bachelor's degree in relevant discipline",
        "Municipal services examination clearance",
        "State civil service background in some cases",
        "Urban planning or public administration qualifications beneficial"
      ],
      skillRequirements: [
        "Urban governance knowledge",
        "Municipal service delivery management",
        "Budget and resource allocation",
        "Community engagement",
        "Crisis management in urban settings"
      ],
      careerInsights: {
        roles: ["Assistant Municipal Commissioner", "Deputy Municipal Commissioner", "Additional Municipal Commissioner", "Municipal Commissioner"],
        salaryRange: "₹40,000 - ₹1,50,000 per month (varies by city tier and position)",
        growthProspects: "Career path in urban administration with progression to larger cities or specialized urban development roles."
      },
      institutions: [
        "Urban planning institutes",
        "Public administration programs at universities",
        "Administrative training institutes with urban governance modules",
        "State urban development academies"
      ],
      industryTrends: "Smart city initiatives, urban sustainability projects, e-governance in cities, and integrated urban service delivery models."
    },
    {
      id: "public-health-administrator",
      title: "Public Health Administrator",
      category: "civil",
      description: "Manage public health programs, health policy implementation, and healthcare service delivery in government health departments.",
      educationRequirements: [
        "Bachelor's degree in Medicine, Public Health, or Health Administration",
        "Public health service examination clearance",
        "Health administration certifications",
        "Medical background with administrative training"
      ],
      skillRequirements: [
        "Healthcare administration knowledge",
        "Public health program management",
        "Health policy implementation",
        "Healthcare resource allocation",
        "Health data analysis and monitoring"
      ],
      careerInsights: {
        roles: ["District Health Officer", "Joint Director (Health Services)", "Director of Health Services", "Mission Director (Health Programs)"],
        salaryRange: "₹45,000 - ₹1,50,000 per month (varies by level and department)",
        growthProspects: "Career advancement in health administration with opportunities for specialized health program leadership."
      },
      institutions: [
        "Medical colleges with public health programs",
        "National Institute of Health and Family Welfare",
        "Public Health Foundation of India",
        "State health administration institutes"
      ],
      industryTrends: "Digital health initiatives, universal healthcare programs, pandemic preparedness systems, and preventive healthcare focus."
    }
  ],
  transportation: [
    {
      id: "logistics-manager",
      title: "Logistics Manager",
      category: "transportation",
      description: "Coordinate and oversee the transportation, distribution, and storage of goods and materials.",
      educationRequirements: [
        "Bachelor's degree in Logistics, Supply Chain Management, Business, or related field",
        "MBA with specialization in Supply Chain Management for advanced positions",
        "Professional certifications like CSCP (Certified Supply Chain Professional)"
      ],
      skillRequirements: [
        "Supply chain knowledge and logistics planning",
        "Inventory management",
        "Transportation coordination",
        "Knowledge of logistics software and ERP systems",
        "Team management and leadership skills"
      ],
      careerInsights: {
        roles: ["Warehouse Manager", "Transportation Coordinator", "Supply Chain Manager", "Distribution Center Manager"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year (Early to Mid-career)",
        growthProspects: "Advancement to senior logistics roles, supply chain director, or operations management positions."
      },
      institutions: [
        "Indian Institute of Materials Management",
        "National Institute of Industrial Engineering (NITIE)",
        "Indian Institute of Logistics",
        "Supply Chain Management courses at IIMs"
      ],
      industryTrends: "Digital transformation in logistics, automation in warehousing, sustainable transportation solutions, and e-commerce logistics."
    },
    {
      id: "commercial-pilot",
      title: "Commercial Pilot",
      category: "transportation",
      description: "Operate aircraft for passenger or cargo transport, ensuring safe and efficient flight operations.",
      educationRequirements: [
        "10+2 with Physics and Mathematics",
        "Commercial Pilot License (CPL) from DGCA",
        "Type Rating for specific aircraft",
        "Class 1 Medical Certification"
      ],
      skillRequirements: [
        "Aircraft operation and navigation",
        "Aviation regulations knowledge",
        "Decision making and problem solving",
        "Communication and crew coordination",
        "Situational awareness and risk management"
      ],
      careerInsights: {
        roles: ["First Officer", "Captain", "Training Captain", "Chief Pilot"],
        salaryRange: "₹10,00,000 - ₹40,00,000+ per year (varies by airline and aircraft type)",
        growthProspects: "Career progression from first officer to captain with opportunities for management roles in flight operations."
      },
      institutions: [
        "Indira Gandhi Rashtriya Uran Akademi",
        "Flying Training Organizations approved by DGCA",
        "Air Force Academy (for military to civilian transition)",
        "International flight schools"
      ],
      industryTrends: "Increasing automation in cockpits, competency-based training approaches, simulator-based training advancements, and sustainability in aviation."
    },
    {
      id: "air-traffic-controller",
      title: "Air Traffic Controller",
      category: "transportation",
      description: "Manage aircraft traffic in airspace and at airports to ensure safe, orderly, and efficient movement of air traffic.",
      educationRequirements: [
        "Bachelor's degree in Science or Engineering preferred",
        "ATC training from Airports Authority of India or equivalent",
        "Licensing as per DGCA regulations",
        "Regular proficiency assessments"
      ],
      skillRequirements: [
        "Airspace and airport traffic management",
        "Radar and navigational aids operation",
        "Quick decision making under pressure",
        "Clear communication skills",
        "Spatial awareness and visualization"
      ],
      careerInsights: {
        roles: ["Junior ATC", "ATC Officer", "Senior ATC Officer", "ATC Manager"],
        salaryRange: "₹6,00,000 - ₹20,00,000 per year",
        growthProspects: "Career advancement through air traffic services with progression to supervisory and management positions."
      },
      institutions: [
        "Civil Aviation Training College, Allahabad",
        "Airports Authority of India Training Centers",
        "Aviation universities with ATC programs",
        "International ATC training collaborations"
      ],
      industryTrends: "Remote tower operations, automation in ATC, performance-based navigation, and integrated air traffic management systems."
    },
    {
      id: "merchant-navy-officer",
      title: "Merchant Navy Officer",
      category: "transportation",
      description: "Navigate and operate commercial ships for global trade, managing vessel operations and ensuring maritime safety.",
      educationRequirements: [
        "B.Sc. Nautical Science or B.Tech. Marine Engineering",
        "Pre-Sea Training from approved institutes",
        "Certificate of Competency from Directorate General of Shipping",
        "STCW (Standards of Training, Certification and Watchkeeping) certification"
      ],
      skillRequirements: [
        "Navigation and ship handling",
        "Maritime regulations knowledge",
        "Ship systems operation and maintenance",
        "Leadership and crew management",
        "Emergency response procedures"
      ],
      careerInsights: {
        roles: ["Deck Cadet/Engine Cadet", "Third Officer/Fourth Engineer", "Chief Officer/Second Engineer", "Captain/Chief Engineer"],
        salaryRange: "₹6,00,000 - ₹40,00,000+ per year (tax-free in international waters)",
        growthProspects: "Hierarchical progression through ranks with opportunities for shore-based maritime management positions."
      },
      institutions: [
        "Indian Maritime University",
        "T.S. Chanakya",
        "Marine Engineering and Research Institute",
        "DG Shipping approved maritime institutes"
      ],
      industryTrends: "Maritime autonomous systems, green shipping initiatives, digitalization of vessel operations, and advanced navigation technologies."
    },
    {
      id: "railway-engineer",
      title: "Railway Engineer",
      category: "transportation",
      description: "Design, develop, and maintain railway infrastructure, rolling stock, and systems for safe and efficient rail transportation.",
      educationRequirements: [
        "B.Tech/B.E. in Civil, Mechanical, Electrical, or Electronics Engineering",
        "M.Tech specialization beneficial",
        "Indian Railway Service of Engineers (IRSE) through UPSC for government positions",
        "Railway engineering certifications"
      ],
      skillRequirements: [
        "Railway infrastructure design",
        "Track and rolling stock engineering",
        "Signaling and telecommunications systems",
        "Project management for railway projects",
        "Safety standards and regulations knowledge"
      ],
      careerInsights: {
        roles: ["Assistant Railway Engineer", "Divisional Engineer", "Senior Divisional Engineer", "Chief Engineer"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Career progression in railway engineering departments with opportunities for specialized roles in high-speed rail, metros, etc."
      },
      institutions: [
        "Indian Railways Institute of Civil Engineering",
        "Indian Railways Institute of Mechanical and Electrical Engineering",
        "Indian Railways Institute of Signal Engineering and Telecommunications",
        "Engineering colleges with railway engineering specializations"
      ],
      industryTrends: "High-speed rail technology, railway electrification, intelligent transportation systems, and sustainable railway infrastructure."
    },
    {
      id: "ship-captain",
      title: "Ship Captain",
      category: "transportation",
      description: "Command and navigate commercial vessels, managing all aspects of ship operations, safety, and regulatory compliance.",
      educationRequirements: [
        "B.Sc. Nautical Science",
        "Progression through deck officer ranks",
        "Master's Certificate of Competency",
        "STCW and specialized maritime certifications"
      ],
      skillRequirements: [
        "Ship navigation and maneuvering",
        "Maritime law and regulations",
        "Leadership and crew management",
        "Crisis management at sea",
        "Commercial shipping operations knowledge"
      ],
      careerInsights: {
        roles: ["Second Officer", "Chief Officer", "Captain of smaller vessels", "Master of large vessels"],
        salaryRange: "₹15,00,000 - ₹60,00,000+ per year (tax-free in international waters)",
        growthProspects: "Career culmination as vessel master with opportunities for maritime consultancy, surveying, or shore management."
      },
      institutions: [
        "Indian Maritime University",
        "T.S. Chanakya",
        "Lal Bahadur Shastri College of Advanced Maritime Studies",
        "International maritime academies"
      ],
      industryTrends: "Integrated bridge systems, e-navigation, autonomous vessel technology, and environmental compliance in shipping."
    },
    {
      id: "aviation-maintenance-engineer",
      title: "Aviation Maintenance Engineer",
      category: "transportation",
      description: "Inspect, maintain, and repair aircraft to ensure airworthiness and safety compliance with aviation regulations.",
      educationRequirements: [
        "Aircraft Maintenance Engineering license from DGCA",
        "Diploma or Degree in Aircraft Maintenance Engineering",
        "Type training for specific aircraft",
        "Continuous certification updates"
      ],
      skillRequirements: [
        "Aircraft systems knowledge",
        "Maintenance procedures and protocols",
        "Troubleshooting and diagnostics",
        "Aviation regulations compliance",
        "Technical documentation management"
      ],
      careerInsights: {
        roles: ["Trainee AME", "Licensed AME", "Senior AME", "Maintenance Manager"],
        salaryRange: "₹4,00,000 - ₹20,00,000 per year",
        growthProspects: "Career advancement from line maintenance to base maintenance to management positions in aircraft engineering."
      },
      institutions: [
        "DGCA approved AME training institutes",
        "Hindustan Aeronautics Limited Training Academy",
        "Aircraft maintenance departments of airlines",
        "International aviation maintenance academies"
      ],
      industryTrends: "Predictive maintenance using data analytics, composite material repairs, avionics advancements, and sustainability in maintenance."
    },
    {
      id: "transportation-planner",
      title: "Transportation Planner",
      category: "transportation",
      description: "Plan and develop transportation systems and infrastructure to meet community needs, addressing issues of mobility, safety, and sustainability.",
      educationRequirements: [
        "Bachelor's degree in Urban Planning, Civil Engineering, or Transportation Planning",
        "Master's degree in Transportation Planning or Urban Planning",
        "Professional planning certifications",
        "Specialized training in transportation modeling"
      ],
      skillRequirements: [
        "Transportation system analysis",
        "Traffic demand forecasting",
        "Transportation policy knowledge",
        "Geographic Information Systems (GIS)",
        "Stakeholder engagement and communication"
      ],
      careerInsights: {
        roles: ["Assistant Transportation Planner", "Transportation Analyst", "Senior Transportation Planner", "Transportation Planning Director"],
        salaryRange: "₹4,50,000 - ₹15,00,000 per year",
        growthProspects: "Career opportunities in government transportation departments, urban planning agencies, consulting firms, and transit authorities."
      },
      institutions: [
        "School of Planning and Architecture",
        "IIT Transportation Planning programs",
        "CEPT University",
        "Urban planning institutes with transportation specialization"
      ],
      industryTrends: "Sustainable mobility planning, transit-oriented development, smart transportation systems, and multi-modal integration."
    },
    {
      id: "port-manager",
      title: "Port Manager",
      category: "transportation",
      description: "Oversee operations, maintenance, and development of port facilities, ensuring efficient movement of cargo and vessels.",
      educationRequirements: [
        "Bachelor's degree in Maritime Management, Logistics, or related field",
        "Master's degree in Port Management or Maritime Affairs beneficial",
        "Professional certifications in port operations",
        "Maritime industry experience"
      ],
      skillRequirements: [
        "Port operations management",
        "Maritime regulations knowledge",
        "Logistics and supply chain understanding",
        "Infrastructure management",
        "Stakeholder and customer relationship management"
      ],
      careerInsights: {
        roles: ["Port Operations Officer", "Terminal Manager", "Port Traffic Manager", "Port Director"],
        salaryRange: "₹6,00,000 - ₹25,00,000 per year",
        growthProspects: "Career progression in port administration with opportunities for larger ports or specialized maritime logistics roles."
      },
      institutions: [
        "Indian Maritime University",
        "National Institute of Port Management",
        "Shipping Corporation of India training programs",
        "International maritime academies with port management specialization"
      ],
      industryTrends: "Port automation technologies, green port initiatives, digitalization of port operations, and intermodal connectivity enhancements."
    },
    {
      id: "metro-rail-operator",
      title: "Metro Rail Operator",
      category: "transportation",
      description: "Operate metro trains in urban rapid transit systems, ensuring safe and efficient passenger transport in metropolitan areas.",
      educationRequirements: [
        "Diploma or Bachelor's degree in relevant field",
        "Metro rail operation certification",
        "Technical training from metro corporations",
        "Regular skill assessments and recertification"
      ],
      skillRequirements: [
        "Metro train operation",
        "Safety protocols and emergency procedures",
        "Communication systems usage",
        "Basic technical troubleshooting",
        "Passenger service excellence"
      ],
      careerInsights: {
        roles: ["Trainee Operator", "Train Operator", "Senior Train Operator", "Operations Controller"],
        salaryRange: "₹3,50,000 - ₹10,00,000 per year",
        growthProspects: "Career advancement to operations control, supervision, or training roles within metro rail corporations."
      },
      institutions: [
        "Training centers of metro rail corporations",
        "Railway technical training institutes",
        "Metro rail academies",
        "Technical education institutes with metro operation programs"
      ],
      industryTrends: "Automated train operation technology, integrated metro operations, passenger information systems, and multi-modal connectivity."
    }
  ],
  education: [
    {
      id: "school-teacher",
      title: "School Teacher",
      category: "education",
      description: "Educate students in primary and secondary schools, creating lesson plans and assessing student progress.",
      educationRequirements: [
        "Bachelor's degree in Education (B.Ed) or in a specific subject area",
        "D.El.Ed (Diploma in Elementary Education) for primary teachers",
        "B.El.Ed (Bachelor of Elementary Education) for elementary teachers",
        "Teaching license or certification (TET/CTET)"
      ],
      skillRequirements: [
        "Subject matter expertise",
        "Classroom management",
        "Lesson planning and curriculum development",
        "Student assessment and evaluation",
        "Communication and patience"
      ],
      careerInsights: {
        roles: ["Primary School Teacher", "Secondary School Teacher", "Special Education Teacher", "Subject Specialist"],
        salaryRange: "₹2,50,000 - ₹8,00,000 per year (varies by school type and location)",
        growthProspects: "Progression to senior teacher, department head, vice principal, or principal positions."
      },
      institutions: [
        "Regional Institutes of Education (RIEs)",
        "National Council for Teacher Education (NCTE) approved institutions",
        "State Universities with Education departments",
        "Central Universities offering B.Ed programs"
      ],
      industryTrends: "Integration of technology in teaching, focus on personalized learning, and skill-based education gaining importance."
    },
    {
      id: "university-professor",
      title: "University Professor",
      category: "education",
      description: "Teach students at the higher education level, conduct research, and contribute to academic scholarship.",
      educationRequirements: [
        "Ph.D. in the relevant discipline",
        "Master's degree for some college-level teaching positions",
        "UGC-NET/JRF qualification often required",
        "Post-doctoral research experience beneficial for prestigious institutions"
      ],
      skillRequirements: [
        "Deep subject expertise",
        "Research methodology",
        "Academic writing and publishing",
        "Teaching and mentoring",
        "Grant writing and project management"
      ],
      careerInsights: {
        roles: ["Assistant Professor", "Associate Professor", "Professor", "Department Chair", "Dean"],
        salaryRange: "₹5,00,000 - ₹20,00,000+ per year (based on UGC scales and institution type)",
        growthProspects: "Career advancement through research publications, teaching excellence, and administrative roles."
      },
      institutions: [
        "Central Universities",
        "State Universities",
        "Deemed Universities",
        "Institutes of National Importance (IITs, NITs, IIMs, etc.)"
      ],
      industryTrends: "Interdisciplinary research, industry-academia collaborations, and digital transformation of higher education."
    },
    {
      id: "educational-administrator",
      title: "Educational Administrator",
      category: "education",
      description: "Manage the operations, policies, and programs of educational institutions or departments.",
      educationRequirements: [
        "Master's degree in Educational Leadership, Education Administration, or related field",
        "Teaching experience typically required",
        "Ph.D. preferred for higher education administration",
        "Relevant certifications depending on the institution level"
      ],
      skillRequirements: [
        "Leadership and management",
        "Educational policy knowledge",
        "Budget and resource allocation",
        "Strategic planning",
        "Stakeholder communication"
      ],
      careerInsights: {
        roles: ["School Principal", "Academic Dean", "Department Head", "Education Director", "Superintendent"],
        salaryRange: "₹6,00,000 - ₹15,00,000+ per year (varies by institution and role)",
        growthProspects: "Advancement to higher administrative positions or leadership roles in education policy."
      },
      institutions: [
        "National University of Educational Planning and Administration (NUEPA)",
        "Indian Institute of Management (for educational leadership programs)",
        "University Departments of Education",
        "Administrative training institutes"
      ],
      industryTrends: "Data-driven decision making, focus on educational outcomes, and modernization of institutional infrastructure."
    },
    {
      id: "curriculum-developer",
      title: "Curriculum Developer",
      category: "education",
      description: "Design, evaluate, and improve educational programs and instructional materials for various educational levels.",
      educationRequirements: [
        "Master's degree in Curriculum and Instruction, Education, or subject specialty",
        "Teaching experience often required",
        "Specialized training in instructional design beneficial",
        "Understanding of educational standards and frameworks"
      ],
      skillRequirements: [
        "Instructional design principles",
        "Content development",
        "Educational assessment",
        "Knowledge of learning theories",
        "Subject matter expertise"
      ],
      careerInsights: {
        roles: ["Instructional Designer", "Curriculum Specialist", "Educational Content Developer", "Learning Experience Designer"],
        salaryRange: "₹4,00,000 - ₹12,00,000 per year",
        growthProspects: "Opportunities in educational publishing, EdTech companies, and educational institutions."
      },
      institutions: [
        "National Council of Educational Research and Training (NCERT)",
        "State Councils of Educational Research and Training (SCERT)",
        "Educational publishing houses",
        "EdTech companies with curriculum teams"
      ],
      industryTrends: "Digital curriculum development, competency-based education, and personalized learning pathways."
    },
    {
      id: "education-counselor",
      title: "Education Counselor",
      category: "education",
      description: "Guide students in making educational and career decisions, providing support for academic and personal challenges.",
      educationRequirements: [
        "Master's degree in Counseling, Psychology, or Education",
        "Certification in career counseling or student counseling",
        "Specialized training in psychometric assessments",
        "Continuing education in counseling techniques"
      ],
      skillRequirements: [
        "Counseling techniques",
        "Knowledge of educational pathways",
        "Career assessment tools",
        "Active listening and empathy",
        "Problem-solving and conflict resolution"
      ],
      careerInsights: {
        roles: ["School Counselor", "Career Advisor", "College Counselor", "Educational Psychologist", "Admission Consultant"],
        salaryRange: "₹3,00,000 - ₹10,00,000 per year",
        growthProspects: "Opportunities in schools, colleges, career services centers, and private counseling practice."
      },
      institutions: [
        "Rehabilitation Council of India (RCI) approved institutions",
        "NCERT guidance and counseling programs",
        "Universities offering specialized counseling degrees",
        "Training programs by international counseling associations"
      ],
      industryTrends: "Integration of technology in counseling, focus on mental health, and data-driven career guidance approaches."
    },
    {
      id: "special-education-teacher",
      title: "Special Education Teacher",
      category: "education",
      description: "Work with students who have various learning, mental, emotional, or physical disabilities, developing individualized education programs.",
      educationRequirements: [
        "Bachelor's or Master's degree in Special Education",
        "B.Ed. Special Education in specific disability areas",
        "Rehabilitation Council of India (RCI) registration",
        "Specialized training in inclusive education"
      ],
      skillRequirements: [
        "Individualized instruction techniques",
        "Behavior management strategies",
        "Assessment of special needs",
        "Assistive technology knowledge",
        "Patience and adaptability"
      ],
      careerInsights: {
        roles: ["Inclusive Education Teacher", "Learning Disability Specialist", "Early Intervention Specialist", "Special School Teacher"],
        salaryRange: "₹3,00,000 - ₹9,00,000 per year",
        growthProspects: "Career growth in specialized schools, inclusion programs, and disability policy development."
      },
      institutions: [
        "National Institute of Mental Health (NIMH)",
        "Ali Yavar Jung National Institute of Speech and Hearing Disabilities",
        "National Institute for the Empowerment of Persons with Intellectual Disabilities",
        "RCI recognized institutions for special education"
      ],
      industryTrends: "Inclusive education practices, assistive technology innovation, and neurodiversity awareness."
    },
    {
      id: "educational-researcher",
      title: "Educational Researcher",
      category: "education",
      description: "Conduct research on educational methods, policies, and outcomes to improve educational practices and systems.",
      educationRequirements: [
        "Ph.D. in Education, Educational Psychology, or related field",
        "Master's degree with research experience for entry-level positions",
        "Training in research methodologies and statistics",
        "Publication experience preferred"
      ],
      skillRequirements: [
        "Research design and methodology",
        "Quantitative and qualitative analysis",
        "Academic writing",
        "Grant proposal writing",
        "Educational theory and policy knowledge"
      ],
      careerInsights: {
        roles: ["Education Policy Researcher", "Assessment Specialist", "Learning Sciences Researcher", "Program Evaluator"],
        salaryRange: "₹5,00,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in research institutions, think tanks, universities, and government education departments."
      },
      institutions: [
        "National Council of Educational Research and Training (NCERT)",
        "National Institute of Educational Planning and Administration (NIEPA)",
        "University Departments of Education",
        "Centre for Policy Research"
      ],
      industryTrends: "Big data in education research, evidence-based policy making, and interdisciplinary approaches to educational challenges."
    },
    {
      id: "corporate-trainer",
      title: "Corporate Trainer",
      category: "education",
      description: "Design and deliver training programs for employees in organizations to enhance skills and improve performance.",
      educationRequirements: [
        "Bachelor's or Master's degree in Human Resources, Education, or related field",
        "Certifications in training and development",
        "Industry-specific expertise in training area",
        "Adult learning methodology training"
      ],
      skillRequirements: [
        "Instructional design for adult learners",
        "Presentation and facilitation skills",
        "Training needs assessment",
        "Performance evaluation",
        "Technology-enabled learning tools"
      ],
      careerInsights: {
        roles: ["Learning & Development Specialist", "Technical Trainer", "Soft Skills Trainer", "Training Manager"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Advancement to senior training roles, L&D management, or independent corporate training consultancy."
      },
      institutions: [
        "Indian Society for Training & Development",
        "National Institute of Personnel Management",
        "HR management institutes offering L&D specializations",
        "Corporate universities and training academies"
      ],
      industryTrends: "Virtual reality training, microlearning, gamification, and data-driven training effectiveness measurement."
    },
    {
      id: "edtech-specialist",
      title: "EdTech Specialist",
      category: "education",
      description: "Develop, implement, and support technology solutions for educational purposes in schools, universities, or online platforms.",
      educationRequirements: [
        "Bachelor's or Master's degree in Educational Technology, Instructional Design, or related field",
        "Technical certifications in relevant technologies",
        "Background in education and technology",
        "Specialized training in learning management systems"
      ],
      skillRequirements: [
        "Digital learning tools and platforms",
        "Instructional technology integration",
        "Learning management systems",
        "Digital content creation",
        "Technical troubleshooting"
      ],
      careerInsights: {
        roles: ["EdTech Product Manager", "Digital Learning Specialist", "Educational Technology Coordinator", "Online Learning Developer"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Growing opportunities in EdTech startups, educational institutions, and corporate learning environments."
      },
      institutions: [
        "Indian Institutes of Technology with Educational Technology programs",
        "EdTech incubators and accelerators",
        "Online learning platforms offering educational technology certifications",
        "International EdTech associations with Indian chapters"
      ],
      industryTrends: "AI-powered adaptive learning, blockchain credentials, immersive learning experiences, and learning analytics."
    },
    {
      id: "language-instructor",
      title: "Language Instructor",
      category: "education",
      description: "Teach language skills to students of various ages, focusing on speaking, reading, writing, and cultural understanding.",
      educationRequirements: [
        "Bachelor's or Master's degree in the language or linguistics",
        "TEFL/TESOL certification for English language teaching",
        "Language proficiency certifications",
        "Training in language teaching methodologies"
      ],
      skillRequirements: [
        "Native or near-native language proficiency",
        "Language teaching methodologies",
        "Cultural knowledge",
        "Curriculum development for language acquisition",
        "Assessment of language skills"
      ],
      careerInsights: {
        roles: ["ESL/EFL Teacher", "Foreign Language Teacher", "Language School Instructor", "Corporate Language Trainer"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year (higher for less common languages)",
        growthProspects: "Opportunities in language schools, international organizations, corporate training, and online teaching platforms."
      },
      institutions: [
        "Central Institute of English and Foreign Languages",
        "Jawaharlal Nehru University Language Programs",
        "Alliance Française (French), Goethe-Institut (German), Instituto Cervantes (Spanish)",
        "British Council (English), Japan Foundation (Japanese)"
      ],
      industryTrends: "Technology-assisted language learning, immersive learning experiences, and increased demand for business language skills."
    }
  ],
  business: [
    {
      id: "marketing-manager",
      title: "Marketing Manager",
      category: "business",
      description: "Develop and implement marketing strategies to promote products, services, or brands and drive business growth.",
      educationRequirements: [
        "Bachelor's degree in Marketing, Business Administration, or related field",
        "MBA with marketing specialization for senior positions",
        "Professional certifications in digital marketing, brand management",
        "Specialized training in marketing analytics"
      ],
      skillRequirements: [
        "Marketing strategy development",
        "Brand management",
        "Market research and analysis",
        "Campaign planning and execution",
        "Digital marketing channels expertise"
      ],
      careerInsights: {
        roles: ["Brand Manager", "Digital Marketing Manager", "Product Marketing Manager", "Marketing Director"],
        salaryRange: "₹6,00,000 - ₹25,00,000 per year",
        growthProspects: "Advancement to marketing director, CMO, or transition to marketing consultancy."
      },
      institutions: [
        "Indian Institutes of Management (IIMs)",
        "XLRI Jamshedpur",
        "Symbiosis Institute of Business Management",
        "Digital Marketing Institutes (NIIT, Digital Vidya)"
      ],
      industryTrends: "Data-driven marketing, personalization at scale, content marketing, and integration of AI in marketing strategies."
    },
    {
      id: "human-resources-manager",
      title: "Human Resources Manager",
      category: "business",
      description: "Oversee the recruitment, selection, development, and retention of employees in an organization.",
      educationRequirements: [
        "Bachelor's degree in Human Resource Management, Business Administration, or related field",
        "MBA with HR specialization for advancement",
        "Professional certifications (SHRM, IHRP)",
        "Specialized training in labor laws and compliance"
      ],
      skillRequirements: [
        "Recruitment and selection",
        "Employee relations",
        "Performance management",
        "Compensation and benefits planning",
        "HR policies and compliance"
      ],
      careerInsights: {
        roles: ["Recruitment Manager", "Learning & Development Manager", "Compensation & Benefits Manager", "HR Business Partner"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Growth to HR Director, CHRO, or independent HR consultant."
      },
      institutions: [
        "Tata Institute of Social Sciences (TISS)",
        "XLRI Jamshedpur",
        "National Institute of Personnel Management",
        "Indian Institutes of Management HR programs"
      ],
      industryTrends: "HR analytics, employee experience design, remote work policies, and AI in recruitment processes."
    },
    {
      id: "management-consultant",
      title: "Management Consultant",
      category: "business",
      description: "Provide expert advice to organizations to improve their performance, operations, and profitability.",
      educationRequirements: [
        "Bachelor's degree in Business, Economics, or Engineering",
        "MBA or other advanced degree preferred",
        "Industry-specific certifications",
        "Specialized training in consulting methodologies"
      ],
      skillRequirements: [
        "Business analysis",
        "Problem-solving and strategic thinking",
        "Project management",
        "Client relationship management",
        "Data analysis and visualization"
      ],
      careerInsights: {
        roles: ["Strategy Consultant", "Operations Consultant", "Financial Advisory Consultant", "IT Consultant"],
        salaryRange: "₹8,00,000 - ₹30,00,000+ per year",
        growthProspects: "Progression from analyst to consultant, manager, partner, or independent consulting practice."
      },
      institutions: [
        "Indian Institutes of Management (IIMs)",
        "Indian School of Business (ISB)",
        "XLRI Jamshedpur",
        "Consulting firms' training programs"
      ],
      industryTrends: "Digital transformation consulting, sustainability consulting, post-pandemic business model redesign."
    },
    {
      id: "entrepreneur",
      title: "Entrepreneur",
      category: "business",
      description: "Start and run a business venture, taking on financial risks in the hope of profit and growth.",
      educationRequirements: [
        "No formal educational requirements, but business education helpful",
        "Bachelor's or Master's in Business Administration beneficial",
        "Entrepreneurship programs and incubator training",
        "Industry-specific knowledge and skills"
      ],
      skillRequirements: [
        "Business planning and strategy",
        "Financial management",
        "Marketing and sales",
        "Leadership and team building",
        "Problem-solving and adaptability"
      ],
      careerInsights: {
        roles: ["Startup Founder", "Small Business Owner", "Social Entrepreneur", "Serial Entrepreneur"],
        salaryRange: "Highly variable, from losses to substantial profits",
        growthProspects: "Business expansion, multiple ventures, or exit through acquisition or IPO."
      },
      institutions: [
        "Startup India initiatives",
        "Entrepreneurship Development Institute of India",
        "IIM and IIT entrepreneurship programs",
        "Business incubators and accelerators"
      ],
      industryTrends: "Focus on sustainable business models, digital-first ventures, and social entrepreneurship."
    },
    {
      id: "operations-manager",
      title: "Operations Manager",
      category: "business",
      description: "Oversee the production of goods or services, ensuring efficiency, quality, and customer satisfaction.",
      educationRequirements: [
        "Bachelor's degree in Business Administration, Operations Management, or related field",
        "MBA with operations specialization for senior positions",
        "Certifications in project management, Six Sigma, or lean methodology",
        "Industry-specific operational training"
      ],
      skillRequirements: [
        "Process optimization",
        "Resource management",
        "Quality control",
        "Budget planning and monitoring",
        "Team leadership and coordination"
      ],
      careerInsights: {
        roles: ["Plant Manager", "Production Manager", "Operations Director", "Facility Manager"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Advancement to operations director, COO, or general manager positions."
      },
      institutions: [
        "National Institute of Industrial Engineering (NITIE)",
        "S.P. Jain Institute of Management and Research",
        "Indian Institutes of Management operations programs",
        "Quality management certification bodies"
      ],
      industryTrends: "Automation and digitalization of operations, supply chain resilience, and sustainable operations management."
    },
    {
      id: "business-analyst",
      title: "Business Analyst",
      category: "business",
      description: "Analyze business processes, systems, and data to help organizations improve efficiency and solve business problems.",
      educationRequirements: [
        "Bachelor's degree in Business Administration, Information Systems, or related field",
        "MBA or specialized Master's degree beneficial",
        "Certifications such as IIBA-CBAP, PMI-PBA",
        "Training in business analysis methodologies"
      ],
      skillRequirements: [
        "Requirements gathering and analysis",
        "Process modeling",
        "Data analysis and visualization",
        "Documentation skills",
        "Stakeholder management"
      ],
      careerInsights: {
        roles: ["IT Business Analyst", "Systems Analyst", "Process Improvement Specialist", "Requirements Manager"],
        salaryRange: "₹4,50,000 - ₹15,00,000 per year",
        growthProspects: "Career paths into project management, solution architecture, or senior business analysis roles."
      },
      institutions: [
        "Indian Institutes of Management (for business analysis courses)",
        "International Institute of Business Analysis (IIBA) - India Chapter",
        "Project Management Institute (PMI) - India",
        "IT training institutes offering BA certifications"
      ],
      industryTrends: "Increased focus on data-driven decision making, agile methodologies, and digital transformation projects."
    },
    {
      id: "product-manager",
      title: "Product Manager",
      category: "business",
      description: "Guide product development from conception to launch, balancing business strategy, user experience, and technical feasibility.",
      educationRequirements: [
        "Bachelor's degree in Business, Engineering, Computer Science, or related field",
        "MBA or specialized product management training beneficial",
        "Technical background helpful for technology products",
        "Certifications in product management methodologies"
      ],
      skillRequirements: [
        "Market research and competitive analysis",
        "Product strategy and roadmapping",
        "User experience understanding",
        "Cross-functional team leadership",
        "Data analysis for product decisions"
      ],
      careerInsights: {
        roles: ["Associate Product Manager", "Product Owner", "Senior Product Manager", "Director of Product"],
        salaryRange: "₹8,00,000 - ₹30,00,000 per year",
        growthProspects: "Career progression to senior product management, product director, or CPO roles."
      },
      institutions: [
        "Product Management courses at IIMs and ISB",
        "Product School (online and in-person courses)",
        "UpGrad's Product Management program",
        "Industry-specific product management training"
      ],
      industryTrends: "AI-driven product development, product-led growth strategies, and focus on user privacy and ethical design."
    },
    {
      id: "sales-manager",
      title: "Sales Manager",
      category: "business",
      description: "Lead sales teams to achieve revenue targets through effective sales strategies, team development, and customer relationship management.",
      educationRequirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "MBA beneficial for enterprise sales management",
        "Sales training and certifications",
        "Industry-specific knowledge"
      ],
      skillRequirements: [
        "Sales strategy and planning",
        "Team leadership and coaching",
        "Customer relationship management",
        "Negotiation and closing techniques",
        "Sales analytics and forecasting"
      ],
      careerInsights: {
        roles: ["Territory Sales Manager", "Key Account Manager", "Regional Sales Manager", "National Sales Director"],
        salaryRange: "₹6,00,000 - ₹25,00,000 per year plus commissions/incentives",
        growthProspects: "Advancement to sales director, VP of Sales, or transition to general management."
      },
      institutions: [
        "Indian Institute of Sales & Marketing",
        "Sales training programs by industry associations",
        "Corporate sales academies",
        "Management institutes with sales specializations"
      ],
      industryTrends: "Digital selling, social selling, consultative sales approaches, and sales enablement technologies."
    },
    {
      id: "supply-chain-manager",
      title: "Supply Chain Manager",
      category: "business",
      description: "Oversee the end-to-end supply chain activities, including procurement, logistics, inventory, and vendor relationships.",
      educationRequirements: [
        "Bachelor's degree in Supply Chain Management, Logistics, Business, or related field",
        "MBA with supply chain specialization for advanced positions",
        "Professional certifications (CSCP, CPSM, CPIM)",
        "Specialized training in supply chain technologies"
      ],
      skillRequirements: [
        "Supply chain optimization",
        "Inventory management",
        "Procurement strategies",
        "Logistics coordination",
        "Supplier relationship management"
      ],
      careerInsights: {
        roles: ["Procurement Manager", "Inventory Manager", "Logistics Manager", "Global Supply Chain Director"],
        salaryRange: "₹6,00,000 - ₹20,00,000 per year",
        growthProspects: "Career advancement to supply chain director, COO, or specialized supply chain consultant."
      },
      institutions: [
        "National Institute of Industrial Engineering (NITIE)",
        "Indian Institute of Materials Management",
        "IIMs with supply chain specializations",
        "Chartered Institute of Procurement & Supply (CIPS) programs"
      ],
      industryTrends: "Supply chain digitalization, blockchain for transparency, sustainable sourcing, and resilient supply chain design."
    },
    {
      id: "ecommerce-manager",
      title: "E-commerce Manager",
      category: "business",
      description: "Develop and implement strategies to drive online sales, manage digital storefronts, and enhance customer experience.",
      educationRequirements: [
        "Bachelor's degree in Business, Marketing, IT, or related field",
        "Digital marketing and e-commerce certifications",
        "Training in e-commerce platforms and tools",
        "UX/UI understanding beneficial"
      ],
      skillRequirements: [
        "E-commerce platform management",
        "Digital marketing for online sales",
        "Web analytics and conversion optimization",
        "Inventory and catalog management",
        "Online customer experience design"
      ],
      careerInsights: {
        roles: ["Online Merchandiser", "Digital Storefront Manager", "Marketplace Manager", "E-commerce Director"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Growth into senior e-commerce leadership, omnichannel retail management, or digital business development."
      },
      institutions: [
        "Digital Marketing Institutes (NIIT, Digital Vidya)",
        "E-commerce management courses at business schools",
        "Platform-specific certification programs (Shopify, Magento)",
        "Industry association training programs"
      ],
      industryTrends: "Omnichannel integration, AR/VR shopping experiences, voice commerce, and direct-to-consumer business models."
    }
  ],
  healthcare: [
    {
      id: "registered-nurse",
      title: "Registered Nurse",
      category: "healthcare",
      description: "Provide and coordinate patient care, educate patients about health conditions, and offer advice and emotional support.",
      educationRequirements: [
        "B.Sc Nursing (4 years) or GNM (General Nursing and Midwifery - 3.5 years)",
        "Registration with Indian Nursing Council (INC) or State Nursing Council",
        "Specialized certifications for specific departments (ICU, OT, etc.)",
        "Continuing education for skill enhancement"
      ],
      skillRequirements: [
        "Patient assessment and care planning",
        "Medical procedures and treatments",
        "Documentation and electronic health records",
        "Critical thinking and decision making",
        "Communication and empathy"
      ],
      careerInsights: {
        roles: ["Staff Nurse", "Charge Nurse", "Nursing Supervisor", "Specialized Nurse (Pediatric, Oncology, etc.)"],
        salaryRange: "₹3,00,000 - ₹10,00,000 per year (varies by sector and experience)",
        growthProspects: "Career progression to nursing management, education, or specialized clinical roles."
      },
      institutions: [
        "All India Institute of Medical Sciences (AIIMS) Nursing College",
        "College of Nursing, CMC Vellore",
        "Armed Forces Medical College - College of Nursing",
        "Government and private nursing colleges recognized by Indian Nursing Council"
      ],
      industryTrends: "Increasing specialization, technology integration in nursing care, and growing opportunities in home healthcare and telemedicine."
    },
    {
      id: "pharmacist",
      title: "Pharmacist",
      category: "healthcare",
      description: "Dispense medications, ensure proper medication usage, and provide information on potential side effects and drug interactions.",
      educationRequirements: [
        "Bachelor of Pharmacy (B.Pharm - 4 years)",
        "Doctor of Pharmacy (Pharm.D - 6 years) for clinical roles",
        "Master of Pharmacy (M.Pharm) for specialized and research positions",
        "Registration with Pharmacy Council of India or State Pharmacy Councils"
      ],
      skillRequirements: [
        "Pharmaceutical knowledge",
        "Drug dispensing and inventory management",
        "Patient counseling",
        "Prescription verification",
        "Knowledge of drug interactions and contraindications"
      ],
      careerInsights: {
        roles: ["Community Pharmacist", "Hospital Pharmacist", "Clinical Pharmacist", "Industrial Pharmacist"],
        salaryRange: "₹3,50,000 - ₹12,00,000 per year",
        growthProspects: "Opportunities in pharmaceutical industry, regulatory affairs, pharmacovigilance, and pharmacy management."
      },
      institutions: [
        "National Institute of Pharmaceutical Education and Research (NIPER)",
        "Manipal College of Pharmaceutical Sciences",
        "Jamia Hamdard University",
        "Pharmacy colleges approved by Pharmacy Council of India"
      ],
      industryTrends: "Growing role in medication therapy management, focus on patient-centered care, and automation in pharmacy operations."
    },
    {
      id: "physiotherapist",
      title: "Physiotherapist",
      category: "healthcare",
      description: "Assess, diagnose, and treat patients with physical problems caused by illness, injury, disability, or aging.",
      educationRequirements: [
        "Bachelor of Physiotherapy (BPT - 4.5 years including internship)",
        "Master of Physiotherapy (MPT - 2 years) for specialization",
        "Registration with Indian Association of Physiotherapists",
        "Continuing education for advanced techniques"
      ],
      skillRequirements: [
        "Physical assessment and diagnosis",
        "Treatment planning and execution",
        "Manual therapy techniques",
        "Exercise prescription",
        "Patient education and motivation"
      ],
      careerInsights: {
        roles: ["Clinical Physiotherapist", "Sports Physiotherapist", "Neurological Physiotherapist", "Pediatric Physiotherapist"],
        salaryRange: "₹3,00,000 - ₹10,00,000 per year",
        growthProspects: "Career growth through specialization, private practice, or roles in sports organizations and rehabilitation centers."
      },
      institutions: [
        "All India Institute of Physical Medicine and Rehabilitation",
        "AIIMS Physiotherapy Department",
        "Manipal College of Health Professions",
        "Government and private physiotherapy colleges recognized by IAP"
      ],
      industryTrends: "Integration of technology in rehabilitation, telerehabilitation services, and growing demand in geriatric and sports physiotherapy."
    },
    {
      id: "dentist",
      title: "Dentist",
      category: "healthcare",
      description: "Diagnose and treat problems affecting the teeth, gums, and oral cavity to maintain oral health and functionality.",
      educationRequirements: [
        "Bachelor of Dental Surgery (BDS - 5 years including internship)",
        "Master of Dental Surgery (MDS - 3 years) for specialization",
        "Registration with Dental Council of India",
        "Continuing dental education"
      ],
      skillRequirements: [
        "Dental diagnosis and treatment planning",
        "Clinical dental procedures",
        "Patient management",
        "Dental radiography interpretation",
        "Manual dexterity and precision"
      ],
      careerInsights: {
        roles: ["General Dentist", "Orthodontist", "Periodontist", "Oral and Maxillofacial Surgeon"],
        salaryRange: "₹5,00,000 - ₹20,00,000+ per year (varies by specialization and practice type)",
        growthProspects: "Career progression through specialization, private practice establishment, or academic positions."
      },
      institutions: [
        "Maulana Azad Institute of Dental Sciences",
        "Government Dental College and Hospital, Mumbai",
        "Manipal College of Dental Sciences",
        "Dental colleges recognized by Dental Council of India"
      ],
      industryTrends: "Digital dentistry, minimally invasive procedures, cosmetic dentistry growth, and preventive oral healthcare focus."
    },
    {
      id: "clinical-psychologist",
      title: "Clinical Psychologist",
      category: "healthcare",
      description: "Assess, diagnose, and treat mental, emotional, and behavioral disorders using psychological methods and therapies.",
      educationRequirements: [
        "Master's degree in Clinical Psychology (M.Phil/M.A/M.Sc)",
        "M.Phil in Clinical Psychology (2 years) required for clinical practice",
        "Registration with Rehabilitation Council of India (RCI)",
        "Ph.D. beneficial for academic and research positions"
      ],
      skillRequirements: [
        "Psychological assessment",
        "Psychotherapy techniques",
        "Diagnostic skills",
        "Case formulation",
        "Therapeutic relationship building"
      ],
      careerInsights: {
        roles: ["Clinical Psychologist", "Child Psychologist", "Neuropsychologist", "Rehabilitation Psychologist"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in hospitals, mental health clinics, rehabilitation centers, private practice, and academia."
      },
      institutions: [
        "National Institute of Mental Health and Neurosciences (NIMHANS)",
        "Institute of Human Behaviour and Allied Sciences (IHBAS)",
        "Central Institute of Psychiatry",
        "Universities with RCI-approved clinical psychology programs"
      ],
      industryTrends: "Integration of technology in mental healthcare, increased focus on preventive mental health, and telepsychology services."
    },
    {
      id: "dietitian-nutritionist",
      title: "Dietitian/Nutritionist",
      category: "healthcare",
      description: "Advise on proper nutrition and develop meal plans to help manage health conditions and promote overall wellness.",
      educationRequirements: [
        "Bachelor's degree in Nutrition and Dietetics (B.Sc - 3-4 years)",
        "Master's degree in Food and Nutrition/Dietetics (M.Sc - 2 years)",
        "Registration with Indian Dietetic Association",
        "Specialized certifications in sports nutrition, pediatric nutrition, etc."
      ],
      skillRequirements: [
        "Nutritional assessment",
        "Diet planning and modification",
        "Nutrition counseling",
        "Food science knowledge",
        "Understanding of medical nutrition therapy"
      ],
      careerInsights: {
        roles: ["Clinical Dietitian", "Sports Nutritionist", "Public Health Nutritionist", "Food Service Dietitian"],
        salaryRange: "₹3,00,000 - ₹10,00,000 per year",
        growthProspects: "Career advancement in healthcare facilities, food industry, wellness centers, or private practice."
      },
      institutions: [
        "Lady Irwin College, Delhi University",
        "Institute of Home Economics, Delhi University",
        "SNDT Women's University",
        "Nutrition programs in medical colleges and universities"
      ],
      industryTrends: "Personalized nutrition plans, digital nutrition counseling, functional foods, and integrative nutrition approaches."
    },
    {
      id: "radiologic-technologist",
      title: "Radiologic Technologist",
      category: "healthcare",
      description: "Perform diagnostic imaging examinations, such as X-rays, CT scans, and MRIs, to help diagnose medical conditions.",
      educationRequirements: [
        "Bachelor's degree in Radiologic Technology/Medical Imaging (B.Sc - 3-4 years)",
        "Diploma in Radiography (2-3 years)",
        "Registration with relevant radiography association",
        "Specialized training for advanced modalities (CT, MRI, etc.)"
      ],
      skillRequirements: [
        "Imaging equipment operation",
        "Patient positioning",
        "Radiation safety protocols",
        "Image quality assessment",
        "Basic patient care"
      ],
      careerInsights: {
        roles: ["X-ray Technologist", "CT Technologist", "MRI Technologist", "Mammography Technologist"],
        salaryRange: "₹3,00,000 - ₹8,00,000 per year",
        growthProspects: "Advancement through specialization in advanced imaging modalities or supervisory roles."
      },
      institutions: [
        "All India Institute of Medical Sciences (AIIMS) for radiography courses",
        "Post Graduate Institute of Medical Education and Research",
        "Jamia Hamdard University",
        "Government and private institutions offering AICTE/university-approved radiography programs"
      ],
      industryTrends: "Digital imaging advancements, AI integration in radiology, and increasing specialization across imaging modalities."
    },
    {
      id: "health-information-manager",
      title: "Health Information Manager",
      category: "healthcare",
      description: "Manage healthcare data and information systems, ensuring data accuracy, accessibility, security, and compliance with regulations.",
      educationRequirements: [
        "Bachelor's degree in Health Information Management/Medical Records Management",
        "Master's degree for advanced positions",
        "Certifications in health informatics or healthcare IT",
        "Training in healthcare data management systems"
      ],
      skillRequirements: [
        "Healthcare data management",
        "Electronic health record systems",
        "Medical coding and classification",
        "Data privacy and security",
        "Healthcare regulatory compliance"
      ],
      careerInsights: {
        roles: ["Medical Records Manager", "Clinical Data Analyst", "Health Information Technician", "Healthcare IT Specialist"],
        salaryRange: "₹4,00,000 - ₹12,00,000 per year",
        growthProspects: "Career growth in healthcare organizations, insurance companies, or health IT vendors."
      },
      institutions: [
        "Manipal University",
        "Symbiosis Institute of Health Sciences",
        "Apollo Institute of Health Informatics",
        "Universities offering health information management programs"
      ],
      industryTrends: "Big data in healthcare, blockchain for health records, interoperability solutions, and AI in health information systems."
    },
    {
      id: "occupational-therapist",
      title: "Occupational Therapist",
      category: "healthcare",
      description: "Help patients develop, recover, and improve skills needed for daily living and working after illness, injury, or disability.",
      educationRequirements: [
        "Bachelor of Occupational Therapy (BOT - 4.5 years including internship)",
        "Master of Occupational Therapy (MOT - 2 years) for specialization",
        "Registration with relevant occupational therapy association",
        "Specialized certifications for specific areas of practice"
      ],
      skillRequirements: [
        "Functional assessment",
        "Treatment planning",
        "Adaptive equipment recommendation",
        "Activity analysis",
        "Patient education and training"
      ],
      careerInsights: {
        roles: ["Pediatric Occupational Therapist", "Geriatric OT", "Hand Therapy Specialist", "Mental Health OT"],
        salaryRange: "₹3,50,000 - ₹10,00,000 per year",
        growthProspects: "Opportunities in hospitals, rehabilitation centers, schools, community settings, and private practice."
      },
      institutions: [
        "All India Institute of Physical Medicine and Rehabilitation",
        "Manipal College of Health Professions",
        "AIIMS occupational therapy department",
        "Government and private institutions offering BOT programs"
      ],
      industryTrends: "Telehealth OT services, assistive technology innovation, community-based rehabilitation, and workplace ergonomics focus."
    },
    {
      id: "healthcare-administrator",
      title: "Healthcare Administrator",
      category: "healthcare",
      description: "Plan, direct, and coordinate medical and health services in hospitals, clinics, or healthcare systems.",
      educationRequirements: [
        "Bachelor's degree in Healthcare Administration/Hospital Management",
        "Master's in Hospital Administration (MHA) or MBA in Healthcare preferred",
        "Certifications in healthcare management",
        "Clinical background beneficial but not always required"
      ],
      skillRequirements: [
        "Healthcare operations management",
        "Strategic planning",
        "Budget and financial management",
        "Healthcare regulations and compliance",
        "Leadership and team management"
      ],
      careerInsights: {
        roles: ["Hospital Administrator", "Clinic Manager", "Health Services Manager", "Medical Practice Manager"],
        salaryRange: "₹6,00,000 - ₹20,00,000+ per year",
        growthProspects: "Advancement to executive positions in healthcare organizations or health policy roles."
      },
      institutions: [
        "All India Institute of Medical Sciences (Healthcare Management)",
        "Tata Institute of Social Sciences (Health Administration)",
        "Indian Institute of Health Management Research",
        "IIHMR, Symbiosis, and other institutions offering MHA programs"
      ],
      industryTrends: "Value-based healthcare models, digital transformation of healthcare delivery, and patient experience focus."
    }
  ],
  creative: [
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      category: "creative",
      description: "Create intuitive, aesthetically pleasing, and functional user interfaces and experiences for digital products and services.",
      educationRequirements: [
        "Bachelor's degree in Design, Human-Computer Interaction, or related field",
        "Specialized UI/UX design courses or bootcamps",
        "Self-taught with strong portfolio also accepted in the industry",
        "Continuous learning of design tools and methodologies"
      ],
      skillRequirements: [
        "User research and testing",
        "Wireframing and prototyping",
        "Visual design principles",
        "Design software proficiency (Figma, Adobe XD, Sketch)",
        "Knowledge of design systems and UI patterns"
      ],
      careerInsights: {
        roles: ["UI Designer", "UX Designer", "Product Designer", "Interaction Designer"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Advancement to senior designer, design lead, or UX director positions."
      },
      institutions: [
        "National Institute of Design (NID)",
        "Industrial Design Centre, IIT Bombay",
        "Srishti Institute of Art, Design and Technology",
        "UI/UX bootcamps and online courses (Designlab, Interaction Design Foundation)"
      ],
      industryTrends: "Design systems, inclusive design practices, voice user interfaces, and AR/VR interface design."
    },
    {
      id: "content-creator",
      title: "Content Creator",
      category: "creative",
      description: "Develop, produce, and distribute engaging content across various platforms to inform, entertain, or inspire audiences.",
      educationRequirements: [
        "Bachelor's degree in Mass Communication, Journalism, or related field (helpful but not mandatory)",
        "Specialized courses in content creation, digital media",
        "Self-learning and practical experience often more valuable than formal education",
        "Continuous skills development in emerging content formats and platforms"
      ],
      skillRequirements: [
        "Content strategy and planning",
        "Writing and storytelling",
        "Visual content creation",
        "Social media platform knowledge",
        "Basic video production and editing"
      ],
      careerInsights: {
        roles: ["Social Media Content Creator", "YouTuber", "Podcaster", "Digital Influencer"],
        salaryRange: "Highly variable, from ₹2,00,000 - ₹50,00,000+ per year depending on platform, niche, and audience",
        growthProspects: "Growth through audience building, brand partnerships, product launches, or transition to media production roles."
      },
      institutions: [
        "Digital content creation courses by platforms (YouTube Creator Academy)",
        "Media schools offering digital content programs",
        "Online learning platforms (Skillshare, Udemy)",
        "Content creator communities and mentorship programs"
      ],
      industryTrends: "Short-form video dominance, creator economy growth, multi-platform content strategies, and AI tools for content creation."
    },
    {
      id: "fashion-designer",
      title: "Fashion Designer",
      category: "creative",
      description: "Create clothing, accessories, and footwear designs, developing concepts and bringing them to life as wearable items.",
      educationRequirements: [
        "Bachelor's degree in Fashion Design or related field",
        "Diploma in Fashion Design (1-3 years)",
        "Fashion design certifications",
        "Portfolio development through coursework or independent projects"
      ],
      skillRequirements: [
        "Design conceptualization and sketching",
        "Pattern making and garment construction",
        "Textile knowledge",
        "Fashion illustration (manual and digital)",
        "Understanding of market trends and consumer preferences"
      ],
      careerInsights: {
        roles: ["Apparel Designer", "Textile Designer", "Costume Designer", "Fashion Entrepreneur"],
        salaryRange: "₹3,00,000 - ₹15,00,000+ per year (higher for established designers)",
        growthProspects: "Career paths include fashion houses, retail brands, own label establishment, or fashion media."
      },
      institutions: [
        "National Institute of Fashion Technology (NIFT)",
        "National Institute of Design (NID)",
        "Pearl Academy",
        "Symbiosis Institute of Design"
      ],
      industryTrends: "Sustainable fashion, digital fashion design tools, direct-to-consumer brands, and fusion of traditional and contemporary elements."
    },
    {
      id: "interior-designer",
      title: "Interior Designer",
      category: "creative",
      description: "Plan and design functional and aesthetic interior spaces for homes, offices, retail spaces, and other environments.",
      educationRequirements: [
        "Bachelor's degree in Interior Design or related field",
        "Diploma in Interior Design (1-3 years)",
        "Professional certifications in specialized areas",
        "Portfolio development essential for client acquisition"
      ],
      skillRequirements: [
        "Spatial planning and visualization",
        "Design software proficiency (AutoCAD, SketchUp, 3D Max)",
        "Material and furniture knowledge",
        "Color theory and application",
        "Project management and client communication"
      ],
      careerInsights: {
        roles: ["Residential Interior Designer", "Commercial Interior Designer", "Retail Space Designer", "Set Designer"],
        salaryRange: "₹3,00,000 - ₹15,00,000 per year (higher for established designers)",
        growthProspects: "Career advancement through specialization, own design firm, or consultancy for large projects."
      },
      institutions: [
        "National Institute of Design (NID)",
        "CEPT University",
        "JJ School of Arts",
        "Pearl Academy"
      ],
      industryTrends: "Sustainable interiors, smart home integration, biophilic design, and virtual reality design presentation."
    },
    {
      id: "animation-artist",
      title: "Animation Artist",
      category: "creative",
      description: "Create moving images and visual effects for films, television, video games, and digital media.",
      educationRequirements: [
        "Bachelor's degree in Animation, Fine Arts, or related field",
        "Diploma in Animation (1-3 years)",
        "Specialized training in animation software and techniques",
        "Strong portfolio of animation work"
      ],
      skillRequirements: [
        "2D or 3D animation techniques",
        "Animation software proficiency (Maya, Blender, After Effects)",
        "Visual storytelling",
        "Character design and movement",
        "Understanding of timing and motion principles"
      ],
      careerInsights: {
        roles: ["2D Animator", "3D Animator", "Character Animator", "Motion Graphics Artist"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year",
        growthProspects: "Career opportunities in animation studios, gaming companies, advertising, and independent projects."
      },
      institutions: [
        "National Institute of Design (Animation Film Design)",
        "Industrial Design Centre, IIT Bombay",
        "Arena Animation",
        "Maya Academy of Advanced Cinematics (MAAC)"
      ],
      industryTrends: "Real-time animation, AI-assisted animation tools, integration of AR/VR, and growing demand in education and explainer content."
    },
    {
      id: "game-developer",
      title: "Game Developer",
      category: "creative",
      description: "Design and create video games for computers, consoles, mobile devices, and other platforms.",
      educationRequirements: [
        "Bachelor's degree in Game Design, Computer Science, or related field",
        "Specialized game development courses",
        "Self-taught skills with strong portfolio also valued in the industry",
        "Continuous learning of game engines and programming languages"
      ],
      skillRequirements: [
        "Game design principles",
        "Programming (C++, C#, Java, or other languages)",
        "Game engine proficiency (Unity, Unreal)",
        "3D modeling and animation (for some roles)",
        "Problem-solving and optimization skills"
      ],
      careerInsights: {
        roles: ["Game Designer", "Game Programmer", "Level Designer", "Game Artist"],
        salaryRange: "₹4,00,000 - ₹20,00,000 per year",
        growthProspects: "Advancement in game studios, independent game development, or transition to related tech fields."
      },
      institutions: [
        "National Institute of Design (Game Design)",
        "Indian Institute of Digital Art & Animation",
        "DSK Supinfocom",
        "Arena Animation (Game Development courses)"
      ],
      industryTrends: "Mobile game development, AR/VR gaming, indie game movement, and games as service models."
    },
    {
      id: "photographer",
      title: "Photographer",
      category: "creative",
      description: "Capture and create images to record events, tell stories, advertise products, or express artistic vision.",
      educationRequirements: [
        "Formal education not strictly required but beneficial",
        "Bachelor's degree in Photography or Visual Arts",
        "Diploma or certificate courses in photography",
        "Workshop-based learning and apprenticeships"
      ],
      skillRequirements: [
        "Camera operation and technical knowledge",
        "Composition and visual storytelling",
        "Lighting techniques",
        "Photo editing software proficiency",
        "Specialized photography skills (based on niche)"
      ],
      careerInsights: {
        roles: ["Portrait Photographer", "Wedding Photographer", "Fashion Photographer", "Photojournalist"],
        salaryRange: "₹2,50,000 - ₹15,00,000+ per year (highly variable based on specialization and client base)",
        growthProspects: "Career paths include commercial photography, media organizations, independent studio, or stock photography."
      },
      institutions: [
        "National Institute of Design (Photography Design)",
        "Symbiosis School of Photography",
        "Light & Life Academy",
        "Sir JJ Institute of Applied Art"
      ],
      industryTrends: "Drone photography, computational photography, integration with social media platforms, and specialized niche photography."
    },
    {
      id: "content-writer",
      title: "Content Writer",
      category: "creative",
      description: "Create written content for websites, blogs, social media, marketing materials, and various digital and print platforms.",
      educationRequirements: [
        "Bachelor's degree in English, Journalism, Communications, or related field (helpful but not mandatory)",
        "Content writing courses and certifications",
        "SEO and digital marketing knowledge beneficial",
        "Portfolio development through published work"
      ],
      skillRequirements: [
        "Strong writing and editing skills",
        "Research capabilities",
        "SEO knowledge",
        "Adaptability to different content formats and tones",
        "Understanding of target audiences and marketing objectives"
      ],
      careerInsights: {
        roles: ["Blog Writer", "SEO Content Writer", "Technical Writer", "Copywriter"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year (with freelance rates varying widely)",
        growthProspects: "Career advancement to content strategist, editor, or specialized industry writing roles."
      },
      institutions: [
        "Mass communication and journalism institutes",
        "Digital marketing institutes with content writing specializations",
        "Online learning platforms offering writing courses",
        "Content writing workshops and bootcamps"
      ],
      industryTrends: "SEO-optimized content, AI-assisted writing tools, long-form content revival, and voice-search optimized content."
    },
    {
      id: "music-producer",
      title: "Music Producer",
      category: "creative",
      description: "Oversee and manage the recording, production, and arrangement of music to create finished audio recordings.",
      educationRequirements: [
        "Formal education not strictly required but beneficial",
        "Bachelor's degree in Music Production, Sound Engineering, or related field",
        "Specialized music production courses",
        "Apprenticeship or mentorship with established producers"
      ],
      skillRequirements: [
        "Digital audio workstation proficiency (Logic, Pro Tools, Ableton)",
        "Music theory understanding",
        "Sound engineering and mixing skills",
        "Instrumental or vocal abilities (often beneficial)",
        "Project management in studio environment"
      ],
      careerInsights: {
        roles: ["Recording Producer", "Beat Maker", "Audio Engineer", "Film Score Producer"],
        salaryRange: "₹3,00,000 - ₹20,00,000+ per year (highly variable based on success and client base)",
        growthProspects: "Career growth through building artist relationships, studio ownership, or specialization in specific genres or media."
      },
      institutions: [
        "KM Music Conservatory",
        "True School of Music",
        "Indian Institute of Music Technology",
        "SAE Institute"
      ],
      industryTrends: "Home studio production growth, streaming platform optimization, collaborative remote production, and AI in music production."
    },
    {
      id: "architect",
      title: "Architect",
      category: "creative",
      description: "Design buildings and structures, considering aesthetics, functionality, safety, and environmental impact.",
      educationRequirements: [
        "Bachelor of Architecture (B.Arch - 5 years)",
        "Master of Architecture (M.Arch) for specialization",
        "Registration with Council of Architecture (CoA)",
        "Continuing professional development"
      ],
      skillRequirements: [
        "Architectural design and drafting",
        "Building information modeling (BIM) software proficiency",
        "Understanding of building codes and regulations",
        "Structural principles knowledge",
        "Project management and client communication"
      ],
      careerInsights: {
        roles: ["Residential Architect", "Commercial Architect", "Landscape Architect", "Urban Designer"],
        salaryRange: "₹4,00,000 - ₹20,00,000+ per year",
        growthProspects: "Career advancement through specialization, partnership in firms, or independent practice."
      },
      institutions: [
        "School of Planning and Architecture (SPA)",
        "IIT Kharagpur (Architecture program)",
        "CEPT University",
        "Sir JJ College of Architecture"
      ],
      industryTrends: "Sustainable architecture, parametric design, virtual reality in architectural visualization, and smart building integration."
    }
  ],
  science: [
    {
      id: "research-scientist",
      title: "Research Scientist",
      category: "science",
      description: "Conduct scientific research to expand knowledge in a specific field, test hypotheses, and develop new applications.",
      educationRequirements: [
        "Master's degree in relevant scientific field (minimum)",
        "Ph.D. preferred for advanced research positions",
        "Post-doctoral experience often required for senior roles",
        "Specialization in specific research area"
      ],
      skillRequirements: [
        "Research methodology",
        "Data analysis and interpretation",
        "Scientific writing and publication",
        "Laboratory techniques (for experimental sciences)",
        "Grant writing and research funding"
      ],
      careerInsights: {
        roles: ["Research Associate", "Senior Scientist", "Principal Investigator", "Research Director"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year (varies by sector and experience)",
        growthProspects: "Career advancement in research institutions, universities, or industry R&D departments."
      },
      institutions: [
        "Indian Institute of Science (IISc)",
        "Council of Scientific and Industrial Research (CSIR) labs",
        "Indian Institutes of Technology (IITs)",
        "National research laboratories and centers"
      ],
      industryTrends: "Interdisciplinary research, industry-academia collaborations, and emphasis on translational research with practical applications."
    },
    {
      id: "biotechnologist",
      title: "Biotechnologist",
      category: "science",
      description: "Apply biological systems, living organisms, or derivatives to develop products and technologies for specific uses.",
      educationRequirements: [
        "Bachelor's degree in Biotechnology or related field",
        "Master's degree for research and development positions",
        "Ph.D. for advanced research roles",
        "Specialized training in specific biotechnology applications"
      ],
      skillRequirements: [
        "Molecular biology techniques",
        "Genetic engineering",
        "Cell culture and microbiology",
        "Bioinformatics",
        "Laboratory and analytical skills"
      ],
      careerInsights: {
        roles: ["Research Biotechnologist", "Bioprocess Engineer", "Clinical Research Associate", "Bioproduct Development Scientist"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in pharmaceutical companies, agricultural biotech, biomedical research, and bioprocessing industries."
      },
      institutions: [
        "Institute of Life Sciences",
        "National Centre for Biological Sciences",
        "Indian Institutes of Technology (Biotechnology departments)",
        "Jawaharlal Nehru University"
      ],
      industryTrends: "Personalized medicine, gene editing technologies, population genetics for disease studies, and agricultural genomics."
    },
    {
      id: "environmental-scientist",
      title: "Environmental Scientist",
      category: "science",
      description: "Study environmental conditions, investigate sources of pollution and degradation, and develop solutions for environmental protection.",
      educationRequirements: [
        "Bachelor's degree in Environmental Science or related field",
        "Master's degree for advanced positions",
        "Ph.D. for research and policy development roles",
        "Specialized training in environmental assessment and monitoring"
      ],
      skillRequirements: [
        "Environmental sampling and analysis",
        "GIS and remote sensing",
        "Environmental impact assessment",
        "Data analysis and modelling",
        "Knowledge of environmental regulations"
      ],
      careerInsights: {
        roles: ["Environmental Analyst", "Ecologist", "Environmental Consultant", "Conservation Scientist"],
        salaryRange: "₹4,00,000 - ₹12,00,000 per year",
        growthProspects: "Career opportunities in environmental consulting firms, government agencies, research institutions, and non-profit organizations."
      },
      institutions: [
        "Indian Institute of Environment Education and Research",
        "Wildlife Institute of India",
        "Environmental science departments in universities",
        "The Energy and Resources Institute (TERI)"
      ],
      industryTrends: "Climate change mitigation strategies, sustainable development approaches, biodiversity conservation, and environmental monitoring technologies."
    },
    {
      id: "food-scientist",
      title: "Food Scientist",
      category: "science",
      description: "Study the physical, microbiological, and chemical properties of food to develop safe, nutritious, and sustainable food products.",
      educationRequirements: [
        "Bachelor's degree in Food Science, Food Technology, or related field",
        "Master's degree for specialized roles",
        "Ph.D. for research and development leadership positions",
        "Food safety certifications beneficial"
      ],
      skillRequirements: [
        "Food chemistry and analysis",
        "Food processing technologies",
        "Quality control and assurance",
        "Sensory evaluation",
        "Product development methodology"
      ],
      careerInsights: {
        roles: ["Food Product Developer", "Quality Assurance Specialist", "Flavor Scientist", "Food Safety Manager"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Career opportunities in food manufacturing companies, research institutions, regulatory agencies, and consulting."
      },
      institutions: [
        "Central Food Technological Research Institute (CFTRI)",
        "National Dairy Research Institute",
        "Indian Institute of Food Processing Technology",
        "Food science departments in agricultural universities"
      ],
      industryTrends: "Plant-based food alternatives, clean label products, sustainable packaging, and functional foods with health benefits."
    },
    {
      id: "astrophysicist",
      title: "Astrophysicist",
      category: "science",
      description: "Study celestial objects, phenomena, and the physics of the universe to understand its origin, evolution, and structure.",
      educationRequirements: [
        "Bachelor's degree in Physics or Astronomy",
        "Master's degree in Astrophysics or related field",
        "Ph.D. for research positions",
        "Advanced mathematical and computational training"
      ],
      skillRequirements: [
        "Advanced mathematics",
        "Computer programming and data analysis",
        "Observational techniques",
        "Theoretical modeling",
        "Scientific writing and communication"
      ],
      careerInsights: {
        roles: ["Research Astrophysicist", "Cosmologist", "Observatory Scientist", "Planetary Scientist"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Career opportunities in research institutions, universities, space agencies, and observatories."
      },
      institutions: [
        "Inter-University Centre for Astronomy and Astrophysics (IUCAA)",
        "Indian Institute of Astrophysics",
        "National Centre for Radio Astrophysics",
        "Physical Research Laboratory"
      ],
      industryTrends: "Multi-messenger astronomy, exoplanet research, dark matter and dark energy studies, and computational astrophysics."
    },
    {
      id: "geneticist",
      title: "Geneticist",
      category: "science",
      description: "Study genes, genetic variations, and heredity in organisms to understand gene function, evolution, and applications in health and agriculture.",
      educationRequirements: [
        "Bachelor's degree in Genetics, Biology, or related field",
        "Master's degree in Genetics or Molecular Biology",
        "Ph.D. for research and academic positions",
        "Specialized training in genetic analysis techniques"
      ],
      skillRequirements: [
        "Molecular genetic techniques (PCR, sequencing, etc.)",
        "Genetic analysis and interpretation",
        "Bioinformatics and computational skills",
        "Laboratory management",
        "Scientific writing and communication"
      ],
      careerInsights: {
        roles: ["Research Geneticist", "Genetic Counselor", "Clinical Geneticist", "Agricultural Geneticist"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Opportunities in research institutions, biotechnology companies, healthcare organizations, and agricultural research."
      },
      institutions: [
        "Centre for Cellular and Molecular Biology (CCMB)",
        "National Institute of Biomedical Genomics",
        "Institute of Genomics and Integrative Biology",
        "Genetics departments in universities and medical schools"
      ],
      industryTrends: "Genomic medicine, CRISPR gene editing applications, population genetics for disease studies, and agricultural genomics."
    },
    {
      id: "materials-scientist",
      title: "Materials Scientist",
      category: "science",
      description: "Study the structure, properties, and performance of materials to develop new materials with specific functionalities.",
      educationRequirements: [
        "Bachelor's degree in Materials Science, Engineering, Physics, or Chemistry",
        "Master's degree for specialized roles",
        "Ph.D. for research and development positions",
        "Interdisciplinary training beneficial"
      ],
      skillRequirements: [
        "Material characterization techniques",
        "Computational modeling of materials",
        "Material synthesis and processing",
        "Analytical problem-solving",
        "Laboratory experimentation"
      ],
      careerInsights: {
        roles: ["Materials Researcher", "Product Development Scientist", "Metallurgist", "Polymer Scientist"],
        salaryRange: "₹5,00,000 - ₹18,00,000 per year",
        growthProspects: "Career opportunities in manufacturing industries, electronics, aerospace, defense, and research institutions."
      },
      institutions: [
        "Indian Institute of Science (Materials Research Centre)",
        "International Advanced Research Centre for Powder Metallurgy & New Materials",
        "Materials science departments in IITs",
        "National Metallurgical Laboratory"
      ],
      industryTrends: "Nanomaterials, smart materials with responsive properties, sustainable materials, and additive manufacturing."
    },
    {
      id: "clinical-research-scientist",
      title: "Clinical Research Scientist",
      category: "science",
      description: "Design, conduct, and analyze clinical trials to evaluate the safety and efficacy of drugs, medical devices, or treatments.",
      educationRequirements: [
        "Bachelor's degree in Life Sciences, Pharmacy, or Medicine",
        "Master's degree in Clinical Research or related field",
        "Ph.D. beneficial for senior positions",
        "Clinical research certifications (e.g., CCRP, CCRA)"
      ],
      skillRequirements: [
        "Clinical trial design and protocol development",
        "Regulatory affairs knowledge",
        "Data management and analysis",
        "Medical writing",
        "Project management"
      ],
      careerInsights: {
        roles: ["Clinical Trial Manager", "Clinical Research Associate", "Medical Science Liaison", "Drug Safety Specialist"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Career opportunities in pharmaceutical companies, contract research organizations, medical device manufacturers, and research institutions."
      },
      institutions: [
        "Institute of Clinical Research India",
        "Clinical research programs in pharmacy colleges",
        "Pharmaceutical research institutes",
        "Specialized clinical research training organizations"
      ],
      industryTrends: "Decentralized clinical trials, real-world evidence studies, patient-centric trial designs, and digital biomarkers."
    },
    {
      id: "forensic-scientist",
      title: "Forensic Scientist",
      category: "science",
      description: "Apply scientific methods and techniques to investigate crimes and provide evidence for legal proceedings.",
      educationRequirements: [
        "Bachelor's degree in Forensic Science or related scientific field",
        "Master's degree for specialized forensic disciplines",
        "Ph.D. for research and senior positions",
        "Certifications in specific forensic techniques"
      ],
      skillRequirements: [
        "Evidence collection and preservation",
        "Laboratory analysis techniques",
        "Documentation and report writing",
        "Expert testimony skills",
        "Knowledge of legal procedures"
      ],
      careerInsights: {
        roles: ["Forensic Analyst", "Crime Scene Investigator", "DNA Analyst", "Forensic Toxicologist"],
        salaryRange: "₹4,00,000 - ₹12,00,000 per year (government sector)",
        growthProspects: "Opportunities in government forensic laboratories, police departments, private forensic services, and academic institutions."
      },
      institutions: [
        "Central Forensic Science Laboratory",
        "National Institute of Criminology and Forensic Science",
        "Forensic science departments in universities",
        "State Forensic Science Laboratories"
      ],
      industryTrends: "Digital forensics, advanced DNA analysis techniques, forensic toxicology for new substances, and automated forensic tools."
    },
    {
      id: "geologist",
      title: "Geologist",
      category: "science",
      description: "Study the Earth's composition, structure, and physical processes to understand its history and identify natural resources.",
      educationRequirements: [
        "Bachelor's degree in Geology or Earth Sciences",
        "Master's degree for specialized roles",
        "Ph.D. for research and academic positions",
        "Professional geologist certification for some positions"
      ],
      skillRequirements: [
        "Field mapping and sampling",
        "Rock and mineral identification",
        "Geographic Information Systems (GIS)",
        "Geological modeling",
        "Data interpretation and analysis"
      ],
      careerInsights: {
        roles: ["Exploration Geologist", "Environmental Geologist", "Hydrogeologist", "Mining Geologist"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in mining companies, oil and gas industry, environmental consulting, government agencies, and research institutions."
      },
      institutions: [
        "Geological Survey of India (GSI) Training Institute",
        "Indian Institute of Technology (Earth Sciences departments)",
        "National Geophysical Research Institute",
        "Geology departments in universities"
      ],
      industryTrends: "Remote sensing applications in geology, digital mapping technologies, sustainable resource exploration, and geohazard assessment."
    }
  ],
  hospitality: [
    {
      id: "hotel-manager",
      title: "Hotel Manager",
      category: "hospitality",
      description: "Oversee all aspects of hotel operations, including guest services, staff management, and financial performance.",
      educationRequirements: [
        "Bachelor's degree in Hotel Management or Hospitality",
        "MBA in Hospitality Management for luxury properties and chains",
        "Hotel management diplomas from recognized institutes",
        "Specialized certifications in hospitality operations"
      ],
      skillRequirements: [
        "Hospitality operations management",
        "Customer service excellence",
        "Staff supervision and training",
        "Revenue management",
        "Problem-solving and conflict resolution"
      ],
      careerInsights: {
        roles: ["Front Office Manager", "Rooms Division Manager", "General Manager", "Hotel Director"],
        salaryRange: "₹4,00,000 - ₹25,00,000+ per year (varies by hotel category and location)",
        growthProspects: "Career progression from department manager to general manager, or movement to larger properties and international chains."
      },
      institutions: [
        "Institute of Hotel Management, Catering Technology and Applied Nutrition (IHMs)",
        "Oberoi Centre of Learning and Development",
        "Welcome group Graduate School of Hotel Administration",
        "International hospitality management schools (Swiss, etc.)"
      ],
      industryTrends: "Technology integration in guest services, sustainable hotel operations, experiential hospitality, and personalized guest experiences."
    },
    {
      id: "chef",
      title: "Chef",
      category: "hospitality",
      description: "Prepare, cook, and present food in restaurants, hotels, catering operations, or other food service establishments.",
      educationRequirements: [
        "Diploma or degree in Culinary Arts",
        "Apprenticeship under experienced chefs",
        "Specialized culinary certifications",
        "Continuing education in specific cuisines or techniques"
      ],
      skillRequirements: [
        "Cooking techniques and food preparation",
        "Menu planning and development",
        "Food safety and sanitation",
        "Kitchen management",
        "Creativity and presentation skills"
      ],
      careerInsights: {
        roles: ["Commis Chef", "Chef de Partie", "Sous Chef", "Executive Chef"],
        salaryRange: "₹2,50,000 - ₹20,00,000+ per year (varies by establishment and experience)",
        growthProspects: "Career ladder from junior positions to head chef, executive chef, or culinary director. Opportunities for entrepreneurship."
      },
      institutions: [
        "Institute of Hotel Management (Culinary programs)",
        "Culinary Academy of India",
        "Academy of Pastry & Culinary Arts",
        "International culinary schools (Le Cordon Bleu, CIA)"
      ],
      industryTrends: "Plant-based cuisine, farm-to-table concepts, fusion cuisines, scientific/molecular gastronomy, and sustainable cooking practices."
    },
    {
      id: "event-manager",
      title: "Event Manager",
      category: "hospitality",
      description: "Plan, organize, and execute events such as conferences, weddings, exhibitions, and corporate functions.",
      educationRequirements: [
        "Bachelor's degree in Event Management, Hospitality, or related field",
        "Diploma in Event Management",
        "Certifications in specialized event types",
        "Project management certifications beneficial"
      ],
      skillRequirements: [
        "Event planning and coordination",
        "Vendor management",
        "Budgeting and financial management",
        "Marketing and promotion",
        "Problem-solving and crisis management"
      ],
      careerInsights: {
        roles: ["Event Coordinator", "Wedding Planner", "Conference Manager", "Festival Director"],
        salaryRange: "₹3,00,000 - ₹15,00,000 per year (with independent planners earning more)",
        growthProspects: "Career advancement to senior event management roles, specialized event niches, or establishing event management company."
      },
      institutions: [
        "National Institute of Event Management",
        "Event management programs in hospitality institutes",
        "Indian Institute of Management (for event management courses)",
        "Event management certification programs"
      ],
      industryTrends: "Virtual and hybrid events, event technology integration, sustainable event practices, and experiential event designs."
    },
    {
      id: "restaurant-manager",
      title: "Restaurant Manager",
      category: "hospitality",
      description: "Manage daily operations of restaurants or food service establishments, ensuring quality service and profitability.",
      educationRequirements: [
        "Bachelor's degree in Restaurant Management, Hospitality, or related field",
        "Diploma in Food & Beverage Service/Management",
        "Restaurant management certifications",
        "Culinary background beneficial but not required"
      ],
      skillRequirements: [
        "Restaurant operations management",
        "Customer service standards",
        "Staff scheduling and supervision",
        "Inventory and cost control",
        "Menu planning and pricing"
      ],
      careerInsights: {
        roles: ["Assistant Restaurant Manager", "Food & Beverage Manager", "Operations Manager", "Multi-unit Manager"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year",
        growthProspects: "Career progression to larger establishments, restaurant chains, or entrepreneurship in food service."
      },
      institutions: [
        "Institute of Hotel Management (F&B programs)",
        "Food & Beverage service schools",
        "Restaurant management courses in hospitality institutes",
        "Industry-specific training programs"
      ],
      industryTrends: "Digital ordering and payment systems, restaurant automation, ghost kitchens, and experience-focused dining concepts."
    },
    {
      id: "travel-consultant",
      title: "Travel Consultant",
      category: "hospitality",
      description: "Provide expert advice and planning services for leisure and business travel, creating customized itineraries and booking arrangements.",
      educationRequirements: [
        "Bachelor's degree in Tourism, Travel Management, or related field",
        "Diploma in Travel and Tourism",
        "IATA/UFTAA certification for airline bookings",
        "Destination specialist certifications"
      ],
      skillRequirements: [
        "Travel planning and itinerary creation",
        "Reservation systems knowledge",
        "Destination expertise",
        "Customer service skills",
        "Sales and marketing abilities"
      ],
      careerInsights: {
        roles: ["Leisure Travel Consultant", "Corporate Travel Manager", "Luxury Travel Designer", "Adventure Travel Specialist"],
        salaryRange: "₹2,50,000 - ₹10,00,000 per year (plus commissions in many roles)",
        growthProspects: "Career paths include specialization in niche travel segments, travel agency management, or independent travel consultancy."
      },
      institutions: [
        "Indian Institute of Tourism and Travel Management",
        "Tourism and travel management institutes",
        "IATA Training Centers",
        "Travel industry certification programs"
      ],
      industryTrends: "Experiential and immersive tours, specialized niche tours (culinary, photography, etc.), technology-enhanced guiding, and sustainable tourism practices."
    },
    {
      id: "spa-manager",
      title: "Spa Manager",
      category: "hospitality",
      description: "Oversee operations of spas in hotels, resorts, or wellness centers, managing therapists, treatments, and customer experience.",
      educationRequirements: [
        "Bachelor's degree in Hospitality, Spa Management, or related field",
        "Diploma in Spa Management",
        "Background in wellness, beauty therapy, or hospitality",
        "Specialized certifications in spa operations or therapies"
      ],
      skillRequirements: [
        "Spa operations management",
        "Staff training and supervision",
        "Treatment menu development",
        "Customer service excellence",
        "Inventory and financial management"
      ],
      careerInsights: {
        roles: ["Spa Supervisor", "Wellness Director", "Spa Operations Manager", "Spa Brand Manager"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Career advancement to larger spa facilities, international spa chains, or consultation for spa development."
      },
      institutions: [
        "Spa management programs in hospitality institutes",
        "Wellness and spa academies",
        "International spa management schools",
        "Beauty and wellness management institutes"
      ],
      industryTrends: "Holistic wellness programs, technology in spa treatments, sustainable spa practices, and medical-wellness integration."
    },
    {
      id: "cruise-director",
      title: "Cruise Director",
      category: "hospitality",
      description: "Plan and oversee entertainment, activities, and guest services on cruise ships to enhance passenger experience.",
      educationRequirements: [
        "Bachelor's degree in Hospitality, Tourism, or Entertainment",
        "Prior experience in entertainment, hospitality, or cruise industry",
        "Specialized training in event management or recreation",
        "Mandatory maritime safety certifications"
      ],
      skillRequirements: [
        "Entertainment planning and coordination",
        "Public speaking and performance abilities",
        "Guest relations and problem-solving",
        "Team leadership and management",
        "Multi-cultural communication skills"
      ],
      careerInsights: {
        roles: ["Assistant Cruise Director", "Entertainment Manager", "Activities Coordinator", "Cruise Staff Manager"],
        salaryRange: "₹6,00,000 - ₹20,00,000 per year (plus benefits of travel and accommodation)",
        growthProspects: "Career progression on larger cruise ships, international cruise lines, or transition to land-based entertainment management."
      },
      institutions: [
        "Maritime academies with hospitality programs",
        "Cruise line training programs",
        "Hospitality and tourism institutes",
        "Entertainment management schools"
      ],
      industryTrends: "Interactive entertainment experiences, technology-enhanced activities, cultural immersion programs, and sustainable cruising practices."
    },
    {
      id: "concierge",
      title: "Concierge",
      category: "hospitality",
      description: "Provide personalized assistance to guests in hotels or luxury residences, including recommendations, reservations, and special arrangements.",
      educationRequirements: [
        "Bachelor's degree in Hospitality or Tourism (preferred but not mandatory)",
        "Diploma in Hotel Management",
        "Concierge certification programs",
        "Les Clefs d'Or membership for elite positions"
      ],
      skillRequirements: [
        "Exceptional customer service",
        "Local knowledge and connections",
        "Problem-solving abilities",
        "Communication and interpersonal skills",
        "Organization and attention to detail"
      ],
      careerInsights: {
        roles: ["Hotel Concierge", "Guest Relations Officer", "Chief Concierge", "VIP Services Manager"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year (higher in luxury properties)",
        growthProspects: "Career advancement to head concierge, guest relations manager, or hotel operations management."
      },
      institutions: [
        "Institute of Hotel Management (Front Office programs)",
        "Hotel operations training schools",
        "Les Clefs d'Or training programs",
        "Luxury hospitality service academies"
      ],
      industryTrends: "Digital concierge services, personalized guest experience apps, hyper-local expertise, and experiential service offerings."
    },
    {
      id: "sommelier",
      title: "Sommelier",
      category: "hospitality",
      description: "Expertly curate wine selections, provide recommendations, and enhance dining experiences through wine knowledge and service.",
      educationRequirements: [
        "Wine certification programs (WSET, Court of Master Sommeliers)",
        "Background in hospitality or culinary arts beneficial",
        "Advanced sommelier certifications for premium positions",
        "Continuing education in viticulture and wine regions"
      ],
      skillRequirements: [
        "Wine knowledge and tasting skills",
        "Food and wine pairing expertise",
        "Wine service techniques",
        "Wine cellar management",
        "Customer service and communication"
      ],
      careerInsights: {
        roles: ["Assistant Sommelier", "Wine Steward", "Beverage Director", "Wine Consultant"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year (higher in luxury establishments)",
        growthProspects: "Career advancement in fine dining restaurants, luxury hotels, wine distribution, or consulting."
      },
      institutions: [
        "Wine and Spirit Education Trust (WSET) programs in India",
        "Institute of Wine and Beverage Studies",
        "Court of Master Sommeliers courses",
        "Beverage programs in culinary institutes"
      ],
      industryTrends: "Focus on indigenous Indian wines, sustainable and organic wine programs, wine technology tools, and experiential wine tastings."
    },
    {
      id: "tour-guide",
      title: "Tour Guide",
      category: "hospitality",
      description: "Lead and inform tourists about destinations, historical sites, cultural landmarks, and local experiences.",
      educationRequirements: [
        "Bachelor's degree in Tourism, History, or related field (helpful but not mandatory)",
        "Tour guide certification from Ministry of Tourism",
        "Regional guide licensing where applicable",
        "Language proficiency certificates beneficial"
      ],
      skillRequirements: [
        "Destination knowledge and storytelling",
        "Group management and leadership",
        "Communication and presentation skills",
        "Cultural sensitivity and adaptability",
        "First aid and safety awareness"
      ],
      careerInsights: {
        roles: ["City Guide", "Heritage Site Guide", "Adventure Tour Leader", "Specialized Niche Guide"],
        salaryRange: "₹2,50,000 - ₹8,00,000 per year (often supplemented by tips)",
        growthProspects: "Career paths include specialization in premium tours, establishing tour companies, or advancement to tour operations management."
      },
      institutions: [
        "Indian Institute of Tourism and Travel Management",
        "Regional tour guide training programs by tourism departments",
        "Archaeological Survey of India guide courses",
        "Tourism certification programs"
      ],
      industryTrends: "Experiential and immersive tours, specialized niche tours (culinary, photography, etc.), technology-enhanced guiding, and sustainable tourism practices."
    }
  ],
  engineering: [
    {
      id: "civil-engineer",
      title: "Civil Engineer",
      category: "engineering",
      description: "Design, develop, and supervise infrastructure projects such as buildings, roads, bridges, dams, and water systems.",
      educationRequirements: [
        "Bachelor's degree in Civil Engineering (B.Tech/B.E.)",
        "Master's degree (M.Tech) for specialized roles",
        "Ph.D. for research and academic positions",
        "Professional Engineer (PE) registration beneficial"
      ],
      skillRequirements: [
        "Structural analysis and design",
        "AutoCAD and other design software",
        "Construction materials knowledge",
        "Project management",
        "Problem-solving and mathematical skills"
      ],
      careerInsights: {
        roles: ["Structural Engineer", "Transportation Engineer", "Water Resources Engineer", "Construction Manager"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year",
        growthProspects: "Career advancement to project manager, chief engineer, or consultant. Opportunities in construction companies, government agencies, and consulting firms."
      },
      institutions: [
        "Indian Institutes of Technology (IITs)",
        "National Institutes of Technology (NITs)",
        "College of Engineering, Pune",
        "BITS Pilani"
      ],
      industryTrends: "Sustainable construction practices, Building Information Modeling (BIM), smart infrastructure, and disaster-resistant design."
    },
    {
      id: "mechanical-engineer",
      title: "Mechanical Engineer",
      category: "engineering",
      description: "Design, develop, build, and test mechanical devices, equipment, and systems across various industries.",
      educationRequirements: [
        "Bachelor's degree in Mechanical Engineering (B.Tech/B.E.)",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Professional certifications in specific areas (HVAC, CAD, etc.)"
      ],
      skillRequirements: [
        "Mechanical design and analysis",
        "CAD/CAM software proficiency",
        "Thermodynamics and fluid mechanics knowledge",
        "Manufacturing processes understanding",
        "Problem-solving and analytical thinking"
      ],
      careerInsights: {
        roles: ["Design Engineer", "Production Engineer", "Automotive Engineer", "HVAC Engineer"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year",
        growthProspects: "Career growth in manufacturing, automotive, aerospace, energy sectors, or transition to management roles."
      },
      institutions: [
        "Indian Institutes of Technology (IITs)",
        "National Institutes of Technology (NITs)",
        "PSG College of Technology",
        "VIT University"
      ],
      industryTrends: "Additive manufacturing, robotics integration, sustainable design, and Industry 4.0 technologies."
    },
    {
      id: "electrical-engineer",
      title: "Electrical Engineer",
      category: "engineering",
      description: "Design, develop, test, and supervise the manufacturing of electrical equipment, systems, and components.",
      educationRequirements: [
        "Bachelor's degree in Electrical Engineering (B.Tech/B.E.)",
        "Master's degree for specialized roles",
        "Ph.D. for research and academic positions",
        "Professional certifications in power systems, electronics, etc."
      ],
      skillRequirements: [
        "Circuit design and analysis",
        "Electrical systems knowledge",
        "Programming skills",
        "Testing and troubleshooting",
        "Technical documentation"
      ],
      careerInsights: {
        roles: ["Power Systems Engineer", "Control Systems Engineer", "Electronics Engineer", "Electrical Design Engineer"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in power generation and distribution, manufacturing, telecommunications, and consulting."
      },
      institutions: [
        "Indian Institutes of Technology (IITs)",
        "National Institutes of Technology (NITs)",
        "Delhi Technological University",
        "College of Engineering, Guindy"
      ],
      industryTrends: "Renewable energy systems, smart grid technologies, electric vehicles, and power electronics advancements."
    },
    {
      id: "computer-engineer",
      title: "Computer Engineer",
      category: "engineering",
      description: "Design and develop computer hardware, software, systems, and networks to solve technical problems.",
      educationRequirements: [
        "Bachelor's degree in Computer Engineering or Computer Science (B.Tech/B.E.)",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Industry certifications in specific technologies"
      ],
      skillRequirements: [
        "Computer architecture knowledge",
        "Programming languages (C++, Python, etc.)",
        "Hardware-software integration",
        "Operating systems understanding",
        "Problem-solving and analytical skills"
      ],
      careerInsights: {
        roles: ["Hardware Engineer", "Systems Engineer", "Network Engineer", "IoT Engineer"],
        salaryRange: "₹4,00,000 - ₹20,00,000 per year",
        growthProspects: "Career opportunities in technology companies, hardware manufacturers, research labs, and consulting firms."
      },
      institutions: [
        "Indian Institutes of Technology (IITs)",
        "National Institutes of Technology (NITs)",
        "BITS Pilani",
        "IIIT Hyderabad"
      ],
      industryTrends: "Edge computing, quantum computing, AI hardware acceleration, and cybersecurity-focused hardware design."
    },
    {
      id: "chemical-engineer",
      title: "Chemical Engineer",
      category: "engineering",
      description: "Apply principles of chemistry, physics, and mathematics to design and develop processes for manufacturing chemicals, fuels, foods, and other products.",
      educationRequirements: [
        "Bachelor's degree in Chemical Engineering (B.Tech/B.E.)",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Safety certifications for certain industries"
      ],
      skillRequirements: [
        "Process design and optimization",
        "Chemical process simulation software",
        "Heat and mass transfer knowledge",
        "Safety and environmental regulations understanding",
        "Problem-solving and analytical thinking"
      ],
      careerInsights: {
        roles: ["Process Engineer", "Production Engineer", "Environmental Engineer", "Petroleum Engineer"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in petrochemicals, pharmaceuticals, food processing, environmental engineering, and manufacturing."
      },
      institutions: [
        "Indian Institutes of Technology (IITs)",
        "National Institutes of Technology (NITs)",
        "Institute of Chemical Technology, Mumbai",
        "BITS Pilani"
      ],
      industryTrends: "Sustainable processes, biofuels, carbon capture technologies, and process intensification."
    },
    {
      id: "aerospace-engineer",
      title: "Aerospace Engineer",
      category: "engineering",
      description: "Design, develop, and test aircraft, spacecraft, satellites, missiles, and related systems and components.",
      educationRequirements: [
        "Bachelor's degree in Aerospace Engineering (B.Tech/B.E.)",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Specialized certifications in aerodynamics, propulsion, etc."
      ],
      skillRequirements: [
        "Aerodynamics and flight mechanics",
        "Propulsion systems knowledge",
        "Structural analysis",
        "CAD and simulation software proficiency",
        "Systems engineering"
      ],
      careerInsights: {
        roles: ["Aeronautical Engineer", "Spacecraft Engineer", "Avionics Engineer", "Propulsion Engineer"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Career opportunities in aerospace companies, defense organizations, research institutions, and space agencies."
      },
      institutions: [
        "Indian Institute of Technology Bombay (Aerospace Engineering)",
        "Indian Institute of Technology Madras",
        "Indian Institute of Space Science and Technology",
        "Madras Institute of Technology"
      ],
      industryTrends: "Unmanned aerial vehicles, sustainable aviation, space tourism, and advanced materials for aerospace applications."
    },
    {
      id: "biomedical-engineer",
      title: "Biomedical Engineer",
      category: "engineering",
      description: "Apply engineering principles to healthcare and medicine to design systems, equipment, and devices for improving human health.",
      educationRequirements: [
        "Bachelor's degree in Biomedical Engineering or related field",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Medical device regulatory knowledge beneficial"
      ],
      skillRequirements: [
        "Medical device design",
        "Biomechanics and biomaterials knowledge",
        "Electronics and instrumentation",
        "Programming and data analysis",
        "Understanding of physiology and anatomy"
      ],
      careerInsights: {
        roles: ["Medical Device Engineer", "Clinical Engineer", "Rehabilitation Engineer", "Bioinstrumentation Engineer"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Opportunities in medical device companies, hospitals, research institutions, and regulatory agencies."
      },
      institutions: [
        "Indian Institute of Technology (Biomedical Engineering programs)",
        "Manipal Institute of Technology",
        "VIT University",
        "PSG College of Technology"
      ],
      industryTrends: "Wearable medical devices, AI in healthcare, 3D bioprinting, and telemedicine technologies."
    },
    {
      id: "environmental-engineer",
      title: "Environmental Engineer",
      category: "engineering",
      description: "Apply engineering principles to protect and improve the environment and human health by developing solutions for environmental problems.",
      educationRequirements: [
        "Bachelor's degree in Environmental Engineering or related field",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Environmental compliance certifications beneficial"
      ],
      skillRequirements: [
        "Water and wastewater treatment knowledge",
        "Air pollution control technologies",
        "Environmental impact assessment",
        "Remediation techniques",
        "Environmental regulations understanding"
      ],
      careerInsights: {
        roles: ["Water Resources Engineer", "Pollution Control Engineer", "Waste Management Engineer", "Sustainability Consultant"],
        salaryRange: "₹3,50,000 - ₹12,00,000 per year",
        growthProspects: "Career opportunities in environmental consulting firms, government agencies, industries with environmental compliance needs, and NGOs."
      },
      institutions: [
        "Indian Institutes of Technology (Environmental Engineering programs)",
        "National Environmental Engineering Research Institute",
        "TERI University",
        "College of Engineering, Anna University"
      ],
      industryTrends: "Circular economy solutions, climate change mitigation technologies, sustainable urban development, and green infrastructure."
    },
    {
      id: "petroleum-engineer",
      title: "Petroleum Engineer",
      category: "engineering",
      description: "Develop methods for extracting oil and gas from deposits below the Earth's surface, and design equipment and processes to achieve maximum profitable recovery.",
      educationRequirements: [
        "Bachelor's degree in Petroleum Engineering or related field",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Industry certifications in drilling, production, etc."
      ],
      skillRequirements: [
        "Reservoir engineering",
        "Drilling and production engineering",
        "Petroleum geology understanding",
        "Simulation software proficiency",
        "Project management"
      ],
      careerInsights: {
        roles: ["Reservoir Engineer", "Drilling Engineer", "Production Engineer", "Completion Engineer"],
        salaryRange: "₹6,00,000 - ₹25,00,000 per year",
        growthProspects: "Opportunities in oil and gas companies, oilfield service providers, and consulting firms. International assignments common."
      },
      institutions: [
        "Indian Institute of Technology (Kharagpur, Madras)",
        "University of Petroleum and Energy Studies",
        "Rajiv Gandhi Institute of Petroleum Technology",
        "Maharashtra Institute of Technology"
      ],
      industryTrends: "Enhanced oil recovery techniques, digital oilfield technologies, unconventional resources development, and transition to cleaner energy."
    },
    {
      id: "robotics-engineer",
      title: "Robotics Engineer",
      category: "engineering",
      description: "Design, build, and maintain robots and robotic systems for various applications across industries.",
      educationRequirements: [
        "Bachelor's degree in Robotics, Mechanical, Electrical, or Computer Engineering",
        "Master's degree for specialized roles",
        "Ph.D. for research positions",
        "Specialized certifications in robotics programming and systems"
      ],
      skillRequirements: [
        "Robotics system design",
        "Programming languages (Python, C++, ROS)",
        "Mechanical and electrical systems integration",
        "Computer vision and sensor integration",
        "Control systems and AI algorithms"
      ],
      careerInsights: {
        roles: ["Robotics Systems Engineer", "Automation Engineer", "AI Robotics Specialist", "Robot Programmer"],
        salaryRange: "₹5,00,000 - ₹20,00,000 per year",
        growthProspects: "Growing opportunities in manufacturing, healthcare, logistics, agriculture, and research institutions."
      },
      institutions: [
        "Indian Institutes of Technology (Robotics programs)",
        "Indian Institute of Science",
        "BITS Pilani",
        "SRM Institute of Science and Technology"
      ],
      industryTrends: "Collaborative robots (cobots), autonomous mobile robots, AI-powered robotics, and service robots for various industries."
    }
  ],
  media: [
    {
      id: "journalist",
      title: "Journalist",
      category: "media",
      description: "Research, write, and report news stories for newspapers, magazines, websites, television, or radio.",
      educationRequirements: [
        "Bachelor's degree in Journalism, Mass Communication, or related field",
        "Master's degree for specialized reporting",
        "Professional certifications in specific areas (investigative, data journalism)",
        "Portfolio of published work often more important than formal education"
      ],
      skillRequirements: [
        "Research and interviewing",
        "Writing and editing",
        "Fact-checking and verification",
        "Digital media tools",
        "Ethical journalism practices"
      ],
      careerInsights: {
        roles: ["Reporter", "Editor", "Correspondent", "News Analyst"],
        salaryRange: "₹3,00,000 - ₹15,00,000 per year (varies widely by publication and role)",
        growthProspects: "Career progression from reporter to editor, specialized beat reporter, or media management."
      },
      institutions: [
        "Indian Institute of Mass Communication",
        "Asian College of Journalism",
        "Symbiosis Institute of Media and Communication",
        "Xavier Institute of Communications"
      ],
      industryTrends: "Digital-first journalism, multimedia storytelling, data journalism, and audience engagement strategies."
    },
    {
      id: "film-director",
      title: "Film Director",
      category: "media",
      description: "Guide the creative aspects of film production, including casting, script interpretation, and directing actors and technical crew.",
      educationRequirements: [
        "Bachelor's degree in Film Direction, Filmmaking, or related field",
        "Film school diploma or certificate",
        "Apprenticeship or assistant director experience",
        "Portfolio of directed work often more important than formal education"
      ],
      skillRequirements: [
        "Visual storytelling",
        "Script analysis and interpretation",
        "Actor direction",
        "Technical film knowledge",
        "Project and team management"
      ],
      careerInsights: {
        roles: ["Feature Film Director", "Documentary Director", "Television Director", "Commercial Director"],
        salaryRange: "Highly variable, from ₹5,00,000 - ₹50,00,000+ per project",
        growthProspects: "Career progression through increasingly prominent projects, production company establishment, or transition to producing."
      },
      institutions: [
        "Film and Television Institute of India (FTII)",
        "Satyajit Ray Film and Television Institute",
        "Whistling Woods International",
        "National School of Drama (Film Direction courses)"
      ],
      industryTrends: "OTT platform productions, independent filmmaking, virtual production techniques, and cross-platform storytelling."
    },
    {
      id: "broadcast-presenter",
      title: "Broadcast Presenter",
      category: "media",
      description: "Present news, entertainment, or informational content on television, radio, or digital platforms.",
      educationRequirements: [
        "Bachelor's degree in Journalism, Mass Communication, or related field",
        "Voice and presentation training",
        "Media-specific training programs",
        "Portfolio and screen presence often more important than formal education"
      ],
      skillRequirements: [
        "Clear and engaging communication",
        "Script reading and improvisation",
        "Interview techniques",
        "Camera presence and voice modulation",
        "Subject matter knowledge for specialized presenting"
      ],
      careerInsights: {
        roles: ["News Anchor", "Talk Show Host", "Radio Jockey", "Sports Commentator"],
        salaryRange: "₹4,00,000 - ₹30,00,000+ per year (varies widely by channel and popularity)",
        growthProspects: "Career growth through building audience following, specialization in specific content areas, or transition to production roles."
      },
      institutions: [
        "Indian Institute of Mass Communication",
        "Asian Academy of Film & Television",
        "Broadcast journalism programs in media schools",
        "In-house training at media organizations"
      ],
      industryTrends: "Multi-platform presenting, social media integration, interactive broadcasting, and specialized niche content."
    },
    {
      id: "digital-marketing-specialist",
      title: "Digital Marketing Specialist",
      category: "media",
      description: "Plan and execute marketing campaigns across digital platforms to promote brands, products, or services.",
      educationRequirements: [
        "Bachelor's degree in Marketing, Digital Media, or related field",
        "Digital marketing certifications (Google, HubSpot, etc.)",
        "Specialized courses in specific digital marketing channels",
        "Continuous learning to keep up with platform changes"
      ],
      skillRequirements: [
        "Social media marketing",
        "Search engine optimization (SEO)",
        "Content marketing",
        "Email marketing",
        "Analytics and data interpretation"
      ],
      careerInsights: {
        roles: ["Social Media Manager", "SEO Specialist", "Content Marketer", "Digital Marketing Manager"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year",
        growthProspects: "Career advancement to digital marketing manager, marketing director, or specialized channel expert."
      },
      institutions: [
        "Digital Marketing Institutes (NIIT, Digital Vidya)",
        "Marketing programs at management institutes",
        "Google Digital Garage and similar online platforms",
        "Industry certification programs"
      ],
      industryTrends: "Video-first marketing, influencer collaborations, AI in marketing automation, and privacy-focused marketing strategies."
    },
    {
      id: "public-relations-specialist",
      title: "Public Relations Specialist",
      category: "media",
      description: "Create and maintain a favorable public image for organizations, manage communications, and respond to media inquiries.",
      educationRequirements: [
        "Bachelor's degree in Public Relations, Communications, or related field",
        "Master's degree beneficial for advancement",
        "PR certifications from professional bodies",
        "Media training and crisis communication courses"
      ],
      skillRequirements: [
        "Media relations",
        "Strategic communication planning",
        "Writing press releases and statements",
        "Crisis management",
        "Relationship building and networking"
      ],
      careerInsights: {
        roles: ["PR Executive", "Media Relations Manager", "Corporate Communications Specialist", "Spokesperson"],
        salaryRange: "₹3,50,000 - ₹15,00,000 per year",
        growthProspects: "Career progression to PR manager, communications director, or specialized industry PR consultant."
      },
      institutions: [
        "Indian Institute of Mass Communication",
        "Symbiosis Institute of Media and Communication",
        "Xavier Institute of Communications",
        "Public Relations Society of India training programs"
      ],
      industryTrends: "Digital PR strategies, influencer relations, data-driven PR measurement, and integrated communications approaches."
    },
    {
      id: "video-editor",
      title: "Video Editor",
      category: "media",
      description: "Manipulate and arrange video footage, add effects, sound, and graphics to create the final version of video content.",
      educationRequirements: [
        "Bachelor's degree in Film Editing, Digital Media, or related field",
        "Diploma or certificate in video editing",
        "Software-specific certifications (Adobe Premiere, Final Cut Pro)",
        "Portfolio of edited work often more important than formal education"
      ],
      skillRequirements: [
        "Video editing software proficiency",
        "Storytelling through visual editing",
        "Color correction and grading",
        "Audio editing and mixing",
        "Motion graphics integration"
      ],
      careerInsights: {
        roles: ["Film Editor", "Television Editor", "Content Creator Editor", "Corporate Video Editor"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year (freelance rates vary widely)",
        growthProspects: "Career advancement to senior editor, post-production supervisor, or specialized editing roles in film/television."
      },
      institutions: [
        "Film and Television Institute of India (FTII)",
        "Satyajit Ray Film and Television Institute",
        "Digital editing courses at media schools",
        "Online specialized editing programs"
      ],
      industryTrends: "Cloud-based collaborative editing, AI-assisted editing tools, vertical video formats, and multi-platform optimization."
    },
    {
      id: "advertising-creative-director",
      title: "Advertising Creative Director",
      category: "media",
      description: "Lead the creative vision for advertising campaigns, overseeing the work of art directors, copywriters, and design teams.",
      educationRequirements: [
        "Bachelor's degree in Advertising, Design, Communications, or related field",
        "Portfolio school or specialized advertising programs",
        "Significant experience in creative roles typically required",
        "Creative portfolio more important than formal education"
      ],
      skillRequirements: [
        "Creative concept development",
        "Brand strategy understanding",
        "Visual and verbal communication",
        "Team leadership and direction",
        "Client presentation and pitching"
      ],
      careerInsights: {
        roles: ["Art Director", "Copy Chief", "Creative Group Head", "Executive Creative Director"],
        salaryRange: "₹10,00,000 - ₹40,00,000+ per year",
        growthProspects: "Career progression from creative team member to creative director, agency partner, or independent creative consultant."
      },
      institutions: [
        "National Institute of Design (Visual Communication)",
        "Mudra Institute of Communications (MICA)",
        "Sir J.J. Institute of Applied Art",
        "Miami Ad School (India campus)"
      ],
      industryTrends: "Experiential advertising, purpose-driven campaigns, digital-first creative approaches, and data-informed creative development."
    },
    {
      id: "social-media-manager",
      title: "Social Media Manager",
      category: "media",
      description: "Develop and implement social media strategies to grow audience, build brand awareness, and drive engagement across platforms.",
      educationRequirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "Social media management certifications",
        "Platform-specific training (Facebook Blueprint, Twitter Flight School)",
        "Digital marketing courses"
      ],
      skillRequirements: [
        "Content creation and curation",
        "Community management",
        "Social media analytics",
        "Campaign planning and execution",
        "Crisis management on social platforms"
      ],
      careerInsights: {
        roles: ["Social Media Coordinator", "Community Manager", "Social Media Strategist", "Social Content Creator"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year",
        growthProspects: "Career advancement to social media director, digital marketing manager, or brand communications lead."
      },
      institutions: [
        "Digital Marketing Institutes",
        "Social media marketing courses at media schools",
        "Platform-provided education programs",
        "Online specialized social media management courses"
      ],
      industryTrends: "Short-form video content, social commerce integration, creator collaborations, and authentic brand storytelling."
    },
    {
      id: "media-planner",
      title: "Media Planner",
      category: "media",
      description: "Develop strategies for advertising placement across various media channels to reach target audiences effectively and efficiently.",
      educationRequirements: [
        "Bachelor's degree in Marketing, Advertising, Communications, or related field",
        "Media planning certifications",
        "Analytics and research methodology training",
        "Digital media buying courses"
      ],
      skillRequirements: [
        "Media research and audience analysis",
        "Budget allocation and optimization",
        "Media buying knowledge",
        "Analytics and campaign measurement",
        "Strategic planning"
      ],
      careerInsights: {
        roles: ["Media Buyer", "Media Strategist", "Digital Media Planner", "Integrated Media Planner"],
        salaryRange: "₹4,00,000 - ₹15,00,000 per year",
        growthProspects: "Career progression to media director, client services director, or specialized channel planning expert."
      },
      institutions: [
        "Mudra Institute of Communications (MICA)",
        "Indian Institute of Mass Communication",
        "Media planning courses at advertising schools",
        "Agency training programs"
      ],
      industryTrends: "Programmatic media buying, cross-platform measurement, audience-first planning, and performance-based media strategies."
    },
    {
      id: "podcast-producer",
      title: "Podcast Producer",
      category: "media",
      description: "Oversee the creation, recording, editing, and distribution of podcast content across various platforms.",
      educationRequirements: [
        "Bachelor's degree in Audio Production, Journalism, or related field (helpful but not mandatory)",
        "Audio engineering and production courses",
        "Digital media distribution training",
        "Portfolio of produced content often more important than formal education"
      ],
      skillRequirements: [
        "Audio recording and editing",
        "Story development and structure",
        "Interview techniques",
        "Sound design and mixing",
        "Distribution and promotion strategies"
      ],
      careerInsights: {
        roles: ["Audio Producer", "Podcast Host", "Content Developer", "Audio Engineer"],
        salaryRange: "₹3,00,000 - ₹12,00,000 per year (independent podcasters' income varies widely)",
        growthProspects: "Career opportunities in media companies, podcast networks, or independent podcast production."
      },
      institutions: [
        "Audio engineering programs at media schools",
        "Radio production courses",
        "Digital content creation institutes",
        "Online specialized podcast production courses"
      ],
      industryTrends: "Video podcasting, subscription-based models, branded podcast production, and niche audience development."
    }
  ]
}; 