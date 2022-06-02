
  
import { Card } from "@components/card";

export const getStaticProps = async () => {
  const res = await fetch('https://api.stackexchange.com/2.3/questions/no-answers?page=1&pagesize=12&order=desc&max=1654128000&sort=activity&site=stackoverflow');
  const data = await res.json();
  return {
    props: { question: data['items'] }
  }
}

const Home = ({ question }) => {
  return (
    <div className="p-10 grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-5">
      {question.map(q => (
        <Card
        key={q.question_id}
        title={q.title}
        description="test"
        image="data:image/png;base64,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"
        tags={q.tags}
      />
      ))}
    </div>
  );
}
 
export default Home;