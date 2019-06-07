import React from "react";
import s from "./Friends.module.css";

const Friends = props => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Friends</h3>
      <div className={s.friends}>
        <div className={s.friend}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" />
          <div className="name">Bob</div>
        </div>
        <div className={s.friend}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" />
          <div className="name">Bob</div>
        </div>
        <div className={s.friend}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" />
          <div className="name">Bob</div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
