import Packages from "@/components/package/Packages";

const HomePage = () => {
  return (
    <>
      <main>
        <section className='container text-light'>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.explicabo
            aliquam iusto voluptate voluptatum?{" "}
          </h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit </h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </small>
        </section>

        <Packages />
      </main>
    </>
  );
};

export default HomePage;
