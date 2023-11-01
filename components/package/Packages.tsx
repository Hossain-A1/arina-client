"use client";
import useFetch from "@/hooks/useFetch";
import { packagesType } from "@/types/packagesType";
import SectionTitle from "../ui/SectionTitle";
import PackageCard from "../../app/packages/[id]/_components/PackageCard ";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/Button";

interface PackagesProps {
  native?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ native }) => {
  const { data: packages, error, isLoading } = useFetch("/api/beauty_packages");

  return (
    <section className='section-p container'>
      <SectionTitle title='Beauty Packages' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      {packages && (
        <>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
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
                .slice(0.8)
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
