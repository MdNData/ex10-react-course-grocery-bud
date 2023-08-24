import { useState } from "react";
import { Form } from "./assets/components/Form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Items } from "./assets/components/Items/Items";

const App = () => {
  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  localStorage.setItem("items", JSON.stringify(items));

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    toast.error("Removed Item Successfully");
  };

  const changeChecked = (id) => {
    setItems(
      items.map((item) =>
        item.id !== id
          ? item
          : { name: item.name, completed: !item.completed, id: item.id }
      )
    );
  };

  return (
    <section className="section-center">
      <Form items={items} setItems={setItems} />
      <Items
        items={items}
        removeItem={removeItem}
        changeChecked={changeChecked}
      />
      <ToastContainer />
    </section>
  );
};

export default App;
