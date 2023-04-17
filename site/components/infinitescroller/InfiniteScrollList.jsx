import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollList = ({
  items,
  fetchMoreData,
  hasMore,
  renderItem,
  className,
}) => {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>There are no more items to display.</b>
        </p>
      }
      className={className}
    >
      {items.map(renderItem)}
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;
