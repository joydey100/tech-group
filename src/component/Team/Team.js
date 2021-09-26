import React, { useEffect, useState } from "react";
import AddedMember from "../AddedMember/AddedMember";
import Youtuber from "../Youtuber/Youtuber";

const Team = () => {
  // use State for youtuber team & added member list
  const [group, setGroup] = useState([]);
  const [memberList, setMemberList] = useState([]);

  //  useEffect for load Data of Youtubers
  useEffect(() => {
    fetch(`./youtubers.json`)
      .then((res) => res.json())
      .then((data) => setGroup(data));
  }, []);

  //   Handelling click button and add to right side
  const handleClick = (teamPerson) => {
    // Const added Member
    const addMemberArr = [...memberList, teamPerson];
    // Stop Duplicating member and set to the member list
    const mainMember = [...new Set(addMemberArr)];
    setMemberList(mainMember);
  };

  return (
    <div className="team-container container mt-5">
      <div className="row g-4">
        <div className="col-md-8">
          <div className="row g-3">
            {group.map((youtuber) => (
              <Youtuber
                key={youtuber.id}
                info={youtuber}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <AddedMember members={memberList} />
        </div>
      </div>
    </div>
  );
};

export default Team;
