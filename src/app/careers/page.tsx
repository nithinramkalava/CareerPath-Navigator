import CareerCategories from "../components/CareerCategories";

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Explore Career Paths
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover a wide range of career opportunities and find the path that matches your interests and strengths.
          </p>
        </div>
      </div>
      <CareerCategories />
    </div>
  );
} 