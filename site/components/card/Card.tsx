import Image from "next/image";

interface CardProps {
  title?: string;
  description: string;
  image: string;
  tags: Array<string>;
}

const Card: React.FC<CardProps> = ({ title, description, image, tags }) => {
  return (
    <>
      <div className="flex flex-col overflow-hidden p-2 h-100 rounded shadow-xl">
        <div className="col-span-2 font-bold text-xl">{title}</div>
        <Image
          width={25}
          height={25}
          layout="fixed"
          className="rounded-full justify-end"
          src={image}
          alt=""
        />
        <div className="mb-auto"></div>
        <div className="mt-5 ">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 mb-2 bg-sky-700 w-full h-3"></div>
      </div>
    </>
  );
};
export default Card;
