import { specialistType } from "@/types/specialistType";
import Image from "next/image";

interface SpecialistItemProps {
  item: specialistType;
}
const SpecialistItem: React.FC<SpecialistItemProps> = ({ item }) => {
  return (
    <section className='flex flex-col gap-2.5 items-center shadow-sm rounded-xl p-5'>
      <div className='h-[12rem]  w-[12rem] overflow-hidden bg-white shadow-sm'>
        <Image
          src={item.photoUrl}
          alt={item.name}
          height={640}
          width={320}
          priority
          className='h-full w-full object-cover rounded-xl'
        />
      </div>
      <h4 className='text-blue'>{item.name}</h4>

    
        <small>{item.designation}</small>

    
    </section>
  );
};

export default SpecialistItem;
