'use client';

import SidebarContext from '@/app/contexts/SidebarContext';
import { ReactComponentProps } from '@/app/react-component-properties.type';
import clsx from 'clsx';
import { useContext } from 'react';

export default function Sidebar({ children }: ReactComponentProps) {
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
                {children}
            </div>
        </>
    );
}
