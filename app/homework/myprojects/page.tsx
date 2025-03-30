"use client"
// import { X } from 'lucide-react';
import Image from 'next/image';

export default function Page() {

  

  return (
    <div className='w-[1074px] h-auto flex flex-col overflow-hidden'>
      <div className='pb-[20px] w-[100%] justify-between items-center flex flex-row h-[78] pt-[20px]'>
        <div className=' flex flex-row relative'>
        <div className=' absolute -top-5 left-0 '>
        <svg width="49" height="52" viewBox="0 0 49 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3384 49.9331C8.03384 40.5296 3.04097 30.0009 1.90349 19.8367C1.49666 16.2014 8.53016 23.7568 9.2827 24.5249C9.77705 25.0294 9.78812 25.2779 10.0762 24.1028C11.1098 19.8865 11.2966 15.4465 11.8955 11.1558C12.2522 8.60067 12.6205 7.97675 14.5954 10.1379C17.5305 13.3499 19.1224 17.4009 21.8114 20.7446C22.9517 22.1625 24.101 14.5494 24.2462 14.0417C25.0344 11.2842 26.1552 7.02815 28.3157 4.89117C28.9863 4.22783 32.1224 15.4036 33.8989 14.1392C37.5639 11.5307 41.0321 8.48203 44.0536 5.15222C44.2824 4.90004 47.7027 -0.017216 47.2332 2.77032C45.9917 10.1422 44.943 17.0319 44.6241 24.5311" stroke="#A414D5" strokeWidth="2.93483" strokeLinecap="round"/>
</svg>
        </div>
        <h1 className=' text-4xl font-bold pl-4 text-[#16192C] whitespace-nowrap'>My Project</h1>
        </div>
        <div className=' w-[500px] flex flex-row '>
          <input type="text" placeholder='Search by name...' className=' w-full placeholder:text-sm px-4 py-3 rounded-xl bg-white placeholder:text-[#6B7B93] ' />
          <Image src="/filter.svg" alt='no'  width={35} height={35} className="  mx-2" />
        </div>
        
      </div>
      <div className='flex flex-row gap-5 overflow-hidden'>
        <div className=' w-full h-[766px] overflow-auto border-[1px] border-[#E3E3E3] bg-[#FFFFFF] rounded-[20px]'>
            <div className=' h-[227px] bg-[#FFFFFF] flex flex-row justify-center items-center'>
              <div className=' h-[179] w-[781px]'>
                <div>At the Auction</div>
                <div className=' flex flex-col'>
                  <h1>lorem ipsum</h1>
                  <h1>Criminology Personal Statement</h1>
                </div>
                <div>

                </div>
              </div>
              <div className=' h-[179] w-[221px]'>

              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
