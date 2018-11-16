import React from 'react';

const SRC = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Starry_night_Van_Gogh_detail_hills.jpg';

const MobileApp = (props) => (
  <div>
    <p>
      This is mobile version.
    </p>
    <img src={SRC} alt='big'/>
  </div>
);

export default MobileApp;