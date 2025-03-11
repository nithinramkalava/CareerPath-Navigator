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
            <Link href="/careers" className="text-base text-gray-500 hover:text-gray-900">
              Careers
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/education" className="text-base text-gray-500 hover:text-gray-900">
              Education
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/careers/navigator" className="text-base text-gray-500 hover:text-gray-900">
              Career Navigator
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
              About
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          CareerPath Navigator.
        </p>
      </div>
    </footer>
  );
} 