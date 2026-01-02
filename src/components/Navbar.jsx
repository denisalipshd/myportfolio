import { useEffect, useState } from "react";
import { menuBar } from "../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const changeBgColor = () => {
      setChangeColor(window.scrollY >= 10);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuBar.forEach((item) => {
      const section = document.getElementById(item.path);
      if (section) {
        observer.observe(section);  
      }
    });

    window.addEventListener("scroll", changeBgColor);

    return () => {
      window.removeEventListener("scroll", changeBgColor);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className={`${open ? "bg-white" : "bg-white/90"} backdrop-blur-md ${changeColor ? "shadow-sm" : ""}`}>
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative">
          <div className="flex items-center justify-between py-6">
            {/* LOGO */}
            <a href="#home" onClick={() => handleLinkClick("home")} className="font-semibold text-2xl text-black/80">
              Denis
            </a>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-6">
              {menuBar.map((item) => {
                const id = item.path;
                const isActive = activeSection === id;

                return (
                  <li key={item.id}>
                    <a
                      href={`#${id}`}
                      onClick={() => handleLinkClick(id)}
                      className={`relative font-semibold transition-all duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1
                      after:h-0.5 after:bg-black
                      after:transition-all after:duration-300
                      ${isActive ? "text-black after:w-full" : "text-black/75 after:w-0 hover:after:w-full hover:text-black"}`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* HAMBURGER */}
            <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 group">
              <span className={`w-7 h-0.5 bg-black/85 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-7 h-0.5 bg-black/85 rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`w-7 h-0.5 bg-black/85 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

          {/* MOBILE MENU */}
          <ul
            className={`md:hidden fixed top-full right-0 z-50
            w-1/2 h-screen bg-white backdrop-blur-md flex flex-col items-center pt-12 gap-8
            transition-all duration-500 ease-in-out
            ${open ? "translate-x-0 shadow-xs" : "translate-x-full"}`}
          >
            {menuBar.map((item) => {
              const id = item.path;
              const isActive = activeSection === id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${id}`}
                    onClick={() => handleLinkClick(id)}
                    className={`relative font-semibold transition-all duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1
                      after:h-0.5 after:bg-black
                      after:transition-all after:duration-300
                      ${isActive ? "text-black after:w-full" : "text-black/75 after:w-0 hover:after:w-full hover:text-black"}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
