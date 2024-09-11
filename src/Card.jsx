import { useState } from "react";
import img from "./bg.jpg";
import heart from "./heart.svg";
import "./card.css";
import pro from "./features/pro.png"
import dep from "./features/dep.png"
import emp from "./features/emp.png"
import lev from "./features/lev.png"
import tas from "./features/tas.png"

function Card() {
  const [width, setWidth] = useState(5);

  const onTap = () => {
    setWidth(width > 10 ? 5 : width + 1);
  };

  const features = [
    ["Attendance Management", emp],
    ["Project Progress", pro],
    ["Task Progress", tas],
    ["Leave Management", lev],
    ["Department Management", dep]
  ];



  return (
    <div className="card">
      <h2 className="title">TeamStream</h2>
        <div className="inner-card">
      <img className="logo" src={img} alt="Background" />
      <img
        className="heart"
        src={heart}
        style={{ width: `${10 * width}px` }}
        onClick={onTap}
        alt="Heart"
      />
        </div>
      <div className="features">
        <h1 className="feature">
        Employee Management System Features : <br /> 
        </h1>
        <div className="inner-features">
        <ul className="list-features">
    {features.map(([text,img], index) => (
      <div className="item">
        <li key={index}>{text}</li>
        <img className="list-img" src={img} alt="" />
      </div>
))}
</ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
