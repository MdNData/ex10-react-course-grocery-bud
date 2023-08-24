import { useState } from "react";
import { Form } from "./assets/components/Form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Items } from "./assets/components/Items/Items";

const App = () => {
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="section-center">
      <Form items={items} setItems={setItems} />
      <Items items={items} removeItem={removeItem} />
      <ToastContainer />
    </section>
  );
};

export default App;
