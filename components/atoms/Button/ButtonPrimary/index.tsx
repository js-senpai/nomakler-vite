
import {ButtonPrimaryProps} from "./ButtonPrimary.props";
import './ButtonPrimary.sass'
export default  function ButtonPrimary  ({ block = true,className = '',children, ...props }:ButtonPrimaryProps) {
   return (
       <button
           {...props}
           className={`
           button-a
           button-primary
           ${block ? 'block': ''}
           ${block ? 'w-full': ''}  
           ${className}
           `}
       >{children}</button>
   )
}
