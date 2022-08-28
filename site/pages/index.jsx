import Grid from "@components/grid/Grid";
import shuffleArray from "@lib/shuffle";

export async function getStaticProps() {
  // const stackOverflowAPI = await fetch(
  //   `${process.env.SO_API}&key=${process.env.SO_API_KEY}`
  // );

  const getRepositories = await fetch("http://localhost:8080/trending");

  // const stackOverflowAPIResponse = await stackOverflowAPI.json();
  const getRepositoriesResponse = await getRepositories.json();

  const response = [
    // ...stackOverflowAPIResponse.items,
    // TODO: Remap properties inside the scrapers
    ...getRepositoriesResponse[0].daily,
  ];

  shuffleArray(response);
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
