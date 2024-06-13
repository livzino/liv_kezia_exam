import Link from "next/link";

export default function Button(props) {
  return (
    <Link href="/booking">
      <button className="text-m bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600  backdrop-blur-md transition-all hover:scale-105 border-4 border-lime-400 rounded-2xl text-lime-400 cursor-pointer h-14 px-12 max-w-s font-bold">{props.text}</button>
    </Link>
  );
}
