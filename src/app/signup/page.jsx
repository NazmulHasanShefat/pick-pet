import LoginForm from "../login/LoginForm";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
  return (
     <section className="w-full max-w-7xl mx-auto px-5">
          <h1 className="mt-10 text-2xl md:text-7xl font-bold text-center">Welcome Create A New Acount</h1>
          <p className="text-center text-gray-500 text-base mt-3">Create your account and start your journey to find a loving pet companion today</p>
          <div className="w-full flex justify-center items-center">
          <SignUpForm />
          </div>
        </section>
  );
}