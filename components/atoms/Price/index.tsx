import { PriceProps } from "./Price.props";
import "./Price.sass";
export default ({
  price = 0,
  currency = "eur/mon",
  className = "",
  ...props
}: PriceProps): JSX.Element => {
  return (
    <div {...props} className={`apartment-price ${className}`}>
      <div className="apartment-price__number">{price || 0}</div>
      <div className="apartment-price__text">{currency || "EUR/MON"}</div>
    </div>
  );
};
