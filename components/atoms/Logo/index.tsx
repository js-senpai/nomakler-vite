import {LogoProps} from "./Logo.props";
import styles from './Logo.module.sass'
import {Link} from "../../../renderer/Link";

const Logo = ({src = '',className = '',priority = false,...props}:LogoProps):JSX.Element => {
  return (
      <div {...props} className={`${styles.logo} ${className}`}>
          <Link href="/" >
              <img width={200} height={37} src={src}/>
          </Link>
      </div>


  )
}
export default Logo
