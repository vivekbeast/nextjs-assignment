"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Suspense } from "react";


export default function Home() {
  const router = useRouter();

  const navigate = ()=> {
    router.push("/homework/home")
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" h-auto flex flex-row justify-center items-center overflow-hidden">
      <div onClick={navigate} className=" bg-[#640D51] p-3 text-white font-semibold text-sm rounded-full cursor-pointer">
        Click Here / Use Sidebar to navigate
      </div>
    </div>
    </Suspense>
  );
}
