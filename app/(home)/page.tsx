import Packages from "@/app/packages/package/Packages";
import Slider from "./_components/Slider";
import Specialists from "../specialists/[id]/_components/Specialists";

const HomePage = () => {
  return (
    <>
      <main>
        <Slider />
        <Packages />
        <Specialists />
      </main>
    </>
  );
};

export default HomePage;
