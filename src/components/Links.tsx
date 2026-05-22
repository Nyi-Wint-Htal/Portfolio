const Links = () => {
  return (
    <div className="h-81.25">
      <div className="flex gap-y-11 flex-col items-center justify-center text-center pt-17">
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
          <a href="https://www.facebook.com/nyiwint.htal.12/" target="_blank">
            <i className="fa-brands fa-square-facebook text-white text-[30px]"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nyi-wint-htal-a05a05196/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-white text-[30px]"></i>
          </a>
          <a href="https://www.instagram.com/nyiwinthtal/" target="_blank">
            <i className="fa-brands fa-instagram text-white text-[30px]"></i>
          </a>
          <a href="mailto:nyiwinthtalnn@gmail.com"></a>
          <i className="fa-regular fa-envelope text-white text-[30px]"></i>
        </div>
        <p className="copyrightTextSyle">
          @2026 Nyi Wint Htal All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Links;
