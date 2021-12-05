import {LogoProps} from "./Logo.props";
import styles from './Logo.module.sass'
import LazyLoad from 'react-lazyload';
const Logo = ({src = '',className = '',priority = false,...props}:LogoProps):JSX.Element => {
  return (
      <div {...props} className={`${styles.logo} ${className}`}>
          <a href="/" >
              <LazyLoad height={37}>
                  <img width={200} height={37} src={src}/>
              </LazyLoad>
          </a>
      </div>


  )
}
export default Logo
