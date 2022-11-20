import Card from "@components/card/Card";
import { cardData } from "@data/data-share";

export default function Grid({ gridType, gridSize }) {
  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cardData.map((cd, index) => (
          <Card
            key={index}
            id={cd.id}
            type={cd.type}
            name={cd.name}
            title={cd.title}
            description={cd.description}
            tags={cd.tags}
            image={cd.image}
          ></Card>
        ))}
      </div>
    </>
  );
}


