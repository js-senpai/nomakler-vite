import {
  faBed,
  faShower,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
// Import components
import { ApartmentsItemProps } from "./ApartmentsItem.props";
import "./ApartmentItem.sass";
import BlockContainer from "../../../containers/BlockContainer";
import Badge from "../../../atoms/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkPrimary from "../../../atoms/Link/LinkPrimary";
import Price from "../../../atoms/Price";
export default ({
  img = "/images/molecules/Catalog/Apartment/item-1.jpg",
  verified = true,
  ready = true,
  title = "",
  sleepingPlaces = 0,
  shower = 0,
  dimensions = 0,
  address = "",
  slug = "",
  price = 0,
}: ApartmentsItemProps): JSX.Element => {
  return (
    <BlockContainer className="apartment-item">
      <div className="apartment-item__img">
        {
          <LazyLoad height={232} offset={50}>
            <img src={img} alt={title} width={350} height={232} />
          </LazyLoad>
        }
        {ready ? (
          <Badge className="apartment-item__badge apartment-item__badge-ready-rent">
            Ready for rent
          </Badge>
        ) : null}
        {verified ? (
          <Badge className="apartment-item__badge apartment-item__badge-verified">
            Verified
          </Badge>
        ) : null}
      </div>
      <div className="apartment-item__content">
        <h3 className="apartment-item__title">{title ? title : "title"}</h3>
        <ul className="apartment-item__info-list">
          <li className="apartment-item__info-list__item">
            <FontAwesomeIcon icon={faBed} />
            <div>{sleepingPlaces || 0}</div>
          </li>
          <li className="apartment-item__info-list__item">
            <FontAwesomeIcon icon={faShower} />
            <div>{shower || 0}</div>
          </li>
          <li className="apartment-item__info-list__item">
            <FontAwesomeIcon icon={faRulerCombined} />
            <div>{dimensions || 0}</div>
          </li>
        </ul>
        <div className="apartment-item__address">
          {address.length ? <div>{address}</div> : null}
        </div>
        <footer className="apartment-item__footer">
          <Price price={price || 0} currency="EUR/MON" />
          {slug.length ? (
            <LinkPrimary url={`/apartment/${slug}`}>More info</LinkPrimary>
          ) : null}
        </footer>
      </div>
    </BlockContainer>
  );
};
