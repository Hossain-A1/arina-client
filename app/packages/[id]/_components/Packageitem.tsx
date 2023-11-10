import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { packagesType } from "@/types/packagesType";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PackageitemProps {
  item: packagesType;
}
const Packageitem: React.FC<PackageitemProps> = ({ item }) => {
  const [changeImage, setChangeImage] = useState(item.images[0]);
  return (
    <section className='section-p container grid lg:grid-cols-2 grid-cols-1 gap-10'>
      <div className='apckage-images flex justify-between items-center'>
        <div className='small-images space-y-2.5'>
          {item.images.map((image, i) => (
            <figure
              key={i}
              className='h-[6rem] w-[6rem] cursor-pointer overflow-hidden'
            >
              <img
                onClick={() => setChangeImage(image)}
                src={image}
                alt={item.title}
                className='w-full h-full object-cover '
              />
            </figure>
          ))}
        </div>
        <div className='large-image h-[24rem] w-[24rem] overflow-hidden'>
          <Image
            src={changeImage}
            alt={item.title}
            height={340}
            width={680}
            priority
            className='h-full w-full object-cover hover:scale-150 eq'
          />
        </div>
      </div>

      <div className='package-description space-y-2.5'>
        <h2>{item.title}</h2>
        <small>{item.createdAt}</small>
        <h4>{item.category}</h4>
        <span>${item.price}</span>

        <p>{item.description}</p>
        <Link
          href='/checkout'
          className={cn(buttonVariants({ variant: "danger" }))}
        >
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default Packageitem;
