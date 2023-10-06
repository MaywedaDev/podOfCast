import { logo } from "../assets/images";
import { Link } from "react-router-dom";

const Nav = () => {
    return ( <div className="w-full flex items-center py-12 relative z-10">
        <Link to="/"><img src={logo} alt="" /></Link>
        <ul className="flex gap-x-8 ml-20 text-[14px] font-bold">
            <Link to="/episodes"><li>Episodes</li></Link>
            <Link to="/about"><li>About</li></Link>
            <li>More</li>
        </ul>
        <div className="flex gap-x-6 ml-auto">
            <button className="py-2 px-4 font-bold uppercase border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 rounded-lg">RECENT EPISODES</button>
            <button className="py-2 px-4 font-bold uppercase border-2 border-black text-white bg-black rounded-lg hover:bg-transparent hover:text-black transition-all duration-300">Subscribe</button>
        </div>
    </div> );
}
 
export default Nav;