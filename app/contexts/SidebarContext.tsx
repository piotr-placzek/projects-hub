'use client';
import React, { ReactNode, useContext, useState } from 'react';

type SidebarContextType = {
    sidebarOpen: boolean;
    setSidebarOpen: (v: boolean) => void;
};

const SidebarContextData = React.createContext<SidebarContextType>({
    sidebarOpen: false,
    setSidebarOpen: (v: boolean) => {},
});

export function useSidebarContext() {
    return useContext(SidebarContextData);
}

export default function SidebarContext({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const value: SidebarContextType = {
        sidebarOpen,
        setSidebarOpen: (v: boolean) => {
            console.info('ci', 'setSidebarOpen', v, sidebarOpen);
            setSidebarOpen(v);
        },
    };
    return <SidebarContextData.Provider value={value}>{children}</SidebarContextData.Provider>;
}
