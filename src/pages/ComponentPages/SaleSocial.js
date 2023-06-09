import React from "react";
import SocialBranch from "./SubComponents/SocialBranch";
import DataSocialBranch from "../datapage/datasocialbranch";

const SaleSocial = () => {
  

  const datasocialbranch = DataSocialBranch.map((datasocial, index) => {
    return (
      <SocialBranch
        key={index}
        head={datasocial.head}
        linkfacebook={datasocial.linkfacebook}
        linkline={datasocial.linkline}
        linktiktok={datasocial.linktiktok}
        namefacebook={datasocial.namefacebook}
        nameline={datasocial.nameline}
        nametiktok={datasocial.nametiktok}
      />
    ); 
  });
  return (
    <div className="sale-contact bg-white" id="sale-promotion">
      <div className="container px-4 py-5" id="hanging-icons">
        <h4 className="pb-2 border-bottom fw-bold font-monospace border-danger border-2">
          MSA Contact
        </h4>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
          {datasocialbranch}
        </div>
      </div>
    </div>
  );
};
export default SaleSocial;
