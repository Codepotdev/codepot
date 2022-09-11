import Grid from "@components/grid/Grid";

export async function getStaticProps() {
  const getRepositories = await fetch("http://localhost:8080/helpwanted");
  const getQuestions = await fetch("http://localhost:8080/stackoverflow");

  const getRepositoriesResponse = await getRepositories.json();
  const getQuestionsResponse = await getQuestions.json();

  const response = [...getRepositoriesResponse, ...getQuestionsResponse];

  return {
    props: { cardData: response },
  };
}

export default function HelpWanted({ cardData }) {
  return (
    <>
      <Grid cardData={cardData}></Grid>
    </>
  );
}
