interface MetodePembayaranProps {
  image: string;
}

export default function MetodePembayaran(props: MetodePembayaranProps) {
  return (
    <div className="bg-white p-2 rounded-md hover:bg-opacity-80">
      <img src={props.image} alt="image" />
    </div>
  )
}
