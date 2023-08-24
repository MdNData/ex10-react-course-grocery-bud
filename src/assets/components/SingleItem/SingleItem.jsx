import { useState } from "react";

export const SingleItem = ({
  id,
  name,
  completed,
  removeItem,
  changeChecked,
}) => {

  return (
    <article className="single-item">
      <input
        type="checkbox"
        name=""
        id=""
        checked={completed}
        onChange={() => {
          changeChecked(id);
        }}
      />
      <p style={completed ? { textDecoration: "line-through" } : {}}>{name}</p>
      <button
        className="remove-btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};
