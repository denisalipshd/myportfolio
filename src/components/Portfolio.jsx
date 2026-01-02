import { ArrowRightIcon } from "@phosphor-icons/react";
import { projects } from "../data";

const PortfolioCard = ({ image, title, description, tags, link }) => (
  <div className="card bg-white border border-gray-200 shadow-lg rounded-3xl p-6 h-full flex flex-col">
    <div className="w-full aspect-video overflow-hidden rounded-2xl">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
    </div>

    <div className="flex flex-col flex-1">
      <h4 className="font-bold text-gray-900 mt-5 text-lg">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed mt-2">{description}</p>

      {/* TAMPILAN TECH STACK */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags && tags.map((tag, index) => (
          <span key={index} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-md border border-gray-200">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <a href={link} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <span className="text-xs font-semibold uppercase tracking-wider">Demo</span>
          <ArrowRightIcon size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 space-y-1">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Portfolio</h3>
          <p className="text-gray-600">Most recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.id} image={project.image} title={project.title} description={project.description} tags={project.tags} link={project.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
