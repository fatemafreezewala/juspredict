import { Trophy, Circle, Target, Gamepad2, Swords } from 'lucide-react';
import { Button } from './ui/button';

const sports = [
  {
    id: 1,
    name: 'Cricket',
    icon: Trophy,
    activeMatches: 24,
    gradient: 'from-[#00FF73]/20 to-transparent',
  },
  {
    id: 2,
    name: 'Football',
    icon: Circle,
    activeMatches: 18,
    gradient: 'from-[#00FF73]/20 to-transparent',
  },
  {
    id: 3,
    name: 'Tennis',
    icon: Target,
    activeMatches: 12,
    gradient: 'from-[#00FF73]/20 to-transparent',
  },
  {
    id: 4,
    name: 'Basketball',
    icon: Gamepad2,
    activeMatches: 15,
    gradient: 'from-[#00FF73]/20 to-transparent',
  },
  {
    id: 5,
    name: 'Esports',
    icon: Swords,
    activeMatches: 32,
    gradient: 'from-[#00FF73]/20 to-transparent',
  },
];

export function TrendingSports() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Trending <span className="text-[#00FF73]">Sports</span>
          </h2>
          <p className="text-gray-400">Choose your sport and start predicting</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sports.map((sport) => {
            const Icon = sport.icon;
            return (
              <div
                key={sport.id}
                className="group relative bg-[#1a1a1d] rounded-2xl p-6 border border-white/10 hover:border-[#00FF73]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF73]/20 cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sport.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00FF73]/10 flex items-center justify-center group-hover:bg-[#00FF73]/20 transition-all">
                    <Icon className="w-8 h-8 text-[#00FF73]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white">{sport.name}</h3>
                  
                  <div className="text-sm text-gray-400">
                    <span className="text-[#00FF73] font-semibold">{sport.activeMatches}</span> Active Matches
                  </div>

                  <Button
                    size="sm"
                    className="bg-[#00FF73]/10 text-[#00FF73] hover:bg-[#00FF73] hover:text-[#0B0B0D] border border-[#00FF73]/30 transition-all mt-2"
                  >
                    Predict Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
