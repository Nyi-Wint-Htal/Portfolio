import logoPng from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <div className="flex justify-around mt-10">
      <div>
        <img
          src={logoPng}
          alt=""
          className="w-18 -translate-x-20 translate-y-3"
        />
      </div>
      <div className="flex gap-18 justify-center items-center">
        <a href="#about-me">
          <h4>About me</h4>
        </a>
        <a href="">
          <h4>Skills</h4>
        </a>
        <a href="">
          <h4>Portfolio</h4>
        </a>
        <a
          href=""
          className="rounded-4xl bg-white text-black px-5 py-2 hover:animate-pulse transition"
        >
          <h4>CONTACT ME</h4>
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
