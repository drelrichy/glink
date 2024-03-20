
"use client";

import Image from "next/image";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrendingAds from "@/components/TrendingAds";
import SideBar from "@/components/SideBar";
import AdSearch from "@/components/AdSearch";


export default function Home() {
  return (
    <main className=" min-h-screen  ">
    
      <AdSearch />
      <div className="xl:flex flex-column gap-20 px-8 md:px-24">
        <SideBar />
        <TrendingAds />
      </div>

    </main>
  );
}
