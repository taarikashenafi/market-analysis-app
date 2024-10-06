import Image from "next/image";
import localFont from "next/font/local";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  // Placeholder values for the input
  const placeholders = ["AAPL", "MSFT", "NVDA", "META", "AMZN"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600  text-center font-sans font-bold">
          Become an informed investor
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Explore Stock Data, Market Insights, and Sentiment Analysis in One Place.
        </p>
        <div className="relative w-full">
          <PlaceholdersAndVanishInput
            onChange={handleChange}
            placeholders={placeholders}
            onSubmit={onSubmit}
          />
        </div>
      </main>
    </div>
  );
}
