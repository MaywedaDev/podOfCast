import { search, artImg, artImg1, artImg2, artImg3 } from "../assets/images";
import AltHero from "../components/althero";
import Episodes from "../components/landing/episodes";


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
},
{
    title: "Mother Nature Taking Over",
    subtitle: "NEWS",
    tags: ["news", "nature"],
    img: artImg2
},
{
    title: "How to Be Productive",
    subtitle: "PRODUCTIVITY",
    tags: ["productivity", "mindset"],
    img: artImg3
}]

const Articles = () => {
    
    return ( <>
        <AltHero>
        <div className="max-w-[768px] mx-auto flex flex-col mb-[140px]">
            <h2 className="text-[96px] font-bold capitalize text-center leading-[110px]">Article <br/>and <span className="text-text-primary">News</span></h2>
            <p className="my-8 mb-14 text-light-gray text-center leading-7 font-medium w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
            <div className="relative mx-auto w-full max-w-[570px]">
                <img src={search} alt="" className="absolute left-8 top-[calc((100%-24px)/2)]" />
                <input style={{ boxShadow: "6px 6px 0px 0px #81ADC8" }} type="text" className="w-full rounded-2xl py-5 pl-[72px] pr-10 border-[1.5px] border-black" placeholder="Search..." />
            </div>
        </div>
        </AltHero>
        <div className="p-28 flex flex-col relative">
            <h2 className="text-[59px] mx-auto mb-14 w-fit font-bold">Latest Posts</h2>
            <div className="max-w-[1440px]">
                <div className="flex w-full justify-between py-4 px-2 border-b border-grey mb-28">
                    <button className="text-grey font-medium text-[20px]">All</button>
                    <button className="text-grey font-medium text-[20px]">Business</button>
                    <button className="text-grey font-medium text-[20px]">News</button>
                    <button className="text-grey font-medium text-[20px]">Tips & Tricks</button>
                    <button className="text-grey font-medium text-[20px]">Podcast</button>
                    <button className="text-grey font-medium text-[20px]">Productivity</button>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    {articles.map((article, i) => <div key={i} className="w-full rounded-xl border-[1.5px] border-black p-3">
                        <img src={article.img} alt="" className="w-full object-scale-down" />
                        <h5 className="mt-8 mb-4 text-grey font-bold">{article.subtitle}</h5>
                        <h2 className="text-[36px] text-text-primary mb-4 font-bold">{article.title}</h2>
                        <p className="font-medium text-grey mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
                        <div className="w-full bg-grey h-px mb-2"></div>
                        <div className="space-x-2">
                            {article.tags.map((text, i) => <button key={i} className="border border-grey rounded p-2 text-grey">{text}</button>)}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </> );
}
 
export default Articles;