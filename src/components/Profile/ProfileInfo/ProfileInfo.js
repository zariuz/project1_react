import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://womanadvice.ru/sites/default/files/49/articles_main_big/2017-08-17_1657/luchshie_plyazhi_indonezii.jpg"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
