
import {ButtonPrimaryProps} from "./ButtonPrimary.props";

const ButtonPrimary = ({ block,className = '', ...props }:ButtonPrimaryProps) => {
   return (
       <button
           className={`
           button-a
           button-primary
           ${block && 'block'}
           ${block && 'w-full'}  
           ${className}
           `}
       />
   )
}
export default ButtonPrimary
