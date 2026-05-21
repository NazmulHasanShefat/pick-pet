import Hero from "@/components/HomePage/hero/Hero";
import RecentPets from "@/components/HomePage/recentPets/RecentPets";
import SuccessStorys from "@/components/HomePage/SuccessStorys/SuccessStorys";
import PetCareTips from "@/components/HomePage/tips/PetCareTips";
import WhyBuy from "@/components/HomePage/whyBuySection/WhyBuy";

export default function Home() {
  return (
   <>
    <Hero />
    <RecentPets />
    <WhyBuy />
    <SuccessStorys />
    <PetCareTips />
   </>
  );
}
