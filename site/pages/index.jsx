import { Card } from "@components/card";
import { shuffleArray } from "@lib/shuffle";
import Link from "next/link"

export const getStaticProps = async () => {
  const stackOverflowAPI = await fetch(
    `${process.env.SO_API}&key=${process.env.SO_API_KEY}`
  );
  const getRepositories = await fetch("http://localhost:8080/repositories");

  const stackOverflowAPIResponse = await stackOverflowAPI.json();
  const getRepositoriesResponse = await getRepositories.json();

  const response = [
    ...stackOverflowAPIResponse.items,
   ...getRepositoriesResponse,
  ];
  
  //let router = useRouter()
  
  shuffleArray(response);
  console.log(response)
  return {
    props: { cardData: response },
  };
};

const Home = ({ cardData }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {cardData.map((cd) => (
          <Link
          href={{
            pathname: `/contributions/${cd.id ? cd.id : cd.question_id}`,
            // TODO: simplify the mapping here and in <Card> props in one call
            query: {
              "data": JSON.stringify({
                title:cd.title ? cd.title : cd.name,
                description:cd.description,
                image: cd.url ? cd.url : cd.owner.profile_image,
                tags:cd.tags ? cd.tags : cd.topics,
                link:cd.link ? cd.link : cd.url,
                key:cd.question_id ? cd.question_id : cd.id,
              })
          }
           }}
          as={`/contributions/${cd.id ? cd.id : cd.question_id}`}
        >
          <a className="max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col p-2  shadow-2 border border-slate-300 hover:bg-gradient-to-tl bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer ">
            <Card
              title={cd.title ? cd.title : cd.full_name}
              description={cd.description}
              image={ cd.url ? cd.url : "/stackoverflow.svg" }
              tags={cd.tags ? cd.tags : cd.topics}
              link={cd.link ? cd.link : cd.url}
              key={cd.question_id ? cd.question_id : cd.id}
            />
          </a>
          </Link>
      ))}
    </div>
  );
};

export default Home;
