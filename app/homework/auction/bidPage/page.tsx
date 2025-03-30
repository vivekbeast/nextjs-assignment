"use client";
import {  ArrowLeft, Heart, Info, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import OrderDetails from './bidDetails/OrderDetails';
import AttachedFiles from './bidDetails/AttachedFiles';
import OrderDescription from './bidDetails/OrderDescription';
import Image from 'next/image';

export default function BidPage() {
  const searchParams = useSearchParams();
  const router  = useRouter();
  const name = searchParams.get('name');
  const category = searchParams.get('category');
  const deadline = searchParams.get('deadline');
  const id = searchParams.get('id');
  const bid = searchParams.get('bid');
  const pay = searchParams.get('pay');
  const premium = searchParams.get('premium') === 'true';
  const [activeTab, setActiveTab] = useState("Details");

  const order = {
    name: name || 'Unnamed Order',
    category: category || 'Uncategorized',
    deadline: deadline || 'No Deadline', // Provide a default value for deadline
    id: id || '', // Ensure id is a string
    bid: bid || '',
    pay: pay || '',
    premium,
    item: name || 'Default Item', // Add a default value for item
    price: parseFloat(bid || '0'), // Convert bid to a number for price
    amount: parseFloat(bid || '0'), // Add default value for amount
    status: 'Pending', // Add default value for status
    files: [] as [], // Explicitly define files as an empty tuple
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return <OrderDescription order={order} />;
      case "Details":
        return <OrderDetails order={order} />;
      case "Attached Files":
        return <AttachedFiles />;
      default:
        return null;
    }
  };

    const GoBack = () => {
        router.push('/homework/auction');
    };

      const [notifications, setNotifications] = useState<Notification[]>([]);
    
      useEffect(() => {
        const storedNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        if (storedNotifications.length === 0) {
          const defaultNotifications = getDefaultNotifications();
          setNotifications(defaultNotifications);
          localStorage.setItem('notifications', JSON.stringify(defaultNotifications)); // Store defaults
        } else {
          setNotifications(storedNotifications);
        }
      }, []);
      
    
      useEffect(() => {
        localStorage.setItem('notifications', JSON.stringify(notifications));
      }, [notifications]);
    
      const getDefaultNotifications = () => [
        { id: 1, orderId: '#78963566', title: 'PowerPoint Presentation Nursing', category: 'Organization Values', price: 'Negotiable', deadline: 'Today 02:56pm' },
        { id: 2, orderId: '#11223344', title: 'Research Paper Editing', category: 'Academic Assistance', price: '$50', deadline: 'Tomorrow 11:00am' },
        { id: 3, orderId: '#55667788', title: 'Graphic Design Logo', category: 'Branding', price: '$100', deadline: 'Next Week' },
        { id: 4, orderId: '#55667788', title: 'Graphic Design Logo', category: 'Branding', price: '$100', deadline: 'Next Week' },
        { id: 5, orderId: '#55667788', title: 'Graphic Design Logo', category: 'Branding', price: '$100', deadline: 'Next Week' },
        { id: 6, orderId: '#55667788', title: 'Graphic Design Logo', category: 'Branding', price: '$100', deadline: 'Next Week' },
        { id: 7, orderId: '#55667788', title: 'Graphic Design Logo', category: 'Branding', price: '$100', deadline: 'Next Week' },
      ];
    
      interface Notification {
        id: number;
        orderId: string;
        title: string;
        category: string;
        price: string;
        deadline: string;
      }

      const removeNotification = (id: number): void => {
        setNotifications(notifications.filter((notification: Notification) => notification.id !== id));
      };

  return (
    <div className='w-[1074px] h-auto flex flex-col overflow-hidden'>
      <div className='flex flex-row gap-5 overflow-hidden'>
        <div className='w-[704px] h-[766px] overflow-auto border-[1px] border-[#E3E3E3] bg-[#FFFFFF] rounded-[20px]'>
          <div className=' p-5 flex w-[694px] flex-row justify-between items-center'>
            <div className='flex flex-row justify-between items-center gap-5'>
                <div onClick={GoBack} className=' cursor-pointer'>
                <ArrowLeft  />
                </div>
              <div>
                <h1 className='text-2xl text-black font-bold'>Organization Value</h1>
              </div>
            </div>
            <div>
              <div className='flex flex-row'>
                <h1 className='text-[23px] text-[#640D51] font-bold'>Dispute</h1>
              </div>
            </div>
          </div>
          <div className='  w-[694px] px-3 flex flex-col justify-center items-center '>
          <div className="h-[60px] w-[694px] px-3 flex gap-5 mt-4 border-b">
        {["Description", "Details", "Attached Files"].map((tab) => (
          <div
            key={tab}
            className={`px-[20px] py-2 cursor-pointer  ${activeTab === tab ? "border-b-2 border-purple-500 font-semibold text-[#16192C]" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
        <div className=' w-[217px] h-10 flex flex-row justify-between items-center'>
            <div className='flex w-[113px] flex-row gap-2 justify-center items-center bg-[#EAB308] py-1.5 px-3 rounded-full'>
                <h1 className='text-[#FFFFFF] font-semibold'>Premium</h1>
                <Image src="/colored/questionWhite.svg" alt='no' width={18} height={18} className=" text-white" />
            </div>
            <div>
            <Info className='w-[20px] h-[20px] text-[#A414D5] cursor-pointer' />
            </div>
            <div>
            <Heart className='w-[20px] h-[20px] text-[#A414D5] cursor-pointer' />
            </div>
        </div>
          </div>
      <div className=" pt-5">
        {renderContent()}
      </div>
          </div>
        </div>
        <div className='w-[350px] h-[766px] overflow-y-scroll overflow-x-hidden border-[1px] border-[#E3E3E3] bg-[#FFFFFF] rounded-[20px]'>
          <div className=' w-[340px] h-20 p-3 flex flex-row justify-start gap-3 text-2xl text-[#16192C] font-bold items-center'>
          {/* <Image src="/bookStyle.svg" alt='no'  width={50} height={50} className="" /> */}
          <div className=' h-14 text-[20px] text-[#16192C] font-bold'><h1>Recommended <br /> Assignment</h1></div>
          </div>
          <div>
          <div className='  w-[340px]  py-3 flex flex-col justify-center items-center '>
          {notifications.map(notification => (
              <div key={notification.id} className=' my-5 flex flex-col justify-center items-center bg-[#FAFAFA]  rounded-[16px] '>
                <div className='w-[324px]  p-2 hover:border-[1px] hover:rounded-2xl hover:border-[#A414D5] bg-white flex flex-col justify-between items-center py-2'>
                  <div className=' w-full gap-2 flex flex-row'>
                  <div className='w-full flex flex-col'>
                    <h1 className='text-[12px] font-normal'>{notification.orderId}</h1>
                    <h1 className='text-[16px] font-semibold'>{notification.title}</h1>
                    <h1 className='text-[12px] text-[#640D51]'>{notification.category}</h1>
                  </div>
                  <div className='w-fit h-[50px] cursor-pointer' onClick={() => removeNotification(notification.id)}>
                    <X className='' />
                  </div>
                  </div>
                  <div className='w-full border-[#CFD7E6] border-b-[1px] pt-3'></div>
                  <div>
                  <div className='w-[324px] h-fit flex flex-col justify-end items-center px-2'>
                    <div className='  flex flex-row justify-between items-start  pt-4 gap-2'>
                      <div className='flex flex-row gap-1 justify-center items-center'>
                      <Image src="/dollar.svg" alt='no'  width={18} height={18} className="" />
                        <div className='flex flex-row gap-2 text-sm'>
                          <h1>Price:</h1>
                          <h1>{notification.price}</h1>
                        </div>
                      </div>
                      <div className='flex flex-row gap-1 justify-center items-center'>
                      <Image src="/timer.svg" alt='no'  width={18} height={18} className="" />
                        <div className='flex flex-row gap-2 whitespace-nowrap text-sm'>
                          <h1>Deadline:</h1>
                          <h1>{notification.deadline}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
