import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className='grid lg:grid-cols-2 grid-cols-1'>
      <div className='px-20 py-5 bg-blue/30'>
        <div className='flex flex-col gap-10 justify-center items-center '>
          <h3>Who we are</h3>
          <p>
            {
              "At Arina, our mission is to create a sanctuary of holistic well-being, offering unparalleled spa experiences that nurture both body and spirit. With a focus on expert therapies, luxurious treatments, and personalized care, we aim to inspire profound rejuvenation and self-discovery. By blending timeless traditions with innovative wellness practices, we elevate the spa experience, crafting moments of pure serenity for our cherished guests."
            }
          </p>
        </div>
      </div>
      <div className='about-image relative'>
        <Image
          src='https://images.pexels.com/photos/3851677/pexels-photo-3851677.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='about-image'
          height={1200}
          width={1920}
          priority
        />

        <div className="absolute bottom-0 w-full left-0 right-0">
        <div className="bg-gray/10 backdrop-blur-2xl  p-5 flex justify-center items-center">
          <div  className="text-xl font-medium text-white ">explore our services </div>
          <Link href='/packages' className="h-16 w-16 eq hover:bg-blue cursor-pointer  bg-blue/70 rounded-full flex justify-center items-center text-right">
            <span className="text-2xl  text-white font-semibold"> {'>'}</span>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
