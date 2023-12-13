const Package = ({name, price, perks, colored, position}) => {
    return ( <div className={`xl:w-[calc((100%/3)-20px)] md:w-[calc((100%/2)-20px)] package absolute top-0 left-0 ${position && "z-20"}`}>
        <div className={`px-10 py-8 rounded-xl border-[1.5px] section-1 ${colored ? "border-text-primary bg-[#F7EDE8]" : "border-black bg-white" } h-[357px] flex flex-col mb-5`}>
            <h2 className="mt-6 text-[36px] font-bold">{name}</h2>
            <p className="mt-6 text-grey">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
            <div className="flex mt-auto justify-between w-full">
                <button className="py-4 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] font-bold uppercase border-2 border-black text-white bg-black rounded-lg">SUBSCRIBE</button>
                <div>
                    <span className="text-[20px] block text-text-primary font-bold">${price}</span>
                    <span className="block text-grey font-bold">/month</span>
                </div>
            </div>
        </div>
        <div className={`px-10 py-8 rounded-xl section-2 border-[1.5px] ${colored ? "border-text-primary bg-[#F7EDE8]" : "border-black bg-white" } h-[312px] absolute top-0 left-0 right-0 -z-10`}>
            <p className="font-bold text-grey">What’s included:</p>
            <ul className="mt-6 space-y-5">
                {perks.map((el, i) => <li key={i} className="text-[16px] font-medium">{el}</li>)}
            </ul>
        </div>
    </div> );
}
 
export default Package;