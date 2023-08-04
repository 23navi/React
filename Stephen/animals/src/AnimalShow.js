import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import horse from "./svg/horse.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import "./AnimalShow.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  horse,
  gator,
};

function AnimalShow({ type, index }) {
  const [like, setLike] = useState(0);
  const handleLike = () => {
    setLike(like + 1);
  };
  return (
    <div className="animal-show" onClick={handleLike}>
      <h1>{type}</h1>
      <img className="animal" src={svgMap[type]} alt={type} />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + like * 10 + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
