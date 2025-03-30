import React from 'react';
import { BadgeDollarSign,  X } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface PayBidProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PayBid({ setShowModal }: PayBidProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-y-scroll bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-[585px]   flex flex-col gap-5 px-5 py-2 rounded-2xl shadow-lg relative">
        
        <div className=' w-full flex flex-row justify-between items-center text-center'>
        <h1 className="text-2xl font-semibold text-black text-center">Place Bid</h1>
        <div
          className=" text-gray-600 hover:text-black"
          onClick={() => setShowModal(false)}
        >
          <X size={24} />
        </div>
        </div>

        <div className=' border-2 rounded-3xl border-[#FFB800] bg-[#FEFFF4] h-[72px] w-full flex flex-row items-center text-sm text-[#16192C] p-4 justify-between'>
            <h1>Lorem ipsum dolor sit amet consectetur. Mauris eget metus nibh suspendisse amet aliquet vitae mauris.. Pellentesque feugiat.</h1>
            <X />
        </div>


        <div>
            <h1 className=' font-semibold text-[#16192C] text-lg'>Your earning, without commision</h1>
            <div className=' flex border-2 border-[#E1D5C9] rounded-xl mt-3 flex-row w-full justify-between items-center py-4 px-4 font-bold text-[#16192C]'><h1>$100</h1> <BadgeDollarSign /> </div>
            <h1 className=' text-[#640D51] text-sm font-semibold py-5'>Recommended bid $30</h1>
            <div className=' h-[134px] w-[521px] px-3 gap-3 flex flex-col justify-start items-start'>
                <h1 className=' font-semibold text-[#16192C] text-lg'>Your bid including writers commission</h1>
                <h1 className=' font-bold text-[#16192C] text-[24px]'>$5</h1>
                <h1 className=' text-[12px] text-[#6B7B93]'>Including writers commission fee of 28%</h1>
            </div>
        </div>

        <div>
            <div className=' h-[30px] flex flex-row justify-between items-center'>
                <h1>Comment</h1>
                <div className=' w-[200px] cursor-pointer border-[1px] text-center p-2.5 rounded-full border-[#A414D5]'>
                    Choose a Template 
                </div>
            </div>
            <div className=' h-[90px] py-3'>
                <textarea rows={3} title='comment' placeholder='write your comment here...' className=' placeholder:text-[#6B7B93] placeholder:text-sm p-1.5 border-[1px] border-[#E1D5C9] rounded-xl resize-none w-full placeholder:text-start ' />
            </div>
            
        </div>

        <div className="flex items-center gap-2 ">
        <Checkbox id="terms" className=' border-2 border-[#AEAEB2]' />
        <Label htmlFor="terms">Save comment as a template</Label>
      </div>

        {/* Action Buttons */}
        <div className="flex  gap-4  flex-row w-full justify-between">
          <div
            className=" border-2 border-[#16192C] w-[262px] px-5 py-2 text-center cursor-pointer rounded-full font-semibold text-lg"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </div>
          <div
            className="bg-[#A414D5] text-white px-5 py-2 w-[262px] text-center cursor-pointer rounded-full font-semibold text-lg"
            onClick={() => setShowModal(false)}
          >
            Place Bid
          </div>
        </div>
      </div>
    </div>
  );
}
