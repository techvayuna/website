import React, { useState } from 'react';
import image from './logo.png';
import video from './back.mp4';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.png';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import insta from './insta.png';
import link from './link.png';
import twitter from './twitter.png';
import frame1 from './Frame 1.png';
import poster1 from './poster (1).jpg';
import poster2 from './poster (2).jpg';
import poster3 from './poster (3).jpg';
import poster4 from './poster (4).jpg';
import poster5 from './poster (5).jpg';
import poster6 from './poster (6).jpg';
import poster7 from './poster (7).jpg';
import MobileComponent from './MobileComponent.js';
import DesktopComponent from './DesktopComponent.js';

function App() {
  
    const isMobile = window.innerWidth < 768; // Adjust the threshold as needed
  
    return (
      <div className="App">
        {isMobile ? <MobileComponent /> : <DesktopComponent />}
      </div>
    );
  }


export default App;
