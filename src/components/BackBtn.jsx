"use client";

export default function BackBtn() {
  const goBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <button onClick={goBack} className="text-m text-lime-400 bg-blue-700 hover:bg-lime-400 hover:text-blue-700  border-4  border-lime-400 rounded-2xl text-lime-400 cursor-pointer  h-14 px-12 max-w-s ">
      &#8592; Back
    </button>
    /*     <button onClick={goBack} className="text-m bg-gradient-to-r from-[rgba(83, 201, 238, 1)] via-[rgba(76, 151, 236, 1)] to-[rgba(69, 102, 234, 1)] px-2 backdrop-blur-md transition-all hover:bg-[#FF4B4B] hover:bg-none border-4  border-lime-400 rounded-2xl text-lime-400 cursor-pointer  h-14 px-12 max-w-s ">
      &#8592; Back
    </button> */
    /*     <button className=" border-lime-400 rounded-2xl center z-50 flex h-full cursor-pointer flex-row items-center gap-1.5 bg-gradient-to-r from-[#53c9ee] via-[#4c97ec] to-[#4566ea] px-2 backdrop-blur-md transition-all hover:bg-[#FF4B4B] hover:bg-none xl:gap-2"> &#8592; Back</button>
     */
  );
}
