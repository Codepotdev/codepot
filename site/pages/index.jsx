import { Card } from "@components/card";
import { shuffleArray } from "@lib/shuffle";

export const getStaticProps = async () => {
  const stackOverflowAPI = await fetch(
    `${process.env.SO_API}&key=${process.env.SO_API_KEY}`
  );

  const stackOverflowAPIResponse = await stackOverflowAPI.json();
  const gitHubAPI = await fetch("http://localhost:8080/repositories", {
    method: "GET",
  });

  const gitHubAPIResponse = gitHubAPI.json();

  const response = [
    ...stackOverflowAPIResponse.items,
    ...(await gitHubAPIResponse),
  ];
  shuffleArray(response);
  return {
    props: { cardData: response },
  };
};

const Home = ({ cardData }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {cardData.map((cd) => (
        <Card
          title={cd.title ? cd.title : cd.name}
          description={cd.description}
          image={
            cd.url ? cd.url : "/stackoverflow.svg"
          }
          tags={cd.tags ? cd.tags : cd.topics}
          link={cd.link ? cd.link : cd.url}
          key={cd.question_id ? cd.question_id : cd.id}
        />
      ))}
    </div>
  );
};

export default Home;
