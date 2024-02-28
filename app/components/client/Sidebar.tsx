'use client';

import appConfig from '@/app/configs/app.config';
import SidebarContext from '@/app/contexts/SidebarContext';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useContext } from 'react';

export default function Sidebar() {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
    return (
        <>
            <div
                className={clsx([
                    {
                        block: sidebarOpen,
                        hidden: !sidebarOpen,
                    },
                    {
                        'fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden': true,
                    },
                ])}
                onClick={() => {
                    setSidebarOpen(false);
                }}></div>

            <div
                className={clsx([
                    {
                        'translate-x-0 ease-out': sidebarOpen,
                        '-translate-x-full ease-in': !sidebarOpen,
                    },
                    {
                        'fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0':
                            true,
                    },
                ])}>
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faCodeCompare} style={{ color: 'red', fontSize: '1.5rem' }} />
                        <span className="mx-2 text-2xl font-semibold text-white">{appConfig.meta.title}</span>
                    </div>
                </div>

                <nav className="mt-10">
                    <a className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25" href="#">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>

                        <span className="mx-3">Dashboard</span>
                    </a>

                    <a
                        className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        href="#">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                        </svg>

                        <span className="mx-3">UI Elements</span>
                    </a>

                    <a
                        className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        href="#">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>

                        <span className="mx-3">Tables</span>
                    </a>

                    <a
                        className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        href="#">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>

                        <span className="mx-3">Forms</span>
                    </a>
                </nav>
            </div>
        </>
    );
}
