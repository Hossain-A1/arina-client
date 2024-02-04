import SectionTitle from "../ui/SectionTitle";
import { SlideData } from "../../app/(home)/data/reviewData";
import Image from "next/image";
const CustomerReviews = () => {
  return (
    <main>
      <section className="space-y-5">
        <SectionTitle title={`Arina Spa's Testimonials`} />

        <div className="flex-1 flex items-center justify-center flex-wrap gap-10 bg-gradient-to-bl from-violet-700 to-blue/70 py-10 px-5">
          {SlideData.map((data) => (
            <div key={data.date} className="py-10 px-5 space-y-5 rounded-2xl shadow-xl bg-white  h-auto w-[30%]">
              <div className="flex gap-3 text-2xl">
                <strong className="text-yellow-500">{data.icon}</strong>
                <strong className="text-yellow-500">{data.icon}</strong>
                <strong className="text-yellow-500">{data.icon}</strong>
                <strong className="text-yellow-500">{data.icon}</strong>
                <strong className="text-yellow-500">{data.icon}</strong>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">{data.title}</h3>
                <h4>{data.comment}</h4>
              </div>
              <div className="flex gap-3">
                <div className="overflow-hidden h-16 rounded-full w-16">
                  <Image src={data.photo} alt={data.name} height='200' width='200' className="h-full w-full object-cover" priority />
                </div>
                <div className="flex flex-col justify-center">
                  <strong>{data.name}</strong>
                  <small>{data.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CustomerReviews;
