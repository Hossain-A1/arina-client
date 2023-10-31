import Packages from "@/components/package/Packages";
import Slider from "./_components/Slider";
import Specialists from "../specialists/_components/Specialists";

const HomePage = () => {
  return (
    <>
      <main>
       <Slider/>
        <Packages />
        <Specialists/>
      </main>
    </>
  );
};

export default HomePage;
