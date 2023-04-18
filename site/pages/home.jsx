import Head from "next/head";
import Card from "@components/card/Card";
import Hero from "@components/hero/Hero";
import Link from "next/link";

export async function getStaticProps() {
  const endpoint = "http://localhost:8080/explore";

  const getExplore = await fetch(endpoint);

  const getExploreResponse = await getExplore.json();

  return {
    props: {
      cardData: getExploreResponse,
      endpoint: endpoint,
    },
  };
}

export default function Home({ cardData }) {
  return (
    <>
      <Head>
        <title>Codepotdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <Hero></Hero>

        {/* Open-source projects section */}
        <section className="py-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Open-source Projects</h2>
            <Link href="/projects">
              <a className="text-blue-600 hover:text-blue-800">View All</a>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cardData.slice(0, 3).map((project) => (
              <Card
                id={project._id}
                type={project.type}
                name={project.name}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            ))}
          </div>
        </section>

        {/* Industry Insights section */}
        <section className="py-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Industry Insights</h2>
            <Link href="/industry-insights">
              <a className="text-blue-600 hover:text-blue-800">View All</a>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cardData.slice(4, 7).map((blog) => (
              <Card
                key={blog._id}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                tags={blog.tags}
              />
            ))}
          </div>
        </section>

        {/* Helping Hands section */}
        <section className="py-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Helping Hands</h2>
            <Link href="/helping-hands">
              <a className="text-blue-600 hover:text-blue-800">View All</a>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cardData.slice(7, 10).map((question) => (
              <Card
                key={question._id}
                title={question.title}
                description={question.description}
                tags={question.tags}
                image={question.image}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
