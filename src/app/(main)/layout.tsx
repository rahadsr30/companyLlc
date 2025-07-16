import { Navbar } from "@/component";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <main>
        <Navbar />
        {children}
      </main>
    </React.Fragment>
  );
}
