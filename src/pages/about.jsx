import { avatars, logos, scribble, studioMic } from "../assets/images";
import Sponsors from "../components/about/sponsors";
import AltHero from "../components/althero";
const About = () => {
    return ( <>
        <AltHero >
            <div className="max-w-[768px] mx-auto flex flex-col mb-[140px]">
                <h2 className="text-[64px] min-[900px]:text-[96px] font-bold capitalize text-center leading-[60px] min-[900px]:leading-[110px]">About <br/><span className="text-text-primary">Pod of cast</span></h2>
                <p className="my-8 text-light-gray text-center leading-7 font-medium w-[540px] min-[900px]:w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
                <div className="flex gap-x-5 mx-auto">
                    <button className="py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-black rounded-lg">Become Sponsor</button>
                    <button className="py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black rounded-lg">Subscribe</button>
                </div>
            </div>
        </AltHero>
        <div className="py-28 lg:px-28 px-16 flex flex-col relative">
            <div className="flex flex-wrap gap-5 justify-center absolute -top-[117px] left-0 right-0 px-28 z-10">
                <div className="w-full min-[840px]:w-[calc(50%-20px)] lg:w-[calc(33%-20px)] h-[235px] rounded-lg border-[1.5px] border-black bg-white grid place-content-center shadow-[6px_6px_0px_0px_#CD4631]">
                    <p className="mb-2 text-[59px] font-bold text-center"><span className="text-text-primary">76</span>k</p>
                    <span className="text-grey">Community members</span>
                </div>
                <div className="w-full min-[840px]:w-[calc(50%-20px)] lg:w-[calc(33%-20px)] h-[235px] rounded-lg border-[1.5px] border-black bg-white grid place-content-center shadow-[6px_6px_0px_0px_#CD4631]">
                    <p className="mb-2 text-[59px] font-bold text-center"><span className="text-text-primary">128</span>k</p>
                    <span className="text-grey">Podcast Subscribers</span>
                </div>
                <div className="w-full min-[840px]:w-[calc(50%-20px)] lg:w-[calc(33%-20px)] h-[235px] rounded-lg border-[1.5px] border-black bg-white grid place-content-center shadow-[6px_6px_0px_0px_#CD4631]">
                    <p className="mb-2 text-[59px] font-bold text-center"><span className="text-text-primary">59</span>k</p>
                    <span className="text-grey">Daily Listeners</span>
                </div>
            </div>
            <img className="absolute -top-[62px] right-0" src={scribble} alt="" />
            <div className="relative w-fit mx-auto my-10 mt-[550px] min-[840px]:mt-[300px] lg:mt-10">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[800px]">What our listeners say</h1>
                <p className="font-medium text-grey mx-auto w-fit">Their experience throughout every platform</p>
            </div>
            <img className="w-full object-cover h-[640px] mb-10" src={studioMic} alt="" />
            <h2 className="text-[36px] mx-auto mb-14 w-fit font-bold">About and History</h2>
            <div className="flex gap-8 flex-col md:flex-row">
                <div className="w-full">
                    <p>Eu non <span>diam</span> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <span className="font-bold">elementum pulvinar</span>.<br /><br /> Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p>
                </div>
                <div className="w-full">
                    <p>Lorem ipsum dolor sit amet, <span className="font-bold">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <span className="font-bold">Amet</span> interdum imperdiet laoreet <span className="font-bold">morbi</span> tincidunt fermentum, libero. Ante enim eget.<br /><br /> Viverra at porttitor accumsan. Orci non here</p>
                </div>
            </div>
        </div>
        <div className="mx-28 w-[calc(100%-224px)] h-px bg-grey"></div>
        <div className="p-28 flex flex-col relative">
            <h2 className="text-[36px] mx-auto mb-14 w-fit font-bold">Founder and Main Host</h2>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
                <div className="h-[520px] border-2 flex gap-x-6 border-black rounded-xl bg-white p-3 shadow-[10px_10px_0px_0px_#000] w-full max-w-[680px]">
                    <img className="h-full max-w-[260px] shrink-0 object-cover rounded-lg" src={avatars.porter} alt="" />
                    <div className="flex flex-col justify-end w-full">
                        <h4>Host 1</h4>
                        <h2 className="text-[36px] font-bold">Porter Severus</h2>
                        <p className="mb-3 text-grey font-medium">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
                        <div className="border-t border-grey py-3 flex justify-end gap-x-3">
                            <span className="text-grey font-bold">follow me:</span>
                            <img src={logos.instagram} alt="" /><img src={logos.twitter} alt="" /><img src={logos.tiktok} alt="" />
                        </div>
                    </div>
                </div>
                <div className="h-[520px] border-2 flex gap-x-6 border-black rounded-xl bg-white p-3 shadow-[10px_10px_0px_0px_#000] w-full max-w-[680px]">
                    <img className="h-full max-w-[260px] shrink-0 object-cover rounded-lg" src={avatars.keith} alt="" />
                    <div className="flex flex-col justify-end w-full">
                        <h4>Host 2</h4>
                        <h2 className="text-[36px] font-bold">Marques Keith</h2>
                        <p className="mb-3 text-grey font-medium">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
                        <div className="border-t border-grey py-3 flex justify-end gap-x-3">
                            <span className="text-grey font-bold">follow me:</span>
                            <img src={logos.instagram} alt="" /><img src={logos.twitter} alt="" /><img src={logos.tiktok} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-28 space-y-20 bg-primary mx-auto">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[700px]">Our Sponsor</h1>
                <p className="font-medium text-grey mx-auto w-fit">Our current official sponsor</p>
            </div>
            <Sponsors />
        </div>    
        <div className="p-28 space-y-10 flex flex-col max-w-[960px] mx-auto">
            <div className="relative w-fit mx-auto">
                <h1 className="text-[59px] font-bold text-center mx-auto max-w-[700px]">Get in touch</h1>
                <p className="font-medium text-grey mx-auto w-fit">Send your message to us</p>
            </div>
            <div className="w-full h-px bg-grey"></div>
            <form className="space-y-10 flex flex-col" action="">
                <div className="flex gap-x-5">
                    <div className="space-y-2 w-full">
                        <label htmlFor="" className="inline-block font-bold">Full name</label>
                        <input type="text" className="rounded-lg border-[1.5px] border-black p-3 w-full" placeholder="e.g Porter Severus" />
                    </div>
                    <div className="space-y-2 w-full">
                        <label htmlFor="" className="inline-block font-bold">Email</label>
                        <input type="text" className="rounded-lg border-[1.5px] border-black p-3 w-full" placeholder="johndoe@gmail.com" />
                    </div>
                </div>
                <div className="flex gap-x-5">
                    <div className="space-y-2 w-full">
                        <label htmlFor="" className="inline-block font-bold">Phone</label>
                        <input type="text" className="rounded-lg border-[1.5px] border-black p-3 w-full" placeholder="Phone" />
                    </div>
                    <div className="space-y-2 w-full">
                        <label htmlFor="" className="inline-block font-bold">Subject</label>
                        <input type="text" className="rounded-lg border-[1.5px] border-black p-3 w-full" placeholder="Subject..." />
                    </div>
                </div>
                <div className="space-y-2 w-full">
                    <label htmlFor="" className="inline-block font-bold">Message</label>
                    <textarea type="text" className="rounded-lg border-[1.5px] border-black p-3 w-full" rows={6} placeholder="Your message goes here..."></textarea>
                </div>
                <button className="py-4 !mt-16 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] mx-auto font-bold uppercase border-2 border-black text-white bg-black rounded-lg">SEND MESSAGE</button>
            </form>
        </div>      
    </> );
}
 
export default About;