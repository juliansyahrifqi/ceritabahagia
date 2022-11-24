interface FeatureCardProps {
  feature: {
    id: number;
    title: string;
    image: string;
    description: string;
  }
}

export default function FeatureCard(feature: FeatureCardProps) {
  const {image, title, description} = feature.feature;

  return (
    <div className='bg-feature-card hover:bg-feature-hover duration-300 ease-out rounded-2xl p-10'>
      <img src={image} alt="logo" className='mx-auto w-[90px] h-[50px]'  />
      <h4 className='text-xl text-black font-bold text-center mt-5'>
        {title}
      </h4>

      <p className='text-md font-medium text-center text-secondary-black mt-4'>
        {description}
      </p>
    </div>
  )
}
