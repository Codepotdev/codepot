import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  tags: Array<string>;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}) => {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col p-2  shadow-2 border border-slate-300 hover:bg-gradient-to-tl bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer ">
        <div className="flex flex-row px-6 py-2 justify-between items-center">
          {image &&
            <Image
              src={image}
              height={40}
              width={40}
              alt="stackoverflow"
            />
          }
          {/* <Image
            width={40}
            height={40}
            layout="fixed"
            className="rounded"
            src={profileImage}
            alt=""
          /> */}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="mb-auto"></div>
        <div className="px-6 pt-4 pb-2">
          {tags?.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs` font-semibold text-gray-700 mr-2 mb-2"
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
