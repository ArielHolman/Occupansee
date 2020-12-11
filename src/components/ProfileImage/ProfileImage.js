import React from "react";
import "./ProfileImage.css";

const ProfileImage = () => {
  return (
    <div className="p-image">
      <div className="pic-container center">
        <img
          className="profile-pic"
          alt="entrance to west pecan coffee and beer in pflugerville,tx "
          src="https://cdn11.bigcommerce.com/s-7dfz0/images/stencil/1280x1280/products/4384/7652/PFUTX010_westpecan__49383.1582221551.jpg?c=2"
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
