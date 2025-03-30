"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Suspense } from "react";



const pages = [
  { name: "Home", path: "/", icon: "/home.png" },
  { name: "Wallet", path: "/wallet", icon: "/empty-wallet.svg" },
  { name: "Message", path: " /message", icon: "/people2.svg" },
  {
    name: "Homework",
    path: "/homework/home",
    icon: "/book.png", 
    subPages: [
      { name: "Home", path: "/homework/home", icon: "/homeHomework.svg" },
      { name: "Auction", path: "/homework/auction", icon: "/auction.svg" },
      { name: "My Project", path: "/homework/myprojects", icon: "/myproject.svg" },
    ],
  },
  { name: "Manage Review & Rating", path: "/reviews", icon: "/message-favorite.png" },
  { name: "My Students", path: "/students", icon: "/profile-2user.png" },
  { name: "Payments", path: "/payments", icon: "/card-pos.png" },
  { name: "File & Notes", path: "/files", icon: "/document-copy.svg" },
  { name: "Create a Group", path: "/group/create", icon: "/receipt-edit.png" },
  { name: "Lessons", path: "/lessons", icon: "/device-message.png" },
  { name: "Classroom", path: "/classroom", icon: "/presention-chart.png" },
  { name: "Calendar", path: "/calendar", icon: "/calendar.png" },
  { name: "Insights", path: "/insights", icon: "/chart.png" },
  { name: "Academy", path: "/academy", icon: "/teacher.png" },
  { name: "My Profile", path: "/profile", icon: "/profile-circle.png" },
  { name: "Settings", path: "/settings", icon: "/setting-2.png" },
  { name: "Community", path: "/community", icon: "/people.png" },
];

export default function Sidebar() {
  const [selectedPage, setSelectedPage] = useState("/homework/home");
  const [openDropdown, setOpenDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <aside className="w-[306px]  min-h-screen bg-[#FFFFFF] shadow-lg pt-2.5 px-7 pb-5 ">
      <nav className="flex flex-col ">
        {pages.map((page) => (
          <div key={page.name}>
            {/* Main Button */}
            <div
              className={`text-left  rounded w-[246px] cursor-pointer flex justify-between items-center transition ${selectedPage && pathname === page.path ? "bg-[#F6F5F8] rounded-full px-2.5 py-3" : " p-3"}`}
              onClick={() => {
                if (page.subPages) {
                  setOpenDropdown(!openDropdown);
                } else {
                  setSelectedPage(page.path);
                  router.push(page.path);
                }
              }}
            >
              <div className={`flex items-center gap-2  ${selectedPage === page.path  ? "px-2.5 " : ""}`}>
              {page.icon && <Image src={page.icon} alt={page.name} width={20} height={20} className="w-5 h-5" />}
              <span className={selectedPage && pathname === page.path ? " font-semibold text-[#A414D5] text-sm" : " text-[#6B7B93] text-sm"}>{page.name}</span>
              </div>
              {page.subPages && (
                <span>{openDropdown ? <ChevronUp size={16} className="text-[#A414D5]" /> : <ChevronDown size={16} className=" text-[#A414D5]" />}</span>
              )}
            </div>

            {/* Dropdown for "Homework" */}
            {page.subPages && openDropdown && (
              <div className=" pl-4 overflow-hidden w-[230px] flex flex-col pt-1.5">
                {page.subPages.map((subPage) => (
                  <div
                    key={subPage.name}
                    className="text-left px-4 py-1 cursor-pointer rounded transition  w-full flex flex-col justify-between"
                    onClick={() => {
                      setSelectedPage(subPage.path);
                      router.push(subPage.path);
                    }}
                  >
                    <div className=" flex flex-row justify-between">
                    <div className=" flex flex-row gap-2.5 items-center text-center">
                    {subPage.icon && <Image src={subPage.icon} alt={page.name} width={30} height={30} className=" w-7 h-7" />}
                    <span className=" text-sm text-[#222222] whitespace-nowrap">{subPage.name}</span>
                    </div>
                    {page.subPages && (
  <span className="text-[#A414D5] text-xl">{selectedPage && pathname === subPage.path ? "●" : ""}</span>
)}
                    </div>

                    <div className=" w-[230px]  border-b-2 my-2.5"></div>
                  </div>
                ))}
                
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
    </Suspense>
  );
}
