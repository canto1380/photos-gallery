import React, { useState, createContext } from "react";
import axios from "axios";

export const PhotoContext = createContext();

const PhotosContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSearch = async (query) => {

    const apiKey ='636e1481b4f3c446d26b8eb6ebfe7127'
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    // fetch(url)
    //   .then((response) => {
    //     console.log(response.data)
    //     setImages(response.data.photos.photo);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .get(url)
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PhotoContext.Provider value={{ images, loading, getSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotosContextProvider;
