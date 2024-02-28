import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from './components/client/Header';
import Sidebar from './components/client/Sidebar';
import Navigation from './components/server/navigation/Navigation';
import appConfig from './configs/app.config';
import { SidebarContextProvider } from './contexts/SidebarContext';
import './globals.css';
import navigationConfig from './configs/navigation.config';
import AppTitleBanner from './components/server/AppTitleBanner';

faConfig.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: appConfig.meta.title,
    description: appConfig.meta.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <SidebarContextProvider>
                <Content>{children}</Content>
            </SidebarContextProvider>
        </html>
    );
}

function Content({ children }: { children: ReactNode }) {
    return (
        <body className={inter.className}>
            <div className='flex h-screen bg-gray-200'>
                <Sidebar>
                    <AppTitleBanner className='mt-4 mb-4' />
                    <Navigation
                        className={{
                            nav: '',
                            link: 'flex items-center px-6 py-2 text-gray-100',
                            activeLink: 'bg-gray-700 bg-opacity-25',
                        }}
                        items={navigationConfig}
                    />
                </Sidebar>
                <div className='flex flex-col flex-1 overflow-hidden'>
                    <Header />
                    <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-2'>{children}</main>
                </div>
            </div>
        </body>
    );
}
