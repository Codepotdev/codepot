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
      <div className="flex flex-col h-100 rounded shadow-xl">
        <div className="">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700u text-base">{description}</p>
        </div>
        <div className="mt-auto flex-col-reverse">
          {tags.map((tag) => (
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

      <div className="rounded overflow-hidden shadow-xl">
        <Image width={700} height={700} src={image} alt="" />
      </div>
    </>
  );
};
export default Card;
