import ApartmentItem from "../../../molecules/Catalog/ApartmentItem";
import { CatalogListProps } from "./CatalogList.props";
import "./CatalogList..sass";
export default ({
  catalog = [],
  className = "",
}: CatalogListProps): JSX.Element => {
  return (
    <div className={`catalog-list ${className}`}>
      {catalog.length
        ? catalog.map(
            ({
              id,
              img = "/images/molecules/Catalog/Apartment/item-1.jpg",
              verified = false,
              ready = false,
              title = "",
              sleepingPlaces = 0,
              shower = 0,
              dimensions = 0,
              address = "",
              slug = "",
              price = 0,
            }) => (
              <ApartmentItem
                id={id}
                img={img}
                verified={verified}
                ready={ready}
                title={title}
                sleepingPlaces={sleepingPlaces}
                shower={shower}
                dimensions={dimensions}
                address={address}
                slug={slug}
                price={price}
              />
            )
          )
        : null}
    </div>
  );
};
