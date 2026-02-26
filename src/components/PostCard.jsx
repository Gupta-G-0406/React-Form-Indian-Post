import React from "react";

const PostCard = ({ postOffice }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{postOffice.Name}</h2>

      <p>
        <span className="font-semibold">Branch Type:</span>{" "}
        {postOffice.BranchType}
      </p>

      <p>
        <span className="font-semibold">Delivery Status:</span>{" "}
        {postOffice.DeliveryStatus}
      </p>

      <p>
        <span className="font-semibold">District:</span> {postOffice.District}
      </p>

      <p>
        <span className="font-semibold">Division:</span> {postOffice.Division}
      </p>

      <p>
        <span className="font-semibold">State:</span> {postOffice.State}
      </p>
    </div>
  );
};

export default PostCard;
