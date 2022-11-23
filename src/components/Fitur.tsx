import React from 'react'
import SectionDivider from './SectionDivider'

export default function Fitur() {
  return (
    <section className='fitur mt-5 md:container mx-auto px-10 md:px-40 py-5 md:py-14' id='fitur'>
      <SectionDivider title="Fitur" />

      <h3 className='w-3/4 mx-auto text-4xl font-bold font-lato leading-relaxed text-center text-black tracking-wide mt-8'>Kami selalu berusaha untuk menghadirkan fitur yang terbaik.</h3>

      <h4 className='w-1/2 mx-auto text-md font-medium font-montserrat text-secondary-black text-center mt-5'>Dengan menggunakan jasa kami, pelanggan akan mendapatkan beberapa fitur yang menarik.</h4>
    </section>
  )
}
