const Links = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center gap-y-9 px-5 py-14 text-center md:gap-y-11 md:py-17">
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] active:translate-y-0"
          >
            <i className="fa-solid fa-angles-up text-white text-sm"></i>
            <h6 className="fontStyle text-white text-[15px] font-bold tracking-[0.1854em]">
              BACK TO TOP
            </h6>
          </button>
        </div>
        <div className="flex flex-row gap-x-6.25 justify-center">
          <a
            href="https://www.facebook.com/nyiwint.htal.12/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-facebook text-white text-[30px]"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nyi-wint-htal-a05a05196/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin text-white text-[30px]"></i>
          </a>
          <a
            href="https://www.instagram.com/nyiwinthtal/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram text-white text-[30px]"></i>
          </a>
          <a href="mailto:nyiwinthtalnn@gmail.com">
            <i className="fa-regular fa-envelope text-white text-[30px]"></i>
          </a>
        </div>
        <p className="copyrightTextSyle">
          @2026 Nyi Wint Htal All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Links;
