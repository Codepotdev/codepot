import Grid from "@components/grid/Grid";

export async function getStaticProps() {
  const endpoint = "http://localhost:8080/explore";

  const getExplore = await fetch(process.env.explore_url);

  const getExploreResponse = await getExplore.json();

  return {
    props: {
      cardData: getExploreResponse.expand,
      endpoint: endpoint,
    },
  };
}

export default function Explore({ cardData, endpoint }) {
  return (
    <div className="dashboard-container">
      <h1 className="p-2 text-color-primary">Explore Dashboard</h1>
      <Grid data={cardData} endpoint={endpoint}></Grid>
    </div>
  );
}
