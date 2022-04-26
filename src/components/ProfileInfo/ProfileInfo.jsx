import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.S}
          src="https://images.sadhguru.org/d/46272/1633199491-1633199490440.jpg"
        />
      </div>
<div className={style.descriptionBlock}>
    ava+ description
</div>
    </div>
  );
};

export default ProfileInfo;
