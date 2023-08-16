import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]); // video data load hole data rakhbo
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      // database related work
      const database = getDatabase();
      // table er access
      const videosRef = ref(database, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(12)
      );

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
            // setVideos((prevVideos) => {
            //     return [...prevVideos, ...Object.values(snapshot.val())];
            //   });
          //or
          setVideos((prevVideos) => {
            const newVideoValues = Object.values(snapshot.val());
            const newVideos = newVideoValues.filter(
              (newVideo) =>
                !prevVideos.some(
                  (prevVideo) => prevVideo.youtubeID === newVideo.youtubeID
                )
            );
            return [...prevVideos, ...newVideos];
          });

        } else {
          // data not found
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
};

export default useVideoList;
