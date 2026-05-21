import AddPetForm from "./AddPetForm";

export const metadata = {
  title: "pickpet platform - Add pet",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default function page() {
  return (
    <section className="py-10">
      <div className="px-5">
      <h1 className="text-2xl">Add A New Pet</h1>
      <p className="text-gray-500">Carefully add you pet details</p>
      </div>
      <div className="w-full px-5 flex items-center justify-center">
        <AddPetForm />
      </div>
    </section>
  );
}
