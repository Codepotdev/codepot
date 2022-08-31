import Grid from "@components/grid/Grid";

export async function getStaticProps() {
  const stackOverflowAPI = await fetch(
    `${process.env.SO_API}&key=${process.env.SO_API_KEY}`
  );

  const stackOverflowAPIResponse = await stackOverflowAPI.json();

  const response = [...stackOverflowAPIResponse.items];

  return {
    props: { cardData: response },
  };
}

export default function Stackoverflow({ cardData }) {
  return (
    <>
      <Grid cardData={cardData}></Grid>
    </>
  );
}
