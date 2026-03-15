import { useEffect, useRef } from 'react';
import { Building, Users, Award } from 'lucide-react';

const About = () => {
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
    <section id="about" className="section bg-blue-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6">
            <span className="text-[#5BB6FF] font-bold">Meet Coach Yitzcy</span>
          </h2>
          <p className="fade-in text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Your dedicated online personal trainer helping young adults in the Jewish community achieve their fitness goals. Build strength, confidence, and lifelong healthy habits from anywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in card p-8 flex flex-col items-center text-center">
            <Building className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Personalized Programs</h3>
            <p className="text-gray-600">
              Custom workout and nutrition plans tailored to your goals, schedule, and lifestyle. Train on your terms with expert guidance every step of the way.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.2s' }}>
            <Users className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Community Support</h3>
            <p className="text-gray-600">
              Join a supportive community of young adults working toward similar goals. Accountability, motivation, and encouragement from people who understand your journey.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.4s' }}>
            <Award className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Proven Results</h3>
            <p className="text-gray-600">
              Evidence-based training methods combined with consistent support to help you build the body and confidence you've always wanted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
