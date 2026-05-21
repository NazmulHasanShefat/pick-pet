import LoginForm from "./LoginForm";

export const metadata = {
  title: "pickpet platform - Login",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default function LoginPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <h1 className="mt-10 text-2xl md:text-7xl font-bold text-center">Welcome Back Login Now</h1>
      <p className="text-center text-gray-500 text-base mt-3">Access your account to explore pets, save favorites, and continue your adoption journey.</p>
      <div className="w-full flex justify-center items-center">
      <LoginForm />
      </div>
    </section>
  );
}