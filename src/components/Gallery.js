import React from "react";
import Image from "./Image";
import NoImages from "./NoImages";

const Gallery = ({ data }) => {
  const photos = data
  let images;
  let noImages;

  if (photos.length > 0) {
    images = photos.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />;
  }
  return (
    <div>
      <ul className="m-0">{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
