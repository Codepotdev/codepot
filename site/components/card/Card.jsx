import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  description,
  image,
  tags,
  link,
  id,
  type,
}) {
  function getLogoSrc() {
    if (type === "github-trending") {
      return "/octocat.png";
    } else if (type === "stackoverflow_question") {
      return "/stackoverflow.svg";
    } else {
      return "/GitHub_Logo.png";
    }
  }
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
        <div className="flex flex-col bg-slate-100 rounded-3xl overflow-hidden p-2 shadow-lg cursor-pointer">
          <div className="flex flex-row px-6 py-2 justify-between items-center">
            {image && (
              <Image
                src={image}
                height={50}
                width={50}
                className="rounded-full"
              />
            )}
            <Image
              src={getLogoSrc()}
              height={50}
              width={50}
              className="rounded"
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
            {tags?.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-block bg-slate-200 rounded-lg px-3 py-1 text-sm text-gray-700 mr-1 mb-1"
              >
                {"#" + tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
