import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types/index';
import { motion } from 'motion/react';

export default function EventCard({ event, index }: { event: Event; index: number }) {

  const isEventExpired = (eventDate: string) => {
    const today = new Date();
    const eventD = new Date(eventDate);

    today.setHours(0, 0, 0, 0);
    eventD.setHours(0, 0, 0, 0);

    return eventD < today;
  };

  const expired = isEventExpired(event.date);

  return (
    <Link to={`/event/${event.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -3 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="h-full"
      >

        {/* AWS STYLE CARD */}
        <div className={`bg-[#161b22] border border-white/10 rounded-md p-6 flex flex-col h-full min-h-[260px] transition-all duration-200
          ${!expired && 'hover:border-white/20'}
        `}>

          {/* Past Badge */}
          {expired && (
            <span className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-400 mb-3 w-fit">
              Past Event
            </span>
          )}

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm">
            <Calendar className="w-4 h-4 text-[#FF9900]" />
            {event.date}
          </div>

          {/* Title */}
          <h3 className="text-lg font-medium mb-3 text-white">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-5 line-clamp-2">
            {event.shortDescription}
          </p>

          {/* Meta */}
          <div className="flex flex-col gap-2 text-xs text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF9900]" />
              {event.venue}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FF9900]" />
              {event.time}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto flex items-center gap-2 text-[#FF9900] text-sm font-medium">
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>

        </div>

      </motion.div>
    </Link>
  );
}
