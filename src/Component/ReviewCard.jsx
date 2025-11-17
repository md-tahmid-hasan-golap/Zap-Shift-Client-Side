import React from "react";

const ReviewCard = ({ reviewss }) => {
  console.log(reviewss);
  const { user_photoURL, review, role, userName } = reviewss;
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto">
      {/* Quote */}
      <p className="text-gray-700 mb-6 italic relative before:content-['“'] before:text-4xl before:text-gray-300">
        {review}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <img
          src={user_photoURL} // এখানে profile image দিবি
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Name and Role */}
        <div>
          <h4 className="font-semibold text-gray-900">{userName}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
