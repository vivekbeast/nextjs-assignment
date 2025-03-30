import Image from 'next/image'
import React from 'react'
import LanguageSwitcher from './LanguageDropdown'

export default function Navbar() {
  return (
    <div className=' bg-white w-full overflow-hidden max-w-[1440px] h-[70px] mx-auto flex flex-row items-center justify-between pt-3 pb-[13px] px-[30px] border border-solid border-[#E1D5C9]'>
        <div className=' w-[144px] h-11 flex flex-row items-center justify-center  '>
        <Image src="/logo.svg" alt="logo" width={47} height={44}/>
        <Image src="/buddy.svg" alt="logo" width={102} height={44} />
        </div>
        <div className=' w-[960px] h-12 flex flex-row items-center overflow-hidden justify-center gap-6'>
          <div className=' text-lg text-[#16192C] cursor-pointer'>
          StudyBank
          </div>
          <div className=' text-lg text-[#16192C] cursor-pointer'>
          Find Tutor
          </div>
          <div className=' text-lg text-[#640D51] cursor-pointer'>
          Homework
          </div>
          <div className=' flex flex-row gap-1.5 bg-[#FCF4EA] py-1 px-3 rounded-full'>
          <Image src="/wallet.svg" alt="logo" width={20} height={20} />
          <div className=' flex flex-row gap-0.5 text-[#E38D2A] text-[14px]'>
          <h1>34</h1>{/* NUMBER VALUE */}
          <h1>USD</h1>
          </div>
          </div>
          <div className=' border-2 border-solid border-[#A414D5] text-[14px] text-[#16192C] py-2.5 px-5 rounded-2xl cursor-pointer'>
            Refer a Friend
          </div>
          <div> 
          <LanguageSwitcher />
          </div>
          <div className=' cursor-pointer'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#16192C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8H17" stroke="#16192C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H13" stroke="#16192C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </div>
          <div className=' cursor-pointer'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z" stroke="#16192C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9998 11.36V11.15C11.9998 10.47 12.4198 10.11 12.8398 9.82001C13.2498 9.54001 13.6598 9.18002 13.6598 8.52002C13.6598 7.60002 12.9198 6.85999 11.9998 6.85999C11.0798 6.85999 10.3398 7.60002 10.3398 8.52002" stroke="#16192C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.75H12.0045" stroke="#16192C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </div>
          <div className='cursor-pointer'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0201 2.91003C8.71009 2.91003 6.02009 5.60003 6.02009 8.91003V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91003C18.0201 5.61003 15.3201 2.91003 12.0201 2.91003Z" stroke="#16192C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="#16192C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#16192C" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

          </div>
          <div>
          <Image src="/profile.svg" alt="logo" width={50} height={50}/>
          </div>
        </div>
    </div>
  )
}
