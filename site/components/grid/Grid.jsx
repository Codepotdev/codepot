import Card from "@components/card/Card";
import { getHexColor, getImageSrc, getCardMessage } from "@lib/utils.js";

export default function Grid({ cardData, typeFilter, languageFilter }) {
  const filteredData = [];

  cardData.forEach((cd) => {
    if (typeFilter.key === "all") {
      if (languageFilter.key === "all") {
        filteredData.push(cd);
      } else if (
        languageFilter.name.toLowerCase() === cd.language.toLowerCase()
      ) {
        filteredData.push(cd);
      }
    } else if (typeFilter.key === cd.type) {
      if (languageFilter.key === "all") {
        filteredData.push(cd);
      } else if (
        languageFilter.name.toLowerCase() === cd.language.toLowerCase()
      ) {
        filteredData.push(cd);
      }
    }
  });

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredData.length > 0 ? (
          filteredData.map((cd) => (
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
              color={getHexColor(cd.language)}
              message={getCardMessage(cd.type, cd.language)}
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
