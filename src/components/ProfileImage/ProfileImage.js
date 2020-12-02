import React from "react";
import "./ProfileImage.css"

const ProfileImage = () => {
  return (
    <div className="p-image">
      <div className="pic-container center">
        <img
          className="profile-pic"
          src="https://nitrocdn.com/CNKIidEmUjTyxuxShKseLbFuedcNDbhI/assets/static/optimized/rev-3c0aa26/wp-content/uploads/2019/10/Screen-Shot-2019-10-14-at-11.51.29-am.jpg"
        />
      </div>
      <div className="upload-button center">
        {/* <i className="fa fa-camera"></i> */}
        <input className="file-upload" type="file" accept="image/*" />
      </div>
    </div>
  );
};

export default ProfileImage;

// className="db h4 w-70"