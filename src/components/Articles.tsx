import { useEffect, useRef } from 'react';

const Articles = () => {
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

  const articles = [
  {
    title: 'Sarah Lost 30lbs in 4 Months',
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Working full-time and balancing community commitments, Sarah achieved her weight loss goals with a flexible training plan that fit her schedule.',
    link: '#contact',
    alt: 'Woman exercising',
    date: 'Client Success',
  },
  {
    title: 'David Built Strength & Confidence',
    image: 'https://images.pexels.com/photos/4162492/pexels-photo-4162492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'From beginner to confident lifter, David transformed his physique and mindset through consistent training and personalized coaching.',
    link: '#contact',
    alt: 'Man strength training',
    date: 'Client Success',
  },
  {
    title: 'Rachel Gained Energy & Vitality',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Struggling with low energy and stress, Rachel found balance through online training that prioritized sustainable habits and overall wellness.',
    link: '#contact',
    alt: 'Woman training',
    date: 'Client Success',
  }
]
;

  const renderArticle = (article: typeof articles[0], index: number) => (
    <article
      key={index}
      className="fade-in bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={article.image}
          alt={article.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="px-6 pt-4 text-sm text-gray-500">{article.date}</div>
      <div className="p-6 pt-2 flex-grow">
        <h3 className="text-xl font-bold mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.desc}</p>
        <a
          href={article.link}
          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Your Journey →
        </a>
      </div>
    </article>
  );

  return (
    <section id="results" className="section bg-gradient-to-b from-white to-blue-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6">Real People, Real Results</h2>
          <p className="fade-in text-lg text-gray-600">
            See how young adults in our community have transformed their lives through personalized online training with Coach Yitzcy.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4">
          <div className="flex space-x-6 snap-x snap-mandatory">
            {articles.map((article, index) => (
              <div key={index} className="min-w-[85%] snap-center">
                {renderArticle(article, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => renderArticle(article, index))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
