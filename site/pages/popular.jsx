import Grid from "@components/grid/Grid";

export async function getStaticProps() {
  const getRepositories = await fetch("http://localhost:8080/trending");

  const getRepositoriesResponse = await getRepositories.json();

  const response = [...getRepositoriesResponse];

  return {
    props: { cardData: response },
  };
}

export default function Home({ cardData }) {
  return (
    <>
      <Grid cardData={cardData}></Grid>
    </>
  );
}