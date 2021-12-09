// Import components
import "./AdvantagesItem.sass";
import { AdvantagesItemProps } from "./AdvantagesItem.props";
import BlockContainer from "../../../containers/BlockContainer";
import LazyLoad from "react-lazyload";
export default ({
  img = "/images/organisms/Home/Advantages/search.svg",
  title = "",
  description = "",
  className = "",
  ...props
}: AdvantagesItemProps): JSX.Element => {
  return (
    <BlockContainer {...props} className={`advantages-item ${className}`}>
      {img.length ? (
        <div className="advantages-item__img">
          <LazyLoad height={68}>
            <img width={69} height={68} src={img} />
          </LazyLoad>
        </div>
      ) : null}
      {title ? <div className="advantages-item__title">{title}</div> : null}
      {description ? (
        <div className="advantages-item__description">{description}</div>
      ) : null}
    </BlockContainer>
  );
};
