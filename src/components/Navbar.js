/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react';
import logo from '../assets/icons/logo.svg'
import Button from './Button';

const Navbar = () => {
    const [mobileMenu, setIsMobileMenu] = useState(null);

    return ( 
        <header className="w-full fixed z-50 md:relative">
            <div className="max-w-[1440px] bg-white mx-auto flex flex-row justify-between relative md:items-center p-5 xl:p-0">
                <img src={logo} alt="Easy Bank logo" />
                <button onClick={() => {setIsMobileMenu(!mobileMenu)}} className="md:hidden flex flex-col justify-around w-6 bg-white">
                    <span className="block w-full h-[1px] bg-gray-blue"></span>
                    <span className="block w-full h-[1px] bg-gray-blue"></span>
                    <span className="block w-full h-[1px] bg-gray-blue"></span>
                </button>
                <nav className={`${mobileMenu? 'block' : 'hidden'} absolute top-full w-full md:relative md:w-auto`}>
                    <ul className='flex flex-col justify-center py-7 gap-5 md:flex-row md:justify-between md:gap-5'>
                        {Links.map((item, i ) => 
                            <li key={i} className='text-dark-blue md:text-gray-blue cursor-pointer md:hover:text-dark-blue transition-colors duration-300 text-center'>{item}</li>
                        )}
                    </ul>
                </nav>
                <Button customClass={'hidden md:block'} label={'Contact'} />
            </div>
        </header>
     );
}


const Links = [
    'Home', 'About', 'Blog', 'Services'
]
 
export default Navbar;

