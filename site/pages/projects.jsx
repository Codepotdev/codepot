import Head from "next/head";
import Card from "@components/card/Card";
import SearchFilter from "@components/filters/SearchFilter";
import { useState, useEffect } from "react";
import DashboardFilter from "@components/filters/DashboardFilter";
import InfiniteScrollList from "@components/infinitescroller/InfiniteScrollList";
import { useDispatch, useSelector } from "react-redux";
import {
  setParams,
  incrementPage,
  addToFetchedData,
  setFetchedData,
} from "../src/store/slices/appSlice";
import axios from "axios";

export async function getStaticProps() {
  const endpoint = "http://localhost:8080/explore";
  const getExpand = await fetch(endpoint);

  const getExpandResponse = await getExpand.json();

  return {
    props: {
      cardData: getExpandResponse,
    },
  };
}

export default function Projects({ cardData }) {
  const dispatch = useDispatch();
  const [hasMounted, setHasMounted] = useState(false);
  const apiEndpoints = useSelector((state) => state.app.apiEndpoints);
  const stateParams = useSelector((state) => state.app.params);
  const fetchedCards = useSelector((state) => state.app.cards);

  useEffect(() => {
    if (hasMounted) {
      fetch();
    } else {
      setHasMounted(true);
      dispatch(setFetchedData(cardData)); // Set initial fetched data from getStaticProps
    }
  }, [hasMounted, stateParams.tag]);

  const fetch = () => {
    const queryString = new URLSearchParams(stateParams).toString();
    const urlWithParams = `${apiEndpoints.explore}?${queryString}`;
    console.log(urlWithParams)
    axios.get(urlWithParams).then((res) => {
      console.log(res)
      if (stateParams.page === 1) {
        dispatch(setFetchedData(res.data)); // Replace fetched data in Redux store when the tag changes
      } else {
        dispatch(addToFetchedData(res.data)); // Add fetched data to the Redux store when loading more data with infinite scroll
      }
    });
  };

  const renderProjectCard = (fetchedCards) => (
    <Card
      key={fetchedCards._id}
      title={fetchedCards.title}
      description={fetchedCards.description}
      tags={fetchedCards.tags}
      image={fetchedCards.image}
      type={fetchedCards.type}
      id={fetchedCards._id}
    />
  );

  const handleLangChange = async (tag) => {
    dispatch(setParams({ page: 1, tag }));
  };

  return (
    <>
      <Head>
        <title>Open Source Projects Dashboard</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Open Source Projects</h1>
        {/* <div className="mb-8">
          <SearchFilter
            placeholder="Search projects..."
            onChange={(searchTerm) => handleProjectSearch(searchTerm)}
          />
        </div> */}
        <DashboardFilter
          selectedLanguage={stateParams.tag}
          onSelectedLanguageChange={(e) => handleLangChange(e)}
        ></DashboardFilter>
        <InfiniteScrollList
          items={fetchedCards}
          fetchMoreData={fetch}
          hasMore={true}
          renderItem={renderProjectCard}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        />
      </div>
    </>
  );
}
