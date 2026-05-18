import Image from "next/image";

export default function Hero() {
  return (
    <section className="md:flex items-center md:mt-15 mt-5 justify-between px-5 w-full max-w-[1340px] mx-auto">
      <div className="left_aria w-1/2 md:pr-10">
        <h1 className="md:text-7xl font-bold text-2xl">
            Connecting Loving Homes <span className="primary-color">With Happy Pets</span> 
        </h1>
        <p className="text-lg mt-5">Our platform helps homeless pets find caring families through a simple, safe, and heartwarming adoption experience</p>
      </div>
      <div className="right_aria w-1/2">
        <Image src={`/bannerImage.webp`} width={600} height={700} alt="heroImage" className="rounded-2xl" />
      </div>
    </section>
  );
}