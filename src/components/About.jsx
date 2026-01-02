import { MedalIcon, FilesIcon, SuitcaseIcon, HeadsetIcon } from "@phosphor-icons/react";

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="min-w-37.5 grow bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition">
      <div className="mb-3 flex justify-center">{icon}</div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 space-y-1">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h3>
          <p className="text-gray-600">My introduction</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <img src="./assets/img/profile.png" alt="Profile" className="w-sm lg:w-md rounded-3xl object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <InfoCard icon={<MedalIcon size={28} weight="bold" />} title="Experience" value="5+ Months" />
              <InfoCard icon={<SuitcaseIcon size={28} weight="bold" />} title="Completed" value="45+ Projects" />
              <InfoCard icon={<HeadsetIcon size={28} weight="bold" />} title="Support" value="Online 24/7" />
            </div>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Halo! Saya Denis. Perjalanan saya di dunia web development dimulai dari rasa penasaran tentang bagaimana sebuah website bekerja hingga akhirnya menjadi gairah untuk membangunnya sendiri. Saya senang mengeksplorasi teknologi
              baru dan menantang diri saya untuk menyelesaikan masalah kompleks melalui solusi digital yang sederhana namun elegan.
            </p>

            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-black/85 text-white rounded-xl hover:bg-black transition">
              Download CV
              <FilesIcon size={20} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
