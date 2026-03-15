import React, { useEffect, useRef } from 'react';
import { CheckSquare } from 'lucide-react';

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
    </div>
  );
};

export default Pricing;