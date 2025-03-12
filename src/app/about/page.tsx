import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | CareerPath Navigator',
  description: 'Learn about the mission and vision behind CareerPath Navigator',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with background pattern */}
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
              About CareerPath Navigator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 sm:mt-5">
              Empowering Students through Career Exploration
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Mission Section - Text left, images right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-24">
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
          <div className="lg:w-1/2 lg:pl-8 w-full mt-8 lg:mt-0">
            <div className="rounded-xl overflow-hidden shadow-lg max-w-md mx-auto">
              <Image
                src="/images/1.jpg"
                alt="Students exploring career options"
                width={800}
                height={500}
                className="w-full h-auto object-cover" 
                priority
              />
            </div>
          </div>
        </div>
        
        {/* What Sparked This Project Section - Images left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-24">
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
              <span className="inline-block relative">
                What Sparked This Project
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
              </span>
            </h2>
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
          <div className="lg:w-1/2 lg:pr-8 w-full mt-8 lg:mt-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/2.jpg"
                alt="Rural school classroom"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Project Timeline Section */}
        <div className="mb-24 relative">
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
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day, Date</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brief Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day-1, 01-07-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Conducted an initial survey in the village to identify the major challenges faced by the community.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day-2, 02-07-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Observed significant sanitation issues, including improper waste disposal and lack of drainage systems.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day-3, 05-07-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Noted the poor condition of the roads, causing difficulties for residents traveling to nearby cities.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day-4, 06-07-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Identified the lack of access to clean drinking water, leading to potential health risks.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day-5, 08-07-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Recognized the absence of nearby healthcare facilities, making it hard for residents to access medical services.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day-6, 09-07-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Discovered limited educational resources, with the local school only offering classes up to 10th grade.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Day-7, 11-07-2024</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Observed a general lack of digital literacy, with most residents using smartphones primarily for entertainment.</td>
                  </tr>
                  <tr className="bg-indigo-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-900">Day-8, 12-07-2024</td>
                    <td className="px-6 py-4 text-sm text-indigo-700 font-medium">Realized that students in the village were unaware of various career opportunities and the educational paths required.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Challenges & Solutions Section */}
        <div className="flex flex-col mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center relative">
            <span className="inline-block relative">
              Challenges & Solutions
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Image and Challenges */}
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/3.jpg"
                  alt="Student using technology for education"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenges We Address</h3>
                <ul className="space-y-4">
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
            
            {/* Right Side - Solutions and Image */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <ul className="space-y-4">
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
              
              <div className="rounded-xl overflow-hidden shadow-lg max-w-md mx-auto">
                <Image
                  src="/images/4.jpg"
                  alt="Career mentorship session"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact & Contact Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center relative">
            <span className="inline-block relative">
              Our Impact
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 rounded"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            By providing a user-friendly, accessible platform, CareerPath Navigator seeks to empower students to make informed decisions about their future, ultimately supporting their professional development and success. We believe that with the right information and guidance, every student can achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
} 