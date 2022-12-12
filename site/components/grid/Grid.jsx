import Card from "@components/card/Card";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Filter from "../filters/Filter";

export default function Grid({ data, endpoint }) {
  const [cardData, setCardData] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tags, setTags] = useState(null);

  const getMoreCards = async () => {
    const res = await fetch(`${endpoint}?page=${currentPage + 1}?tag=${tags}`);
    const newCardData = await res.json();
    setCurrentPage(() => currentPage + 1);
    setHasMore(() => currentPage < newCardData.totalPages);
    setCardData((cardData) => [...cardData, ...newCardData.expand]);
  };

  const getFilteredCards = async (tags) => {
    if (tags.toLowerCase() === "all") {
      tags = "";
    } else {
      tags = tags.toLowerCase();
    }
    const res = await fetch(`${endpoint}?tag=${tags}`);
    const filteredCartData = await res.json();
    setTags(tags);
    setCardData(filteredCartData.expand);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={cardData.length}
        next={getMoreCards}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
      >
        <Filter onFilterChange={getFilteredCards}></Filter>
        <div className="grid my-8 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 h-fit">
          {cardData.length > 0 ? (
            cardData.map((cd, index) => (
              <Card
                key={index}
                id={cd?.id}
                type={cd?.type}
                name={cd?.name}
                title={cd?.title}
                description={cd?.description}
                tags={cd?.tags}
                image={cd?.image}
              ></Card>
            ))
          ) : (
            <h1 className="my-32 text-color-default">No data available..</h1>
          )}
          {}
        </div>
      </InfiniteScroll>
    </>
  );
}
