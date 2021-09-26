import React from "react";
import "./Youtuber.css";

const Youtuber = (props) => {
  // Destructuring essential elements
  const { img, name, youtube_channel, subscriber, role, origin, salary } =
    props.info;
  const { handleClick } = props;

  return (
    <div className="col-md-4">
      <div className="card h-100 p-3 shadow">
        <img src={img} alt="youtuber" className="d-block mx-auto mb-3" />
        <p className="mb-3 text-center">
          <i class="fab fa-youtube text-danger youtube-logo"></i>
          <span className="text-main channel"> {youtube_channel} </span>
        </p>
        <p className="mb-2">Name: {name} </p>
        <p className="mb-2">SubScriber: {subscriber}</p>
        <p className="mb-2">Role: {role}</p>
        <p className="mb-2">Origin: {origin}</p>
        <p className="mb-3">Salary: ${salary}</p>
        <button
          className="bg-main btn text-white"
          onClick={() => handleClick(props.info)}
        >
          <i class="fas fa-user-plus"></i> Add to your Team
        </button>
      </div>
    </div>
  );
};

export default Youtuber;
