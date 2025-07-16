"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const navigationItems = [
  { name: "Home", href: "/", hasDropdown: false },
  {
    name: "Brands",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Rabfy", href: "https://rabfy.com/" },
      { name: "Vsenk", href: "https://www.vsenk.com/" },
    ],
  },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (itemName: string) => {
    setActiveMobileDropdown(
      activeMobileDropdown === itemName ? null : itemName
    );
  };

  return (
    <nav
      ref={navRef}
      className="flex items-center justify-between wrapper py-4 bg-white border-b border-neutral-300 relative"
    >
      <Link href="/">
        <h2 className="text-3xl font-medium text-black">MM Rahman</h2>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <div key={item.name} className="relative group">
            {item.hasDropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center text-[#0A0A0B] hover:text-[#506079] section-description"
                >
                  {item.name}
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-[#0A0A0B] hover:bg-gray-50 hover:text-[#506079]"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <a
                href={item.href}
                className="text-[#0A0A0B] hover:text-[#506079] section-description"
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-[#0A0A0B] hover:text-[#506079]"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-300  md:hidden z-40">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full text-left text-[#0A0A0B] hover:text-[#506079] py-2"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeMobileDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeMobileDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[#0A0A0B] hover:text-[#506079] py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveMobileDropdown(null);
                            }}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-[#0A0A0B] hover:text-[#506079]  py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
