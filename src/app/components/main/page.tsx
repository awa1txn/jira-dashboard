'use client';
import { useState } from 'react';
import Board from './board.js'
import apiClient from '../../client/client'


export default function Main() {
    async function lol() {
      const res = await apiClient.get('');
      console.log(res)
    }

    return (
      <>
      
      <div className="w-5/6 bg-white h-[940px] rounded-xl m-1 text-black overflow-y-scroll">
      {/* project's header starts */}
      <div className="flex justify-between p-5">

        <div>
          <h1 className="text-2xl font-semibold text-slate-800"
          onClick={lol}>
            Dropdown Project⚡
          </h1>
          
          <p className="text-slate-500">
            Last Update : 30 February 2024
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <img className="w-10 h-10" src="/avatar/02.png" alt="user profile" />
            <img className="w-10 h-10 -ml-3" src="/avatar/02.png" alt="user profile" />
            <img className="w-10 h-10 -ml-3" src="/avatar/02.png" alt="user profile" />
            <img className="w-10 h-10 -ml-3" src="/avatar/02.png" alt="user profile" />
            <div
            className="bg-violet-600 w-9 h-9 text-white grid place-items-center rounded-full -ml-3">
              +7
            </div>
          </div>

          <div>
            <svg className="hover:animate-wiggle cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="32" height="32" rx="16" stroke="#DAE0E6" stroke-linecap="round" stroke-dasharray="4 4"/>
              <path d="M17 11.6667V22.3333M22.3334 17L11.6667 17" stroke="#272D37" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        

        </div>
      </div>
      {/* project's header ends */}

      {/* project's navigation starts */}

      <ul className="flex mx-5 mb-5">
        <li className="transition-all hover:border-b-blue-600 hover:border-b-2 border-b-2 pb-5 pr-3 pl-2 cursor-pointer">Overview</li>
        <li className="transition-all hover:border-b-blue-600 hover:border-b-2 border-b-2 pb-5 pr-3 pl-2 cursor-pointer">Board</li>
        <li className="transition-all hover:border-b-blue-600 hover:border-b-2 border-b-2 pb-5 pr-3 pl-2 cursor-pointer">List</li>
        <li className="transition-all hover:border-b-blue-600 hover:border-b-2 border-b-2 pb-5 pr-3 pl-2 cursor-pointer">Timeline</li>
        <li className="transition-all hover:border-b-blue-600 hover:border-b-2 border-b-2 pb-5 pr-3 pl-2 cursor-pointer">Calendar</li>
        <li className="transition-all hover:border-b-blue-600 hover:border-b-2 border-b-2 pb-5 pr-3 pl-2 cursor-pointer">Workflow</li>
        <li className="transition-all hover:border-b-blue-600 hover:border-b-2 border-b-2 pb-5 pr-3 pl-2 cursor-pointer">Files</li>
        <li className="w-full border-b-slate border-b-2"></li>
      </ul>

      {/* project's navigation ends */}


      {/* project's page content starts */}
      <div className="flex justify-between gap-5">

        
        <div className="flex flex-col w-1/4">
          <div className="mx-5 pb-5 border-b-4 border-b-black flex justify-between">
          <div className="flex gap-4">
            
            <div className='font-bold'>TODO</div>
            <div className="w-12 px-2 text-center text-slate-500 rounded-2xl border-slate-200 border-2">5</div>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62476 1.62494H9.37476M8.62476 2.37494H9.37476M1.62476 1.62494H2.37476M1.62476 2.37494H2.37476M15.6248 1.62494H16.3748M15.6248 2.37494H16.3748M10 2C10 2.55228 9.55228 3 9 3C8.44772 3 8 2.55228 8 2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2ZM3 2C3 2.55228 2.55229 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55229 1 3 1.44772 3 2ZM17 2C17 2.55228 16.5523 3 16 3C15.4477 3 15 2.55228 15 2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2Z" stroke="#5F6D7E" stroke-width="1.67" stroke-linecap="round"/>
            </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/4">
          <div className="mx-5 pb-5 border-b-4 border-b-blue-300 flex justify-between">
          <div className="flex gap-4">
            
            <div className='font-bold'>IN WORK</div>
            <div className="w-12 px-2 text-center text-slate-500 rounded-2xl border-slate-200 border-2">5</div>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62476 1.62494H9.37476M8.62476 2.37494H9.37476M1.62476 1.62494H2.37476M1.62476 2.37494H2.37476M15.6248 1.62494H16.3748M15.6248 2.37494H16.3748M10 2C10 2.55228 9.55228 3 9 3C8.44772 3 8 2.55228 8 2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2ZM3 2C3 2.55228 2.55229 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55229 1 3 1.44772 3 2ZM17 2C17 2.55228 16.5523 3 16 3C15.4477 3 15 2.55228 15 2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2Z" stroke="#5F6D7E" stroke-width="1.67" stroke-linecap="round"/>
            </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/4">
          <div className="mx-5 pb-5 border-b-4 border-b-orange-300 flex justify-between">
          <div className="flex gap-4">
            
            <div className='font-bold'>QA</div>
            <div className="w-12 px-2 text-center text-slate-500 rounded-2xl border-slate-200 border-2">5</div>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62476 1.62494H9.37476M8.62476 2.37494H9.37476M1.62476 1.62494H2.37476M1.62476 2.37494H2.37476M15.6248 1.62494H16.3748M15.6248 2.37494H16.3748M10 2C10 2.55228 9.55228 3 9 3C8.44772 3 8 2.55228 8 2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2ZM3 2C3 2.55228 2.55229 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55229 1 3 1.44772 3 2ZM17 2C17 2.55228 16.5523 3 16 3C15.4477 3 15 2.55228 15 2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2Z" stroke="#5F6D7E" stroke-width="1.67" stroke-linecap="round"/>
            </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/4">
          <div className="mx-5 pb-5 border-b-4 border-b-green-300 flex justify-between">
          <div className="flex gap-4">
            
            <div className='font-bold'>COMPLETED</div>
            <div className="w-12 px-2 text-center text-slate-500 rounded-2xl border-slate-200 border-2">5</div>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62476 1.62494H9.37476M8.62476 2.37494H9.37476M1.62476 1.62494H2.37476M1.62476 2.37494H2.37476M15.6248 1.62494H16.3748M15.6248 2.37494H16.3748M10 2C10 2.55228 9.55228 3 9 3C8.44772 3 8 2.55228 8 2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2ZM3 2C3 2.55228 2.55229 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55229 1 3 1.44772 3 2ZM17 2C17 2.55228 16.5523 3 16 3C15.4477 3 15 2.55228 15 2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2Z" stroke="#5F6D7E" stroke-width="1.67" stroke-linecap="round"/>
            </svg>
            </div>
          </div>
        </div>

      </div>
      {/* project's page content ends */}

      <Board/>
      </div>
      </>

    );
  }