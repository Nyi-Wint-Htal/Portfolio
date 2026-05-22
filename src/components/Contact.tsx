import customHr from "../assets/hr.png";

function Contact() {
  return (
    <section id="contact">
      <div className="h-298 bg-[radial-gradient(circle,#ffffff_0%,#d4d4d4_100%)] pt-35">
        <div className="flex flex-col items-center text-center">
          <h3 className="headerStyle">CONTACT</h3>
          <p className="font-[Open_Sans] font-normal text-[15px] w-190.75 h-11.75 mt-14.75">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quasi
            pariatur id! Praesentium dignissimos dolorum aliquam, sapiente
            reiciendis architecto nobis voluptas odit sunt, porro labore
          </p>
          <img src={customHr} alt="" className="w-50 mt-2" />

          <form className="flex flex-col items-center text-center mt-20">
            <input
              required
              type=""
              className="inputFieldStyle"
              placeholder="ENTER YOUR NAME*"
            />
            <input
              required
              type="email"
              className="inputFieldStyle"
              placeholder="ENTER YOUR EMAIL*"
            />
            <input
              type="tel"
              className="inputFieldStyle"
              placeholder="PHONE NUMBER"
            />
            <input
              required
              type="text"
              className="inputFieldStyle pb-37.75 pt-5"
              placeholder="YOUR MESSAGE*"
            />
            <input type="submit" className="submitInput" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
