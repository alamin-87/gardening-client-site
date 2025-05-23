import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await fetch("http://localhost:4000/tips");
        const data = await res.json();
        const publicTips = data.filter(tip => tip.availability === "Public");
        setTips(publicTips);
      } catch (err) {
        console.error("Error fetching tips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-700">🌿 Public Garden Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div key={tip._id} className="card bg-base-100 shadow-xl">
            <figure className="h-48 overflow-hidden">
              <img src={tip.image} alt={tip.title} className="w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-green-800">{tip.title}</h3>
              <p className="text-sm text-gray-500">Category: {tip.category}</p>
              <p className="text-sm text-gray-500">Difficulty: {tip.difficulty}</p>
              <div className="card-actions justify-end">
                <Link to={`/tipDetails/${tip._id}`} className="btn btn-sm btn-outline btn-info">
                  👁️ See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {tips.length === 0 && (
        <div className="text-center text-gray-500 mt-6">No public tips available at the moment.</div>
      )}
    </div>
  );
};

export default BrowseTips;
