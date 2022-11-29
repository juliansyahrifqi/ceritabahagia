import { portofolios } from "../assets/constant";
import PortofolioCard from "../components/PortofolioCard";

export default function Portofolio() {
  return (
    <main className="portofolio mx-auto">
      <div className="px-10 md:px-20 py-5">
        <h3 className='w-full mx-auto text-4xl font-bold font-lato md:leading-relaxed text-center text-black md:tracking-wide mt-8'>Lihat apa yang sudah kami kerjakan.</h3>

        <h4 className='w-full mx-auto text-md font-medium font-montserrat text-secondary-black text-center mt-5'>Kami selalu berusaha memberikan hasil yang terbaik untuk memuaskan para pelanggan kami.</h4>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {portofolios.map((portofolio) => (
            <PortofolioCard portofolio={portofolio} />
          ))}
        </div>
      </div>
    </main>
  )
}
