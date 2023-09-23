import { logo } from "../assets/images";

const Nav = () => {
    return ( <div className="w-full flex items-center py-12">
        <img src={logo} alt="" />
        <ul className="flex gap-x-8 ml-20 text-[14px] font-bold">
            <li>Episodes</li>
            <li>About</li>
            <li>More</li>
        </ul>
        <div className="flex gap-x-6 ml-auto">
            <button className="py-2 px-4 font-bold uppercase border-2 border-black text-black bg-transparent rounded-lg">RECENT EPISODES</button>
            <button className="py-2 px-4 font-bold uppercase border-2 border-black text-white bg-black rounded-lg">Subscribe</button>
        </div>
    </div> );
}
 
export default Nav;