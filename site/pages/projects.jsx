import Head from "next/head";
import Card from "@components/card/Card";
import SearchFilter from "@components/filters/SearchFilter";
import { useState } from "react";
import DashboardFilter from "@components/filters/DashboardFilter";

export async function getStaticProps() {
  const endpoint = "http://localhost:8080/explore";
  const getExpand = await fetch(endpoint);

  const getExpandResponse = await getExpand.json();

  return {
    props: {
      cardData: getExpandResponse.data,
      endpoint: endpoint,
    },
  };
}

export default function Projects({ cardData }) {
  const [filteredProjects, setFilteredProjects] = useState(cardData);
  const handleProjectSearch = (searchTerm) => {
    setFilteredProjects(
      cardData.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <>
      <Head>
        <title>Open Source Projects Dashboard</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Open Source Projects</h1>
        <div className="mb-8">
          <SearchFilter
            placeholder="Search projects..."
            onChange={(searchTerm) => handleProjectSearch(searchTerm)}
          />
        </div>
        <DashboardFilter></DashboardFilter>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project._id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              type={project.type}
              id={project._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
