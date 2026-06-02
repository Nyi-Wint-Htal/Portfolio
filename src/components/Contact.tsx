import customHr from "../assets/hr.png";

function Contact() {
  return (
    <section id="contact">
      <div className="bg-[radial-gradient(circle,#ffffff_0%,#d4d4d4_100%)] px-5 py-20 md:py-35">
        <div className="flex flex-col items-center text-center">
          <h3 className="headerStyle">CONTACT</h3>
          <p className="mt-10 max-w-3xl font-[Open_Sans] text-[15px] font-normal leading-7 md:mt-14.75">
            Interested in working together or building something creative? Feel
            free to reach out and connect with me through email or social media.
          </p>
          <img src={customHr} alt="" className="mt-8 w-40 md:mt-2 md:w-50" />

          <form className="mt-12 flex w-full max-w-2xl flex-col items-center text-center md:mt-20">
            <input
              aria-label="Input Name"
              required
              type="text"
              className="inputFieldStyle"
              placeholder="ENTER YOUR NAME*"
            />
            <input
              aria-label="Input Email"
              required
              type="email"
              className="inputFieldStyle"
              placeholder="ENTER YOUR EMAIL*"
            />
            <input
              aria-label="Input Phone Number"
              required
              type="tel"
              className="inputFieldStyle"
              placeholder="PHONE NUMBER"
            />
            <textarea
              aria-label="Input your message"
              className="inputFieldStyle min-h-44 pt-5"
              placeholder="YOUR MESSAGE*"
            ></textarea>
            <input type="submit" className="submitInput" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
