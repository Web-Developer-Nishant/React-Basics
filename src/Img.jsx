import React from "react";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/270/300";
const img4 = "https://picsum.photos/290/300";

function Img() {
  return (
    <div className="img_div">
      <a href="https://picsum.photos/" target="_redirect">
        <img src={img1} alt="randomImages" />
        <img src={img2} alt="randomImages" />
        <img src={img3} alt="randomImages" />
        <img src={img4} alt="randomImages" />
      </a>
    </div>
  );
}

export default Img;