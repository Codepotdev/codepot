import Grid from "@components/grid/Grid";
export async function getStaticProps() {
  const endpoint = "http://localhost:8080/expand";
  const getExpand = await fetch(process.env.expand_url);

  const getExpandResponse = await getExpand.json();

  return {
    props: {
      cardData: getExpandResponse.expand,
      endpoint: endpoint,
    },
  };
}

export default function Expand({ cardData, endpoint }) {
  return (
    <div className="dashboard-container">
      <h1 className="p-2 text-color-primary">Expand Dashboard</h1>
      <Grid data={cardData} endpoint={endpoint}></Grid>
    </div>
  );
}
