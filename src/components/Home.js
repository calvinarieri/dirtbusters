import laundryImg from '../assets/laudry.png'

export default function Home () {
    return(
        <div id="home" className='flex flex-col md:flex-row bg-gray-100 items-center font-DMSans md:justify-around' >
            <div  className='px-4 md:px-0 pt-20 md:pt-0 md:w-5/12'>
                <h1 className="text-4xl font-bold md-w-8/12">Dirt busters Laundry and Dry cleaners</h1>

                <p className='mt-10 text-lg'>
                    Is your dirty laundry stressing you?
                    Don't worry we gatch you.
                    We provide same-day laundry services, including pick-up, washing, ironing, folding, and free  delivery.
                </p>
            </div>
            <div className='px-4 md:px-0'>
                <img src={laundryImg} alt='img'/>
            </div>
        </div>
    )
}