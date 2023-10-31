"use client";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import SectionTitle from "@/components/ui/SectionTitle";
import useFetch from "@/hooks/useFetch";
import { specialistType } from "@/types/specialistType";
import SpecialistCard from "./SpecialistCard";

const Specialists = () => {
  const { data: specialilsts, isLoading, error } = useFetch("/api/specialists");
  return (
    <section className='container section-p'>
      <SectionTitle title='Specialists' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}

      {
        specialilsts && <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {
            specialilsts.map((specialist:specialistType)=>(
              <SpecialistCard key={specialist._id} specialist={specialist}/>
            ))
          }
        </div>
      }
    
    </section>
  );
};

export default Specialists;
