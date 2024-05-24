import Link from "next/link";
import Image from "next/image";

export default function ScheduleCard({ scene, ...props }) {
  let borderColor;

  switch (scene) {
    case "Midgard":
      borderColor = "border-amber-500";
      break;
    case "Vanaheim":
      borderColor = "border-emerald-500";
      break;
    case "Jotunheim":
      borderColor = "border-pink-500";
      break;
    default:
      borderColor = "border-slate-500";
  }
  return (
    <>
      <Link prefetch={false} className="" href={`${props.slug}`}>
        <div className="card w-36 bg-base-100 image-full cursor-pointer text-center">
          <div>
            <figure className={`h-36  relative border-2 rounded-3xl ${borderColor}`}>
              <div>
                <Image className="opacity-60 rounded-3xl" src={props.src} alt={props.artist} layout="fill" objectFit="cover" />
              </div>
              <div>
                <p className="text-xl text-gray-950 p-0 opacity-100 text-wrap break-words  ">{props.artist}</p>
              </div>
            </figure>
          </div>
          {/* Showing the scene, timeslot and atistname from database */}
          <div className="card-body py-1 gap-0 text-center self-center">
            <p className="text-sm font-light">{scene}</p>
            <p className="text-2xl font-black">{props.time}</p>
            <div></div>
          </div>
          {/* Display logo credits if there are any */}
          {props.logoCredits && (
            <div className="absolute bottom-2 right-12 z-40" data-tip={props.logoCredits}>
              <span title={props.logoCredits} className="italic bg-slate-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </Link>
      {/* Showing a break at the specific nextTime slot */}
      <div className="grid text-center">
        <p className=" text-xs text-slate-400 w-fit py-2 px-3">
          &#8594; {props.nextTime} <span className="text-slate-50 capitalize">Break</span>
        </p>
      </div>
    </>
  );
}
