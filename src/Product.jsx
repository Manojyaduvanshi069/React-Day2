import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,399", "11,999", "1,599", "1,699"];
  let newPrices = ["10,399", "9,999", "1,299", "1,199"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["Intuitive surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Intuitive surface"],
    ["Long lasting battery", "Wireless"]
  ];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
