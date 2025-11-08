import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Calendar, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    match: 'India vs Australia',
    sport: 'Cricket',
    date: '2025-11-10',
    time: '14:30',
    venue: 'Melbourne Cricket Ground',
    status: 'upcoming',
  },
  {
    id: 2,
    match: 'Real Madrid vs Barcelona',
    sport: 'Football',
    date: '2025-11-09',
    time: '20:00',
    venue: 'Santiago Bernabéu',
    status: 'live',
  },
  {
    id: 3,
    match: 'Lakers vs Warriors',
    sport: 'Basketball',
    date: '2025-11-11',
    time: '19:30',
    venue: 'Staples Center',
    status: 'upcoming',
  },
  {
    id: 4,
    match: 'Djokovic vs Nadal',
    sport: 'Tennis',
    date: '2025-11-12',
    time: '15:00',
    venue: 'Roland Garros',
    status: 'upcoming',
  },
];

function Countdown({ targetDate, targetTime }: { targetDate: string; targetTime: string }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(`${targetDate}T${targetTime}`);
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        
        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${hours}h ${minutes}m`);
        }
      } else {
        setTimeLeft('Started');
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(interval);
  }, [targetDate, targetTime]);

  return (
    <div className="flex items-center gap-1 text-sm text-[#00FF73]">
      <Clock className="w-4 h-4" />
      <span>{timeLeft}</span>
    </div>
  );
}

export function UpcomingEvents() {
  const [filter, setFilter] = useState<'all' | 'live' | 'upcoming'>('all');

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    return event.status === filter;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0D] to-[#0f0f12]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold mb-2">
              Upcoming <span className="text-[#00FF73]">Events</span>
            </h2>
            <p className="text-gray-400">Don't miss out on these exciting matches</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-[#1a1a1d] p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'all'
                  ? 'bg-[#00FF73] text-[#0B0B0D]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('live')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'live'
                  ? 'bg-[#00FF73] text-[#0B0B0D]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Live
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'upcoming'
                  ? 'bg-[#00FF73] text-[#0B0B0D]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#1a1a1d] rounded-2xl p-6 border border-white/10 hover:border-[#00FF73]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF73]/20 group"
            >
              <div className="flex justify-between items-start mb-4">
                <Badge
                  variant="outline"
                  className="border-[#00FF73]/30 text-[#00FF73] bg-[#00FF73]/10"
                >
                  {event.sport}
                </Badge>
                {event.status === 'live' && (
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-red-500">LIVE</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#00FF73] transition-colors">
                {event.match}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4 text-[#00FF73]" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="text-gray-600">•</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#00FF73]" />
                  <span>{event.venue}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                {event.status === 'upcoming' && (
                  <Countdown targetDate={event.date} targetTime={event.time} />
                )}
                {event.status === 'live' && (
                  <span className="text-sm text-[#00FF73]">In Progress</span>
                )}
                <Button
                  size="sm"
                  className="bg-[#00FF73] text-[#0B0B0D] hover:bg-[#00FF73]/90 ml-auto"
                >
                  Predict
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
