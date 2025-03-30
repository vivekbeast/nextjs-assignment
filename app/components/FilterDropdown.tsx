"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

const languages = [
  { code: "en", label: "Filter" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "de", label: "German" },
  { code: "hi", label: "Hindi" },
];

export default function FilterDropdown() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex flex-row text-[16px] text-[#16192C] py-2 px-2.5 bg-[#FFFFFF] hover:bg-[#FAFAFA] shadow-[0_0_5px_#00000021] rounded-[10px] gap-2 cursor-pointer">
        <Image src="/filter.svg" alt='no'  width={24} height={24} className="" />
        {selectedLang.label}
          <ChevronDownIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setSelectedLang(lang)}>
            {lang.label}
          </DropdownMenuItem>
        ))}
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
