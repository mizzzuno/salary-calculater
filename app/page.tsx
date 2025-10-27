"use client";

import Header from "@/app/ui/staff/Header";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("@/app/ui/staff/MonthSelect"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NoSSR />
      <Header />
    </>
  );
}
