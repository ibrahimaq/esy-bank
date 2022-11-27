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
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse'>
        
                <>
                <div className='relative min-[430px]:flex flex-row-reverse -mt-[115px] min-[620px]:-mt-[200px] md:-mt-[130px]  md:w-full'>
                    <img src={window.innerWidth < 768 ? heroBgMobile : heroBgDesktop} alt="" className='z-[1] w-full min-[430px]:-mt-12 md:mt-0' />
                    <img src={heroMobiles} alt="" className='z-[5] absolute top-0 px-5 min-[430px]:w-3/4 min-[430px]:left-0 md:right-0 md:top-14' />
                </div>
                <div className='flex flex-col gap-5 md:gap-8 text-center md:text-start px-5 min-[660px]:-mt-[100px] md:mt-0'>
                    <h1 className='text-4xl md:text-6xl'>Next generation digital banking</h1>
                    <p className='text-bodyCopy text-gray-blue'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button label={'Get Started'} customClass={'mx-auto mx-0'} />
                </div>
                </>
                
                {/* // <>
                // <div>
                //     <h1 className='text-4xl'>Next generation digital banking</h1>
                //     <p className='text-bodyCopy text-gray-blue'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                //     <Button label={'Get Started'} customClass={'mx-auto'} />
                // </div>
                // <div className='relative '>
                //     <img src={heroBgDesktop} alt="" className='z-[1] w-full' />
                //     <img src={heroMobiles} alt="" className='z-5 absolute -right-24 top-0' />
                // </div>
                // </> */}
              
            </div>
        </section>
     );
}
 
export default Hero;