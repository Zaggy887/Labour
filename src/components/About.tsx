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
            <span className="text-[#5BB6FF] font-bold">WorkForce</span>
            <span className="text-[#5BB6FF]">Connect</span>
          </h2>
          <p className="fade-in text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Founded in 2025, we specialize in connecting reliable workers with businesses across Melbourne. From warehousing to hospitality, construction to events, we match dedicated individuals with companies looking to build strong, dependable teams. Proudly based in Melbourne's south-east, our services extend to all businesses seeking quality workers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in card p-8 flex flex-col items-center text-center">
            <Building className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Industry Partnerships</h3>
            <p className="text-gray-600">
              We work closely with businesses across multiple sectors to understand their workforce needs and connect them with reliable, hard-working individuals.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.2s' }}>
            <Users className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Worker Support</h3>
            <p className="text-gray-600">
              We connect motivated workers from warehousing, retail, hospitality, construction, agriculture, events, cleaning, and logistics sectors with quality employers.
            </p>
          </div>

          <div className="fade-in card p-8 flex flex-col items-center text-center" style={{ transitionDelay: '0.4s' }}>
            <Award className="w-16 h-16 text-[#5BB6FF] mb-4" />
            <h3 className="text-xl font-bold mb-4">Quality Matching</h3>
            <p className="text-gray-600">
              Our thorough screening process ensures we match dedicated workers with businesses, creating successful long-term employment relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
