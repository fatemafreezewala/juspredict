import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#0B0B0D]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#00FF73]" />
            <span className="text-xl font-bold tracking-tight glow-text" style={{ color: '#00FF73' }}>
              JusPredict
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-gray-300 hover:text-[#00FF73] transition-colors">
              Home
            </a>
            <a href="#sports" className="text-sm text-gray-300 hover:text-[#00FF73] transition-colors">
              Sports
            </a>
            <a href="#events" className="text-sm text-gray-300 hover:text-[#00FF73] transition-colors">
              Events
            </a>
            <a href="#leaderboard" className="text-sm text-gray-300 hover:text-[#00FF73] transition-colors">
              Leaderboard
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-[#00FF73] transition-colors">
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-white/5"
            >
              Login
            </Button>
            <Button
              className="bg-[#00FF73] text-[#0B0B0D] hover:bg-[#00FF73]/90 hover:shadow-lg hover:shadow-[#00FF73]/30 transition-all"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
