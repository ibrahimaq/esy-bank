import currency from '../assets/images/image-currency.jpg';
import restaurant from '../assets/images/image-restaurant.jpg';
import plane from '../assets/images/image-plane.jpg';
import confetti from '../assets/images/image-confetti.jpg'
const LatestArticles = () => {

    return ( 
        <section className='bg-gray-light'>
            <div className="max-w-[1200px] mx-auto px-5 py-24">
                <h2 className="text-4xl">Latest Articles</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12'>
                   {data.map((item, i) => (
                        <article key={i} className='flex flex-col min-h-[94px] md:h-full'>
                           
                            <div className='overflow-hidden max-w-[640px] sm:w-full sm:max-h-[200px]'>
                                <img src={item.img} alt={item.alt} className='w-[640px] sm:w-full md:h-[200px] md:object-cover' />
                            </div>
                            <div className='py-6 px-4 bg-white flex flex-col gap-3 flex-grow'>
                                <p className='text-sm'>{item.author}</p>
                                <h4 className='text-2xl'>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </article>
                   ))}
                </div>
            </div>
        </section>
     );
}


const data = [
    {
        author: 'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...',
        img: currency,
        imgAlt: 'currency notes'
    },
    {
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        description: 'ur simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...',
        img: restaurant,
        imgAlt: 'dinner plates and cutlery with food on table in a restaurant'
    },
    {
        author: 'Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...',
        img: plane,
        imgAlt: 'airplaine wing in mid-flight'
    },
    {
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
        img: confetti,
        imgAlt: 'coloured confetti in mid-air'
    }
]
 
export default LatestArticles;