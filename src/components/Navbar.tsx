import { Link } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f14]/95 backdrop-blur border-b border-white/10">

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 group"
          >
            <Cloud className="w-4.5 h-4.5 text-[#FF9900]/90" />

            <span className="text-sm font-medium tracking-tight">
              AWS <span className="text-[#FF9900]">Cloud Club MUJ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 text-xs">

            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>

            <a
              href="#events"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Events
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded border border-transparent hover:border-white/10 text-gray-400 hover:text-white transition"
          >
            {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-white/10 bg-[#0b0f14]"
          >
            <div className="px-4 py-3 flex flex-col gap-3 text-sm">

              <Link
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  handleHomeClick();
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>

              <a
                href="#events"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Events
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
