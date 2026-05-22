import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Links from "./components/Links";
{
  /* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">
  Facebook icons created by Hight Quality Icons - Flaticon
</a>;
<a href="https://www.flaticon.com/free-icons/github" title="github icons">
  Github icons created by Pixel perfect - Flaticon
</a>; */
}

function App() {
  return (
    <div id="app">
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="relative z-10 backgroundStyle">
          <NavigationBar />
          <Home />
        </div>
      </section>
      <AboutMe />
      <Portfolio />
      <Contact />
      <Links />
    </div>
  );
}

export default App;
