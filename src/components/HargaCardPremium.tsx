import Button from './Button'
import ListHargaFitur from './ListHargaFitur';

interface HargaCardPremiumProps {
  harga: {
    name: string;
    price: string;
    paket: any;
  }
}

export default function HargaCardPremium(props: HargaCardPremiumProps) {
  const { name, price, paket} = props.harga;

  return (
    <div className='border-[3px] border-blue-primary rounded-xl'>
      <div className='bg-blue-primary rounded-tr-lg rounded-tl-lg p-3 text-center'>
        <h1 className='font-bold text-white'>Best Seller</h1>
      </div>

      <div className='p-6 md:p-12'>
        <h1 className='font-bold text-xl text-center'>{name}</h1>
        
        <h2 className='font-bold text-blue-primary text-5xl mt-5 text-center'>
          <span className='text-base'>Rp. </span> 
          {price}
        </h2>

        <div className='mt-10 text-center'>  
          <Button 
            isPrimary 
            linkType="external" 
            link='https://wa.me/628998932302?text=Halo%20admin%20saya%20ingin%20memesan%20digital%20wedding%20invitation%20paket%20Basic'
            size='large'
            title='Pesan Sekarang'
          />
        </div>

        <div className='pt-10'>
          <ul>
            {paket.map((pak: any, i:number) => (
              <ListHargaFitur paket={pak} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
