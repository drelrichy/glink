'use client'
import AdNavigation from "@/components/AdsNav";
import Header from "@/components/Header";
import ProfileNavigation from "@/components/ProfileNav";
import { useRouter, useSearchParams, usePathname, redirect } from "next/navigation";

import { useSession } from "next-auth/react";

import React from "react";

function ProfilePage() {
  const { data: session } = useSession();

  if (!session) redirect("/login");
  return (
    <main className=" min-h-screen px-24">

      <div className="grid grid-cols-2 gap-4">
        <div>
          <ProfileNavigation />
        </div>
        <div>
          <AdNavigation />
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
