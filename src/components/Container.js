import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotosContext';
import Gallery from './Gallery';
import Loader from './Loader';

const Container = ({searchTerm}) => {
  const {images, loading, getSearch} = useContext(PhotoContext)
  useEffect(() => {
    getSearch(searchTerm)
    // eslint-disable-next-line
  },[searchTerm])
  return (
    <div className='photo-container'>
      {loading ? <Loader/> : <Gallery data={images}/>}
    </div>
  );
};

export default Container;
