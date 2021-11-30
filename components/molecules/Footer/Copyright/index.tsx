import React from 'react'
import styles from './Copyright.module.sass'

const Copyright = ({className = '',...props}):JSX.Element => {
    return (
        <a href="https://michaelstudioo.com/" target="__blank" className={`${styles.copyright}`}>
            <span>Developed in</span>
            <div  className={styles.copyright__img}>
                <img   width={31} height={22} src={'/images/molecules/Footer/Copyright/logo.png'} />
            </div>
            <span>Michaelstudioo</span>
        </a>
    )
}
export default Copyright
