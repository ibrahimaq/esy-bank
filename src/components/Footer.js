/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from '../assets/icons/logo-alt.svg'
import facebook from '../assets/icons/icon-facebook.svg'
import youtube from '../assets/icons/icon-youtube.svg'
import twitter from '../assets/icons/icon-twitter.svg'
import pinterest from '../assets/icons/icon-pinterest.svg'
import insta from '../assets/icons/icon-instagram.svg'

import Button from './Button'

const Footer = () => {
    return ( 
        <footer className="bg-dark-blue">
            <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-9 w-full md:px-5 mx-auto py-14">
                <div className="md:col-span-3 flex flex-col justify-between md:items-start gap-9">
                    <img src={logo} alt="Easybank logo" className='block mx-auto md:mx-0' />
                    <div className="flex flex-row gap-4 justify-center">
                        {socialIcons.map((item, i) => (
                            <>
                                <img src={item.img} alt={item.alt} key={i} />
                            </>
                        ))}
                    </div>
                </div>
                <ul className='md:col-span-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-10'>
                    {links.map((item, i) => (
                        <>
                            <li key={i} className='text-center md:text-start text-bodyCopy text-gray-blue-light'><a href="#">{item}</a></li>
                        </>
                    ))}
                </ul>
                <div className='md:col-span-4 flex flex-col items-center md:items-end'>
                    <Button label={'Get Started'} />
                    <p className='text-gray-blue md:text-end mt-9 md:mt-auto'>Easybank. All rights reserved</p>
                </div>
            </div>
        </footer>
     );
}

const links = ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'];

const socialIcons = [
    {
        img: facebook,
        alt: 'facebook'
    },
    {
        img: youtube,
        alt: 'youtube'
    },
    {
        img: twitter,
        alt: 'twitter',
    },
    {
        img: pinterest,
        alt: 'pinterest'
    },
    {
        img: insta,
        alt: 'instagram'
    }
]
 
export default Footer;