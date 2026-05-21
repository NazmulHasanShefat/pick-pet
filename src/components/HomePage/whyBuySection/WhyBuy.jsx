import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

export default function WhyBuy() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <h1 className="text-center text-2xl lg:text-5xl my-10">Why Adopt our pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
            <Card className="w-auto">
              <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
              <Card.Header>
                <Card.Title>Give Pets a Loving Home</Card.Title>
                <Card.Description>
                Many pets are waiting for a safe and caring family. By adopting, you provide them with love, comfort, and a forever home.
                </Card.Description>
              </Card.Header>
            </Card>
            <Card className="w-auto">
              <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
              <Card.Header>
                <Card.Title>Save Lives Through Adoption</Card.Title>
                <Card.Description>
                Pet adoption helps reduce the number of homeless animals and gives rescued pets a second chance at a better life.
                </Card.Description>
              </Card.Header>
            </Card>
            <Card className="w-auto">
              <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
              <Card.Header>
                <Card.Title>Gain a Loyal Best Friend</Card.Title>
                <Card.Description>
                Pets bring happiness, companionship, and unconditional love. A adopted pet can become your most faithful lifelong friend.
                </Card.Description>
              </Card.Header>
            </Card>
      </div>
    </section>
  );
}