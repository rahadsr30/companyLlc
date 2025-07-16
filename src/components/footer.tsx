import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3A3A3F] text-white py-section">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <h2 className="text-3xl font-medium text-white mb-3">
                MM Rahman
              </h2>
            </Link>
            <p className="text-[#E5E6E8] section-description">
              MM Rahman LLC — Driving innovation through powerful brands like
              Rabfy and Vsenk, empowering creators and businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="card-description text-white mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://rabfy.com/"
                  className="hover:text-white text-[#E5E6E8] transition-colors section-description"
                >
                  Rabfy
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.vsenk.com/"
                  className="hover:text-white text-[#E5E6E8] transition-colors section-description"
                >
                  Vsenk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="card-description text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="section-description text-[#E5E6E8]">
                <span className="font-semibold">Address: </span>Manhattan, New
                York
              </p>
              <p className="section-description text-[#E5E6E8]">
                <span className="font-semibold">Phone: </span>+1 (123) 456-7890
              </p>
              <p className="section-description text-[#E5E6E8]">
                <span className="font-semibold">Email: </span>info10@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ACADB4] mt-10">
          <p className="text-white text-sm text-center pt-8">
            © MM Rahman 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
