import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";
import Image from "next/image";

export default function PetCareTips() {
  return (
       <section className="w-full max-w-7xl mx-auto px-5">
          <h1 className="text-center text-2xl lg:text-5xl my-10">Pet Care Tips</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                <Card className="w-auto">
                  <Image src={"https://img.magnific.com/premium-photo/attractive-smiling-young-man-glasses-studio-headshot_656932-6164.jpg?ga=GA1.1.1438280142.1778358616&semt=ais_hybrid&w=740&q=80"} width={100} height={100} className="rounded-full" alt="user"/>
                  <Card.Header>
                    <Card.Title>Balanced Nutrition for Healthy Growth</Card.Title>
                    <Card.Description>
                    Feed your pet high-quality, age-appropriate food with proper nutrients. A balanced diet helps improve energy, immunity, and overall health.
                    </Card.Description>
                  </Card.Header>
                </Card>
                <Card className="w-auto">
                  <Image src={"https://img.magnific.com/premium-photo/portrait-smart-reliable-girl-have-eyewear-look-camera-wear-casual-style-cool-modern-clothes-isolated-vivid-purple-color-background_274222-31769.jpg?ga=GA1.1.1438280142.1778358616&semt=ais_hybrid&w=740&q=80"} width={100} height={100} className="rounded-full" alt="user" />
                  <Card.Header>
                    <Card.Title>Regular Exercise and Playtime</Card.Title>
                    <Card.Description>
                   Daily walks, games, and activities keep your pet active and happy. Exercise also helps prevent obesity and behavioral problems.
                    </Card.Description>
                  </Card.Header>
                </Card>
                <Card className="w-auto">
                   <Image src={"https://img.magnific.com/premium-photo/doctor-man-keeping-arms-crossed_1368-40089.jpg?ga=GA1.1.1438280142.1778358616&semt=ais_hybrid&w=740&q=80"} width={100} height={100} className="rounded-full" alt="user" />
                  <Card.Header>
                    <Card.Title>Routine Health Checkups</Card.Title>
                    <Card.Description>
                    Regular vet visits, vaccinations, and grooming ensure your pet stays healthy and disease-free. Early care prevents serious health issues.
                    </Card.Description>
                  </Card.Header>
                </Card>
          </div>
        </section>
  );
}