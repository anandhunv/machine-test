    import { Link, useNavigate } from "react-router-dom";
    import usePosts from "../utils/usePosts"; 
    import { useState } from "react"; 

    function ListViewPage() {
    const { posts, loading, error } = usePosts();
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const navigate = useNavigate(); 

    const handleLogout = () => {
        setIsLoggedIn(false); 
        navigate("/"); 
    };

    if (loading) return <div className="text-center text-lg">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <div className="min-h-screen p-5 bg-gradient-to-r from-blue-200 to-purple-200">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">List of Posts</h1>

        {/* Logout Button */}
        {isLoggedIn && (
            <div className="text-center mb-4">
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
            >
                Logout
            </button>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
                <Link to={`/detail/${post.id}`} className="text-white bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-md shadow">
                Read More
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default ListViewPage;
