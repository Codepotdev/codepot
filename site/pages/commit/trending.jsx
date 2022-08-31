import Home from "@pages/index.jsx";
import shuffleArray from "@lib/shuffle";

export async function getStaticProps() {
  const getRepositories = await fetch("http://localhost:8080/trending");

  const getRepositoriesResponse = await getRepositories.json();

  const response = [...getRepositoriesResponse];

  return {
    props: { cardData: response },
  };
}

export default Home;
