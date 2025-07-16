import React from "react";
import heroImage from "@/assets/mmHeroImage.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-[url('/mmHero.png')] bg-cover bg-center bg-no-repeat">
      <div className="wrapper py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <h2 className="text-[#0A0A0B] section-title-medium mb-6 lg:mb-10">
              At MM Rahman, we provide tailored solutions to help businesses
              grow and thrive in today&apos;s fast-paced world.
            </h2>
            <Button>Explore Now</Button>
          </div>
          <div>
            <Image src={heroImage} alt="" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
