import profile from "../assets/profile.png";
import facebookLogo from "../assets/facebook.png";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

const Home = () => {
  return (
    <div className=" flex justify-around items-center w-screen h-175">
      <div className="flex flex-col mb-10">
        <div className=" text-black fontStyle flex-col ml-40 mb-25 ">
          <h3 className="text-3xl mb-10">Hi, I am</h3>
          <h1 className="text-7xl p-0">Phoenix</h1>
          <h5 className="text-lg text-[#909090]">
            Front-end Developer/ UI Designer
          </h5>
        </div>
        <div className="flex gap-5 ml-40">
          <a href="https://www.facebook.com/nyiwint.htal.12/" target="_blank">
            <img src={facebookLogo} alt="" className="logoStyle" />
          </a>
          <a href="https://github.com/Nyi-Wint-Htal" target="_blank">
            <img src={githubLogo} alt="" className="logoStyle" />
          </a>
          <a>
            <img src={linkedinLogo} alt="" className="logoStyle" />
          </a>
        </div>
      </div>

      <div className="overflow-hidden h-175">
        <img
          src={profile}
          alt=""
          className="object-cover h-230 mr-35 -translate-y-50"
        />
      </div>
    </div>
  );
};

export default Home;
