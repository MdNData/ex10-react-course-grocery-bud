import { SingleItem } from "../SingleItem/SingleItem";

export const Items = ({ items, removeItem, changeChecked }) => {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            id={item.id}
            name={item.name}
            completed={item.completed}
            removeItem={removeItem}
            changeChecked={changeChecked}
          />
        );
      })}
    </section>
  );
};
