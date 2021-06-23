import React, { useState } from "react";

import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const Container = ({ person, fetchUser }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const showDetailIn = (e) => {
    if (e.currentTarget.classList.contains("icon")) {
      console.log("function showDetailIn called");
      console.log(e.currentTarget.dataset.label);
      const title = e.currentTarget.dataset.label;
      console.log(person[title]);
      setTitle(title);
      setContent(person[title]);
    }
  };
  return (
    <div className="container">
      <div className="container__top"></div>
      <img src={person.imageUrl} alt="image" className="container__image" />
      <div className="container__title">my {title ? title : "name"} is</div>
      <div className="container__content">
        {content ? content : person.name}
      </div>
      <div className="container__title-list">
        <button className="icon" data-label="name" onMouseOver={showDetailIn}>
          <FaUser />
        </button>
        <button className="icon" data-label="email" onMouseOver={showDetailIn}>
          <FaEnvelopeOpen />
        </button>

        <button className="icon" data-label="age" onMouseOver={showDetailIn}>
          <FaCalendarTimes />
        </button>
        <button className="icon" data-label="street" onMouseOver={showDetailIn}>
          <FaMap />
        </button>
        <button className="icon" data-label="phone" onMouseOver={showDetailIn}>
          <FaPhone />
        </button>
        <button
          className="icon"
          data-label="password"
          onMouseOver={showDetailIn}
        >
          <FaLock />
        </button>
      </div>
      <div className="container__cover">
        <button className="container__button" onClick={fetchUser}>
          random user
        </button>
      </div>
    </div>
  );
};
export default Container;
