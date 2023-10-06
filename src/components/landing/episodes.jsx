import { covers, avatars, episodes as eps } from "../../assets/images";

const Episodes = () => {
    const episodes = [
        
        {title: "Pandemic Becoming Endemic", img: eps.eps1, tags: ["covid-19", "health"]},
        {title: "Tesla Autopilot Controversy", img: eps.eps2, tags: ["automation", "tech"]},
        {title: "Women's Rights? Is it alright?", img: eps.eps3, tags: ["women’s rights"]},
        {title: 'How to Deal with Self–Confidence', img: eps.eps4, tags: ["self-esteem", "health"]},
        {title: 'Type of Social Classes of People', img: eps.eps5, tags: ["social class", "wealth"]},
        {title: 'Are you a Perplexed Mind Person?', img: eps.eps6, tags: ["mind-behaviour", "health"]}
        
    ]

    return ( <div className="w-full grid grid-cols-2 gap-5 max-w-[1440px] mx-auto">
            {episodes.map((episode, i, arr) => (<div key={i} className={`w-full p-4 bg-white rounded-xl border-2 border-black ${ i % 2 === 0 && "shadow-[10px_10px_0px_0px_#81ADC8]"}`}>
                <div className="flex gap-4 mb-6 items-center">
                    <img className="w-[165px] h-[165px] shrink-0" src={episode.img} alt="" />
                    <div className="w-full">
                        <h4 className="text-[16px] text-text-primary mb-2 font-bold">Eps. {arr.length - i}</h4>
                        <h3 className={`text-[20px] ${i % 2 === 0 && "text-text-primary" } mb-4 font-bold`}>{episode.title}</h3>
                        <div className="w-full mb-3 bg-grey h-px"></div>
                        <p className="text-grey font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="space-x-2">
                        {episode.tags.map(tag => <button className="border border-grey rounded p-2 text-grey">{tag}</button>)}
                    </div>
                    <div className="flex items-center">
                        <span className="text-grey inline-block mr-3 text-[12px] font-bold">Hosted by: </span>
                        <div className="h-[26px] border-2 border-white w-[26px] rounded-full overflow-hidden">
                            <img src={avatars.girl1} alt="" />
                        </div>
                        <div className="h-[26px] border-2 border-white -translate-x-2 w-[26px] rounded-full overflow-hidden">
                            <img src={avatars.girl2} alt="" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>))}
    </div> );
}
 
export default Episodes;