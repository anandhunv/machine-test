import { useState, useEffect } from "react";
import { DETAILVIEW_API } from "./constants";


const usePostDetail = (id) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${DETAILVIEW_API}${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, error };
};

export default usePostDetail;
