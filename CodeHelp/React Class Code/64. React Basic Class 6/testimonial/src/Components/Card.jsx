import React from "react";
import { faQuoteLeft, faQuoteRight } from "react-icons";

const Card = (props) => {
  let review = props.review;

  return (
    <div>
      <div>
        <img src={review.image} />
      </div>

      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>

      <div>
        <faQuoteLeft />
      </div>

      <div>
        <p>{review.text}</p>
      </div>

      <div>
        <faQuoteRight />
      </div>

      <div>
        <button>-</button>
        <button>+</button>
      </div>

      <div>
        <button>Surprise Me</button>
      </div>
    </div>
  );
};

export default Card;
