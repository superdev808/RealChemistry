import React from "react";
import PropTypes from "prop-types";

function WikiImage({ title, imageinfo }) {
  const openImage = () => {
    if (imageinfo[0] && imageinfo[0].url) {
      window.open(imageinfo[0] && imageinfo[0].url, "_blank");
    }
  };

  return (
    <div className="image-container" onClick={openImage}>
      <img
        src={imageinfo[0] && imageinfo[0].url}
        alt={title && title.replace("File:", "")}
      />
      <div className="image-info">
        <p>{imageinfo[0] ? imageinfo[0].user : ""}</p>
      </div>
    </div>
  );
}

WikiImage.protoTypes = {
  title: PropTypes.string,
  imageinfo: PropTypes.array,
};

export default WikiImage;
