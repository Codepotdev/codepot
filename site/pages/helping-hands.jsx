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
  const endpoint = "http://localhost:8080/contribute";
  const getContribute = await fetch(endpoint);

  const getContributeResponse = await getContribute.json();

  return {
    props: {
      cardData: getContributeResponse,
    },
  };
}

export default function HelpingHands({ cardData }) {
  const dispatch = useDispatch();
  const [hasMounted, setHasMounted] = useState(false);
  const apiEndpoints = useSelector(
    (state) => state.app.apiEndpoints.contribute
  );
  const stateParams = useSelector((state) => state.app.params);
  const fetchedCards = useSelector((state) => state.app.cards);

  useEffect(() => {
    if (hasMounted) {
      fetch();
    } else {
      setHasMounted(true);
      dispatch(setFetchedData(cardData)); // Set initial fetched data from getStaticProps
    }
  }, [stateParams.tag]);

  const fetch = () => {
    const queryString = new URLSearchParams(stateParams).toString();
    const urlWithParams = `${apiEndpoints}?${queryString}`;
    axios.get(urlWithParams).then((res) => {
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

  const handleInfiniteScroll = () => {
    const newParams = {
      page: stateParams.page + 1,
      tag: stateParams.tag,
    };
    const queryString = new URLSearchParams(newParams).toString();
    const urlWithParams = `${apiEndpoints}?${queryString}`;

    axios.get(urlWithParams).then((res) => {
      dispatch(incrementPage());
      dispatch(addToFetchedData(res.data)); // Add fetched data to the Redux store when loading more data with infinite scroll
    });
  };

  return (
    <>
      <Head>
        <title>Industry Insights</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Industry Insights Dashboard</h1>
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
          fetchMoreData={handleInfiniteScroll}
          hasMore={true}
          renderItem={renderProjectCard}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        />
      </div>
    </>
  );
}
