import logo from './logo.svg';
import React, { useRef, useEffect, useState } from 'react';
import BusinessesList from './BusinessList';

import './App.css';

function App() {

  const imgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(null);

  useEffect(() => {
    if (imgRef.current) {
      // Accessing the width of the image using offsetWidth
      setImgWidth(imgRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="App">
      <div className='topcontent'>
        <img className='bannerimg' src="/searchbg.jpeg" height='250px' ref={imgRef}
        />
      </div>
      <div className='itemscontent'>
   
        <BusinessesList maxwidth={imgWidth} />
      </div>

    </div>
  );
}

export default App;
