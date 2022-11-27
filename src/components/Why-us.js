import iconOnline from '../assets/icons/icon-online.svg';
import iconBudget from '../assets/icons/icon-budgeting.svg'
import iconOnboarding from '../assets/icons/icon-budgeting.svg'
import iconApi from '../assets/icons/icon-api.svg'
const WhyUs = () => {
    return ( 
        <section className="bg-gray-blue-light">
            <div className="max-w-[1200px] mx-auto flex flex-col py-24 px-5 text-center md:text-start">
                <h2 className="text-4xl">Why choose Easybank?</h2>
                <p className="mt-10 md:w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat debitis saepe, molestiae, amet asperiores, minima accusantium ipsum libero quod cum tempora porro assumenda quisquam ipsam nostrum numquam impedit!</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                    {data.map((item, i) => (
                        <div key={i} className='flex flex-col gap-5 text-center sm:text-left'>
                            <img src={item.img} alt={item.title + ' icon'} className='w-1/5 mx-auto sm:max-w-[150px] lg:w-1/3 sm:mx-0' />
                            <h4 className='text-2xl'>{item.title}</h4>
                            <p>{item.description}</p>

                        </div>
                    ))}
                   
                </div>
            </div>
        </section>
     );
}

const data = [
    {
        title: 'Online Banking',
        description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
        img: iconOnline
    },
    {
        title: 'Simple Budgeting',
        description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
        img: iconBudget,
    },
    {
        title: 'Fast Onboarding',
        description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
        img: iconOnboarding
    },
    {
        title: 'Open API',
        description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
        img: iconApi
    }
]
 
export default WhyUs;