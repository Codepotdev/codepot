import Image from "next/image";

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
      <div className="flex flex-col rounded-3xl overflow-hidden p-2 shadow-lg prose-default card-border surface-default cursor-pointer hover:surface-default-hover hover:card-border-hover">
        <div className="flex flex-row px-6 py-2 justify-between items-center">
          {image && (
            <Image
              src={image}
              height={45}
              width={45}
              className="rounded-full z-10"
            />
          )}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700">
            {description ? description.slice(0, 100) + "..." : ""}
          </p>
        </div>
        <div className="mb-auto"></div>
        <div className="px-6 pt-4 pb-2">
          {tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inlipne-block bg-slate-50 border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {"#" + tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
