import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Men = () => {
  const items = useSelector((store) => store.items.slice(0, 8));
  const inputValue = useSelector((store) => store.input.value).toLowerCase(); // Get input value and convert to lowercase for case-insensitive comparison

  // Filter items based on the input value
  const filteredItems = inputValue
    ? items.filter(
        (item) => item.company.toLowerCase().includes(inputValue) // Filter by item name
      )
    : items; // If input is empty, render all items
  return (
    <main>
      <div className="items-container">
        {filteredItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Men;
