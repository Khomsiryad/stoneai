import { Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ui/theme-toggle';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Text to Image', href: '/text-to-image' },
  { name: 'Image to Text', href: '/image-to-text' },
  { name: 'Image to Video', href: '/image-to-video' },
  { name: 'Image Transition', href: '/image-transition' },
  { name: 'Audio Tools', href: '/audio-tools', disabled: true },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-gray-900 dark:text-white" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">StoneAI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    location.pathname === item.href
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                    item.disabled && 'cursor-not-allowed opacity-50'
                  )}
                  onClick={(e) => item.disabled && e.preventDefault()}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}