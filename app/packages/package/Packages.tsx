"use client";
import useFetch from "@/hooks/useFetch";
import { packagesType } from "@/types/packagesType";
import SectionTitle from "../../../components/ui/SectionTitle";
import PackageCard from "../[id]/_components/PackageCard ";
import Loading from "../../../components/ui/Loading";
import Error from "../../../components/ui/Error";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../../components/ui/Button";

interface PackagesProps {
  native?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ native }) => {
  const { data: packages, error, isLoading } = useFetch("/api/beauty_packages");

  return (
    <section className='section-p mt-10 container space-y-5'>
      <SectionTitle title='Beauty Packages' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      {packages && (
        <>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 items-center 2xl:grid-cols-4'>
            {native &&
              packages
                .sort((a: packagesType, b: packagesType) => a.price - b.price)
                .map((packageitem: packagesType) => (
                  <PackageCard
                    key={packageitem._id}
                    packageitem={packageitem}
                  />
                ))}
            {!native &&
              packages
                .sort((a: packagesType, b: packagesType) => a.price - b.price)
                .slice(0,3)
                .map((packageitem: packagesType) => (
                  <PackageCard
                    key={packageitem._id}
                    packageitem={packageitem}
                  />
                ))}
          </div>
          <div>
            {!native && (
              <div className='mt-20 flex justify-center'>
                <Link
                  href='/packages'
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  View All Packages
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Packages;
