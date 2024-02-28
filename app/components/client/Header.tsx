'use client';

import SidebarContext from '@/app/contexts/SidebarContext';
import { useContext } from 'react';

export default function Header() {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <div className="flex items-center">
                <button className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                    <img
                        className="object-cover w-full h-full"
                        src="https://gravatar.com/avatar/a9d6ec2f6eaf4bd45fb1a8b730b7c2075d90cca992ebda622214f380ac9ff038.jpg"
                        alt="Your avatar"
                    />
                </button>
            </div>
        </header>
    );
}
