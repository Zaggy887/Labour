import React, { useEffect, useRef } from 'react';
import {
  ClipboardCheck,
  Phone,
  Users,
  CheckSquare,
  Gift,
  ArrowRight,
  Share2,
  MessageCircle,
  Calendar,
  Briefcase,
  UserPlus,
  Zap,
  Target,
} from 'lucide-react';
import ReferralForm from './ReferralForm';

// Custom filled Facebook icon component
const FacebookFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#3399FF"
    stroke="none"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#f9fcff] via-white to-sky-50">
      <section id="pricing" className="section relative text-gray-800 pt-20 pb-0" ref={sectionRef}>
        <div className="absolute top-0 left-0 w-full h-[500px] z-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Header background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="fade-in text-sky-500 text-4xl font-bold mb-4">
              Invest in Your Health & Fitness
            </h2>
            <p className="fade-in text-sky-500/90 text-lg">
              Affordable online personal training with flexible payment options. Get professional coaching and support that fits your budget and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in bg-white/80 backdrop-blur-sm border border-sky-100 rounded-2xl p-10 shadow-lg transition hover:shadow-xl duration-300">
              <h3 className="text-2xl font-bold text-sky-500 mb-4">Monthly Coaching</h3>
              <div className="mb-6 text-center">
                <p className="text-5xl font-extrabold text-sky-500">$150</p>
                <p className="text-sky-500/90 text-md">per month</p>
              </div>
              <ul className="space-y-4 text-sky-500/90">
                {[
                  'Personalized workout program',
                  'Custom nutrition guidance',
                  'Weekly check-ins and adjustments',
                  '24/7 messaging support',
                  'Access to exercise video library',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-base leading-relaxed">
                    <CheckSquare className="w-5 h-5 text-sky-400 flex-shrink-0 mr-3 mt-[2px]" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-center">
                <a
                  href="#contact"
                  className="bg-sky-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-sky-500 transition shadow-md hover:shadow-lg"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="fade-in bg-gradient-to-br from-sky-400 to-sky-500 border border-sky-300 rounded-2xl p-10 shadow-lg transition hover:shadow-xl duration-300 text-white">
              <div className="text-center mb-4">
                <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">BEST VALUE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">3-Month Program</h3>
              <div className="mb-6 text-center">
                <p className="text-5xl font-extrabold">$400</p>
                <p className="text-white/90 text-md">one-time payment</p>
                <p className="text-white/80 text-sm mt-2">Save $50!</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Everything in Monthly Coaching',
                  'Detailed progress tracking',
                  'Bi-weekly video calls',
                  'Supplement recommendations',
                  'Priority support access',
                  'Meal plan templates',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-base leading-relaxed">
                    <CheckSquare className="w-5 h-5 text-white flex-shrink-0 mr-3 mt-[2px]" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-center">
                <a
                  href="#contact"
                  className="bg-white text-sky-500 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg"
                >
                  Start Your Transformation
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              All programs include a free initial consultation. Flexible payment plans available.
            </p>
          </div>
        </div>
      </section>

      <section className="section relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
            alt="Community background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="md:flex items-center justify-between space-y-8 md:space-y-0">
              <div className="md:w-7/12 space-y-6">
                <div className="flex items-center space-x-3">
                  <FacebookFilled />
                  <div className="bg-sky-50 rounded-full px-4 py-1">
                    <span className="text-sky-500 text-sm">Melbourne Worker Network</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  Join Our <span className="text-sky-400">Fitness Community</span>
                </h2>

                <p className="text-gray-600 text-lg">
                  Connect with other young adults on their fitness journey. Share progress, get motivation, and celebrate wins together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-4 transition-all duration-300 hover:bg-gray-200">
                    <Target className="w-6 h-6 text-sky-400" />
                    <span className="text-gray-700">Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-4 transition-all duration-300 hover:bg-gray-200">
                    <UserPlus className="w-6 h-6 text-sky-400" />
                    <span className="text-gray-700">Networking & Events</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-4 transition-all duration-300 hover:bg-gray-200">
                    <MessageCircle className="w-6 h-6 text-sky-400" />
                    <span className="text-gray-700">Active Discussions</span>
                  </div>
                </div>
              </div>

              <div className="md:w-4/12 flex flex-col items-center md:items-end space-y-4">
                <a
                  href="https://www.facebook.com/share/g/1Jfa3s7CHz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Join Our Community</span>
                </a>
                <p className="text-gray-500 text-sm text-center md:text-right">
                  Be part of a supportive community dedicated to health, fitness, and personal growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;