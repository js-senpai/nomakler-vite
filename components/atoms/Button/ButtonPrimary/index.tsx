
import {ButtonPrimaryProps} from "./ButtonPrimary.props";

const ButtonPrimary = ({ block = true,className = '',children, ...props }:ButtonPrimaryProps) => {
   return (
       <button
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
export default ButtonPrimary
