import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { specialistType } from "@/types/specialistType";
import Image from "next/image";
import Link from "next/link";

interface SpecialistCardProps {
  specialist: specialistType;
}
const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  return (
    <section className='flex flex-col gap-2.5 items-center shadow-sm rounded-xl p-5'>
      <div className='h-[12rem]  w-[12rem] overflow-hidden bg-white shadow-sm'>
        <Image
          src={specialist.photoUrl}
          alt={specialist.name}
          height={640}
          width={320}
          priority
          className='h-full w-full object-cover rounded-xl'
        />
      </div>
      <h4 className='text-blue'>{specialist.name}</h4>

    
        <small>{specialist.designation}</small>

        <Link
          href={`/specialists/${specialist._id}`}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          Read me
        </Link>
    
    </section>
  );
};

export default SpecialistCard;
