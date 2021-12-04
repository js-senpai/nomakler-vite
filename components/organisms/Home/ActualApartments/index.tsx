// Import components
import {ActualApartmentsProps} from "./ActualApartments.props";
import styles from './ActualApartments.module.sass'
import DefaultContainer from "../../../containers/DefaultContainer";
import FullWidthContainer from "../../../containers/FullWidthContainer";

import ApartmentItem from "../../../molecules/Catalog/ApartmentItem";
const ActualApartments = ({apartments = [],...props}: ActualApartmentsProps):JSX.Element => {
  return (
      <section className={`${styles.actualApartments}`} {...props}>
          <DefaultContainer className={`${styles.actualApartments__container}`}>
              <h2 className={styles.actualApartments__title} dangerouslySetInnerHTML={{__html: `The <span class='blue-text'>#1</span> Site for Renters`}} />
              <div className={styles.actualApartments__description}>Choose from over 1 million apartments, houses, condos, and townhomes for rent.</div>
          </DefaultContainer>
          <FullWidthContainer>
              {apartments.length ?
                  <div className={styles.actualApartments__list}>
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
export default ActualApartments
