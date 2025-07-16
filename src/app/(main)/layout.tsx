import { Navbar } from "@/components";
import Footer from "@/components/footer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </React.Fragment>
  );
}
