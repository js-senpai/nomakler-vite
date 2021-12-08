// Import components
import {ActualApartmentsProps} from "./ActualApartments.props";
import  './ActualApartments.sass'
import DefaultContainer from "../../../containers/DefaultContainer";
import FullWidthContainer from "../../../containers/FullWidthContainer";

import ApartmentItem from "../../../molecules/Catalog/ApartmentItem";
export default function ActualApartments  ({apartments = [],...props}: ActualApartmentsProps):JSX.Element  {
  return (
      <section className="actual-apartments" {...props}>
          <DefaultContainer className="actual-apartments__container">
              <h2 className="actual-apartments__title" dangerouslySetInnerHTML={{__html: `The <span class='blue-text'>#1</span> Site for Renters`}} />
              <div className="actual-apartments__description">Choose from over 1 million apartments, houses, condos, and townhomes for rent.</div>
          </DefaultContainer>
          <FullWidthContainer>
              {apartments.length ?
                  <div className="actual-apartments__list">
                      {
                          apartments.map(({
                                              id,
                                              img = '/images/molecules/Catalog/Apartment/item-1.jpg',
                                              verified = false,
                                              ready = false,
                                              title = '',
                                              sleepingPlaces = 0,
                                              shower = 0,
                                              dimensions = 0,
                                              address = '',
                                              slug= '',
                                              price = 0,}) => (
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
                          ))
                      }
                  </div>
                  : null }
          </FullWidthContainer>
      </section>
  )
}
