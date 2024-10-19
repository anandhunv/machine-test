import { useParams, useNavigate } from "react-router-dom"; 
import usePostDetail from "../utils/usePostDetail"; 

function DetailViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, error } = usePostDetail(id);

  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="min-h-screen p-5 bg-gray-100 flex items-center justify-center">
      {post ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.body}</p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-gray-500 text-sm">User ID: {post.userId}</span>
            <span className="text-gray-500 text-sm">Post ID: {post.id}</span>
          </div>
          <div className="mt-6">
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-700">Post not found.</div>
      )}
    </div>
  );
}

export default DetailViewPage;
