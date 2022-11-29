interface PortofolioCardProps {
  portofolio: {
    name: string;
    date: string;
    thumb: string;
    link: string;
  }
}

export default function PortofolioCard(props: PortofolioCardProps) {
  const {name, date, thumb, link} = props.portofolio;
  
  return (
    <a href={link} target="_blank">
      <div className="rounded-md border border-secondary-black border-opacity-20">
        <img src={thumb} alt={name} className="rounded-tr-md rounded-tl-md"/>

        <div className="p-4">
          <h3 className="text-xl text-black font-bold">{name}</h3>
          <p className="text-sm font-semibold text-secondary-black mt-4">{date}</p>
        </div>
      </div>
    </a>
  )
}
