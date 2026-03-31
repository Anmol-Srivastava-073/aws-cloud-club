import { motion } from 'motion/react';
import { Cloud, ArrowRight, Code, Users, Zap } from 'lucide-react';
import EventCard from '../components/EventCard';
import { EVENTS } from '../constants';
import CloudVisual from '../components/CloudVisual';

export default function LandingPage() {

  const sortedEvents = [...EVENTS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="pt-20 bg-[#0b0f14]">

      {/* HERO */}
      <section className="aws-section border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161b22] border border-white/10 text-xs text-gray-400 mb-6">
            <Cloud className="w-3.5 h-3.5 text-aws-orange/90" />
            AWS Cloud Club MUJ
          </div>

          <h1 className="text-3xl md:text-5xl font-medium mb-5 tracking-tight leading-tight">
            Build on <span className="text-aws-orange">AWS Cloud</span> with <span className="text-aws-orange">MUJ</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            A student-led community at <span className="text-aws-orange">Manipal University Jaipur</span> focused on learning, building, and growing with cloud technologies. We bring together curious minds to explore AWS, work on real-world projects, and develop skills that prepare us for the future.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
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
      <section id="about" className="aws-section border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-5 tracking-tight">
              About <span className="text-aws-orange">AWS Cloud Club MUJ</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              AWS Cloud Club MUJ is a student-led community where we explore cloud computing through hands-on learning and real-world building. Our goal is to create an environment where students don’t just learn concepts, but actually apply them.
            </p>

            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
              Through workshops, speaker sessions, and collaborative projects, members gain exposure to AWS technologies, industry practices, and career pathways in cloud computing.
            </p>

            {/* FEATURES */}
            <div className="space-y-5">

              <div className="flex gap-3 items-start">
                <Code className="text-aws-orange w-4 h-4 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Hands-on Learning</h4>
                  <p className="text-xs text-gray-500">Work on real-world cloud projects</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Users className="text-aws-orange w-4 h-4 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Community</h4>
                  <p className="text-xs text-gray-500">Collaborate and grow together</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Zap className="text-aws-orange w-4 h-4 mt-1" />
                <div>
                  <h4 className="font-medium text-sm">Career Growth</h4>
                  <p className="text-xs text-gray-500">Guidance for AWS and industry roles</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            {/* 🔥 CLOUD VISUAL */}
            <CloudVisual />

            {/* 🔥 REAL IMAGES */}
            <div className="grid grid-cols-2 gap-4">

              <img
                src="/images/about1.jpeg"
                alt="AWS Cloud Club Team"
                className="rounded-md border border-white/10 object-cover h-40 w-full hover:scale-[1.02] transition"
              />

              <img
                src="/images/about2.jpeg"
                alt="AWS Cloud Club Community"
                className="rounded-md border border-white/10 object-cover h-40 w-full mt-4 hover:scale-[1.02] transition"
              />

            </div>

          </div>

        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="aws-section">
        <div className="max-w-6xl mx-auto px-4">

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-medium mb-2 tracking-tight">
              Events
            </h2>

            <p className="text-gray-400 text-sm">
              Upcoming and past sessions from the club.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
