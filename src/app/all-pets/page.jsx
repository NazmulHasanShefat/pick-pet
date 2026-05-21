import PageContent from "./PageContent";

export const metadata = {
  title: "pickpet platform - All pets",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default async function AllPetsPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-5">
     <PageContent />
    </section>
  );
}
