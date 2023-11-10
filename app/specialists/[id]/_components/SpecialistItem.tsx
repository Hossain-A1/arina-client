import { specialistType } from "@/types/specialistType";
import Image from "next/image";

interface SpecialistItemProps {
  item: specialistType;
}
const SpecialistItem: React.FC<SpecialistItemProps> = ({ item }) => {
  return (
    <section className='flex flex-col gap-2.5 items-center'>
      <div className='flex'>
        <div className='h-[18rem]  w-[18rem] overflow-hidden'>
          <Image
            src={item.photoUrl}
            alt={item.name}
            height={640}
            width={320}
            priority
            className='h-full w-full object-cover rounded'
          />
        </div>

        <div className='flex flex-col items-center gap-2.5'>
          <h4 className='text-blue'>{item.name}</h4>
          <small>{item.designation}</small>
          <p>{item.bio}</p>
          <p>{item.dateOfBirth}</p>
        </div>
      </div>
    </section>
  );
};

export default SpecialistItem;
