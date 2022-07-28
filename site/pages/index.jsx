import { Card } from "@components/card";
import { shuffleArray } from "@lib/shuffle";

export const getStaticProps = async () => {
  const stackOverflowAPI = await fetch(
    "https://api.stackexchange.com/2.3/questions/no-answers?page=1&pagesize=10&order=desc&max=1654128000&sort=activity&site=stackoverflow"
  );

  const gitHubAPI = await fetch("https://api.github.com/users/mindsdb/repos");

  const stackOverflowAPIResponse = await stackOverflowAPI.json();
  const gitHubAPIResponse = await gitHubAPI.json();

  const response = [...stackOverflowAPIResponse.items, ...gitHubAPIResponse];
  shuffleArray(response);
  return {
    props: { cardData: response },
  };
};

const Home = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {cardData.map((cd) => (
        <Card
          title={cd.title ? cd.title : cd.full_name}
          description={cd.description}
          image={
            cd.owner.avatar_url ? cd.owner.avatar_url : "/stackoverflow.svg"
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
