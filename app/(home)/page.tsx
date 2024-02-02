import Packages from "@/app/packages/package/Packages";
import Slider from "./_components/Slider";
import Specialists from "../specialists/[id]/_components/Specialists";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <>
      <main>
        <Slider />
        <Packages />
        <Specialists />
        <Contact/>
      </main>
    </>
  );
};

export default HomePage;
