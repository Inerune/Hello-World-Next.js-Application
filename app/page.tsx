import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Hello World App</h1>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">Home</Button>
            <Button variant="outline" size="sm">About</Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Hello World!</h2>
          <p className="text-xl text-gray-600 mb-8">Welcome to your first Next.js application. This is a simple yet fully structured page to get you started.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t px-4 py-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          &copy; 2025 Hello World App. Built with Next.js.
        </div>
      </footer>
    </div>
  );
}
