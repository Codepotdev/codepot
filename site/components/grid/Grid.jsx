import Card from "@components/card/Card";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { cardData as test } from "@data/data-share";

export default function Grid({ data, endpoint }) {
  const [cardData, setCardData] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getMoreCards = async () => {
    const res = await fetch(`${endpoint}?page=${currentPage}`);
    const newCardData = await res.json();
    setHasMore(() => currentPage < newCardData.totalPages);
    setCurrentPage(() => currentPage + 1);
    setCardData((cardData) => [...cardData, ...newCardData.expand]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={cardData.length}
        next={getMoreCards}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {cardData.map((cd, index) => (
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
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
