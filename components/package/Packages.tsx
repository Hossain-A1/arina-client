"use client";
import useFetch from "@/hooks/useFetch";
import { packagesType } from "@/types/packagesType";

const Packages = () => {
  const { data: packages, error, isLoading } = useFetch("/api/beauty_packages");

  if (isLoading) {
    return <p className='text-dark'>Loading.......</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <main>
      {packages.map((packageitem: packagesType) => (
        <div key={packageitem._id}>
          <h2 className="text-light">{packageitem.title}</h2>
        </div>
      ))}
    </main>
  );
};

export default Packages;
