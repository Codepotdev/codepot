import Card from "@components/card/Card";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Grid({ data, totalPages, currentPage }) {
  const [cardData, setCardData] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMoreCards = async () => {
    const res = await fetch(`http://localhost:8080/expand`);
    const newCardData = await res.json();
    setCardData((cardData) => [...cardData, ...newCardData.expand]);
    setHasMore(() => currentPage === totalPages);
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
              id={cd.id}
              type={cd.type}
              name={cd.name}
              title={cd.title}
              description={cd.description}
              tags={cd.tags}
              image={cd.image}
            ></Card>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
