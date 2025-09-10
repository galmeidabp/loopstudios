type Props = {
  image: string;
  title: string;
  imgPosition?: string;
}

export function GridCard({ image, title, imgPosition }: Props) {
  return (
    <div className="w-[272px] h-32 relative lg:w-[240px] lg:h-96 cursor-pointer hover:brightness-75">
      <img src={image} alt={title} className="w-full h-full object-cover brightness-50" style={{ objectPosition: imgPosition }} />
      <span className="uppercase whitespace-pre-line text-2xl/6 font-josefin text-white font-light absolute bottom-3 left-5 lg:text-3xl">{title}</span>
    </div>
  )
}