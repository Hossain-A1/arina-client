import { packagesType } from "@/types/packagesType"

 interface PackageitemProps{
  item:packagesType
 }
const Packageitem:React.FC<PackageitemProps> = ({item}) => {
  return (
    <section className="section-p container">
      <h2 className="text-black">{item.title}</h2>
      <p>{item.description}</p>
    </section>
  )
}

export default Packageitem