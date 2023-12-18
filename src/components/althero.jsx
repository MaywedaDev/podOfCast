import Nav from "./nav";
import { spiral, stars, apps } from "../assets/images";

const AltHero = ({children}) => {
    return ( <div className="w-full bg-primary px-16 lg:px-28 relative pb-28 min-h-[700px]">
    <Nav />
    {children}
    <img className="absolute left-0 top-20" src={spiral} />
    <img className="absolute -right-10 top-[238px]" height={216} width={155}  src={stars} />
</div> );
}
 
export default AltHero;