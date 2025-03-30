"use client";
import FilterDropdown from '@/app/components/FilterDropdown';
import { DataTableDemo } from '@/app/components/FilterSection';
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  const router = useRouter();

  const orders = [
    { name: "John Doe", category: "Criminology", deadline: "Feb 10, 2025, 3:00 pm", id: "1234567", bid: 8, pay: "$75", premium: true },
    { name: "Alice Smith", category: "Law", deadline: "Mar 15, 2025, 5:45 pm", id: "2345678", bid: 5, pay: "$60", premium: false },
    { name: "Robert Brown", category: "Psychology", deadline: "Apr 21, 2025, 2:20 pm", id: "3456789", bid: 15, pay: "$110", premium: true },
    { name: "Sophia Johnson", category: "Sociology", deadline: "May 5, 2025, 12:00 pm", id: "4567890", bid: 3, pay: "$50", premium: false },
  ];

  interface Order {
    name: string;
    category: string;
    deadline: string;
    id: string;
    bid: number;
    pay: string;
    premium: boolean;
  }

  const handleBidClick = (order: Order): void => {
    // ✅ Ensure URL encoding for query params
    const queryString = new URLSearchParams({
      name: order.name,
      category: order.category,
      deadline: order.deadline,
      id: order.id,
      bid: order.bid.toString(),
      pay: order.pay,
      premium: order.premium.toString(),
    }).toString();

    router.push(`/homework/auction/bidPage?${queryString}`);
  };

  return (
    <div className='w-[1074px] h-auto flex flex-col overflow-hidden'>
      <div className='pb-[20px] w-[148px] h-[78] pt-[20px]'>
        <Image src="/auctionStyle.svg" alt='no' width={150} height={80} />
      </div>
      <div className='flex flex-row gap-5 overflow-hidden'>
        <div className='w-[704px] h-[766px] overflow-auto border-[1px] border-[#E3E3E3] bg-[#FFFFFF] rounded-[20px]'>
          <div className='p-3 flex w-[694px] flex-row justify-between gap-5 items-center'>
            <div className='flex flex-row gap-5 justify-center items-center'>
              <Image src="/layers.svg" alt='no' width={50} height={50} />
              <div className='flex flex-col'>
                <h1 className='text-2xl text-black font-bold'>Found {orders.length} Orders</h1>
                <h1 className='text-[#A414D5] text-[16px]'>Out of total 325</h1>
              </div>
            </div>
            <FilterDropdown />
          </div>
          <div className='flex flex-col justify-center items-center'>
            {orders.map((order, index) => (
              <div key={index} className='h-[175px] my-3 rounded-[16px]'>
                <div className='w-[640px] h-[175px] flex flex-row justify-center items-start bg-[#F9F9F9] pr-2.5 pt-2.5 rounded-[16px]'>
                  <div className='w-[453px] h-[135px] py-5 pl-5 flex flex-col gap-4'>
                    <div className='h-[60px] flex flex-row gap-4 justify-start items-center'>
                      <Image src="/image.png" alt='no' width={60} height={60} />
                      <div className='flex flex-col'>
                        <h1 className='text-[20px] text-[#640D51]'>{order.name}</h1>
                        <h1 className='text-sm'>{order.category}</h1>
                      </div>
                    </div>
                    <div className='w-full border-[#CFD7E6] border-b-[1px]'></div>
                    <div className='h-[43px] flex flex-row'>
                      <div className='flex flex-col'>
                        <div className='flex flex-row gap-1.5'>
                          <Image src="/colored/calender.svg" alt='no' width={20} height={20} />
                          <span className='text-[12px] font-semibold text-[#6B7B93]'>Deadline</span>
                        </div>
                        <span className='text-sm font-semibold text-[#16192C]'>{order.deadline}</span>
                      </div>
                      <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>
                      <div className='flex flex-col'>
                        <div className='flex flex-row gap-1.5'>
                          <Image src="/colored/id.svg" alt='no' width={20} height={20} />
                          <span className='text-[12px] font-semibold text-[#6B7B93]'>ID</span>
                        </div>
                        <span className='text-sm font-semibold text-[#16192C]'>{order.id}</span>
                      </div>
                      <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>
                      <div className='flex flex-col'>
                        <div className='flex flex-row gap-1.5'>
                          <Image src="/colored/judge.svg" alt='no' width={20} height={20} />
                          <span className='text-[12px] font-semibold text-[#6B7B93]'>Bid</span>
                        </div>
                        <span className='text-sm font-semibold text-[#16192C]'>{order.bid} Bids</span>
                      </div>
                    </div>
                  </div>
                  <div className='w-[200px] h-[175px] flex flex-row justify-items-end items-end pb-5 px-5'>
                    <div className='w-[151px] h-[81px] flex flex-col justify-center items-center pt-4 gap-2'>
                      <div
                        onClick={() => handleBidClick(order)}
                        className={`flex cursor-pointer w-full flex-row gap-2 justify-center items-center ${order.premium ? "bg-white border-[1.5px] border-[#16192C] text-[#16192C]" : "bg-[#A514D4] text-white"} py-1.5 px-3 rounded-full`}
                      >
                        <h1 className='text-sm font-semibold'>{order.premium ? "Edit Bid" : "Place Bid"}</h1>
                      </div>
                    </div>
                  </div>
                  <Heart className='w-[13px] h-[13px] text-[#A414D5] cursor-pointer' />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-[350px] h-[766px] overflow-y-scroll border-[1px] border-[#E3E3E3] bg-[#FFFFFF] rounded-[20px]'>
          <div className='w-[340px] h-20 p-3 flex flex-row justify-start gap-3 text-2xl text-center text-[#16192C] font-bold items-center'>
            <Image src="/search.svg" alt='no' width={50} height={50} />
            <div className='w-[209px] text-[18px] text-[#16192C] font-bold text-start'>Search new project</div>
            <div className='text-sm text-[#A414D5] font-bold text-center pl-1.5 cursor-pointer'>Reset</div>
          </div>
          <div className='w-[340px] py-3 flex flex-col justify-center items-center'>
            <DataTableDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
