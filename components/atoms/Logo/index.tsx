import {LogoProps} from "./Logo.props";
import styles from './Logo.module.sass'
const Logo = ({src = '',className = '',priority = false,...props}:LogoProps):JSX.Element => {
  return (
      <div {...props} className={`${styles.logo} ${className}`}>
          <a href="/" >
              <img width={200} height={37} src={src}/>
          </a>
      </div>


  )
}
export default Logo
