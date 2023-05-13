// import React from "react";
// const VideoElement = (props) => {
//                     const {youtubeurl, titlevdo} = props;
//                     return (
//                                       <div className="vdo-element carousel-item ratio ratio-16x9 active">
//                                          <iframe loading="eager" title={titlevdo}  src={youtubeurl} className="vdo-iframe d-block w-100" />
//                                       </div>
//                     );
// };
// export default VideoElement;



import React from "react";
import Ratio from 'react-bootstrap/Ratio';

function VideoElement(props) {
   const {youtubeurl, titlevdo} = props;
  return (
      <Ratio aspectRatio="16x9" className="mySlides fade">
          <iframe loading="eager" title={titlevdo}  src={youtubeurl} className="vdo-iframe"/>
      </Ratio>
  );
}

export default VideoElement;
