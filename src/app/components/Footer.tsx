import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/career-path-navigator" className="text-base text-gray-500 hover:text-gray-900">
              Career Path Navigator
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/educational-pathways" className="text-base text-gray-500 hover:text-gray-900">
              Educational Pathways
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/career-assessment" className="text-base text-gray-500 hover:text-gray-900">
              Career Assessment
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/career-categories" className="text-base text-gray-500 hover:text-gray-900">
              Career Categories
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
              About
            </Link>
          </div>
        </nav>
        <div className="mt-8 text-center">
          <p className="text-base text-gray-400">
            {/* &copy; {new Date().getFullYear()} CareerPath Navigator. All rights reserved. */}
          </p>
          <p className="mt-2 text-sm text-gray-400">
            A Community Service Project developed in partial fulfillment of the requirements for the 
            Bachelor of Technology in Computer Science degree at Vasireddy Venkatadri Institute of Technology,
            Nambur, Peda Kakani, Guntur District, Andhra Pradesh - 522508
          </p>
        </div>
      </div>
    </footer>
  );
}