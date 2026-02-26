import React, { useState } from "react";
import PostCard from "./PostCard";

const PostOffices = ({ pincode, data }) => {
  const [search, setSearch] = useState("");

  const filteredPostOffices = data.PostOffice.filter((office) =>
    office.Name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full max-w-5xl">
      <h1 className="text-2xl mb-2">
        <span className="font-bold">PinCode:</span> {pincode}
      </h1>

      <h1 className="text-2xl mb-5">
        <span className="font-bold">Message:</span> {data.Message}
      </h1>

      <input
        placeholder="Search by Post Office Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredPostOffices.length === 0 ? (
        <p className="text-red-500 text-lg">
          Couldn’t find the postal data you’re looking for…
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredPostOffices.map((postOffice) => (
            <PostCard key={postOffice.Name} postOffice={postOffice} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostOffices;
