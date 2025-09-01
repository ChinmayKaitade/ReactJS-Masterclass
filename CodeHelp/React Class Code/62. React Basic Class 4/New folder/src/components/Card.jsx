import React from "react";
import { FcLike } from "react-icons/fc";

const Card = (course) => {
  return (
    <div>
      <div>
        <img src={course.image.url}></img>

        <div>
          <button>
            <FcLike />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
