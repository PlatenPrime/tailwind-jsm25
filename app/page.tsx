export default function Home() {
  return (
    <div className=" grid gap-10">
      <div className="bg-violet-200  w-full border-2 border-violet-600 rounded-md my-4 p-2 relative ">
        <h1 className="text-center font-mono font-extrabold text-[30px]">
          Hello Tailwind
        </h1>
        <div className="h-10 w-10 bg-red-500 top-0 left-10 absolute"></div>
      </div>

      {/*  FLEX */}

      <div className="flex flex-col items-start justify-center gap-6">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>

      {/* GRID */}

      <div className="grid grid-cols-5 gap-6">
        <div className="h-16  rounded-full bg-blue-500"></div>
        <div className="h-16  rounded-full bg-green-500"></div>
        <div className="h-16  rounded-full bg-orange-500"></div>
      </div>

      {/* RESPONSIVE */}
      <div className="max-sm:bg-amber-500 md:bg-amber-400 lg:bg-amber-300">
        <p className="">I appear on screen wider than 768px</p>
      </div>

      {/*  DARK*/}

      <div className="bg-gray-200 dark:bg-gray-800 dark:text-white" >
        Dark mode disabled
      </div>
    </div>
  );
}
