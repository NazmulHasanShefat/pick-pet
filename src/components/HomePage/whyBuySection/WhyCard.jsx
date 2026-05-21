import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

export function WhyCard() {
  return (
    <Card className="w-[400px]">
      <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
      <Card.Header>
        <Card.Title>Give Pets a Loving Home</Card.Title>
        <Card.Description>
        Many pets are waiting for a safe and caring family. By adopting, you provide them with love, comfort, and a forever home.
        </Card.Description>
      </Card.Header>
    </Card>
  );
}