
const Button = ({label, customClass}) => {
    return ( 
        <button 
        className={` w-40 py-2 bg-gradient-to-r from-lime-green to-cyan rounded-3xl text-white
            ${customClass? customClass : ''}
        `}
        
        >
            {label}
        </button>
     );
}
 
export default Button;