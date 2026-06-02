import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoPng from "../assets/logo.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <section id="nav-bar" className="relative z-30">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8 lg:py-8">
        <a href="#home" onClick={closeMenu} aria-label="Go to home">
          <img src={logoPng} alt="Phoenix logo" className="w-16 md:w-20 lg:w-23" />
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/30 text-white transition hover:bg-white hover:text-black md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden items-center justify-center gap-8 md:flex lg:gap-14">
          <a href="#about-me" className="linkStyle">
            About me
          </a>
          <a href="#skills" className="linkStyle">
            Skills
          </a>
          <a href="#portfolio" className="linkStyle">
            Portfolio
          </a>
          <a
            href="#contact"
            className="fontStyle text-xs rounded-4xl border border-white bg-white px-5 py-2 text-black hover:bg-transparent hover:border-white hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition-all duration-300 ease-out active:translate-y-0"
          >
            CONTACT ME
          </a>
        </div>

        <div
          className={`absolute left-5 right-5 top-21 rounded-lg border border-white/15 bg-black/95 p-5 shadow-2xl md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4">
            <a href="#about-me" onClick={closeMenu} className="linkStyle text-base">
              About me
            </a>
            <a href="#skills" onClick={closeMenu} className="linkStyle text-base">
              Skills
            </a>
            <a href="#portfolio" onClick={closeMenu} className="linkStyle text-base">
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="fontStyle rounded-4xl border border-white bg-white px-5 py-3 text-center text-xs text-black transition-all duration-300 ease-out hover:bg-transparent hover:text-white"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavigationBar;
