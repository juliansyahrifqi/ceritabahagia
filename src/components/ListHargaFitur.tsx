import CheckMark from "./CheckMark";
import XMark from "./XMark";

interface ListHargaFitur {
  paket: {
    title: string;
    status: boolean;
  }
}

export default function ListHargaFitur(props: ListHargaFitur) {
  const {title, status} = props.paket;
  
  return (
    <li className='flex items-center mt-2'>
        {status ? (
          <span className="flex items-center w-4 h-4 p-1 mr-2 bg-blue-primary rounded-full bg-opacity-30">
            <CheckMark />
          </span>
        ) : (
          <span className="flex items-center w-4 h-4 p-1 mr-2 bg-red-500 rounded-full bg-opacity-30">
            <XMark />
          </span>
        )}

      <p>{title}</p>
    </li>
  )
}
