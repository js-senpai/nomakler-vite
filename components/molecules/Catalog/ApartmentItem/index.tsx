import LazyLoad from 'react-lazyload';
// Import components
import {ApartmentsItemProps} from "./ApartmentsItem.props";
import styles from './ApartmentItem.module.sass'
import BlockContainer from "../../../containers/BlockContainer";
import Badge from "../../../atoms/Badge";
import LinkPrimary from "../../../atoms/Link/LinkPrimary";
const ApartmentItem = ({
                       img = '/images/molecules/Catalog/Apartment/item-1.jpg',
                       verified = true,
                       ready = true,
                       title = '',
                       sleepingPlaces = 0,
                       shower = 0,
                       dimensions = 0,
                       address = '',
                       slug = '',
                       price = 0,
                       }:ApartmentsItemProps):JSX.Element => {
    return (
        <BlockContainer  className={`${styles.apartmentItem}`}>
            <div className={styles.apartmentItem__img}>
                {
                    <LazyLoad height={232} offset={50}>
                        <img src={img}  alt={title} width={350} height={232}/>
                    </LazyLoad>
                }
                {
                    ready ? <Badge className={`${styles.apartmentItem__badge} ${styles.apartmentItem__badgeReadyRent}`}>Ready for rent</Badge>: null
                }
                {
                    verified ? <Badge className={`${styles.apartmentItem__badge} ${styles.apartmentItem__badgeVerified}`}>Verified</Badge>: null
                }
            </div>
            <div className={styles.apartmentItem__content}>
                <h3 className={styles.apartmentItem__title}>{title ? title: 'title'}</h3>
                <ul className={styles.apartmentItem__infoList}>
                    <li className={styles.apartmentItem__infoList__item}>
                        <div>{sleepingPlaces || 0}</div>
                    </li>
                    <li className={styles.apartmentItem__infoList__item}>
                        <div>{shower || 0}</div>
                    </li>
                    <li className={styles.apartmentItem__infoList__item}>
                        <div>{dimensions || 0}</div>
                    </li>
                </ul>
                <div className={styles.apartmentItem__address}>{ address ? <div>{address}</div>: null }</div>
                <footer className={styles.apartmentItem__footer}>
                    <div className={styles.apartmentItem__price}>
                        <div className={styles.apartmentItem__price__number}>{price || 0}</div>
                        <div className={styles.apartmentItem__price__text}>EUR/MON</div>
                    </div>
                    {
                        slug ? <LinkPrimary url={`/apartment/${slug}`}>More info</LinkPrimary>:null
                    }
                </footer>
            </div>

        </BlockContainer>
    )
}
export default ApartmentItem
