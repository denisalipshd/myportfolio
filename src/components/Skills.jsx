import { CheckCircleIcon } from "@phosphor-icons/react";
import { skillsData } from "../data";

const SkillItem = ({ name, level }) => (
  <div className="flex items-start gap-3 w-full max-w-37.5">
    <CheckCircleIcon size={18} weight="fill" className="text-gray-900 shrink-0 mt-0.5" />
    <div className="flex flex-col">
      <p className="font-semibold text-gray-900 text-base leading-tight">{name}</p>
      <p className="text-gray-600 text-[10px] md:text-xs">{level}</p>
    </div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="bg-white border border-gray-200 shadow-lg rounded-3xl py-8 px-6 h-full transition-transform hover:shadow-xl">
    <h4 className="font-bold text-gray-800 text-center text-xl mb-10">{title}</h4>

    {/* PERBAIKAN: grid-cols-2 hanya di MD ke atas. Di mobile tetap grid tapi items-center */}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-6 justify-items-center">
      {skills.map((skill) => (
        <SkillItem key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 space-y-1">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Skills</h3>
          <p className="text-gray-600">My technical level</p>
        </div>

        {/* Frontend & Backend Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <SkillCard title="Frontend Developer" skills={skillsData.frontend} />
          <SkillCard title="Backend Developer" skills={skillsData.backend} />
        </div>

        {/* Tools Card */}
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <SkillCard title="Tools & Others" skills={skillsData.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
