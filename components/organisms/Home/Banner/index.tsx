
import styles from './Banner.module.sass'
import {BannerProps} from "./Banner.props";
import DefaultContainer from "../../../containers/DefaultContainer";
import LazyLoad from 'react-lazyload';
const Banner = ({img = '/images/organisms/Home/Banner/banner.jpg',title = '',description = '',...props}:BannerProps):JSX.Element => {
    return(
        <section  className={styles.banner}>
            <LazyLoad >
                <img
                    src={img}
                    className={styles.banner__img}
                />
            </LazyLoad>
            <DefaultContainer className="main-container relative">
                {title.length?<h1 className={styles.banner__title}>{title}</h1>: null}
                {description.length?<div className={styles.banner__description}>{description}</div>: null}
            </DefaultContainer>
        </section>
    )
}

export default Banner
