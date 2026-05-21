import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import bgPng from "./assets/bg.png";
import AboutMe from "./components/AboutMe";
<a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">
  Facebook icons created by Hight Quality Icons - Flaticon
</a>;
<a href="https://www.flaticon.com/free-icons/github" title="github icons">
  Github icons created by Pixel perfect - Flaticon
</a>;

function App() {
  return (
    <div>
      <img
        src={bgPng}
        alt=""
        className="w-200 absolute inset-0 h-full -translate-x-30"
      />
      <div className="relative z-10">
        <NavigationBar />
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
