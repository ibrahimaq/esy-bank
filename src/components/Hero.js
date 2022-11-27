import heroBgMobile from '../assets/images/bg-intro-mobile.svg'
import heroBgDesktop from '../assets/images/bg-intro-desktop.svg'
import heroMobiles from '../assets/images/image-mockups.png'
import Button from './Button';

const Hero = () => {
    // const style = {
    //     background
    // }
    return ( 
        <section className='w-full'>
            <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse'>
                {window.innerWidth < 768 ?
                <>
                <div className='relative min-[430px]:flex flex-row-reverse -mt-[115px] min-[620px]:-mt-[200px]'>
                    <img src={heroBgMobile} alt="" className='z-[1] w-full min-[430px]:-mt-12' />
                    <img src={heroMobiles} alt="" className='z-[5] absolute top-0 px-5 min-[430px]:w-3/4 min-[430px]:left-0' />
                </div>
                <div className='flex flex-col gap-5 text-center px-5 min-[660px]:-mt-[100px]'>
                    <h1 className='text-4xl'>Next generation digital banking</h1>
                    <p className='text-bodyCopy text-gray-blue'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button label={'Get Started'} customClass={'mx-auto'} />
                </div>
                </>
                :
                <>
                <div></div>
                </>
                    }
            </div>
        </section>
     );
}
 
export default Hero;