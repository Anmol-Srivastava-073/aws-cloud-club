import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types/index';
import { motion } from 'motion/react';

export default function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="aws-card group"
    >
      <div className="p-8">
        <div className="flex items-center space-x-2 text-aws-orange mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">{event.date}</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-aws-orange transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-400 mb-6 line-clamp-2">
          {event.shortDescription}
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{event.venue}</span>
          </div>
        </div>
        
        <Link
          to={`/event?id=${event.id}`}
          className="flex items-center space-x-2 text-aws-orange font-semibold group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
