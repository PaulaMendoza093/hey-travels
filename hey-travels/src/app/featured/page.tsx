export default function Featured() {
  const card = [
    { id: 1, title: "Azaleaaaaa" },
    { id: 2, title: "Azaleaaaaa" },
    { id: 3, title: "Azaleaaaaa" },
  ];
  return (
    <main className=" mt-[-20px] rounded-3xl bg-white h-screen w-full flex flex-col justify-center items-center gap-y-6">
      <div className=" bg-gradient-to-br from-white from-70% to-[#FCE483] h-[90%] w-[90%] flex flex-col justify-around p-10 rounded-3xl">
        <h1 className="items-start text-[40px]">Featured Hotels</h1>
        <div className="h-[60%] w-full grid grid-cols-4 gap-4 ">
          {card.map((item) => (
            <button key={item.id} className="bg-orange-100 h-full rounded-2xl">
              {item.title}
            </button>
          ))}
          <div className="h-full rounded-2xl bg-[url('/hotel.svg')] bg-cover flex flex-col justify-end">
            <div className="bg-gradient-to-b from-transparent from-60% to-[#FCE483] h-fill w-fill flex flex-col justify-center items-center p-4 rounded-2xl">
              <h1 className="text-[20px] text-center p-4">
                Discover Great Deals on Hotels Today
              </h1>
              <button className="bg-[#0B1924] p-4 rounded-xl text-white">Check More</button>

            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
