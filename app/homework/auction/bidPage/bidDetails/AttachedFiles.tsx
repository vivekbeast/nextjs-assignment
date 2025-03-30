import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Download, Upload, X } from 'lucide-react';
import Image from 'next/image';
import PayBid from './PayBid';

// interface OrderDetailsProps {
      
//     order: {
//       name: string; // Name of the order
//       category: string; // Category of the order
//       deadline: string; // Deadline for the order
//       id: string; // Ensure id is a string
//       bid: string; // Bid value
//       pay: string; // Payment value
//       premium: boolean; // Whether the order is premium
//       item: string; // Item name
//       price: number; // Price of the order
//       amount: number; // Amount of the order
//       status: string; // Status of the order
//       files: [];
//     };
//   }

export default function AttachedFiles() {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [paymentRequired, setPaymentRequired] = useState(false);
      const [showModal, setShowModal] = useState(false);
    
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    };
  
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = () => {
      setIsDragging(false);
    };
  
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
  
      const droppedFile = event.dataTransfer.files?.[0];
      if (droppedFile) {
        setFile(droppedFile);
      }
    };
    const router  = useRouter();
            const GoBack = () => {
                router.push('/homework/auction');
            };
  return (
    <div className=' px-3.5 overflow-y-hidden h-[770px] flex flex-col justify-between overflow-x-hidden'>
            <div className=' w-full flex flex-col gap-7'>
                <div className=' h-[248px] px-3.5 flex flex-col gap-5'>
                    <h1 className=' text-[#16192C] text-[23px] font-bold'>Upload File</h1>
                    <div
      className={`h-[200px] border-2 flex flex-col justify-center items-center rounded-2xl transition-colors duration-300 
        ${isDragging ? 'border-blue-500 bg-blue-100' : 'border-dashed border-[#6B7B93] bg-[#EFF2F4]'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        id="fileInput"
        onChange={handleFileChange}
      />

      <label
        htmlFor="fileInput"
        className="h-[50px] w-[190px] cursor-pointer flex flex-row justify-center items-center rounded-xl bg-white shadow-sm hover:bg-gray-100 transition"
      >
        <Upload className="mr-2 text-gray-700" />
        <h1 className="text-gray-700 font-medium">Upload File</h1>
      </label>

      <div className="flex items-center space-x-2 pt-4 text-sm text-[#16192C]">
        <Checkbox
          id="paymentRequired"
          checked={paymentRequired}
          onCheckedChange={(checked) => setPaymentRequired(checked === true)}
          className="bg-white border-2 border-[#6B7B93]"
        />
        <Label htmlFor="paymentRequired">Mark file as payment required</Label>
      </div>

      {file ? (
        <h1 className="whitespace-nowrap text-[16px] text-[#6B7B93] pt-2">
          Uploaded: {file.name}
        </h1>
      ) : (
        <h1 className="whitespace-nowrap text-[16px] text-[#6B7B93] pt-3">
          To upload the document, payment is necessary.
        </h1>
      )}
                    </div>
                </div>
                <div className=' h-[313px] px-3.5 flex flex-col gap-5'>
                <h1 className=' text-[#16192C] text-[23px] font-bold'>Uploaded Files</h1>
                <div className=' h-[37px]'>
                    <div className=' w-full flex flex-row gap-5 justify-between items-center'>
                        
                        <div className=' w-[114px] flex flex-row gap-1.5'>
                        <input type="checkbox" title='Selected' />
                            <Image src="/colored/filePng.svg" alt='d' width={24} height={24} /> 
                            <div className=' flex flex-col gap-0'>
                                <h1 className=' text-sm text-[#A414D5]'>java.png</h1>
                                <h1 className=' text-[12px] text-[#6B7B93] whitespace-nowrap'>Today 12:10 AM</h1>
                            </div>
                        </div>
                        <div className=' w-[283px] flex flex-row justify-between'>
                            <div className=' flex flex-row gap-2 text-[#640D51] font-semibold'>
                            <Download />
                            <h1>0.1 MB</h1>
                            </div>
                            <div className=' flex flex-row gap-3 text-center'>
                            <Image src="/image.png" alt='d' width={32} height={32} className=' rounded-full' />
                            <h1 className=' text-[#A414D5] font-semibold'>You</h1> 
                            </div>
                            <div>
                                <X className=' cursor-pointer' />
                            </div>
                        </div>
                    </div>
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
                <div onClick={() => setShowModal(true)} className='  w-[208px] h-[60px] bg-[#A414D5] text-center py-3.5 cursor-pointer rounded-full text-lg font-semibold text-white'>
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
  );
}
