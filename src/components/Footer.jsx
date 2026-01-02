import { InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { menuFooter } from "../data";

const Footer = () => {
  return (
    <footer className="pt-12 pb-24 border border-gray-200">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative">
        <h2 className="font-semibold text-3xl md:text-4xl text-black/80 text-center">Denis</h2>
        <ul
          className="flex items-center justify-center
         gap-6 py-6"
        >
          {menuFooter.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.path}`}
                className="relative text-gray-600 font-semibold transition-all duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1
                      after:w-0 after:h-0.5 after:bg-black
                      after:transition-all after:duration-300
                      hover:after:w-full hover:text-black"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-6">
          <li>
            <a href="https://www.instagram.com/denisalipshd/" target="_blank" className="text-gray-600 font-semibold hover:text-black/85 transition duration-300">
              <InstagramLogoIcon size={28} weight="bold" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/denis-alip-sahidi/" target="_blank" className="text-gray-600 font-semibold hover:text-black/85 transition duration-300">
              <LinkedinLogoIcon size={28} weight="bold" />
            </a>
          </li>
          <li>
            <a href="https://github.com/denisalipshd" target="_blank" className="text-gray-600 font-semibold hover:text-black/85 transition duration-300">
              <GithubLogoIcon size={28} weight="bold" />
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center pt-16">
          <p className="text-gray-600 text-sm">© 2026 Denis All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
