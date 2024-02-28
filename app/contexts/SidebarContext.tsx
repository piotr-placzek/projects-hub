'use client';
import React, { useState } from 'react';
import { ReactComponentProps } from '../react-component-properties.type';

type SidebarContextType = {
    sidebarOpen: boolean;
    setSidebarOpen: (v: boolean) => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
    sidebarOpen: false,
    setSidebarOpen: (v: boolean) => {},
});

export function SidebarContextProvider({ children }: ReactComponentProps) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const value: SidebarContextType = {
        sidebarOpen,
        setSidebarOpen: (v: boolean) => {
            setSidebarOpen(v);
        },
    };
    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export default SidebarContext;
