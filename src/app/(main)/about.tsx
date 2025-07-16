import React from "react";
import aboutImage from "@/assets/about2.jpg";
import aboutBottom from "@/assets/aboutMm.png";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-[#0A0A0B] mb-4">
              Who is MM Rahman
            </h2>
            <p className="section-description text-[#3A3A3F]">
              MM Rahman is a multi-brand company focused on innovation,
              technology, and creative commerce. With a growing portfolio that
              includes Rabfy, a print-on-demand marketplace, and Vsenk, an
              AI-first consultancy, MM Rahman LLC is committed to empowering
              creators, businesses, and industries through smart, scalable
              solutions.
            </p>
          </div>
          <div>
            <Image src={aboutImage} alt="about" className="w-full" />
          </div>
        </div>
      </div>

      <div>
        <Image src={aboutBottom} alt="about" className="w-full" />
      </div>
    </section>
  );
}
