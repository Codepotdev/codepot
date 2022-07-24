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
      <article className="flex flex-col p-2 rounded-2xl shadow-2 border border-slate-300 hover:bg-gradient-to-l bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer">
        <div className="font-bold text-xl">{title}</div>
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

        <div className="mt-2 mb-2 bg-gradient-to-l from-indigo-500 to-fuchsia-500 w-full h-0.5"></div>
      </article>
    </>
  );
};
export default Card;
