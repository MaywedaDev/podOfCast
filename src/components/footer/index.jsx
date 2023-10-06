import { black, app1, app2, logo } from "../../assets/images";
import PageScribble from "../icons/pageScribble";

const Footer = () => {
    return ( <>
    <div className="p-28 space-y-20 flex flex-col bg-aliceblue relative">
        <div className="absolute text-text-primary left-[calc((100%-46px)/2)] -top-[75px] z-20">
            <PageScribble />
        </div>
        <div className="relative w-fit mx-auto flex flex-col">
            <button className="mx-auto rounded text-text-primary px-2 py-1 border border-text-primary uppercase font-bold">Beta</button>
            <h1 className="text-[59px] font-bold text-center mx-auto max-w-[500px]">Available now Pod of Cast App</h1>
            <p className="font-medium text-grey mx-auto w-fit">We just launched our podcast app!</p>
        </div>
        <div className="py-8 mx-auto fit-content flex flex-col">
            <button className="py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black hover:bg-transparent hover:text-black transition-all duration-300 rounded-lg mb-6">Download Now</button>
            <span className="mx-auto text-grey font-medium">Content also available on:</span>
            <div className="flex gap-x-5 mt-4 mx-auto">
                <img src={black.pods} alt="" />
                <img src={black.spotify} alt="" />
                <img src={black.youtube} alt="" />
            </div>
        </div>
        <img width={437} height={416} className="absolute left-0 bottom-0" src={app1} alt="" />
        <img height={680} width={355} className="absolute bottom-0 right-0" src={app2} alt="" />
    </div>
    <div className="pt-28 pb-16 px-28">
        <div className="flex justify-between mb-[140px]">
            <div className="space-y-8">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <ul className="space-y-8">
                <li>About</li>
                <li>Testimonials</li>
                <li>Features</li>
            </ul>
            <ul className="space-y-8">
                <li>Episodes</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="space-y-8">
                <p className="text-grey">Listen to episodes on your fav platforms</p>
                <p className="text-grey">App availble on:</p>
            </div>
        </div>
        <div className="w-full border-t border-grey pt-6 flex justify-between">
                <p className="text-grey">©2022. All Rights Reserved. Pod of Cast</p>
                <p>Terms | Privacy</p>
        </div>
    </div>
    </> );
}
 
export default Footer;