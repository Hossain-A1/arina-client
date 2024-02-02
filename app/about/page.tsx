import SectionTitle from "@/components/ui/SectionTitle"
import About from "./_components/About"

const AboutPage = () => {
  return (
    <main className="section-p mt-10 container">
<div className=" space-y-5">
  <SectionTitle title="About Us" />

  <div>
    <About/>
  </div>
</div>
    </main>
  )
}

export default AboutPage