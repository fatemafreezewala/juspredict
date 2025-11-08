import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrendingSports } from './components/TrendingSports';
import { UpcomingEvents } from './components/UpcomingEvents';
import { HowItWorks } from './components/HowItWorks';
import { WhyChoose } from './components/WhyChoose';
import { ReadyToStart } from './components/ReadyToStart';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      <Header />
      <main>
        <Hero />
        <TrendingSports />
        <UpcomingEvents />
        <HowItWorks />
        <WhyChoose />
        <ReadyToStart />
      </main>
      <Footer />
    </div>
  );
}
