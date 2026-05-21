import Image from "next/image";
import { ImSpinner6 } from "react-icons/im";

export default function LodingSpin() {
  return (
    <section>
       <div className="w-full max-w-7xl mx-auto">
              <div className="w-full flex justify-center h-screen items-center">
                <div className="flex flex-col items-center">
                  <div href={"/"} className="flex items-center gap-3 my-5">
                    <Image
                      src={`/logo.png`}
                      width={100}
                      height={60}
                      alt="logo"
                      className="w-[50px]"
                    />
                  </div>
                  <div className="animate-spin">
                    <ImSpinner6 />
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}