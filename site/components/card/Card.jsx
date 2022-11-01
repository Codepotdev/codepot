import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  description,
  image,
  tags,
  link,
  id,
  imagesrc,
  color,
  message,
}) {
  return (
    <>
      <div className="flex snap-start snap-mandatory h-50 flex-col border-t-brand-600/10 border-r-brand-600/20 bg-slate-100/60 rounded-2xl p-4 cursor-pointer">
        <div className="flex justify-between my-2">
          <Image
            src={image}
            height={30}
            width={30}
            className="rounded-2xl z-10"
          />
          <Image
            src={imagesrc ? imagesrc : "/codepot.svg"}
            height={30}
            width={30}
            className="rounded z-10"
          />
        </div>
        <div className="flex justify-between w-80 mb-2">
          <h5 className="text-gray-900 text-lg overflow-hidden">{title}</h5>
        </div>
        <p className="text-gray-600 text-sm overflow-hidden">
          {description ? description.slice(0, 100) + "..." : null}
        </p>
      </div>
    </>
  );
}
