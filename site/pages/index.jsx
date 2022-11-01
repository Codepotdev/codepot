import Grid from "@components/grid/Grid";
import Carousel from "@components/grid/Carousel";

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
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel cardData={cardData}></Carousel>
      </div>
      {/* <Grid cardData={cardData}></Grid> */}
    </>
  );
}
