import Grid from "@components/grid/Grid";

export async function getStaticProps() {
  const endpoint = "http://localhost:8080/explore";

  const getExplore = await fetch(endpoint);

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
      <h1 className="p-2 text-color-primary mb-4">Explore Dashboard</h1>
      <Grid data={cardData} endpoint={endpoint}></Grid>
    </div>
  );
}
