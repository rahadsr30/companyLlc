import React from "react";
import Image from "next/image";
import rabfyLogo from "@/assets/rabfyLogo.png";
import vsenkLogo from "@/assets/vsenkLogo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const brandsData = [
  {
    id: "01",
    logo: rabfyLogo,
    description:
      "Rabfy is a print‑on‑demand (POD) marketplace that enables creators to upload custom designs and sell products—like apparel, mugs, phone cases—without worrying about inventory or shipping. Orders are printed, packaged, and shipped automatically after purchase, letting you focus entirely on design and growth. Getting started is free—earn profits on each sale with no upfront costs rabfy.com.",
    href: "https://rabfy.com/",
  },
  {
    id: "02",
    logo: vsenkLogo,
    description:
      "Vsenk is an AI-first consultancy and custom software development firm that empowers businesses to innovate, automate, and scale through intelligent automation, machine learning, and expert strategic consulting. Their services include AI audits, development of voice agents and chatbots, and seamless integration of AI solutions—backed by hands-on training and ongoing support.",
    href: "https://www.vsenk.com/",
  },
];

export default function Brands() {
  return (
    <section className="py-section">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title text-[#0A0A0B] mb-3 lg:mb-0">
              Our Brands
            </h2>
            <p className="section-description text-[#3A3A3F]">
              At MM Rahman LLC, we proudly operate two impactful brands—Rabfy, a
              global print-on-demand marketplace for creators, and Vsenk, an
              AI-driven consultancy transforming businesses through smart
              automation. Together, we empower creators, companies, and
              industries across the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-8 lg:mt-16">
          {brandsData.map((brand) => (
            <div key={brand.id} className="bg-[#F5F5F6] p-8">
              <div className="mb-8">
                <span className="card-description text-[#0A0A0B]">
                  {brand.id}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <div>
                    <Image
                      src={brand.logo}
                      alt={`Brand ${brand.id} logo`}
                      className="object-contain w-[120px] h-[50px]"
                    />
                  </div>
                </div>
              </div>

              <p className="text-[#0A0A0B] section-description mb-8">
                {brand.description}
              </p>

              <Link
                href={brand.href}
                target="_blank"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                <Button>Explore Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
