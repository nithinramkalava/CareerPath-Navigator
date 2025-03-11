import CareerPathNavigator from "../../components/CareerPathNavigator";

export default function CareerNavigatorPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Career Path Navigator
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore and match your skills with various career paths to find the perfect fit for your professional journey.
          </p>
        </div>
      </div>
      <CareerPathNavigator />
    </div>
  );
} 