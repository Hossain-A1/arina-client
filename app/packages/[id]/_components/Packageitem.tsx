import Button, { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { packagesType } from "@/types/packagesType";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

interface PackageitemProps {
  item: packagesType;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const Packageitem: React.FC<PackageitemProps> = ({ item }) => {
  const isUser = useSelector(
    (state: RootState) => state.auth.userAndToken?.user
  );
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [changeImage, setChangeImage] = useState(item.images[0]);

  const stripeCheckout = async () => {
    if (!isUser) {
      return router.push("/sign-in");
    }
    setLoading(true);

    const stripe = await stripePromise;

    if (!stripe) {
      throw new Error("Failed to load Stripe script");
    }

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/create-checkout-session`,
      {
        items: [item],
        packageId: item._id,
        title: item.title,
        name: isUser.name,
        email: isUser.email,
      }
    );
    const session = await res.data;

    // Check if the session is valid
    if (!session || !session.id) {
      throw new Error("Invalid checkout session");
    }

    /*Redirect to the stripe payment */
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <section className='section-p mt-10 container grid lg:grid-cols-2 h-full w-full    lg:gap-10 gap-5'>
      <div className='apckage-images flex  gap-5 items-center w-full h-full'>
        <div className='small-images space-y-2.5'>
          {item.images.map((image, i) => (
            <figure
              key={i}
              className='lg:h-[6rem] lg:w-[6rem] h-16 w-16 cursor-pointer overflow-hidden'
            >
              <Image
                height={400}
                width={400}
                onClick={() => setChangeImage(image)}
                src={image}
                alt={item.title}
                className='w-full h-full object-cover '
              />
            </figure>
          ))}
        </div>
        <div className='large-image lg:h-[24rem] lg:w-[24rem] w-full h-full overflow-hidden'>
          <Image
            src={changeImage}
            alt={item.title}
            height={740}
            width={1080}
            priority
            className='h-full w-full object-cover hover:scale-150 eq'
          />
        </div>
      </div>

      <div className='package-description space-y-5'>
        <h2>{item.title}</h2>
        <small>{item.createdAt}</small>

        <h4>{item.category}</h4>
        <span className='text-2xl font-bold'>Price: ${item.price}</span>
        <p>{item.description}</p>
        <div className='flex gap-5 items-center'>
          <Link
            href='/packages'
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Back to Packages
          </Link>
          <Button
            onClick={stripeCheckout}
            variant='secondary'
            isLoading={loading}
            size='full'
          >
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packageitem;
