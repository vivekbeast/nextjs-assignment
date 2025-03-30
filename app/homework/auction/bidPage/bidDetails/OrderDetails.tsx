import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import PayBid from './PayBid';

interface OrderDetailsProps {
      
    order: {
      name: string; // Name of the order
      category: string; // Category of the order
      deadline: string; // Deadline for the order
      id: string; // Ensure id is a string
      bid: string; // Bid value
      pay: string; // Payment value
      premium: boolean; // Whether the order is premium
      item: string; // Item name
      price: number; // Price of the order
      amount: number; // Amount of the order
      status: string; // Status of the order
      files: [];
    };
  }

export default function OrderDetails({ order }: OrderDetailsProps) {
    const [showModal, setShowModal] = useState(false);
  
    const router  = useRouter();
        const GoBack = () => {
            router.push('/homework/auction');
        };
  return (
    <div className=' px-3.5 overflow-y-hidden h-[770px] flex flex-col justify-between overflow-x-hidden'>
        <div className=' h-[422px] w-full '>
                    <div className=' h-[100px] flex flex-row justify-start gap-3 items-center'>
                        <Image src="/colored/image.png" alt='no' width={100} height={100} className=" text-white" />
                        <div className=' flex flex-col'>
                            <h1 className=' text-[#16192C] text-2xl font-bold'>{order.name}</h1>
                            <div><span className=' text-[16px] font-normal text-[#6B7B93]'>Assignment Added</span> <span className=' text-lg text-[#16192C] font-semibold'>Today 08:29AM</span></div>
                            <div><span className=' text-[16px] font-normal text-[#6B7B93]'>Ashlynn was online</span> <span className=' text-lg text-[#16192C] font-semibold'>Today 06:50AM</span></div>
                        </div>
                    </div>
                    <div className=' h-[182px] bg-[#F9F9F9] rounded-[20px] flex flex-col  items-center'>
                        <div className='h-[56px] w-[624px] mt-5 mb-7  px-5 justify-between items-center flex flex-row'>                  
                                              <div className='flex flex-col'>
                                              <div className=' flex flex-row gap-1.5'><Image src="/colored/id.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Format</span></div>
                                                <span className='text-lg font-semibold text-[#16192C]'>APA</span>
                                              </div>
                                              <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>
        
                                              <div className='flex flex-col'>
                                              <div className=' flex flex-row gap-1.5'><Image src="/colored/settings.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Type of Service</span></div>
                                                <span className='text-lg font-semibold text-[#16192C]'>Custom Writing</span>
                                              </div>
                                              <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>
        
                                              <div className='flex flex-col'>
                                              <div className=' flex flex-row gap-1.5'><Image src="/colored/insights.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Academic Level</span></div>
                                                <span className='text-lg font-semibold text-[#16192C]'>Undergraduate Bachelor</span>
                                              </div>
                        </div>
                        <div className='h-[56px] w-[624px] mt-5 mb-7  px-5 justify-between items-center flex flex-row'>
                                              <div className='flex flex-col'>
                                              <div className=' flex flex-row gap-1.5'><Image src="/colored/calender.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Volume of</span></div>
                                                <span className='text-lg font-semibold text-[#16192C]'>2 Pages (550 words)</span>
                                              </div>
                                              <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>
                        </div>
                    </div>
        </div>
        <div className=' h-[79px] px-3.5 mb-5 flex flex-row justify-between'>
            <div className=' w-[208px] h-fit flex flex-col '>
                <h1 className=' text-[#6B7B93] text-lg font-medium'>You get:</h1>
                <h1 className=' text-[#16192C] text-[44px] font-bold'>$22.00</h1>
            </div>
            <div className=' flex flex-row justify-center gap-5 items-end'>
            <div onClick={GoBack} className=' w-[208px] h-[60px] bg-white text-center py-3.5 cursor-pointer rounded-full text-lg font-semibold text-[#16192C] border-2 border-[#16192C]'>
          Cancel Offer
          </div>
            <div onClick={() => setShowModal(true)} className=' w-[208px] h-[60px] bg-[#A414D5] text-center py-3.5 cursor-pointer rounded-full text-lg font-semibold text-white'>
          Edit Offer
          </div>
            </div>
          </div>
          {showModal && (
                    <div>
                      <PayBid setShowModal={setShowModal} />
                    </div>
          )}
    </div>
  )
}
