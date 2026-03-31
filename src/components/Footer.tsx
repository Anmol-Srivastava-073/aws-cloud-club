import { Cloud, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f14] pt-16 pb-8">

      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Logo + About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-[#FF9900]" />
              <span className="font-medium">
                AWS <span className="text-[#FF9900]">Cloud Club MUJ</span>
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empowering students to learn, build, and grow with AWS cloud technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Quick Links</h4>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="/" className="hover:text-[#FF9900] transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-[#FF9900] transition-colors">
                About
              </a>
              <a href="#events" className="hover:text-[#FF9900] transition-colors">
                Events
              </a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Connect</h4>

            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/awscloudclub_muj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#161b22] border border-white/10 hover:border-[#FF9900] transition"
              >
                <Instagram className="w-4 h-4 text-gray-300" />
              </a>

              <a
                href="https://www.linkedin.com/company/aws-cloud-club-muj/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#161b22] border border-white/10 hover:border-[#FF9900] transition"
              >
                <Linkedin className="w-4 h-4 text-gray-300" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 AWS Cloud Club MUJ</p>
          <p className="mt-2 md:mt-0">Built with ♥️ by AWS Cloud Club Team - MUJ</p>
        </div>

      </div>
    </footer>
  );
}
