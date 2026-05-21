import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";
import Image from "next/image";

export default function SuccessStorys() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5">
      <h1 className="text-center text-2xl lg:text-5xl my-10">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
            <Card className="w-auto">
              <Image src={"https://img.magnific.com/free-photo/indoor-shot-attractive-young-woman-with-glasses-posing-against-white-wall_273609-20347.jpg?t=st=1779335040~exp=1779338640~hmac=37118a5895c1c4889caacdfaf5941fd46a1f1d0cefd92090044863604c4ead75&w=1060"} width={100} height={100} className="rounded-full" alt="user"/>
              <Card.Header>
                <Card.Title>From Shelter to Forever Home</Card.Title>
                <Card.Description>
                A once abandoned puppy was rescued from the streets and adopted by a loving family. Now he enjoys daily walks, healthy meals, and endless playtime with his new best friends.
                </Card.Description>
              </Card.Header>
            </Card>
            <Card className="w-auto">
              <Image src={"https://img.magnific.com/free-photo/young-determined-armenian-curlyhaired-female-university-student-listen-carefully-asignment-look-confident-ready-task-cross-hands-chest-smiling-selfassured-standing-white-background_176420-56066.jpg?ga=GA1.1.1438280142.1778358616&semt=ais_hybrid&w=740&q=80"} width={100} height={100} className="rounded-full" alt="user" />
              <Card.Header>
                <Card.Title>A Second Chance at Love</Card.Title>
                <Card.Description>
                A shy and injured cat was given care and patience by her adopter. Over time, she became playful, confident, and deeply attached to her new home.
                </Card.Description>
              </Card.Header>
            </Card>
            <Card className="w-auto">
               <Image src={"https://img.magnific.com/free-photo/portrait-handsome-dark-haired-man-smiles-toothily-feels-glad-wears-round-spectacles-casual-black-t-shirt-expresses-positive-emotions-isolated-yellow-background-happiness-concept_273609-58988.jpg?ga=GA1.1.1438280142.1778358616&semt=ais_hybrid&w=740&q=80"} width={100} height={100} className="rounded-full" alt="user" />
              <Card.Header>
                <Card.Title>A New Life Full of Joy</Card.Title>
                <Card.Description>
                An older dog who spent years in a shelter finally found a caring owner. Today, he lives happily, surrounded by love, comfort, and gentle care every day.
                </Card.Description>
              </Card.Header>
            </Card>
      </div>
    </section>
  );
}