"use client";

// import MonthSelect from "@/app/ui/staff/MonthSelect";
import dynamic from 'next/dynamic'
const NoSSR = dynamic(() => import("@/app/ui/staff/MonthSelect"), { ssr: false })

export default function Home() {
  return (
    <>
      <NoSSR />
    </>
  );
}
