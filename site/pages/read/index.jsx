import Grid from "@components/grid/Grid";
import json from "@data/news.json";

export async function getStaticProps() {
  const response = json;

  return {
    props: { cardData: response },
  };
}

export default function Read({ cardData }) {
  return (
    <>
      <Grid cardData={cardData}></Grid>
    </>
  );
}
