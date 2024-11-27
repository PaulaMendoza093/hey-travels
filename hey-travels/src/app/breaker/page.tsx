import Ads from "@/components/ads";
export default function Breaker(){
    const card2 = [
        { id: 1, title: "Azaleaaaaa" },
        { id: 2, title: "Azaleaaaaa" },
        { id: 3, title: "Azaleaaaaa" },
    ];
    return(
        <main className=" w-full h-full flex flex-col justify-center items-center">
        <div className=" w-full h-screen flex justify-center items-end bg-[#0B1924] rounded-[100%_100%_0%_0%_/42%_42%_42%_42%]">
        <div className=" bg-gradient-to-br from-white from-70% to-[#ACD4FF] w-[80%] h-[70%] rounded-xl flex flex-col justify-around p-10 mb-6">
        <h1 className="items-start text-[40px]">Our Attractions</h1>
            <div className="h-[70%] w-full grid grid-cols-4 gap-4">
                {card2.map((item) => (
                    <button key={item.id} className="bg-orange-100 h-full rounded-2xl">
                    {item.title}
                </button>
                ))}
                <div className="h-full rounded-2xl bg-[url('/resort.svg')] bg-cover flex flex-col justify-end">
                    <div className="bg-gradient-to-b from-transparent from-60% to-[#D1E7FF] h-fill w-fill flex flex-col justify-center items-center p-4 rounded-2xl">
                        <h1 className="text-[20px] text-center p-4">
                    Discover Great Deals on Hotels Today
                    </h1>
                    <button className="bg-[#0B1924] p-4 rounded-xl text-white">Check More</button>
                    </div>
            </div>
            </div>
        </div>
        </div>
        <Ads/>
        </main>
    )
}