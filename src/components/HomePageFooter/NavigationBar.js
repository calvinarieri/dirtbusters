import { NavLink } from "react-router-dom"

export default function NavigationBar (){
    let menuItems = ['Home', 'Services','Pricing','Request service']
    return(
        <nav className="flex justify-between px-7 mt-4">
            <div className="font-lato font-bold text-2xl ">
                <NavLink to='/' ><span className='tracking-widest text-blue-600'>Dirt</span><span className='tracking-widest text-yellow-500'>Busters</span></NavLink>
            </div>
            <div>
                <ol className="flex gap-8">
                {
                    menuItems.map((listItem, index)=>{
                        return(
                            <li className="font-lato font-semibold text-lg">
                                <a key={index} href={'#'+listItem.toLowerCase()} >{listItem}</a>
                            </li>
                        )
                    })
                }
                </ol>
            </div>
            <div>
                <a href='#contact' className="bg-blue-500 text-white px-5 py-3 rounded-3xl font-lato font-bold">Contact us</a>
            </div>
        </nav>
    )
}