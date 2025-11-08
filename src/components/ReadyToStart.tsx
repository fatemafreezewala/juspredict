import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function ReadyToStart() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D] relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF73]/10 via-[#0B0B0D] to-[#00FF73]/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF73]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF73]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#00FF73]/10 flex items-center justify-center border-2 border-[#00FF73]/30">
              <Sparkles className="w-10 h-10 text-[#00FF73]" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start <span className="text-[#00FF73] glow-text">predicting?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Join JusPredict today and earn rewards with every prediction! Be part of a global community of sports enthusiasts.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-[#00FF73] text-[#0B0B0D] hover:bg-[#00FF73]/90 hover:shadow-2xl hover:shadow-[#00FF73]/40 transition-all px-12 py-7 text-lg group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00FF73] mb-2">10K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00FF73] mb-2">50K+</div>
              <div className="text-sm text-gray-400">Predictions Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00FF73] mb-2">$1M+</div>
              <div className="text-sm text-gray-400">Rewards Distributed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
