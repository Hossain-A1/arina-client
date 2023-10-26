'use client'
import PackageDetails from "@/components/package/PackageDetails";
import useFetch from "@/hooks/useFetch";

const Package = ({ params }: { params: { id: string } }) => {
  const {
    data: packageItem,
    error,
    isLoading,
  } = useFetch(`/api/beauty_packages/${params.id}`);
  return <main>{packageItem && <PackageDetails  packages={packageItem}/>}</main>;
};

export default Package;
