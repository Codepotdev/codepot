import { Card } from "@components/card";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.stackexchange.com/2.3/questions/no-answers?page=1&pagesize=12&order=desc&max=1654128000&sort=activity&site=stackoverflow"
  );
  const data = await res.json();
  return {
    props: { question: data["items"] },
  };
};

const Home = ({ question }) => {
  console.log(question);
  return (
    <div className="p-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5">
      {question.map((q) => (
        <Card
          key={q.question_id}
          title={q.title}
          description={q.owner.display_name}
          image="https://media-exp2.licdn.com/dms/image/sync/D4E27AQEFF7Kyk-R2kQ/articleshare-shrink_800/0/1654871641086?e=1656014400&v=beta&t=jUrARhHrHAKTRJchABwDM1whbOuLVfyZ_usuTFYOPWw"
          tags={q.tags}
        />
      ))}
    </div>
  );
};

export default Home;
