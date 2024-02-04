import { specialistType } from "@/types/specialistType";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface SpecialistItemProps {
  item: specialistType;
}
const SpecialistItem: React.FC<SpecialistItemProps> = ({ item }) => {
  return (
    <section className='bg-gray/70 p-10'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 '>
        <div className='h-full w-full bg-white/70 p-10'>
          <div className='flex justify-between  items-center'>
            <div className=' h-40 w-40 overflow-hidden p-10 bg-white '>
              <Image
                src={item.photoUrl}
                alt={item.name}
                height={640}
                width={320}
                priority
                className='h-full w-full  rounded'
              />
            </div>
            <h4 className='text-blue underline underline-offset-8'>
              {item.name}
            </h4>
          </div>
          <div className='space-y-10'>
            <div className='space-y-3'>
              <small>{item.designation}</small>
              <p>{item.bio}</p>
              <strong>{item.dateOfBirth}</strong>
            </div>

            <div className='flex items-center gap-5  w-full '>
              <strong className='p-5 bg-white rounded-full cursor-pointer'>
                <Instagram className='text-xl text-blue' />
              </strong>
              <strong className='p-5 bg-white rounded-full cursor-pointer'>
                <Linkedin className='text-4xl text-blue' />
              </strong>
              <strong className='p-5 bg-white rounded-full cursor-pointer'>
                <Facebook className='text-4xl text-blue' />
              </strong>
              <strong className='p-5 bg-white rounded-full cursor-pointer'>
                <Twitter className='text-4xl text-blue' />
              </strong>
            </div>
            <hr className='border border-blue ' />
          </div>
        </div>

        <div className='flex flex-col items-center gap-2.5   '>
          <div className='  bg-white/50 p-5'>
            <h4 className='font-light text-lg'>{`
Introducing Emily, your dedicated Massage Therapist whose passion lies in the art of relaxation and rejuvenation. With a genuine commitment to your well-being, Emily brings a unique blend of expertise and compassion to her practice.

At the heart of Emily's approach is a deep understanding that the body and mind are intricately connected.

In Emily's tranquil sanctuary, you can expect a personalized session that caters to your individual preferences.

Beyond the technical aspects of her craft, Emily's warm and nurturing demeanor creates an atmosphere of trust and comfort. Clients often find solace in her genuine care and attention, making each session not only a physical rejuvenation but also a mental and emotional retreat.

In the hands of Emily, your massage experience becomes a journey of self-care and restoration. Elevate your well-being with Emily, where relaxation meets expertise, and every session is a step towards a healthier, happier you.`}</h4>
          </div>
        </div>
      </div>

      <div>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora laboriosam delectus, alias earum architecto ab sed minima, similique repellat ducimus, facilis ut labore ad rem soluta ullam exercitationem provident odio!
      </div>
    </section>
  );
};

export default SpecialistItem;
