import { Card } from "@components/card";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.stackexchange.com/2.3/questions/no-answers?page=1&pagesize=12&order=desc&max=1654128000&sort=activity&site=stackoverflow"
  );
  const data = await res.json();
  return {
    props: { questions: data["items"] },
  };
};

const Home = ({ questions }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {questions.map((question) => (
        <Card
          key={question.questionuestion_id}
          title={question.title}
          description={question.owner.display_name}
          image={question.owner.profile_image}
          tags={question.tags}
        />
      ))}
    </div>
  );
};

export default Home;
