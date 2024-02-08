"use client";

import Packageitem from "@/app/packages/[id]/_components/Packageitem";
import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/navigation";

const Package = ({ params }: { params: { id: string } }) => {
  const {
    data: packageItem,
    error,
    isLoading,
  } = useFetch(`/api/beauty_packages/${params.id}`);

  const router = useRouter();
  return (
    <main className=" min-h-screen">
      {isLoading && (
        <div className='min-h-screen  flex items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}
      {error && (
        <div className='min-h-screen flex flex-col items-center justify-center gap-2.5'>
          <Error error={error.message} />
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      )}
      {packageItem && <Packageitem item={packageItem} />}
    </main>
  );
};

export default Package;
