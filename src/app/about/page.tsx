import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | CareerPath Navigator',
  description: 'Learn about the mission and vision behind CareerPath Navigator',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/50 via-white to-white">
      {/* Hero Section with background pattern */}
      <div className="bg-gradient-to-b from-indigo-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
              About CareerPath Navigator
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Empowering Students through Career Exploration
            </p>
          </div>
        </div>
      </div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Mission Section - Text left, image right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-28">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
              <span className="inline-block relative">
                Our Mission
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
              </span>
            </h2>
            <div className="prose prose-indigo prose-lg max-w-none">
              <p>
                In many rural areas, students often face a significant challenge: they are unaware of the wide range of career opportunities available to them. This lack of awareness can lead to limited aspirations and missed opportunities, affecting their future potential.
              </p>
              <p>
                The &quot;CareerPath Navigator&quot; project addresses this critical issue by providing a digital platform that empowers students to explore various career paths and understand the educational requirements necessary to pursue them. This project aims to offer students the tools and information needed to make informed decisions about their future.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="rounded-xl overflow-hidden shadow-xl max-w-md mx-auto relative group">
              <Image
                src="/images/1.jpg"
                alt="Students exploring career options - Nithin Ram"
                width={800}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white text-sm font-medium">Nithin Ram</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What Sparked This Project Section - Text only */}
        <div className="mb-28">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left column - Heading */}
            <div className="md:col-span-2 flex items-center">
              <h2 className="text-3xl font-bold text-gray-900 relative">
                <span className="inline-block relative">
                  What Sparked This Project
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
                </span>
              </h2>
            </div>
            
            {/* Right column - Content */}
            <div className="md:col-span-3">
              <div className="prose prose-indigo prose-lg max-w-none">
                <p>
                  The idea for CareerPath Navigator was born during a visit to a rural high school, where we witnessed talented students limiting their ambitions due to a lack of exposure to diverse career options. The school's career counselor shared a striking observation: students were primarily interested in careers they had seen in their community or on television, revealing a significant gap in career awareness.
                </p>
                <p>
                  A particularly memorable moment was when a gifted student in mathematics had never considered careers in data science or actuarial studies simply because she had never heard of them. This revelation highlighted the urgent need for a resource that could bridge this knowledge gap and expand students' horizons beyond their immediate surroundings.
                </p>
              </div>
              <div className="mt-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">G. Koteshwar Rao, an auto driver and father of two</p>
                    <p className="text-gray-600">Despite his dedication to his children's education, he struggles to guide them through career options due to his limited educational background.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Timeline Section */}
        <div className="mb-28 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent rounded-2xl -z-10"></div>
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
              <span className="inline-block relative">
                Project Timeline
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
              </span>
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                    <th scope="col" className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity Done</th>
                    <th scope="col" className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learning Outcome</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Conducted an initial survey in the village to identify the major challenges faced by the community.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Gained insights into various socioeconomic challenges affecting rural communities and developed skills in conducting community needs assessments.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Observed significant sanitation issues, including improper waste disposal and lack of drainage systems.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Understood how infrastructure limitations impact daily life and community development priorities.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Noted the poor condition of the roads, causing difficulties for residents traveling to nearby cities.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Recognized how transportation barriers affect access to educational and career opportunities in rural areas.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Identified the lack of access to clean drinking water, leading to potential health risks.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Learned about the hierarchy of community needs and how basic necessities take precedence over educational concerns.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Recognized the absence of nearby healthcare facilities, making it hard for residents to access medical services.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Understood the interconnected nature of community challenges and how they collectively impact quality of life and opportunities.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Discovered limited educational resources, with the local school only offering classes up to 10th grade.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Identified key educational infrastructure gaps that limit career advancement opportunities for rural students.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Observed a general lack of digital literacy, with most residents using smartphones primarily for entertainment.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Recognized the opportunity to leverage existing technology for educational purposes despite limited digital literacy.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Realized that students in the village were unaware of various career opportunities and the educational paths required.</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Identified the critical knowledge gap regarding career options and educational pathways as a key focus area for the project.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Challenges & Solutions Section */}
        <div className="flex flex-col mb-28">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center relative">
            <span className="inline-block relative">
              Challenges & Solutions
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Challenges */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-600">
                      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  The Challenges We Address
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Limited Career Awareness</p>
                      <p className="text-gray-600">Students in rural areas often grow up in environments where only a few career options are visible, usually those related to local industries or traditional roles.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Educational and Skill Barriers</p>
                      <p className="text-gray-600">Even when students aspire, they often lack clear guidance on the necessary education, skills, and training for different careers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Technology as a Double-Edged Sword</p>
                      <p className="text-gray-600">While most students now have smartphones, the use of this technology is often confined to entertainment rather than education.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Side - Solutions */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Our Solution
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Comprehensive Career Exploration</p>
                      <p className="text-gray-600">We categorize careers into fields such as Technology, Arts, Law, Banking & Finance, Medicine, Political Sciences, Civil Services, and Transportation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Educational Pathway Visualization</p>
                      <p className="text-gray-600">Our platform includes visual tools that map out the educational journey required for each career, from high school to professional roles.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Inspiration Through Expert Insights</p>
                      <p className="text-gray-600">To motivate students, we feature testimonials and interviews with professionals across various fields, showing what is possible.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact Section */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-md border border-indigo-100 p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center relative">
            <span className="inline-block relative">
              Our Impact
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            By providing a user-friendly, accessible platform, CareerPath Navigator seeks to empower students to make informed decisions about their future, ultimately supporting their professional development and success. We believe that with the right information and guidance, every student can achieve their full potential.
          </p>
        </div>

        {/* Team section - only showing Nithin Ram */}
        <div className="max-w-4xl mx-auto border-t border-gray-100 pt-10 mb-12">
          <p className="text-sm text-gray-500 text-center mb-6">Developed by:</p>
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-indigo-100">
                <Image
                  src="/images/me.jpg"
                  alt="Nithin Ram"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 48px"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Nithin Ram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 