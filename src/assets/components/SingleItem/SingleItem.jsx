import { useState } from "react";

export const SingleItem = ({ id, name, completed, removeItem }) => {
  const [isChecked, setChecked] = useState(completed);

  return (
    <article className="single-item">
      <input
        type="checkbox"
        name=""
        id=""
        checked={isChecked}
        onChange={() => {
          setChecked(!isChecked);
        }}
      />
      <p style={isChecked ? { textDecoration: "line-through" } : {}}>{name}</p>
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
