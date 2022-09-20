import Grid from "@components/grid/Grid";
import Filters from "@components/filters/Filters";
import Tabs from "@components/tabs/Tabs";
import { useState } from "react";
import { tabsData, filtersTypeArray } from "@data/data-share.js";
import { addLanguagesTolanguageFilterData } from "@lib/utils.js";

export async function getStaticProps() {
  const getRepositories = await fetch("http://localhost:8080/trending");

  const getRepositoriesResponse = await getRepositories.json();

  const response = [...getRepositoriesResponse];

  return {
    props: { cardData: response },
  };
}

export default function Popular({ cardData }) {
  const languageFilterList = addLanguagesTolanguageFilterData(cardData);
  const [typeFilter, setTypeFilter] = useState(filtersTypeArray[0]);
  const [languageFilter, setLanguageFilter] = useState(languageFilterList[0]);

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
            filterData={languageFilterList}
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
