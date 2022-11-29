
const Button = ({label, customClass}) => {
    return ( 
        <button 
        className={` w-40 py-2 bg-gradient-to-r from-lime-green to-cyan rounded-3xl text-white relative
            ${customClass? customClass : ''}
        `}
        
        >
            <div className="absolute w-full h-full hover:bg-white/50 top-0 rounded-3xl"></div>
            {label}
        </button>
     );
}
 
export default Button;