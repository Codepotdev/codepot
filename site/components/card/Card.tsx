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
      <div className="flex flex-col rounded-xl overflow-hidden shadow-lg p-2 shadow-2 border border-slate-200 hover:border-slate-300 bg-slate-50 cursor-pointer">
        <div className="flex flex-row px-6 py-2 justify-between items-center">
          {image && (
            <Image src={image} height={40} width={40} alt="stackoverflow" />
          )}
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700">
            {description ? description.slice(0, 100) : ""}
          </p>
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
      </div>
    </>
  );
};
export default Card;
