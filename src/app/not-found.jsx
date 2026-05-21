import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="w-full flex justify-center h-screen items-center">
        <div className="flex flex-col items-center">
          <Link href={"/"} className="flex items-center gap-3 my-5">
            <Image
              src={`/logo.png`}
              width={100}
              height={60}
              alt="logo"
              className="w-[50px]"
            />
            <h2 className="font-bold text-3xl italic">
              Pick<span className="text-emerald-500">Pet</span>
            </h2>
          </Link>
          <h2 className="text-2xl md:text-5xl font-bold mb-3">Page Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/" className="mt-3 bg-emerald-600 text-white cursor-pointer py-2 rounded-lg px-4">Home</Link>
        </div>
      </div>
    </div>
  );
}
