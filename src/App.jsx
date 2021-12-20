import React, { useEffect, useState } from "react";
import Posts from "./views/pages/Posts/Posts";
import { paginatedPagesArray } from "./functions/functions";
import PaginationComp from "./views/globalComponents/PaginationComp/PaginationComp";
import Loading from "./views/globalComponents/Loading/Loading";
import callAPI from "./api";
import { useDispatch, useSelector } from "react-redux";
import { bringPosts } from "./redux/slices/postsSlice";


function App() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [chosenPosts, setChosenPosts] = useState([]);
  const [page, setPage] = useState(1);

  let dispatch = useDispatch();

  const RawPosts = useSelector(state => state.postsReducer.posts)
  const isLoading = useSelector((state) => state.postsReducer.isLoading);

  function fetchPosts() {
    dispatch(bringPosts());
  }

  useEffect(() => {
    if (RawPosts.length > 0) {
      let pageCount = Array.from(
        { length: Math.ceil(RawPosts.length / 9) },
        (_, i) => i
      );
      setTotalPages(pageCount.length);
      setPosts(paginatedPagesArray(RawPosts, 9));
    }
  }, [RawPosts]);


  useEffect(() => {
    if (!isLoading && posts.length > 0) {
      setChosenPosts(
        posts.find((item, i) => {
          return i === parseInt(page - 1);
        })
      );
    }
  }, [page, posts, isLoading]);
  

  function handleChange(event, value) {
    setPage(value);
  }
  
  return (
    <div>
      {!isLoading ? (
        <>
          <div>
            <button onClick={fetchPosts}>Bring Posts</button>
          </div>
          <Posts posts={chosenPosts} />
          {totalPages > 1 && (
            <PaginationComp
              totalPages={totalPages}
              page={page}
              handleChange={handleChange}
            />
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
