"use client"
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Page() {
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

  const deleteAllNotifications = () => {
    setNotifications([]);

  };
  

  return (
    <div className='w-[1074px] h-auto flex flex-col overflow-hidden'>
      <div className='pb-[20px] w-[148px] h-[78] pt-[20px]'>
        <Image src="/homeStyle.svg" alt='no'  width={150} height={80} className="" />
      </div>
      <div className='flex flex-row gap-5 overflow-hidden'>
        <div className='w-[704px] h-[766px] overflow-auto border-[1px] border-[#E3E3E3] bg-[#FFFFFF] rounded-[20px]'>
          <div className='p-3 flex w-[694px] flex-row justify-between items-center'>
            <div className='flex flex-row justify-between items-center gap-5'>
              <div>
              <Image src="/notificationbell.svg" alt='no'  width={50} height={50} className="" />
              </div>
              <div>
                <h1 className='text-2xl text-black font-bold'>Notification</h1>
                <h1 className='text-[16px] text-[#A414D5]'>New {notifications.length}</h1>
              </div>
            </div>
            <div>
              <div onClick={deleteAllNotifications} className='flex flex-row py-2 px-2.5 bg-[#FFFFFF] hover:bg-[#FAFAFA] shadow-[0_0_5px_#00000021] rounded-[10px] gap-2 cursor-pointer'>
              <Image src="/deletebox.svg" alt='no'  width={24} height={24} className="" />
                <h1 className='text-[16px] font-medium'>Delete All</h1>
              </div>
            </div>
          </div>
          <div className='  w-[694px]  flex flex-col justify-center items-center '>
            {notifications.map(notification => (
              <div key={notification.id} className='h-[153px] px-4 py-3 w-[664px] bg-[#FAFAFA] my-3 rounded-[16px] '>
                <div className='w-[640px] h-[65px] bg-white flex flex-row justify-between items-center'>
                  <div className='w-[382px] gap-2 flex flex-col'>
                    <h1 className='text-[12px] font-normal'>{notification.orderId}</h1>
                    <h1 className='text-[16px] font-semibold'>{notification.title}</h1>
                    <h1 className='text-[12px] text-[#640D51]'>{notification.category}</h1>
                  </div>
                  <div className='w-[240px] h-[65px] flex flex-row justify-end items-center px-5'>
                    <div className='w-[199px] flex flex-col justify-center items-start h-[48px] pt-4 gap-2'>
                      <div className='flex flex-row gap-2 justify-center items-center'>
                      <Image src="/dollar.svg" alt='no'  width={18} height={18} className="" />
                        <div className='flex flex-row gap-2 text-sm'>
                          <h1>Price:</h1>
                          <h1>{notification.price}</h1>
                        </div>
                      </div>
                      <div className='flex flex-row gap-2 justify-center items-center'>
                      <Image src="/timer.svg" alt='no'  width={18} height={18} className="" />
                        <div className='flex flex-row gap-2 whitespace-nowrap text-sm'>
                          <h1>Deadline:</h1>
                          <h1>{notification.deadline}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-[19px] h-[65px] cursor-pointer' onClick={() => removeNotification(notification.id)}>
                    <X className='w-[19px] h-[19px]' />
                  </div>
                </div>
                <div className='w-[640px] border-[#CFD7E6] border-b-[1px] pt-3'></div>
                <div className='w-[129px] h-[40px] bg-[#A514D4] rounded-full my-3 text-center flex text-[12px] font-semibold text-white justify-center items-center'>
                  <h1>Go to Order</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-[350px] h-[766px] overflow-y-scroll border-[1px] border-[#E3E3E3] bg-[#FFFFFF] rounded-[20px]'>
          <div className=' w-[340px] h-20 p-3 flex flex-row justify-start gap-3 text-2xl text-[#16192C] font-bold items-center'>
          <Image src="/bookStyle.svg" alt='no'  width={50} height={50} className="" />
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
