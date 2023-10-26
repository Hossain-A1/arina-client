import { packagesType } from "@/types/packagesType";
import Link from "next/link";

interface PackageDetailsProps {
  packages: packagesType;
}
const PackageDetails: React.FC<PackageDetailsProps> = ({ packages }) => {
  return <div>

    <Link href={`/packages/${packages._id}`} className="text-red">
    
    {packages.title}
    </Link>
  </div>;
};

export default PackageDetails;
