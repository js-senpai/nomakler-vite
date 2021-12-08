import {LogoProps} from "./Logo.props";
import  './Logo.sass'
import LazyLoad from 'react-lazyload';
export default function Logo ({src = '',className = '',priority = false,...props}:LogoProps):JSX.Element  {
  return (
      <div {...props} className={`logo ${className}`}>
          <a href="/" >
              <LazyLoad height={37}>
                  <img width={200} height={37} src={src}/>
              </LazyLoad>
          </a>
      </div>
  )
}
