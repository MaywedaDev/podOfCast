import { arrowleft, doodleImg, doodleart1, doodleart2, dot, artImg, artImg1, benefits, mic, scribble2, grafitti } from "../assets/images";
import AltHero from "../components/althero";
import Quote from "../components/landing/quote";

const articles = [{
    title: "Setup Your Own Podcast",
    subtitle: "PODCAST",
    tags: ["business", "podcast", "startup"],
    img: artImg
},
{
    title: "Doodle Artwork 101",
    subtitle: "TIPS & TRICK",
    tags: ["art", "tips and tricks", "creative"],
    img: artImg1
}]

const Post = () => {
    return ( <>
        <AltHero>
            <div className="flex items-center justify-between">
                <button className="flex gap-x-1 items-center"><img src={arrowleft} alt="" /><span>Back to articles</span></button>
                <span>Sep 12, 2021</span>
            </div>
            <div className="max-w-[700px] mx-auto flex flex-col mt-8 items-center text-center">
                <h5 className="text-text-primary font-bold text-[14px] mb-2">TIPS & TRICKS</h5>
                <h2 className="text-[59px] font-bold mb-6">Doodle Artwork 101</h2>
                <div className="flex gap-x-2"><button className="border border-grey rounded p-2 text-grey">art</button><button className="border border-grey rounded p-2 text-grey">tips and tricks</button><button className="border border-grey rounded p-2 text-grey">creative</button></div>
            </div>
        </AltHero>
        <div className="w-full -translate-y-[150px]">
            <img src={doodleImg} alt="" />
        </div>
        <div className="max-w-[1440px] mx-auto px-28 border-b border-grey">
            <h2 className="text-[36px] text-center font-bold mb-12">Doodle for our podcast background room</h2>
            <div className="flex gap-x-7 text-[16px] font-medium mb-12">
                <p className="w-full">Lorem ipsum dolor sit amet, <span className="font-bold">consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in.<br/> <br />Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. Orci non here</p>
                <p className="w-full">Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.</p>
            </div>
        </div>
        <div className="max-w-[1440px] mx-auto my-28">
            <Quote />
        </div>
        <div className="flex gap-x-7 max-w-[1440px] mx-auto font-medium">
            <div className="w-full">
                <h3 className="font-bold text-[22px] mb-8 text-center">Bullet list example:</h3>
                <ul className="space-y-6 text-[16px]">
                    <li className="flex w-full gap-x-2">
                        <img className="h-fit mt-2" src={dot} alt="" />
                        <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.</p>
                    </li>
                    <li className="flex w-full gap-x-2">
                        <img className="h-fit mt-2" src={dot} alt="" />
                        <p className="w-full">Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. Orci non here</p>
                    </li>
                    <li className="flex w-full gap-x-2">
                        <img className="h-fit mt-2" src={dot} alt="" />
                        <p className="w-full">
                        Quis dictum cursus faucibus mattis dignissim. Pellent que purus in sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="w-full">
                <h3 className="font-bold text-[22px] mb-8 text-center">Number list example:</h3>
                <ul className="space-y-6 text-[16px]">
                    <li className="flex w-full gap-x-2">
                        <span className="font-bold text-text-primary">1.</span>
                        <p className="w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.</p>
                    </li>
                    <li className="flex w-full gap-x-2">
                    <span className="font-bold text-text-primary">2.</span>
                        <p className="w-full">Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. Orci non here</p>
                    </li>
                    <li className="flex w-full gap-x-2">
                        <span className="font-bold text-text-primary">3.</span>
                        <p className="w-full">
                        Quis dictum cursus faucibus mattis dignissim. Pellent que purus in sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-full my-28 flex gap-x-10 max-w-[1440px] mx-auto">
            <div className="w-full space-y-3 flex flex-col items-center">
                <img src={doodleart1} alt="" className="max-w-full object-scale-down" />
                <p className="text-center w-fit">this is an image with a caption example</p>
            </div>
            <div className="w-full space-y-3 flex flex-col items-center">
                <img src={doodleart2} alt="" className="max-w-full object-scale-down" />
                <p className="text-text-primary text-center underline w-fit">download here</p>
            </div>
        </div>
        <div className="w-full p-28 bg-primary">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col">
                <h1 className="text-[59px] font-bold text-center w-fit mx-auto mb-2"><span>Related Article</span></h1>
                <p className="w-fit text-center text-[22px] text-grey mx-auto">News, Tips, Tricks and more</p>
                <div className="flex gap-6 w-full relative my-24">
                    <img src={benefits.star7} width={180} height={180} alt="" className="absolute -top-[60px] -left-[100px] rotate-45 -z-10" />
                    <img className="absolute -bottom-[160px] -right-[160px] rotate-[120deg]" src={scribble2} alt="" />
                    <div className="w-full p-3 rounded-xl border-2 border-black shadow-[10px_10px_0px_0px_#000] bg-white">
                        <img className="w-full object-cover rounded-lg h-[320px] mb-6" src={mic} alt="" />
                        <h4 className="uppercase text-grey mb-3 font-bold">Podcast</h4>
                        <h2 className="text-[36px] font-bold text-text-primary mb-4">Setup your own podcast</h2>
                        <p className="text-grey mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
                        <div className="w-full mb-5 bg-grey h-px"></div>
                        <div className="w-full flex items-center justify-between mt-2">
                            <div className="space-x-2">
                                <button className="border border-grey rounded p-2 text-grey">business</button>
                                <button className="border border-grey rounded p-2 text-grey">startup</button>
                            </div>
                            <span className="font-bold">Sep 14, 2021</span>
                        </div>
                    </div>
                    <div className="w-full p-3 rounded-xl border-2 border-black bg-white">
                        <img className="w-full object-cover rounded-lg h-[320px] mb-6" src={grafitti} alt="" />
                        <h4 className="uppercase text-grey mb-3 font-bold">TIPS & TRICK</h4>
                        <h2 className="text-[36px] font-bold text-text-primary mb-4">Doodle artwork 101</h2>
                        <p className="text-grey mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
                        <div className="w-full mb-5 bg-grey h-px"></div>
                        <div className="w-full flex items-center justify-between">
                            <div className="space-x-2">
                                <button className="border border-grey rounded p-2 text-grey">art</button>
                                <button className="border border-grey rounded p-2 text-grey">creative</button>
                                <button className="border border-grey rounded p-2 text-grey">tips and tricks</button>
                            </div>
                            <span className="font-bold">Sep 12, 2021</span>
                        </div>
                    </div>
                </div>
                <button className="py-3 px-4 mx-auto font-bold uppercase border-2 border-black text-white bg-black rounded-lg hover:bg-transparent hover:text-black transition-all duration-300">BROWSE ALL</button>
            </div>
        </div>
    </> );
}
 
export default Post;