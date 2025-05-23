import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const GardenTips = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const tipData = {
      title: form.title.value,
      plantType: form.plantType.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
      userEmail: user.email,
      userName: user.displayName,
    };

    const res = await fetch("http://localhost:4000/tips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipData),
    });

    const data = await res.json();
    if (data.insertedId) {
      toast.success("Your garden tip was shared successfully!");
      form.reset();
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">➕ Share a Garden Tip</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input type="text" name="title" placeholder="Tip Title" className="input input-bordered w-full" required />
        <input type="text" name="plantType" placeholder="Plant Type / Topic" className="input input-bordered w-full" required />
        
        <select name="difficulty" className="select select-bordered w-full" required>
          <option disabled selected>Difficulty Level</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full h-28" required></textarea>
        
        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
        
        <select name="category" className="select select-bordered w-full" required>
          <option disabled selected>Category</option>
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Watering</option>
          <option>Soil Health</option>
        </select>

        <select name="availability" className="select select-bordered w-full" required>
          <option disabled selected>Availability</option>
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" value={user?.email || "Not logged in"} className="input input-bordered w-full" readOnly />
          <input type="text" value={user?.displayName || "Not logged in"} className="input input-bordered w-full" readOnly />
        </div>

        <button className="btn btn-success mt-4 w-full">Submit Tip</button>
      </form>
    </div>
  );
};

export default GardenTips;
