import React from "react";

export default function TestemionialsCard({ props }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-start">
      <div className="card-body">
        <span>{props.name}</span>
        <div className="rating" id="testemionialsCard">
          <input
            type="radio"
            className="mask mask-star-2 bg-green-500"
            checked={props.stars === 1}
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-green-500"
            checked={props.stars === 2}
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-green-500"
            checked={props.stars === 3}
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-green-500"
            checked={props.stars === 4}
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-green-500"
            checked={props.stars === 5}
          />
        </div>
        <p>{props.des}</p>
      </div>
    </div>
  );
}
