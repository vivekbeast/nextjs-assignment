"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

const languages = [
  { code: "en", label: "English, USD" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "de", label: "German" },
  { code: "hi", label: "Hindi" },
];

export default function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 text-[#6B7B93] font-semibold text-[16px] focus:outline-none border-none shadow-none bg-transparent ">
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
