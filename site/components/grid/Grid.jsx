import Card from "@components/card/Card";
import { getImageSrc } from "@lib/utils";

export default function Grid({ cardData }) {
  return (
    <>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {cardData.length > 0 ? (
          cardData.map((cd) => (
            <Card
              title={cd.title}
              description={cd.description}
              image={cd.image}
              tags={cd.tags}
              link={cd.url}
              type={cd.type}
              id={cd.id}
              key={cd._id}
              language={cd.language}
              imagesrc={getImageSrc(cd.language)}
            />
          ))
        ) : (
          <h1 class="m-32 font-medium leading-tight text-5xl text-black">
            No results found..
          </h1>
        )}
      </div>
    </>
  );
}
