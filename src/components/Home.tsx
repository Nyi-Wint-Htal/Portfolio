import profile from "../assets/profile.png";
import facebookLogo from "../assets/facebook.png";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

const Home = () => {
  return (
    <section id="home">
      <div className="mx-auto flex min-h-[calc(100vh-84px)] w-full max-w-6xl flex-col items-center justify-between gap-10 px-5 pt-8 md:min-h-[calc(100vh-112px)] md:flex-row md:px-8 md:pt-0">
        <div className="flex w-full flex-col items-center text-center md:mb-10 md:w-1/2 md:items-start md:text-left">
          <div className="fontStyle flex-col text-black">
            <h3 className="mb-5 text-2xl sm:text-3xl md:mb-10">Hi, I am</h3>
            <h1 className="p-0 text-5xl sm:text-6xl lg:text-7xl">Phoenix</h1>
            <h5 className="mt-3 text-base text-[#606060] sm:text-lg md:text-[#909090]">
              Front-end Developer/ UI Designer
            </h5>
          </div>
          <div className="mt-8 flex gap-5 md:mt-12">
            <a
              href="https://www.facebook.com/nyiwint.htal.12/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookLogo} alt="" className="logoStyle" />
            </a>
            <a
              href="https://github.com/Nyi-Wint-Htal"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="" className="logoStyle" />
            </a>
            <a
              href="https://www.linkedin.com/in/nyi-wint-htal-a05a05196/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="" className="logoStyle" />
            </a>
          </div>
        </div>

        <div className="-mt-20 flex h-130 w-full justify-center overflow-hidden sm:-mt-24 sm:h-150 md:mt-0 md:h-[calc(100vh-112px)] md:min-h-155 md:w-1/2 md:items-end md:justify-end">
          <img
            src={profile}
            alt="Phoenix"
            className="h-175 -translate-y-20 object-contain sm:h-195 sm:-translate-y-24 md:h-205 md:translate-y-0 md:object-contain lg:mr-10 lg:h-215 xl:mr-24 xl:h-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
