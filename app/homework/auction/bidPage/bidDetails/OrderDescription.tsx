import { Info, Paperclip } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
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


export default function OrderDescription({ order }: OrderDetailsProps) {
  const [showModal, setShowModal] = useState(false);
    const router  = useRouter();
    const GoBack = () => {
        router.push('/homework/auction');
    };
  return (
    <div className={` w-[664px] relative overflow-x-hidden`}>
        {order.premium ? 
        <div className=' h-[112px] border-2 mb-7  rounded-2xl border-[#22C55E]'>            
        <div className=' h-[40px] flex flex-row justify-start items-center pl-5 gap-[2.5px] rounded-t-2xl bg-[#22C55E]'>
        <Image src="/colored/settin.svg" alt='no' width={24} height={24} className=" text-white" />
        <h1 className=' text-[16px] font-semibold text-white'>Finding a write is guaranted</h1>
        </div>
        <div className=' text-[12px] h-[48px] text-black font-normal py-3 px-5'>
        Lorem ipsum dolor sit amet consectetur. Maecenas blandit metus morbi commodo etiam lacus suscipit tortor.. Mattis et faucibus eget in. Euismod feugiat neque posuere nisl. At vitae tristique pharetra nullam blandit arcu morbi etiam.. Nibh elit condimentum ipsum amet hac in.. Vulputate suspendisse risus ullamcorper nec.
        </div>
        </div> : null}
      <div className=' px-3.5 overflow-y-hidden  h-[770px] flex flex-col justify-between overflow-x-hidden'>
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
                                      <div className=' flex flex-row gap-1.5'><Image src="/colored/id.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Assignment ID</span></div>
                                        <span className='text-lg font-semibold text-[#16192C]'>{order.id}</span>
                                      </div>
                                      <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>

                                      <div className='flex flex-col'>
                                      <div className=' flex flex-row gap-1.5'><Image src="/colored/insights.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Stage of Completion</span></div>
                                        <span className='text-lg font-semibold text-[#16192C]'>Auction</span>
                                      </div>
                                      <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>

                                      <div className='flex flex-col'>
                                      <div className=' flex flex-row gap-1.5'><Image src="/dollar.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>You Get</span></div>
                                        <span className='text-lg font-semibold text-[#16192C]'>{order.pay}</span>
                                      </div>
                </div>
                <div className='h-[56px] w-[624px] mt-5 mb-7  px-5 justify-between items-center flex flex-row'>
                                      <div className='flex flex-col'>
                                      <div className=' flex flex-row gap-1.5'><Image src="/colored/calender.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Assignment ID</span></div>
                                        <span className='text-lg font-semibold text-[#16192C]'>{order.deadline}</span>
                                      </div>
                                      <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>

                                      <div className='flex flex-col'>
                                      <div className=' flex flex-row gap-1.5'><Image src="/colored/settings.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Discipline</span></div>
                                        <span className='text-lg font-semibold text-[#16192C]'>Nursing</span>
                                      </div>
                                      <div className='h-[43px] border-[1px] border-[#CFD7E6] mx-3'></div>

                                      <div className='flex flex-col'>
                                      <div className=' flex flex-row gap-1.5'><Image src="/colored/assignment.svg" alt='no'  width={20} height={20} className="" /><span className=' text-[16px] font-semibold text-[#6B7B93]'>Assignment Type</span></div>
                                        <span className='text-lg font-semibold text-[#16192C]'>Power Point</span>
                                      </div>
                </div>
            </div>
            <div className=' h-[100px] pt-5'>
                <h1 className=' text-[#16192C] text-2xl font-bold pb-3'>Project Description</h1>
                <p className=' font-normal text-[14px] leading-[20px] tracking-normal text-[#6B7B93]'>Lorem ipsum dolor sit amet consectetur. Maecenas blandit metus morbi commodo etiam lacus suscipit tortor.. Mattis et faucibus eget in. Euismod feugiat neque posuere nisl. At vitae tristique pharetra nullam blandit arcu morbi etiam.. Nibh elit condimentum ipsum amet hac in.. </p>
            </div>
          </div>
          
          {order.premium ? 
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
          </div> : 
          <div className=' h-[50px] flex flex-row px-3.5 mb-5 justify-between'>
          <div onClick={() => setShowModal(true)} className=' w-[250px] bg-[#A414D5] text-center py-3.5 cursor-pointer rounded-full text-lg font-semibold text-white'>
          Place Bid
          </div>
          <div className=' w-[267px] gap-5 flex flex-row'>
          <div className=' w-[197px] bg-[#CFD7E6] flex cursor-pointer flex-row gap-0.5 text-center justify-center items-center py-3.5 rounded-full text-lg font-semibold text-[#16192C]'>
          <Paperclip />
          <h1>Attached File </h1>
          </div>
          <div className=''><Image src="/colored/chatbot.svg" alt='hh' height={50} width={50}/></div>
          </div>
        </div>}
      </div>
      {order.premium ? 
        <div className=' h-[68px] overflow-x-hidden  border-2 mb-7 flex flex-row text-sm font-semibold justify-center items-center p-4 gap-2 rounded-2xl border-[#EAB308] bg-[#FFFAEA]'>            
        <Info className=' text-[#EAB308] ' />
        <h1>We Recomended you to try contacting the customer again 5-10 minutes. This may give you a better exposure!</h1>
        </div> : null}
        {showModal && (
          <div>
            <PayBid setShowModal={setShowModal} />
          </div>
         )}
    </div>
  );
}
