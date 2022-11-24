import Grid from "@components/grid/Grid";

export async function getStaticProps() {
  const getExpand = await fetch("http://localhost:8080/expand");

  const getExpandResponse = await getExpand.json();

  return {
    props: {
      cardData: getExpandResponse.expand,
      totalPages: getExpandResponse.totalPages,
      currentPage: getExpandResponse.currentPage,
    },
  };
}

export default function Expand({ cardData, totalPages, currentPage }) {
  return (
    <div className="dashboard-container">
      <h1 className="p-2 text-color-primary">Expand Dashboard</h1>
      <Grid
        data={cardData}
        totalPages={totalPages}
        currentPage={currentPage}
      ></Grid>
    </div>
  );
}
