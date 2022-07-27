import { Card } from "@components/card";
import { getLinkPreview } from "link-preview-js";

export const getStaticProps = async () => {
  const stackOverflowAPI = await fetch(
    "https://api.stackexchange.com/2.3/questions/no-answers?page=1&pagesize=64&order=desc&max=1654128000&sort=activity&site=stackoverflow"
  );

  const stackOverflowAPIResponse = await stackOverflowAPI.json();

  for (const item of stackOverflowAPIResponse.items) {
    item.metadata = await getLinkPreview(item.link);
  }

  return {
    props: { questions: stackOverflowAPIResponse.items },
  };
};

const Home = ({ questions }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {questions.map((question) => (
        <Card
          key={question.question_id}
          title={question.title}
          description={question.owner.display_name}
          profileImage={question.owner.profile_image}
          tags={question.tags}
          link={question.link}
          metadata={question.metadata}
        />
      ))}
    </div>
  );
};

export default Home;
