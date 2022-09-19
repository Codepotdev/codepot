import Grid from "@components/grid/Grid";
import Filters from "@components/filters/Filters";
import Tabs from "@components/tabs/Tabs";
import { useState } from "react";
import {
  tabsData,
  typeFilterData,
  languageFilterData,
} from "@data/data-share.js";

export async function getStaticProps() {
  const getRepositories = await fetch("http://localhost:8080/trending");

  const getRepositoriesResponse = await getRepositories.json();

  const response = [...getRepositoriesResponse];

  return {
    props: { cardData: response },
  };
}

function addLanguagesTolanguageFilterData(data) {
  data.forEach((cd, index) => {
    /**
     * Check if the language is already in the filtered list
     * index must be different from 0 since the array is empty at start
     */
    if (
      !languageFilterData.filter((e) => e.name === cd.language).length > 0 &&
      index !== 0
    ) {
      languageFilterData.push({
        name: cd.language,
        id: cd.language,
      });
    }
  });
}

export default function Popular({ cardData }) {
  addLanguagesTolanguageFilterData(cardData);

  const [typeFilter, setTypeFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState(languageFilterData);

  return (
    <>
      <div>
        <section className="flex m-4">
          <Tabs tabs={tabsData}></Tabs>
          <Filters filterData={typeFilterData}></Filters>
          <Filters filterData={languageFilter}></Filters>
        </section>
      </div>
      <Grid cardData={cardData}></Grid>
    </>
  );
}
