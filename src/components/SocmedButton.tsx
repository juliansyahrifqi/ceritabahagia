interface SocmedButtonProps {
  image: string;
  title: string;
}

export default function SocmedButton({image, title}: SocmedButtonProps) {
  return (
    <div className="flex items-center mt-4">
      <div className="p-2 rounded-md bg-square hover:bg-square-hover duration-300 ease-linear">
        <img src={image} alt="whatsapp-icon" />
      </div>
      <p className="font-normal text-sm ml-4">{title}</p>
    </div>
  )
}
