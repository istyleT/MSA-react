import React from "react";
import styled from "styled-components";
import DataReward from "../datapage/datareward";


const Rewardelement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  `

const RewardElement = (props) => {
  const {title, content, urlimagesreward, reverse} = props;
   return (
   <Rewardelement reverse={reverse}>
    <div className="col-md-7 d-flex flex-column justify-content-center p-5">
      <h6 className="featurette-heading border-bottom border-danger pb-2">{title}</h6>
      <p className="lead">{content}</p>
    </div>
    <div className="col-md-5 my-1">
      <img loading="lazy" alt="reward" src={urlimagesreward} className="featurette-image img-fluid mx-auto border border-light  rounded-circle px-3" width="400" height="400"/>
    </div>
  </Rewardelement>
   );
}

const Reward = () => {
  const DataRewardList = DataReward.map((datareward, index) => {
    return (
      <RewardElement
          key={index}
          title={datareward.title}
          content={datareward.content}
          urlimagesreward={datareward.urlimagesreward}
          reverse={datareward.reverse}
      />
    );
 });

                    return (
<section className="section-reward p-4 bg-white" id="sec-reward">
    <h1 className="d-flex justify-content-center p-4 fw-bold lh-1 font-monospace">Reward & Archiement</h1>
     {DataRewardList}
  </section>
                    );
};
export default Reward;