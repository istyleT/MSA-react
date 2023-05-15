import React from "react";
const VideoElement = (props) => {
                    const {youtubeurl, titlevdo} = props;
                    return (
                                      <div className="vdo-element ratio ratio-16x9 active">
                                         <iframe loading="eager" title={titlevdo}  src={youtubeurl} className="vdo-iframe d-block w-100" />
                                      </div>
                    );
};
export default VideoElement;

