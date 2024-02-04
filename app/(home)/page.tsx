import Packages from "@/app/packages/package/Packages";
import Slider from "./_components/Slider";
import Specialists from "../specialists/_components/Specialists";
import Contact from "@/components/Contact";
import About from "../about/_components/About";

const HomePage = () => {
  return (
    <>
      <main>
        <Slider />
        <Packages />
        <About/>
        <Specialists />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
