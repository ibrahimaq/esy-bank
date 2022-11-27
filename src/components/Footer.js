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
            <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-9 w-3/4 md:w-full md:px-5 mx-auto py-14">
                <div className="flex flex-col justify-between gap-9">
                    <img src={logo} alt="Easybank logo" className='w-1/2 mx-auto md:w-2/5' />
                    <div className="flex flex-row gap-4 justify-center">
                        {socialIcons.map((item, i) => (
                            <>
                                <img src={item.img} alt={item.alt} key={i} />
                            </>
                        ))}
                    </div>
                </div>
                <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-10'>
                    {links.map((item, i) => (
                        <>
                            <li key={i} className='text-center md:text-start text-bodyCopy text-gray-blue-light'><a href="#">{item}</a></li>
                        </>
                    ))}
                </ul>
                <div className='flex flex-col items-center md:items-end'>
                    <Button label={'Get Started'} />
                    <p className='text-gray-blue mt-auto md:text-end'>Easybank. All rights reserved</p>
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