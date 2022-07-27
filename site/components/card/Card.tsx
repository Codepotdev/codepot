import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title?: string;
  description: string;
  profileImage: string;
  tags: Array<string>;
  link: string;
  metadata: any;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  profileImage,
  tags,
  link,
  metadata,
}) => {
  console.log(metadata);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col p-2  shadow-2 border border-slate-300 hover:bg-gradient-to-tl bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer ">
        <div className="flex flex-row justify-between items-center">
          <img className="w-20 h-20 mt-0" src={metadata.images[0]}></img>
          <Image
            width={30}
            height={30}
            layout="fixed"
            className="rounded-full"
            src={profileImage}
            alt=""
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{metadata.description}</p>
        </div>
        <div className="mb-auto"></div>
        <div className="px-6 pt-4 pb-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 mb-2 bg-gradient-to-l from-indigo-500 to-fuchsia-500 w-full h-0.5"></div>
      </div>
    </>
  );
};
export default Card;
