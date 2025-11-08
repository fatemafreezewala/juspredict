import { Button } from './ui/button';
import { Trophy, Target, Zap, Circle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1574876705975-05e0bb4cddce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwbGlnaHRzJTIwbmlnaHR8ZW58MXx8fHwxNzYyNTM4NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stadium lights"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-[#0B0B0D]/90 to-[#0B0B0D]"></div>
      </div>

      {/* Animated Icons Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Trophy className="absolute top-20 left-10 w-16 h-16 text-[#00FF73]/20 animate-pulse" />
        <Target className="absolute top-40 right-20 w-12 h-12 text-[#00FF73]/20 animate-pulse" style={{ animationDelay: '1s' }} />
        <Zap className="absolute bottom-40 left-1/4 w-14 h-14 text-[#00FF73]/20 animate-pulse" style={{ animationDelay: '2s' }} />
        <Circle className="absolute bottom-20 right-1/3 w-16 h-16 text-[#00FF73]/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="glow-text" style={{ color: '#00FF73' }}>Your Game.</span>
            <br />
            <span className="text-white">Your Call.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Predict your favorite game outcomes with confidence and earn rewards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-[#00FF73] text-[#0B0B0D] hover:bg-[#00FF73]/90 hover:shadow-xl hover:shadow-[#00FF73]/40 transition-all px-8 py-6 text-lg"
            >
              Start Predicting
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#00FF73] text-[#00FF73] hover:bg-[#00FF73]/10 hover:shadow-lg hover:shadow-[#00FF73]/20 transition-all px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Sport Icons */}
          <div className="flex justify-center items-center gap-8 pt-8 opacity-70">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#00FF73]/10 flex items-center justify-center group-hover:bg-[#00FF73]/20 transition-all">
                <Trophy className="w-6 h-6 text-[#00FF73]" />
              </div>
              <span className="text-xs text-gray-400">Cricket</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#00FF73]/10 flex items-center justify-center group-hover:bg-[#00FF73]/20 transition-all">
                <Circle className="w-6 h-6 text-[#00FF73]" />
              </div>
              <span className="text-xs text-gray-400">Football</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#00FF73]/10 flex items-center justify-center group-hover:bg-[#00FF73]/20 transition-all">
                <Target className="w-6 h-6 text-[#00FF73]" />
              </div>
              <span className="text-xs text-gray-400">Basketball</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
