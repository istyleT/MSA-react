import React from "react";
import Ratio from 'react-bootstrap/Ratio';
const VideoElement = (props) => {
                    const {youtubeurl, titlevdo} = props;
                    return (
                                       <div  style={{ width: 780, height: 'auto' }} className="position-absolute top-50 start-50 translate-middle">
                                          <Ratio aspectRatio="16x9" >
                                          <iframe loading="eager" title={titlevdo}  src={youtubeurl} />
                                          </Ratio>
                                       </div>
                    );
};
export default VideoElement;

