import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, image, tags, link, id }) {
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
        <div className="flex flex-col h-80 rounded-3xl overflow-hidden p-2 shadow-lg shadow-purple-400/30 hover:shadow-fuchsia-500/30 hover: border border-fuchsia-00 cursor-pointer">
          <div className="flex flex-row px-6 py-2 justify-between items-center">
            {image && <Image src={image} height={50} width={50} />}
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="mb-auto"></div>
          <div className="px-6 pt-4 pb-2">
            {tags?.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-block bg-slate-200 rounded-lg px-3 py-1 text-sm text-gray-700 mr-1 mb-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
