import Card from "@components/card/Card";

export default function Grid({ cardData }) {
  console.log(cardData)
  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cardData.map((cd) => (
          <Card
            title={cd.title ? cd.title : cd.name}
            description={cd.description}
            image={cd.url ? cd.url : "/stackoverflow.svg"}
            tags={cd.tags ? cd.tags : cd.topics}
            link={cd.link ? cd.link : cd.url}
            id={cd.id ? cd.id : cd.question_id}
            key={cd.id ? cd.id : cd.question_id}
          />
        ))}
      </div>
    </>
  );
}
