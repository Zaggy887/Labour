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
    title: 'The Growing Demand for Flexible Labour',
    image: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Explore how businesses across warehousing, hospitality, and retail are adapting to flexible workforce models to meet seasonal and operational demands.',
    link: 'https://www.mckinsey.com/featured-insights/future-of-work/the-future-of-work-after-covid-19',
    alt: 'Workers in warehouse',
    date: 'February 2025',
  },
  {
    title: 'Why Skilled Workers Matter in Today\'s Economy',
    image: 'https://images.pexels.com/photos/5331895/pexels-photo-5331895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Discover why experienced workers in construction, logistics, and agriculture are essential for driving business growth and operational efficiency.',
    link: 'https://www.weforum.org/stories/2023/05/future-jobs-2023-skills/',
    alt: 'Construction workers',
    date: 'January 2025',
  },
  {
    title: 'Building Strong Teams in Essential Industries',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Learn how businesses in essential industries are building reliable teams by focusing on worker satisfaction, training, and long-term retention.',
    link: 'https://www.forbes.com/sites/forbeshumanresourcescouncil/2024/01/30/building-resilient-teams/',
    alt: 'Team collaboration',
    date: 'December 2024',
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
          Read more →
        </a>
      </div>
    </article>
  );

  return (
    <section id="articles" className="section bg-gradient-to-b from-white to-blue-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in mb-6">Industry Insights</h2>
          <p className="fade-in text-lg text-gray-600">
            Learn how businesses are adapting to workforce trends and why partnering with reliable workers is essential for success.
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
