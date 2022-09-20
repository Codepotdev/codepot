import Grid from "@components/grid/Grid";
import Filters from "@components/filters/Filters";
import Tabs from "@components/tabs/Tabs";
import { useState } from "react";
import {
  tabsData,
  filtersTypeArray,
  languageFilterData,
} from "@data/data-share.js";

export async function getStaticProps() {
  const getRepositories = await fetch("http://localhost:8080/helpwanted");
  const getQuestions = await fetch("http://localhost:8080/stackoverflow");

  const getRepositoriesResponse = await getRepositories.json();
  const getQuestionsResponse = await getQuestions.json();

  const response = [...getRepositoriesResponse, ...getQuestionsResponse];

  return {
    props: { cardData: response },
  };
}

function addLanguagesTolanguageFilterData(data) {
  data.forEach((cd, index) => {
    /**
     * To avoid having duplactes in the array we have to
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

export default function HelpWanted({ cardData }) {
  addLanguagesTolanguageFilterData(cardData);

  const [typeFilter, setTypeFilter] = useState(filtersTypeArray[0]);
  const [languageFilter, setLanguageFilter] = useState(languageFilterData[0]);

  return (
    <>
      <div>
        <section className="flex m-4">
          <Tabs tabs={tabsData}></Tabs>
          <Filters
            filterData={filtersTypeArray}
            selected={typeFilter}
            onFilterDataChange={setTypeFilter}
            label={"Type"}
          ></Filters>
          <Filters
            filterData={languageFilterData}
            selected={languageFilter}
            onFilterDataChange={setLanguageFilter}
            label={"Language"}
          ></Filters>
        </section>
      </div>
      <Grid
        cardData={cardData}
        typeFilter={typeFilter}
        languageFilter={languageFilter}
      ></Grid>
    </>
  );
}
