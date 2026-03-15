import { useEffect, useRef } from 'react';
import { Dumbbell, Users, Calendar, Heart, Target, TrendingUp } from 'lucide-react';

const Programs = () => {
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

  const programs = [
    {
      icon: Dumbbell,
      name: 'Strength Training',
      description: 'Build muscle and power',
    },
    {
      icon: Heart,
      name: 'Weight Loss',
      description: 'Sustainable fat loss',
    },
    {
      icon: Target,
      name: 'Athletic Performance',
      description: 'Sport-specific training',
    },
    {
      icon: TrendingUp,
      name: 'Beginner Friendly',
      description: 'Start from anywhere',
    },
  ];

  return (
    <section
      id="programs"
      style={{ backgroundColor: '#5BB6FF' }}
      className="section text-white py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in text-white text-3xl font-bold mb-4">Training Programs</h2>
          <p className="fade-in text-white text-lg">
            Customized online training programs designed to fit your goals, schedule, and lifestyle. All programs include personalized coaching and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="fade-in bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-white font-bold text-xl mb-2">{program.name}</h3>
                <p className="text-white/80">{program.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-white">
              Train on your schedule with workouts that fit your busy life. Morning, afternoon, or evening - you choose.
            </p>
          </div>

          <div className="fade-in flex flex-col items-center text-center" style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Weekly Check-Ins</h3>
            <p className="text-white">
              Regular progress reviews and plan adjustments to keep you on track and motivated throughout your journey.
            </p>
          </div>

          <div className="fade-in flex flex-col items-center text-center" style={{ transitionDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Equipment Options</h3>
            <p className="text-white">
              Programs designed for gym, home, or minimal equipment. Get results wherever you prefer to train.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
