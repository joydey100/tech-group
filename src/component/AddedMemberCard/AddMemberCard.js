import React from "react";
import "./AddedMemberCard.css";

const AddMemberCard = (props) => {
  const { img, name, youtube_channel } = props.addMember;
  return (
    <div className="add-member-card bg-white shadow d-flex align-items-center my-4 p-2 rounded-pill">
      <img
        src={img}
        alt="added-member-img"
        className="added-member-img d-block"
      />
      <div className="member-info ms-3">
        <p className="mb-1">
          <span className="text-main channel-name">{youtube_channel}</span>
        </p>
        <small>{name}</small>
      </div>
    </div>
  );
};

export default AddMemberCard;
