import FeatureCard from './FeatureCard'
import SectionDivider from './SectionDivider'
import { features } from '../assets/constant'

export default function Fitur() {
  return (
    <section className='fitur my-5 md:container mx-auto' id='fitur'>
      <div className='px-10 md:px-40 py-5 md:py-14'>
        <SectionDivider title="Fitur" />

        <h3 className='w-full md:w-3/4 mx-auto text-4xl font-bold font-lato md:leading-relaxed text-center text-black md:tracking-wide mt-8'>Kami selalu berusaha untuk menghadirkan fitur yang terbaik.</h3>

        <h4 className='w-full md:w-1/2 mx-auto text-md font-medium font-montserrat text-secondary-black text-center mt-5'>Dengan menggunakan jasa kami, pelanggan akan mendapatkan beberapa fitur yang menarik.</h4>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-10 md:px-24'>
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.id}/>
        ))}
      </div>
    </section>
  )
}
