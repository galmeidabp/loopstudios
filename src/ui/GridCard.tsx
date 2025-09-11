type Props = {
  image: string;
  title: string;
  imgPosition?: string;
  onClick?: () => void;
}

export function GridCard({ image, title, imgPosition, onClick }: Props) {
  return (
    <div className="w-[272px] h-32 relative lg:w-[240px] lg:h-96 cursor-pointer hover:brightness-75" onClick={onClick}>
      <img src={image} alt={title} className="w-full h-full object-cover brightness-50" style={{ objectPosition: imgPosition }} loading="lazy" />
      <span className="uppercase whitespace-pre-line text-2xl/6 font-josefin text-white font-light absolute bottom-3 left-5 lg:text-3xl">{title}</span>
    </div>
  )
}