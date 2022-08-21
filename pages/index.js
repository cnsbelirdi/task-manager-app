import React, { useState } from 'react';
export default function Home() {
  const [isOpen, toggleSidebar] = useState(false);
  return (
    <div className="h-screen flex">
      {/* SIDEBAR */}
      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-64 px-8 bg-white py-4 border-r overflow-auto lg:translate-x-0 transform ${
        isOpen ? "translate-x-0 ease-out transition-medium" : "-translate-x-full ease-in transition-medium" 
      }`}>
        {/* LOGO */}
        <div className="flex items-center justify-between">
          <img src="/images/logo.svg" alt="logo" className="w-9 h-9"/>
          <button className="text-gray-600 lg:hidden" onClick={() => toggleSidebar(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <nav className="mt-8">
          {/* SCRUMBOARD */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">scrumboard</h3>
            <div className="mt-2 -mx-3">
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>Backlog</span>
                <span className="text-xs font-semibold">23</span>
              </a>
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-white bg-gradient-to-r from-purple-700 to-blue-500 rounded-md">
                <span>Active Sprints</span>
                <span className="text-xs font-semibold">1</span>
              </a>
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>Reports</span>
                <span className="text-xs font-semibold">13</span>
              </a>
            </div>
          </div>
          {/* TAGS */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">tags</h3>
            <div className="mt-2 -mx-3">
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>Bug</span>
                <span className="text-xs font-semibold"></span>
              </a>
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>New Feature</span>
                <span className="text-xs font-semibold"></span>
              </a>
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>Marketing</span>
                <span className="text-xs font-semibold"></span>
              </a>
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>Design</span>
                <span className="text-xs font-semibold"></span>
              </a>
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>Research</span>
                <span className="text-xs font-semibold"></span>
              </a>
              <a href="#" className="flex justify-between items-center text-sm px-3 py-2 font-medium text-gray-700">
                <span>Overdue</span>
                <span className="text-xs font-semibold"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-1 min-w-0 flex-shrink-0">
        {/* HEADER */}
        <header className="flex flex-col border-b p-3 flex-shrink-0">
          {/* TOP */}
          <div className="flex justify-between items-center flex-shrink-0">
            <div className="flex min-w-0 items-center gap-x-4">
              {/* HAMBURGER MENU */}
              <button className="text-gray-600 lg:hidden" onClick={() => toggleSidebar(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* SEARCH BAR */}
              <div className="relative w-64">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input type={'text'} placeholder="Search" className="block w-full text-sm border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400" />
              </div>
            </div>
            {/* ICONS */}
            <div className="flex items-center gap-x-4 ml-2">
              <button className="text-gray-500 h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className=''>
                <img src="https://media.istockphoto.com/vectors/programmer-icon-profession-and-job-vector-illustration-vector-id1266224795?b=1&k=20&m=1266224795&s=612x612&w=0&h=_X2mX1slvaWCo5YJW66nzghrtJ2O9mXb2lh4cUvHv2E=" className="w-9 h-9 rounded-full border object-cover" alt="FENER" />
              </button>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="flex items-center justify-between py-2 flex-shrink-0" >
            {/* ASSIGNESS */}
            <div className="sm:flex sm:items-center gap-x-6 ">
              <h2 className="flex text-lg font-medium text-gray-900">Assigness</h2>
              <div className="flex items-center">
                <span className="border-2 border-white rounded-full">
                  <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                </span>
                <span className="-ml-2.5 border-2 border-white rounded-full">
                  <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                </span>
                <span className="-ml-2.5 border-2 border-white rounded-full">
                  <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                </span>
                <span className="-ml-2.5 border-2 border-white rounded-full">
                  <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR4" />
                </span>
              </div>
            </div>
            {/* BUTTONS */}
            <div className="flex items-center text-white text-sm font-medium gap-x-5 ">
              <button className="bg-gray-800 p-2 rounded-md hover:bg-gray-700">Complete Sprint</button>
              <button className="flex items-center bg-gradient-to-r from-purple-700 to-blue-500 p-2 rounded-md hover:from-purple-600 hover:to-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>New Item</span>
              </button>
            </div>
          </div>
        </header>
        {/* CONTENT */}
        <div className="bg-gray-50 flex-1 overflow-auto flex-shrink-0">
          <main className="h-full p-3 inline-flex space-x-2 overflow-hidden">
            {/* TODO BOARD */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-2 text-md font-medium text-gray-700 leading-tight font-mono">Todo</h3>
              <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
                {/* CARDS */}
                <ul className="py-2 px-3">
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="uppercase text-blue-500 leading-tight">Design</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-red-200 rounded px-3 py-1">
                            <span className="uppercase text-red-500 leading-tight">Bug</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* IN PROGRESS */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-2 text-md font-medium text-gray-700 leading-tight font-mono">In Progress</h3>
              <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
                {/* CARDS */}
                <ul className="py-2 px-3">
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-pink-200 rounded px-3 py-1">
                            <span className="uppercase text-pink-500 leading-tight">Research</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Update brand guidelines and create a design system</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="uppercase text-blue-500 leading-tight">Design</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Think of better way to show projects on website</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-green-200 rounded px-3 py-1">
                            <span className="uppercase text-green-500 leading-tight">New Feature</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* TESTING */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-2 text-md font-medium text-gray-700 leading-tight font-mono">Testing</h3>
              <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
                {/* CARDS */}
                <ul className="py-2 px-3">
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="uppercase text-blue-500 leading-tight">Design</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="uppercase text-blue-500 leading-tight">Design</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-purple-200 rounded px-3 py-1">
                            <span className="uppercase text-purple-500 leading-tight">Marketing</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="uppercase text-blue-500 leading-tight">Design</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-yellow-200 rounded px-3 py-1">
                            <span className="uppercase text-yellow-500 leading-tight">Overdue</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Renew Sketch License for the team</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* DONE */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-2 text-md font-medium text-gray-700 leading-tight font-mono">Done</h3>
              <div className="flex-1 min-h-0 overflow-y-auto scrollbar">
                {/* CARDS */}
                <ul className="py-2 px-3">
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="uppercase text-blue-500 leading-tight">Design</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div className="text-sm font-medium">
                        {/* CARD HEADER */}
                        <div className="flex justify-between items-baseline ">
                          <div className="bg-blue-200 rounded px-3 py-1">
                            <span className="uppercase text-blue-500 leading-tight">Design</span>
                          </div>
                          <div className="flex items-center text-gray-400 gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span>2</span>
                          </div>
                        </div>
                        {/* CARD CONTENT */}
                        <div className="mt-3 text-gray-800">
                          <p>Product illustration to symbolize bringing people together</p>
                        </div>
                        {/* CARD FOOTER */}
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="AVATAR1" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://alkhan.com.pk/wp-content/uploads/2020/11/avatar_woman.png" alt="AVATAR2" />
                          </span>
                          <span className="-ml-2.5 border-2 border-white rounded-full">
                            <img className="w-6 h-6 object-cover" src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="AVATAR3" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
