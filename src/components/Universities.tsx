import { useEffect, useRef } from 'react';
import { Warehouse, ShoppingCart, Utensils, HardHat, Wheat, CalendarDays, Sparkles, Truck as TruckIcon } from 'lucide-react';

const Industries = () => {
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

  const industries = [
    {
      icon: Warehouse,
      name: 'Warehousing',
      color: '#4A90E2',
    },
    {
      icon: ShoppingCart,
      name: 'Retail',
      color: '#E94B3C',
    },
    {
      icon: Utensils,
      name: 'Hospitality',
      color: '#F5A623',
    },
    {
      icon: HardHat,
      name: 'Construction',
      color: '#7B68EE',
    },
    {
      icon: Wheat,
      name: 'Agriculture',
      color: '#50C878',
    },
    {
      icon: CalendarDays,
      name: 'Events',
      color: '#FF6B9D',
    },
    {
      icon: Sparkles,
      name: 'Cleaning',
      color: '#00CED1',
    },
    {
      icon: TruckIcon,
      name: 'Logistics',
      color: '#FF8C00',
    },
  ];

  return (
    <section
      id="industries"
      style={{ backgroundColor: '#5BB6FF' }}
      className="section text-white py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in text-white text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="fade-in text-white text-lg">
            We connect reliable workers with businesses across a wide range of industries throughout Melbourne.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 mx-auto mb-3 text-white" />
                <h3 className="text-white font-semibold text-lg">{industry.name}</h3>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Warehouse className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Wide Network</h3>
            <p className="text-white">
              We maintain connections with workers across all major industries, ready to meet your staffing needs.
            </p>
          </div>

          <div className="fade-in flex flex-col items-center text-center" style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <HardHat className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Experienced Workers</h3>
            <p className="text-white">
              We connect you with motivated individuals who have the skills and work ethic to contribute from day one.
            </p>
          </div>

          <div className="fade-in flex flex-col items-center text-center" style={{ transitionDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <TruckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Quick Placement</h3>
            <p className="text-white">
              Our efficient process means you can have workers ready to start within days, not weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
