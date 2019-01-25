import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img className={p.img} src="https://womanadvice.ru/sites/default/files/49/articles_main_big/2017-08-17_1657/luchshie_plyazhi_indonezii.jpg"/>
      </div>
      <div>
        <img className={p.img} src="http://img.animal-photos.ru/birds/wagtail/wagtail13.jpg"/>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
