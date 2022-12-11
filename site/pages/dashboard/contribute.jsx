import Grid from "@components/grid/Grid";

export async function getStaticProps() {
  const endpoint = "http://localhost:8080/contribute";

  const getContribute = await fetch(process.env.contribute_url);

  const getContributeResponse = await getContribute.json();

  return {
    props: {
      cardData: getContributeResponse.expand,
      endpoint: endpoint,
    },
  };
}

export default function Contribute({ cardData, endpoint }) {
  return (
    <div className="dashboard-container">
      <h1 className="p-2 text-color-primary">Contribute Dashboard</h1>
      <Grid data={cardData} endpoint={endpoint}></Grid>
    </div>
  );
}
