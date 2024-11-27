export default function Ads(){
    return(
        <main className=" w-full h-full flex justify-center items-center">
            <div className="bg-gradient-to-b from-[#0B1924] from-[50%] to-[#122839] w-full h-full flex flex-row justify-start items-center  pt-24 pl-24">
                <div className=" w-[50%] h-[70%] align-middle p-12">
                    <p className="text-white text-8xl text-left">Your Go to Travel Buddy</p>
                </div>
                <div className=" w-[50%] h-[100%] rounded-l-full">
                    <img src="/starfish.svg" alt="starfish" className="h-full" />
                </div>
               
            </div>
        </main>

    );
}
