import Image from "next/image";
import Link from "next/link";

export default function Card({
  id,
  type,
  name,
  title,
  description,
  tags,
  image,
}) {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg prose-default card-border surface-default mx-2">
        <Image src={image} width={50} height={50} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags?.map((tag) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
