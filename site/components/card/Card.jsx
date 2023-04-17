import Image from "next/image";
import Link from "next/link";
import { HeartIcon, BookmarkIcon, ShareIcon } from "@heroicons/react/outline";

export default function Card({
  id,
  type,
  name,
  title,
  description,
  tags,
  image,
}) {
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <>
      <Link href={`/${type}/${id}`}>
        <div className="flex flex-col rounded-lg overflow-hidden p-5 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer">
          {image && (
            <div className="flex justify-center items-center mb-4">
              <Image
                src={image}
                height={50}
                width={50}
                className="rounded-full z-10"
                alt={title}
              />
            </div>
          )}
          <div className="flex-grow">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">
              {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {truncateText(description, 100)}
            </p>
          </div>
          <div className="mt-4 space-x-2">
            {tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {"#" + tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <button className={`mr-2 focus:outline-none ${"text-gray-400"}`}>
                <HeartIcon className={`h-5 w-5 ${"text-gray-400"}`} />
              </button>
              <button className={`mr-2 focus:outline-none ${"text-gray-400"}`}>
                <BookmarkIcon className={`h-5 w-5 ${"text-gray-400"}`} />
              </button>
            </div>
            <button className="focus:outline-none text-gray-400">
              <ShareIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
