import Fitur from '../components/Fitur'
import Harga from '../components/Harga'
import Hero from '../components/Hero'
import Portofolio from '../components/Portofolio'

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />

      <Fitur />

      <Portofolio />

      <Harga />
    </main>
  )
}
