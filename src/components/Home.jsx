import { InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";

const Home = () => {
  return (
    <section id="home" className="home py-32 md:py-40 xl:min-h-screen xl:flex xl:items-center xl:justify-center">
      <div className="w-full max-w-7xl grid grid-cols-12 items-center gap-8 md:gap-10">
        {/* SOCIAL ICONS */}
        <div className="col-span-2 md:col-span-1 flex justify-start md:justify-center">
          <div className="flex flex-col gap-5">
            <a href="">
              <InstagramLogoIcon size={28} weight="bold" className="text-gray-700 hover:text-black transition duration-300" />
            </a>
            <a href="">
              <LinkedinLogoIcon size={28} weight="bold" className="text-gray-700 hover:text-black transition duration-300" />
            </a>
            <a href="">
              <GithubLogoIcon size={28} weight="bold" className="text-gray-700 hover:text-black transition duration-300" />
            </a>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="col-span-10 md:col-span-6 space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Denis Alip <span className="inline-block">🤚</span>
          </h1>

          <div className="flex items-center gap-4 text-lg font-semibold text-gray-700">
            <span className="w-14 h-0.5 bg-gray-900"></span>
            Junior Web Developer
          </div>

          <p className="text-gray-600 max-w-lg leading-relaxed">Junior Web Developer yang tertarik pada frontend dan backend. Fokus membangun website yang responsif dan fungsional.</p>

          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black/85 rounded-xl text-white hover:bg-black transition">
            Say Hello
            <PaperPlaneTiltIcon size={20} weight="bold" />
          </a>
        </div>

        {/* IMAGE */}
        <div className="col-span-12 md:col-span-5 justify-self-center home-img"></div>
      </div>
    </section>
  );
};

export default Home;
