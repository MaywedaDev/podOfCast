import Nav from "./nav";
import { spiral, stars, apps } from "../assets/images";

const AltHero = ({children}) => {
    return ( <div className="w-full bg-primary px-16 lg:px-28 relative pb-28 min-h-[700px]">
    <Nav />
    <div className="w-full z-20 relative">
    {children}
    </div>
    <img className="hidden sm:block absolute left-0 top-20 z-0" src={spiral} />
    <img className="hidden sm:block absolute -right-10 top-[238px] z-0" height={216} width={155}  src={stars} />
</div> );
}
 
export default AltHero;