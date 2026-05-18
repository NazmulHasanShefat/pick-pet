import PetCardAll from "./PetCardAll";

export default function AllPetsPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-5">
      <h1 className="text-2xl md:text-3xl font-bold">Meet Our Adorable Pets</h1>
      <p className="text-gray-500">Explore verified pet listings and connect with pets looking for a second chance at happiness.</p>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <PetCardAll />
        <PetCardAll />
        <PetCardAll />
        <PetCardAll />
        <PetCardAll />
        <PetCardAll />
        <PetCardAll />
      </div>
    </section>
  );
}