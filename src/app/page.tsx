export default function Home() {
  return (
    <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-4 gap-2">
      
      <div className="bg-green-400 row-span-4 text-[32px] font-bold text-center content-center border-2">
        Nav
      </div>
      <div className="bg-purple-400 col-span-3 text-[32px] font-bold text-center content-center border-2">
        Header
      </div>
      <div className="bg-blue-400 col-span-2 row-span-2 text-[32px] font-bold text-center content-center border-2">
        Article
      </div>
      <div className="bg-red-400 text-[32px] row-span-3 font-bold text-center content-center border-2">
        Ads
      </div>
      <div className="bg-orange-400 col-span-2 text-[32px] font-bold text-center content-center border-2">
        Footer
      </div>
    </div>

  );
}
