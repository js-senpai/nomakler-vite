import {LogoProps} from "./Logo.props";
import styles from './Logo.module.sass'
import {Link} from "../../../renderer/Link";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
const Logo = ({src = '',className = '',priority = false,...props}:LogoProps):JSX.Element => {
  return (
      <div {...props} className={`${styles.logo} ${className}`}>
          <Link href="/" >
                  {src.length ?<LazyLoadImage src={src}/>: 'Logo'}
          </Link>
      </div>


  )
}
export default Logo
