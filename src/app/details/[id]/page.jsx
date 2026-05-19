export default async function PetDetailsPage({params}) {
    const {id} = await params;
    console.log(id);
  return (
    <section className="px-5 mt-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
      <h1>
        this is details page
      </h1>
    </section>
  );
}