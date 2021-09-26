import React from "react";
import AddMemberCard from "../AddedMemberCard/AddMemberCard";
import "./AddedMember.css";

const AddedMember = (props) => {
  const { members } = props;

  // initial total
  let total = 0;

  // looping members
  for (let singleMember of members) {
    total += singleMember.salary;
  }

  return (
    <div className="member-section p-4 border shadow">
      <p className="mb-3 fs-5 font-500 text-center">
        <i class="fas fa-users text-main"></i> Member Added :
        <span className="text-main"> {members.length}</span>
      </p>
      <p className="fs-5 font-500 text-center">
        Total Cost :<span className="text-main font-500"> ${total}</span>
      </p>
      <div className="added-member-container">
        {members.map((member) => (
          <AddMemberCard key={member.id} addMember={member} />
        ))}
      </div>
    </div>
  );
};

export default AddedMember;
