import { useLoaderData } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const TipDetails = () => {
  const tip = useLoaderData();
  const { user } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!user) return alert("Please log in to like this tip.");
    setLiked(!liked);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{tip.title}</h1>
      <p className="text-gray-500 mb-2 italic">Category: {tip.category}</p>
      <p className="text-gray-500 mb-2 italic">Plant Type: {tip.plantType}</p>
      <p className="text-gray-600 mb-4">{tip.description}</p>

      {tip.image && (
        <div className="mb-6">
          <img
            src={tip.image}
            alt={tip.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}

      <div className="mb-6">
        <p><span className="font-semibold">Difficulty:</span> {tip.difficulty}</p>
        <p><span className="font-semibold">Availability:</span> {tip.availability}</p>
      </div>

      <div className="mb-6 text-sm text-gray-500">
        <p>Posted by: <span className="font-medium">{tip.userName}</span></p>
        <p>Email: <span className="text-blue-600">{tip.userEmail}</span></p>
      </div>

      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded-lg transition ${
          liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {liked ? "♥ Liked" : "♡ Like"}
      </button>
    </div>
  );
};

export default TipDetails;
