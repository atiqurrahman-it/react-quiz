import React, { useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import useVideoList from "../hook/useVideoList";
//InfiniteScroll
import InfiniteScroll from "react-infinite-scroll-component";
const Videos = () => {
  const [page, setPage] = useState(1);
  const { videos, loading, error, hasMore } = useVideoList(page);

  return (
    <div>
      {/* video from firebase real time database  */}

      {/* <InfiniteScroll>

      </InfiniteScroll> */}

      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          loader={<h4>Loading...</h4>}
          next={() => setPage(page + 8)}
          hasMore={hasMore}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <>
                <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                  <Video
                    title={video.title}
                    id={video.youtubeID}
                    noq={video.noq}
                  />
                </Link>
              </>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div> no data found </div>}
      {error && <div> there was an error !</div>}
      {loading && <div> loading ....</div>}
    </div>
  );
};

export default Videos;
