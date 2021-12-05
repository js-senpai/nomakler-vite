import React from 'react'
import styles from './Copyright.module.sass'
import LazyLoad from 'react-lazyload';
const Copyright = ({className = '',...props}):JSX.Element => {
    return (
        <a href="https://michaelstudioo.com/" target="__blank" className={`${styles.copyright}`}>
            <span>Developed in</span>
            <div  className={styles.copyright__img}>
                <LazyLoad height={22}>
                    <img width={31} height={22} src={'/images/molecules/Footer/Copyright/logo.png'} />
                </LazyLoad>
            </div>
            <span>Michaelstudioo</span>
        </a>
    )
}
export default Copyright
