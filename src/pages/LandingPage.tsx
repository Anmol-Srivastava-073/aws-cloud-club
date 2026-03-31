import { motion } from 'motion/react';
import { Cloud, ArrowRight, Code, Users, Zap } from 'lucide-react';
import EventCard from '../components/EventCard';
import { EVENTS } from '../constants';

export default function LandingPage() {

  // Sort events (latest first)
  const sortedEvents = [...EVENTS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="pt-20 bg-[#0b0f14]">

      {/* HERO */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161b22] border border-white/10 text-sm text-gray-300 mb-6">
            <Cloud className="w-4 h-4 text-aws-orange" />
            AWS Cloud Club MUJ
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Build on <span className="text-aws-orange">AWS Cloud</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            A student community focused on learning, building, and growing with cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#events" className="aws-button-primary flex items-center gap-2 justify-center">
              Explore Events <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#about" className="aws-button-secondary">
              Learn More
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              What is <span className="text-aws-orange">AWS Cloud Club?</span>
            </h2>

            <p className="text-gray-400 mb-8">
              AWS Cloud Clubs are student-led communities focused on learning cloud technologies through hands-on experience.
            </p>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Code className="text-aws-orange w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-medium">Hands-on Learning</h4>
                  <p className="text-sm text-gray-500">Build real-world projects</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-aws-orange w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-medium">Community</h4>
                  <p className="text-sm text-gray-500">Collaborate with peers</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="text-aws-orange w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-medium">Certification</h4>
                  <p className="text-sm text-gray-500">Guidance for AWS certifications</p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <img
              src="/images/cloud computing photo landing page.jpg"
              className="rounded-lg border border-white/10"
            />
          </div>

        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Events
            </h2>
            <p className="text-gray-400 text-sm">
              Upcoming and past sessions from the club.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
