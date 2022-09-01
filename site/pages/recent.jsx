import Grid from "@components/grid/Grid";
import shuffleArray from "@lib/shuffle";

export async function getStaticProps() {
  const getHelpWanted = await fetch("http://localhost:8080/helpwanted");
  const getQuestions = await fetch("http://localhost:8080/stackoverflow");
  const getTrending = await fetch("http://localhost:8080/trending");

  const getTrendingResponse = await getTrending.json();
  const getHelpWantedResponse = await getHelpWanted.json();
  const getQuestionsResponse = await getQuestions.json();

  const response = [
    ...getTrendingResponse,
    ...getHelpWantedResponse,
    ...getQuestionsResponse,
  ];

  shuffleArray(response);

  return {
    props: { cardData: response },
  };
}

export default function Recent({ cardData }) {
  return (
    <>
      <Grid cardData={cardData}></Grid>
    </>
  );
}
