import heroBgMobile from '../assets/images/bg-intro-mobile.svg'
import heroBgDesktop from '../assets/images/bg-intro-desktop.svg'
import heroMobiles from '../assets/images/image-mockups.png'
import Button from './Button';

const Hero = () => {

    return ( 
        <section className='w-full overflow-x-clip'>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse'>
        
                <>
                {/* mobile background images */}
                <div className='relative md:hidden z-[-1] min-[430px]:flex flex-row-reverse -mt-[115px] min-[620px]:-mt-[200px]'>
                    <img src={heroBgMobile} alt="" className='z-[1] w-full min-[430px]:-mt-12 md:mt-0' />
                    <img src={heroMobiles} alt="" className='z-[5] absolute top-0 px-5 min-[430px]:w-3/4 min-[430px]:left-0 ' />
                </div>
                {/* desktop background images */}
                <div className='hidden md:block relative'>
                    {/* <div className='heroImage-background'></div> */}
                    <img src={heroBgDesktop} alt="" className='scale-105 w-full h-full object-cover -mb-4' />
                    <img src={heroMobiles} alt="" className='absolute -top-12 lg:-top-32 -right-[105px]' />
                </div>
                <div className='flex flex-col gap-5 md:gap-8 text-center md:text-start px-5 min-[660px]:-mt-[100px] md:my-12 lg:my-24'>
                    <h1 className='text-4xl lg:text-6xl'>Next generation digital banking</h1>
                    <p className='text-bodyCopy text-gray-blue'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button label={'Get Started'} customClass={'mx-auto md:mx-0 mb-12 md:mb-0'} />
                </div>
                </>
              
            </div>
        </section>
     );
}
 
export default Hero;