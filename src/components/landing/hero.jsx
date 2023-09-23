import Nav from "../nav";
const Hero = () => {
    return ( <div className="w-full bg-primary px-28">
        <Nav />
        <div className="max-w-[550px] mx-auto flex flex-col">
            <h2 className="text-[96px] font-bold capitalize text-center">Your Daily <span className="text-text-primary">Podcast</span></h2>
            <p className="my-8 text-light-gray text-center leading-7 font-medium max-w-[310px] w-full mx-auto">We cover all kinds of categories and a weekly special guest.</p>
            <button className="mx-auto py-3 px-4 font-bold uppercase border-2 border-black text-white bg-black rounded-lg">Subscribe</button>
        </div>
    </div> );
}
 
export default Hero;