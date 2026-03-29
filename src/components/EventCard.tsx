import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types/index';
import { motion } from 'motion/react';

export default function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,153,0,0.25)] transition-all duration-300"
    >
      <div className="p-8">

        {/* Date */}
        <div className="flex items-center space-x-2 text-aws-orange mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">{event.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-aws-orange transition-colors">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 line-clamp-2">
          {event.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex flex-col gap-2 text-sm text-gray-500 mb-8">

          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{event.venue}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>

        </div>

        {/* Button */}
        <Link
          to={`/event/${event.id}`} // ✅ FIXED ROUTE
          className="flex items-center space-x-2 text-aws-orange font-semibold group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

      </div>
    </motion.div>
  );
}
