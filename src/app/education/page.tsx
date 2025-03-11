import EducationalPathways from "../components/EducationalPathways";

export default function EducationPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Educational Pathways
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">
            Understand the educational journey required for different career paths and make informed decisions about your academic future.
          </p>
        </div>
      </div>
      <EducationalPathways />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-50 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12 sm:p-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Planning Your Educational Journey
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Choosing the right educational path is crucial for your career success. Here are some tips to help you plan:
            </p>
            <ul className="mt-6 space-y-4 text-lg text-gray-500">
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Explore different careers before finalizing your educational path.</span>
              </li>
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Research the best institutions for your field of interest.</span>
              </li>
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Consider the cost, duration, and future prospects of each educational pathway.</span>
              </li>
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Look for scholarships, grants, and financial aid opportunities.</span>
              </li>
              <li className="flex">
                <svg className="h-6 w-6 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Develop a timeline for your educational journey with clear milestones.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 