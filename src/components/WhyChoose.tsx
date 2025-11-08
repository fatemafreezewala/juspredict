import { Zap, Globe, Gift, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Real-Time Match Predictions',
    description: 'Get instant updates and make predictions as the action unfolds. Stay ahead with live data and insights.',
  },
  {
    id: 2,
    icon: Globe,
    title: 'Global Community',
    description: 'Join thousands of sports enthusiasts worldwide. Compete, collaborate, and climb the global leaderboards.',
  },
  {
    id: 3,
    icon: Gift,
    title: 'Transparent Rewards',
    description: 'Earn real rewards for accurate predictions. Track your earnings with our transparent reward system.',
  },
  {
    id: 4,
    icon: Shield,
    title: 'Secure & Fair Platform',
    description: 'Built with security and fairness in mind. Your data and rewards are protected with industry-leading encryption.',
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f12] to-[#0B0B0D]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-[#00FF73]">JusPredict</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of sports prediction with our cutting-edge platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-[#1a1a1d] rounded-2xl p-8 border border-white/10 hover:border-[#00FF73]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00FF73]/20"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF73]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-[#00FF73]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#00FF73]" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00FF73] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#00FF73] to-transparent group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
