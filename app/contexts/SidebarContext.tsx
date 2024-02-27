'use client';
import React, { ReactNode, useState } from 'react';

type SidebarContextType = {
    sidebarOpen: boolean;
    setSidebarOpen: (v: boolean) => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
    sidebarOpen: false,
    setSidebarOpen: (v: boolean) => {},
});

export function SidebarContextProvider({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const value: SidebarContextType = {
        sidebarOpen,
        setSidebarOpen: (v: boolean) => {
            console.info('ci', 'setSidebarOpen', v, sidebarOpen);
            setSidebarOpen(v);
        },
    };
    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export default SidebarContext;
