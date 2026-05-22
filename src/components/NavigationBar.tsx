import logoPng from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <section id="nav-bar">
      <div className="flex justify-around mt-10">
        <div>
          <img
            src={logoPng}
            alt=""
            className="w-18 -translate-x-20 translate-y-3"
          />
        </div>
        <div className="flex gap-18 justify-center items-center">
          <a href="#about-me" className="linkStyle">
            <h4>About me</h4>
          </a>
          <a href="#skills" className="linkStyle">
            <h4>Skills</h4>
          </a>
          <a href="#portfolio" className="linkStyle">
            <h4>Portfolio</h4>
          </a>
          <a
            href="#contact"
            className="fontStyle text-xs rounded-4xl border border-white bg-white px-5 py-2 text-black hover:bg-transparent hover:border-white hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition-all duration-300 ease-out active:translate-y-0"
          >
            <h4>CONTACT ME</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
