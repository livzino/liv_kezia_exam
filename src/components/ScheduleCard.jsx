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
        <div className="card w-36 bg-base-100 image-full cursor-pointer text-center relative ">
          <div>
            <figure className={`h-36  relative border-2 rounded-3xl ${borderColor}`}>
              <div>
                <Image className="block w-full h-auto rounded-3xl" src={props.src} alt={props.artist} layout="fill" objectFit="cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-950 bg-opacity-50 flex items-center justify-center rounded-3xl ">
                <p className="text-xl text-white p-0 text-wrap break-words  ">{props.artist}</p>
              </div>
            </figure>
          </div>
          {/* Showing the scene, timeslot and atistname from database */}
          <div className="card-body py-1 gap-0 text-center self-center">
            <p className="text-sm font-light">{scene}</p>
            <p className="text-2xl font-black">{props.time}</p>
            <div></div>
          </div>
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
