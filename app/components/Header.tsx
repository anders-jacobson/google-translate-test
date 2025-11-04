"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#18274a] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar with region selector */}
        <div className="flex items-center justify-between py-3 text-sm border-b border-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium">Select region</span>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-[#233861] text-white border border-gray-500 rounded px-3 py-1 outline-none cursor-pointer hover:bg-[#2a3a5a] transition-colors font-medium">
              <option value="int">International (English)</option>
              <option value="se">Sverige (Svenska)</option>
              <option value="de">Deutschland (Deutsch)</option>
              <option value="fr">France (Français)</option>
              <option value="uk">United Kingdom / Ireland (English)</option>
            </select>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-5">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-bold tracking-wider hover:opacity-90 transition-opacity"
            >
              GETINGE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-200 transition-colors font-medium text-base">
                Products and Solutions
                <svg
                  className="w-4 h-4"
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
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-200 transition-colors font-medium text-base">
                Services
                <svg
                  className="w-4 h-4"
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
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-200 transition-colors font-medium text-base">
                Insights
                <svg
                  className="w-4 h-4"
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
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-200 transition-colors font-medium text-base">
                Company
                <svg
                  className="w-4 h-4"
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
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-gray-200 transition-colors font-medium text-base">
                Login
                <svg
                  className="w-4 h-4"
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
            </div>
            <Link
              href="/contact"
              className="hover:text-gray-200 transition-colors font-medium text-base"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[#233861] rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-600">
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Products and Solutions
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Insights
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Company
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
