export default function Banner() {
  return (
    <main className=" bg-[url('/banner.svg')] bg-cover h-screen w-full">
      <div className=" h-[15%]  p-4 w-full flex flex-row justify-between items-center bg-white bg-opacity-5">
        <img className="w-[176px] h-[63px]" src="./logo.svg " alt="logo" />
        <button className=" bg-slate-400 flex flex-row items-center gap-x-4 p-4 rounded-full">
          <img src="./hamburger.svg" alt="hamburger" />
          <img src="./account.svg" alt="account" />
        </button>
      </div>
      <div className=" h-[60%] w-full flex justify-center items-center flex-col">
        <h1 className=" text-[100px] text-white"> Stay, Relax, Repeat</h1>
        <p className="text-white text-[30px]">
          Your journey to relaxation starts here
        </p>
      </div>
      <div className=" h-[25%] flex justify-center items-center flex-row">
        <button className=" h-[50%] w-56 flex flex-col justify-center text-left  bg-white border border-black p-4">
          <p className="text-[#0B1924] font-semibold">Where</p>
          <p className=" text-gray-500">Search Destination</p>
        </button>
        <button className=" h-[50%] flex flex-col justify-center text-left  bg-white border border-black p-4">
          <p className="text-[#0B1924] font-semibold">Check-In Check-out</p>
          <p className=" text-gray-500">Add Dates</p>
        </button>
        <button className=" h-[50%] w-40 flex flex-col justify-center text-left  bg-white border border-black p-4">
          <p className="text-[#0B1924] font-semibold">Who</p>
          <p className=" text-gray-500">Add Guests</p>
        </button>
        <button className=" text-2xl h-[50%] w-56 flex flex-col justify-center items-center text-center bg-[#0B1924] border border-black p-4 text-white">
          Search
        </button>
      </div>
    </main>
  );
}
