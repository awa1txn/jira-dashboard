"use client";
import React, { useState } from 'react';

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
    <div className="w-1/6 bg-white h-[940px] rounded-xl m-1">
        <div className="grid place-items-center mt-5 mb-10">
            <img src={'/logo.svg'} alt="logo" className="w-2/4" />
        </div>

        {/* dropdown starts */}
        <div className="grid place-items-center w-full relative ">
            <button onClick={toggleMenu}
                type="button" 
                className="inline-flex justify-between items-center px-4 py-2 border border-gray-300 shadow-sm w-10/12 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <div className='flex items-center'>
                    <img className="w-12 h-auto rounded-full mr-3" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Maria"/>
                    <div className='text-left truncate max-2xl:hidden'>
                        Dropdown Project
                        <p className='text-gray-500'>12 members</p>
                    </div>
                </div>
                <svg className={`transition-all ${isOpen ? 'transform rotate-180' : ''} ml-2 h-5 w-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                </svg>
            </button>
            <div className={`z-10 origin-top-right absolute mt-48 w-11/12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isOpen ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 hidden'}`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Item 3</a>
                </div>
            </div>
        </div>
        {/* dropdown ends */}

        {/* navigation bar starts */}
        <div className='text-gray-500 font-semibold mt-8 mb-2'>
            <p className='pl-4 pt-2 pb-2'>
            MAIN MENU
            </p>
            <ul className='flex flex-col cursor-pointer'>
                <li className='transition-all group h-10 flex items-center border-s-white border-s-4 hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 p-2 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.916687 8.64846L9.62434 2.19945C10.4335 1.60018 11.5665 1.60018 12.3757 2.19945L21.0834 8.64846M4.2778 6.15918V16.1163C4.2778 17.2947 5.28101 18.25 6.51854 18.25H7.63891H14.3611H15.4815C16.719 18.25 17.7222 17.2947 17.7222 16.1163V6.15918M8.75928 18.25V11.849C8.75928 11.2598 9.26089 10.7821 9.87965 10.7821H12.1204C12.7392 10.7821 13.2408 11.2598 13.2408 11.849V18.25"  stroke-width="1.67" stroke-linecap="round"/>
                    </svg>
                    Home
                </li>
                <li className='transition-all group h-10 flex items-center border-s-white border-s-4 hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 p-2 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25002 0.916672L13.75 0.916672C16.3169 0.916672 17.6004 0.916672 18.5808 1.41622C19.4432 1.85564 20.1444 2.55681 20.5838 3.41921C21.0834 4.39964 21.0834 5.6831 21.0834 8.25V13.75C21.0834 16.3169 21.0834 17.6004 20.5838 18.5808C20.1444 19.4432 19.4432 20.1444 18.5808 20.5838C17.6004 21.0833 16.3169 21.0833 13.75 21.0833H8.25002M8.25002 0.916672C5.68311 0.916672 4.39966 0.916672 3.41923 1.41623C2.55682 1.85565 1.85566 2.55681 1.41624 3.41922C0.916687 4.39964 0.916687 5.6831 0.916687 8.25001L0.916687 13.75C0.916687 16.3169 0.916687 17.6004 1.41624 18.5808C1.85566 19.4432 2.55682 20.1444 3.41923 20.5838C4.39966 21.0833 5.68311 21.0833 8.25002 21.0833M8.25002 0.916672L8.25002 21.0833M8.25002 11L22 11" stroke-width="1.67" stroke-linecap="round"/>
                    </svg>
                    My Task
                </li>
                <li className='transition-all group h-10 flex items-center border-s-white border-s-4 hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 p-2 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99998 0.833328C4.93737 0.833328 0.833313 4.93738 0.833313 9.99999C0.833313 15.0626 4.93737 19.1667 9.99998 19.1667C15.0626 19.1667 19.1666 15.0626 19.1666 9.99999C19.1666 4.93738 15.0626 0.833328 9.99998 0.833328ZM9.99998 0.833328V9.99999M9.99998 9.99999L6.33331 18.4039M9.99998 9.99999L1.59606 6.33333" stroke-width="1.67" stroke-linecap="round"/>
                    </svg>
                    Inbox
                </li>
                <li className='transition-all group h-10 flex items-center border-s-white border-s-4 hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 p-2 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833313 10.8333C0.833313 9.82081 1.65412 9 2.66665 9C3.67917 9 4.49998 9.82081 4.49998 10.8333V14.5C4.49998 15.5125 3.67917 16.3333 2.66665 16.3333C1.65412 16.3333 0.833313 15.5125 0.833313 14.5V10.8333Z" stroke-width="1.67"/>
                        <path d="M8.16665 3.5C8.16665 2.48748 8.98746 1.66666 9.99998 1.66666C11.0125 1.66666 11.8333 2.48748 11.8333 3.5V14.5C11.8333 15.5125 11.0125 16.3333 9.99998 16.3333C8.98746 16.3333 8.16665 15.5125 8.16665 14.5V3.5Z" stroke-width="1.67"/>
                        <path d="M15.5 7.16666C15.5 6.15414 16.3208 5.33333 17.3333 5.33333C18.3458 5.33333 19.1666 6.15414 19.1666 7.16666V14.5C19.1666 15.5125 18.3458 16.3333 17.3333 16.3333C16.3208 16.3333 15.5 15.5125 15.5 14.5V7.16666Z" stroke-width="1.67"/>
                    </svg>
                    Analyze    
                </li>
                <li className='transition-all group h-10 flex items-center border-s-white border-s-4 hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 p-2 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.41923 20.5838L3.79831 19.8398L3.41923 20.5838ZM1.41624 18.5808L2.16023 18.2017L1.41624 18.5808ZM16.9171 18.5808L16.1731 18.2017L16.9171 18.5808ZM14.9141 20.5838L14.5351 19.8398L14.9141 20.5838ZM14.9141 5.08289L14.5351 5.82688L14.9141 5.08289ZM16.9171 7.08588L16.1731 7.46496L16.9171 7.08588ZM3.41923 5.08289L3.79831 5.82688L3.41923 5.08289ZM1.41624 7.08588L2.16023 7.46496L1.41624 7.08588ZM17.4167 16.5817C16.9555 16.5817 16.5817 16.9555 16.5817 17.4167C16.5817 17.8778 16.9555 18.2517 17.4167 18.2517V16.5817ZM3.74835 4.58333C3.74835 5.04449 4.1222 5.41833 4.58335 5.41833C5.04451 5.41833 5.41835 5.04449 5.41835 4.58333H3.74835ZM4.92262 14.9802C4.58949 15.299 4.57795 15.8276 4.89684 16.1607C5.21573 16.4939 5.74429 16.5054 6.07742 16.1865L4.92262 14.9802ZM12.256 16.1865C12.5891 16.5054 13.1177 16.4939 13.4365 16.1607C13.7554 15.8276 13.7439 15.299 13.4108 14.9802L12.256 16.1865ZM8.25002 5.41833H10.0834V3.74833H8.25002V5.41833ZM16.5817 11.9167V13.75H18.2517V11.9167H16.5817ZM10.0834 20.2483H8.25002V21.9183H10.0834V20.2483ZM1.75169 13.75V11.9167H0.081687V13.75H1.75169ZM8.25002 20.2483C6.95279 20.2483 6.03008 20.2477 5.30769 20.1887C4.59505 20.1304 4.1512 20.0196 3.79831 19.8398L3.04015 21.3278C3.66769 21.6475 4.35578 21.7865 5.1717 21.8531C5.97787 21.919 6.98035 21.9183 8.25002 21.9183V20.2483ZM0.081687 13.75C0.081687 15.0197 0.0810376 16.0222 0.146904 16.8283C0.213567 17.6442 0.3525 18.3323 0.67225 18.9599L2.16023 18.2017C1.98043 17.8488 1.86958 17.405 1.81136 16.6923C1.75234 15.9699 1.75169 15.0472 1.75169 13.75H0.081687ZM3.79831 19.8398C3.09302 19.4804 2.5196 18.907 2.16023 18.2017L0.67225 18.9599C1.19172 19.9794 2.02062 20.8083 3.04015 21.3278L3.79831 19.8398ZM16.5817 13.75C16.5817 15.0472 16.581 15.9699 16.522 16.6923C16.4638 17.405 16.3529 17.8488 16.1731 18.2017L17.6611 18.9599C17.9809 18.3323 18.1198 17.6442 18.1865 16.8283C18.2523 16.0222 18.2517 15.0197 18.2517 13.75H16.5817ZM10.0834 21.9183C11.353 21.9183 12.3555 21.919 13.1617 21.8531C13.9776 21.7865 14.6657 21.6475 15.2932 21.3278L14.5351 19.8398C14.1822 20.0196 13.7383 20.1304 13.0257 20.1887C12.3033 20.2477 11.3806 20.2483 10.0834 20.2483V21.9183ZM16.1731 18.2017C15.8138 18.907 15.2404 19.4804 14.5351 19.8398L15.2932 21.3278C16.3128 20.8083 17.1417 19.9794 17.6611 18.9599L16.1731 18.2017ZM10.0834 5.41833C11.3806 5.41833 12.3033 5.41898 13.0257 5.47801C13.7383 5.53623 14.1822 5.64708 14.5351 5.82688L15.2932 4.3389C14.6657 4.01915 13.9776 3.88022 13.1617 3.81355C12.3555 3.74769 11.353 3.74833 10.0834 3.74833V5.41833ZM18.2517 11.9167C18.2517 10.647 18.2523 9.64452 18.1865 8.83835C18.1198 8.02243 17.9809 7.33434 17.6611 6.7068L16.1731 7.46496C16.3529 7.81784 16.4638 8.2617 16.522 8.97434C16.581 9.69673 16.5817 10.6194 16.5817 11.9167H18.2517ZM14.5351 5.82688C15.2404 6.18624 15.8138 6.75967 16.1731 7.46496L17.6611 6.7068C17.1417 5.68727 16.3128 4.85837 15.2932 4.3389L14.5351 5.82688ZM8.25002 3.74833C6.98035 3.74833 5.97787 3.74769 5.1717 3.81355C4.35578 3.88022 3.66769 4.01915 3.04015 4.3389L3.79831 5.82688C4.1512 5.64708 4.59505 5.53623 5.30769 5.47801C6.03008 5.41898 6.95279 5.41833 8.25002 5.41833V3.74833ZM1.75169 11.9167C1.75169 10.6194 1.75234 9.69673 1.81136 8.97434C1.86958 8.2617 1.98043 7.81784 2.16023 7.46496L0.67225 6.7068C0.3525 7.33434 0.213567 8.02243 0.146904 8.83835C0.0810376 9.64452 0.081687 10.647 0.081687 11.9167H1.75169ZM3.04015 4.3389C2.02062 4.85837 1.19172 5.68727 0.67225 6.7068L2.16023 7.46496C2.5196 6.75967 3.09302 6.18624 3.79831 5.82688L3.04015 4.3389ZM8.25002 1.75167H16.5V0.081668H8.25002V1.75167ZM20.2484 5.5V13.75H21.9184V5.5H20.2484ZM20.2484 13.75C20.2484 15.3139 18.9806 16.5817 17.4167 16.5817V18.2517C19.9029 18.2517 21.9184 16.2362 21.9184 13.75H20.2484ZM16.5 1.75167C18.5702 1.75167 20.2484 3.42985 20.2484 5.5H21.9184C21.9184 2.50754 19.4925 0.081668 16.5 0.081668V1.75167ZM8.25002 0.081668C5.76382 0.081668 3.74835 2.09713 3.74835 4.58333H5.41835C5.41835 3.01945 6.68613 1.75167 8.25002 1.75167V0.081668ZM6.07742 16.1865C7.77958 14.5571 10.5538 14.5571 12.256 16.1865L13.4108 14.9802C11.0628 12.7326 7.27055 12.7326 4.92262 14.9802L6.07742 16.1865ZM10.7911 11.4922C10.7911 12.2813 10.112 12.9826 9.19677 12.9826V14.6526C10.9649 14.6526 12.4611 13.2716 12.4611 11.4922H10.7911ZM9.19677 12.9826C8.28149 12.9826 7.60244 12.2813 7.60244 11.4922H5.93244C5.93244 13.2716 7.42868 14.6526 9.19677 14.6526V12.9826ZM7.60244 11.4922C7.60244 10.703 8.28149 10.0017 9.19677 10.0017V8.33167C7.42868 8.33167 5.93244 9.71266 5.93244 11.4922H7.60244ZM9.19677 10.0017C10.112 10.0017 10.7911 10.703 10.7911 11.4922H12.4611C12.4611 9.71266 10.9649 8.33167 9.19677 8.33167V10.0017Z" fill="#5F6D7E"/>
                    </svg>
                    Members
                </li>
                <li className='transition-all group h-10 flex items-center border-s-white border-s-4 hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 p-2 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6667 3.5L18.25 3.5M1.75 3.5L10 3.5M1.75 14.5L10 14.5M1.75 9H6.33333M10 9H18.25M13.6667 14.5H18.25M13.6667 1.66667V5.33333M6.33333 7.16667V10.8333M13.6667 12.6667V16.3333" stroke-width="1.67" stroke-linecap="round"/>
                    </svg>
                    Settings
                </li>
            </ul>

        </div>
        {/* navigation bar ends */}

        {/* workspace starts */}
        <div className='text-gray-500 font-semibold mt-6 mb-16'>
            <p className='pl-4 pt-2 pb-2'>
            WORKSPACE
            </p>
            <ul className='flex flex-col cursor-pointer'>
                <li className=' transition-all group h-10 flex items-center hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 pl-6 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="6" height="6" rx="3" fill="#72777C"/>
                    </svg>
                    Company Project Item 1
                </li>
                <li className=' transition-all group h-10 flex items-center hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 pl-6 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="6" height="6" rx="3" fill="#72777C"/>
                    </svg>
                    Company Project Item 2
                </li>
                <li className=' transition-all group h-10 flex items-center hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 pl-6 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="6" height="6" rx="3" fill="#72777C"/>
                    </svg>
                    Company Project Item 3
                </li>
                <li className=' transition-all group h-10 flex items-center hover:bg-slate-100 hover:text-blue-600 hover:border-s-blue-600 hover:border-s-4 pl-6 flex gap-2'>
                    <svg className='stroke-gray-600 group-hover:stroke-blue-600' width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="6" height="6" rx="3" fill="#72777C"/>
                    </svg>
                    Company Project Item 4
                </li>
            </ul>

        </div>
        {/* workspace ends */}
        {/* create new project starts */}
        <div className='group grid place-items-center w-full text-gray-500 cursor-pointer'>
            <div className='flex justify-center items-center w-10/12 bg-slate-100 h-28 rounded-xl'>
                <div className='flex flex-col justify-center items-center gap-2'>

                <svg className='group-hover:animate-wiggle' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="40" height="40" rx="20" stroke="#DAE0E6" stroke-linecap="round" stroke-dasharray="4 4"/>
                    <path d="M21 14.3333V27.6667M27.6666 21L14.3333 21" stroke="#272D37" stroke-width="1.5" stroke-linecap="round"/>
                </svg>

                <p>
                    Add New Project
                </p>
                
                </div>
            </div>
        </div>
        {/* create new project ends */}

        {/* user profile starts */}
        <div className='flex justify-between p-6 text-black'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <img className='w-8' src="/avatar/01.png" alt="" />
            <span className='truncate w-20'>Danylo Shapovalov</span>
        </div>
        <div className='flex items-center cursor-pointer'>
            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62476 1.62494H9.37476M8.62476 2.37494H9.37476M1.62476 1.62494H2.37476M1.62476 2.37494H2.37476M15.6248 1.62494H16.3748M15.6248 2.37494H16.3748M10 2C10 2.55228 9.55228 3 9 3C8.44772 3 8 2.55228 8 2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2ZM3 2C3 2.55228 2.55229 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55229 1 3 1.44772 3 2ZM17 2C17 2.55228 16.5523 3 16 3C15.4477 3 15 2.55228 15 2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2Z" stroke="#5F6D7E" stroke-width="1.67" stroke-linecap="round"/>
            </svg>
        </div>
        </div>
        {/* user profile ends */}

    </div>
    );
}