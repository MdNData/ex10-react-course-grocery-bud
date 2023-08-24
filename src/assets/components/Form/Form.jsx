import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";

export const Form = ({ items, setItems }) => {
  const [insert, setInsert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (insert == "") {
      toast.warning("Unable to register empty strings.");
      return;
    }

    setItems((state) => [
      ...state,
      { name: insert, completed: false, id: nanoid() },
    ]);

    setInsert("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={insert}
          onChange={(e) => {
            setInsert(e.target.value);
          }}
        />
        <button className="btn">Submit</button>
      </div>
    </form>
  );
};
