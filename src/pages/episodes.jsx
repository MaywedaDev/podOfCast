import { avatars, covers } from "../assets/images";
import AltHero from "../components/althero";
import Episodes from "../components/landing/episodes";

const EpisodePage = () => {
    return ( <>
        <AltHero>
            <div className="flex gap-x-20 items-center mt-10 relative z-10 max-w-[1200px] mx-auto">
                <div className="w-[472px] shrink-0 shadow-[12px_12px_0px_0px_#81ADC8] rounded-xl">
                    <img className="w-full object-scale-down" src={covers.cover2} alt="" />
                </div>
                <div className="w-full">
                    <div className="w-full flex justify-between mb-2 items-center">
                        <h4 className="text-text-primary font-bold text-[16px]">Episode 1</h4>
                        <button className="rounded text-text-primary border border-text-primary text-[13px] py-1 px-4 font-bold">FEATURED EPISODE</button>
                    </div>
                    <h2 className="font-bold text-[36px] mb-3">Are you a Perplexed Mind Person?</h2>
                    <div className="w-full h-px bg-black"></div>
                    <p className="mt-3 mb-12 text-grey font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-3 items-center">
                            <img src={avatars.girl1} alt="" />
                            <p className="text-grey font-medium">Hosted by: <span className="text-text-primary font-semibold">Jane Doe</span></p>
                        </div>
                        <span className="text-grey font-medium">Sep 22, 2021</span>
                    </div>
                    <div className="flex gap-x-5 mt-14">
                        <button className="py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black rounded-lg">Subscribe</button>
                        <button className="py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-black rounded-lg">LISTEN NOW <span className="text-text-primary">(46 min)</span></button>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-24 relative z-10 max-w-[1200px] mx-auto">
                <span className="text-grey font-bold">Tags:</span>
                <button className="border border-grey rounded p-2 text-grey ml-16">mind-behaviour</button>
                <button className="border border-grey rounded p-2 text-grey ml-2">health</button>
            </div>
        </AltHero>
        <div className="p-28 flex flex-col relative">
            <h2 className="text-[59px] mx-auto mb-14 w-fit font-bold">Latest Episodes</h2>
            <div className="max-w-[1440px]">
                <div className="flex w-full justify-between py-4 px-2 border-b border-grey mb-28">
                    <button className="text-grey font-medium text-[20px]">All</button>
                    <button className="text-grey font-medium text-[20px]">Business</button>
                    <button className="text-grey font-medium text-[20px]">Comedy</button>
                    <button className="text-grey font-medium text-[20px]">Education</button>
                    <button className="text-grey font-medium text-[20px]">Health</button>
                    <button className="text-grey font-medium text-[20px]">News</button>
                    <button className="text-grey font-medium text-[20px]">Tech</button>
                </div>
                <Episodes />
            </div>
        </div>
    </> );
}
 
export default EpisodePage;