import React from "react";
import bannerImg from "../../assets/Rectangle_2.png";
const Banner = () => {
  const bannerBg = {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.6)
    ),url(${bannerImg})`,
    minHeight: "440px",
    backgroundSize: "100%,cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="d-flex align-items-end" style={bannerBg}>
      <div style={{ marginLeft: "15%", marginBottom: "5%" }}>
        <h1 className="fs-1 fw-bold text-white">Computer Engineer</h1>
        <p className="text-white">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;
