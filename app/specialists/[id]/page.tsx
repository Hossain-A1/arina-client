"use client";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import useFetch from "@/hooks/useFetch";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import SpecialistItem from "./_components/SpecialistItem";

const Specialist = ({ params }: { params: { id: string } }) => {
  const {
    data: specialistItem,
    isLoading,
    error,
  } = useFetch(`/api/specialists/${params.id}`);
  const router = useRouter();

  return (
    <main className='container section-p'>
      {isLoading && (
        <div className='min-h-screen flex items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}
      {error && (
        <div className='min-h-screen flex flex-col items-center justify-center gap-2.5'>
          <Error error={error.message} />
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      )}

      {specialistItem && <SpecialistItem item={specialistItem} />}
    </main>
  );
};

export default Specialist;
