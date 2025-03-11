export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            About CareerPath Navigator
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">
            Empowering Students through Career Exploration
          </p>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="prose prose-indigo prose-lg">
            <h2>Our Mission</h2>
            <p>
              In many rural areas, students often face a significant challenge: they are unaware of the wide range of career opportunities available to them. This lack of awareness can lead to limited aspirations and missed opportunities, affecting their future potential.
            </p>
            <p>
              The &quot;CareerPath Navigator&quot; project addresses this critical issue by providing a digital platform that empowers students to explore various career paths and understand the educational requirements necessary to pursue them. This project aims to offer students the tools and information needed to make informed decisions about their future.
            </p>
            
            <h2>The Challenges We Address</h2>
            <ul>
              <li>
                <strong>Limited Career Awareness:</strong> Students in rural areas often grow up in environments where only a few career options are visible, usually those related to local industries or traditional roles. This narrow exposure limits their dreams and ambitions.
              </li>
              <li>
                <strong>Educational and Skill Barriers:</strong> Even when students aspire, they often lack clear guidance on the necessary education, skills, and training for different careers.
              </li>
              <li>
                <strong>Technology as a Double-Edged Sword:</strong> While most students now have smartphones, the use of this technology is often confined to entertainment rather than education. We aim to transform this prevalent technology into a tool for career exploration.
              </li>
              <li>
                <strong>Engagement and Accessibility:</strong> Ensuring that the platform is engaging and user-friendly is critical to its success, especially for students with varying levels of digital literacy.
              </li>
            </ul>
            
            <h2>Our Solution</h2>
            <p>
              CareerPath Navigator offers a comprehensive solution to these challenges through:
            </p>
            <ul>
              <li>
                <strong>Comprehensive Career Exploration:</strong> We categorize careers into fields such as Technology, Arts, Law, Banking & Finance, Medicine, Political Sciences, Civil Services, and Transportation, providing detailed insights into each.
              </li>
              <li>
                <strong>Educational Pathway Visualization:</strong> Our platform includes visual tools that map out the educational journey required for each career, from high school to professional roles.
              </li>
              <li>
                <strong>Inspiration Through Expert Insights:</strong> To motivate students, we feature testimonials and interviews with professionals across various fields, showing what is possible and offering practical advice.
              </li>
            </ul>
            
            <h2>Our Impact</h2>
            <p>
              By providing a user-friendly, accessible platform, CareerPath Navigator seeks to empower students to make informed decisions about their future, ultimately supporting their professional development and success. We believe that with the right information and guidance, every student can achieve their full potential.
            </p>
            
            <h2>Contact</h2>
            <p>
              For more information about CareerPath Navigator, please contact us at <a href="mailto:contact@careerpathnavigator.org" className="text-indigo-600 hover:underline">contact@careerpathnavigator.org</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 