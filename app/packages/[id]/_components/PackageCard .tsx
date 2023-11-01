import { cn } from "@/lib/utils";
import { packagesType } from "@/types/packagesType";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../../../../components/ui/Button";

interface PackageCardProps {
  packageitem: packagesType;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageitem }) => {
  return (
    <div className='w-full rounded-xl bg-white p-5 shadow-sm shadow-gray'>
      <Link
        href={`/packages/${packageitem._id}`}
        className='inline-block w-full h-[20rem] overflow-hidden rounded-xl group'
      >
        <Image
          src={packageitem.images[0]}
          alt={packageitem.title}
          width={1280}
          height={720}
          priority
          className='w-full h-full object-cover group-hover:scale-125 eq brightness-75 group-hover:brightness-100'
        />
      </Link>
      <div className='space-y-2.5'>
        <small className='text-red'>{packageitem.category}</small>
        <h3 className='truncate'>{packageitem.title}</h3>
        <hr className='border-gray' />
        <p className='text-black/50'>
          {packageitem.description.substring(0, 50)}...
        </p>
        <div className='flex gap-2.5 justify-between items-center'>
          <h3>${packageitem.price}</h3>
          <Link
            href={`/packages/${packageitem._id}`}
            className={cn(buttonVariants({ variant: "danger" }))}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
