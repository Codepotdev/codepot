import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { incrementPage } from "../../src/store/slices/appSlice";
import { useDispatch } from "react-redux";

const InfiniteScrollList = ({
  items,
  fetchMoreData,
  hasMore,
  renderItem,
  className,
}) => {
  const dispatch = useDispatch();

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={() => {
        console.log('incremented');
        fetchMoreData;
        dispatch(incrementPage());
      }}
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
