import { Target, TrendingUp, Users, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Target,
    title: 'Predict',
    description: 'Choose your favorite sport and make predictions on match outcomes.',
    color: '#00FF73',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Trading',
    description: 'Trade your predictions with other users in real-time markets.',
    color: '#00FF73',
  },
  {
    id: 3,
    icon: Users,
    title: 'Clan',
    description: 'Join or create clans to compete together and share strategies.',
    color: '#00FF73',
  },
  {
    id: 4,
    icon: Award,
    title: 'Rewards',
    description: 'Earn points and rewards based on your prediction accuracy.',
    color: '#00FF73',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0D] relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF73]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF73]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It <span className="text-[#00FF73]">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start your prediction journey in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-[#00FF73]/30 to-transparent"></div>
                )}

                <div className="bg-[#1a1a1d] rounded-2xl p-8 border border-white/10 hover:border-[#00FF73]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF73]/20 group text-center h-full relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00FF73] text-[#0B0B0D] rounded-full flex items-center justify-center font-bold">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#00FF73]/10 flex items-center justify-center group-hover:bg-[#00FF73]/20 transition-all">
                    <Icon className="w-8 h-8 text-[#00FF73]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00FF73] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
