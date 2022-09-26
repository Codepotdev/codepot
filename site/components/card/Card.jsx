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
  console.log(color);
  return (
    <>
      <Link
        href={{
          pathname: `/contributions/${id}`,
          query: {
            data: JSON.stringify({
              title,
              description,
              image,
              tags,
              link,
              id,
            }),
          },
        }}
        as={`/contributions/${id}`}
      >
        <div className="flex flex-col border-2 hover:border-slate-300 bg-slate-200/50 rounded-3xl overflow-hidden p-2 shadow-lg cursor-pointer">
          <div className="flex flex-row px-6 py-2 justify-between items-center">
            {image && (
              <Image
                src={image}
                height={45}
                width={45}
                className="rounded-full z-10"
              />
            )}
            <Image
              src={imagesrc ? imagesrc : "/octocat.png"}
              height={45}
              width={45}
              className="rounded z-10"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700">
              {description ? description.slice(0, 100) + "..." : ""}
            </p>
          </div>
          <div className="mb-auto"></div>
          <div className="px-6 pt-4 pb-2">
            {/* {tags.length > 1 &&
              tags?.slice(0, 1).map((tag) => (
                <span
                  key={tag}
                  className="flex flex-row bg-slate-50 justify-center capitalize rounded-sm px-3 py-1 text-sm mr-1 mb-1"
                >
                  {(tag)}
                </span>
              ))} */}
            <span className="flex flex-row bg-slate-50 justify-center capitalize rounded-sm px-3 py-1 text-sm mr-1 mb-1">
              {message}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
