import React from "react";
import "./ProfileImage.css"

const ProfileImage = () => {
  return (
    <div className="p-image">
      <div className="pic-container center">
        <img
          className="profile-pic"
          src="https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"
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
