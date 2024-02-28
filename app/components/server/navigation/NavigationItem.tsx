'use client';
import { ReactComponentProps } from '@/app/react-component-properties.type';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavigationItemProps = {
    href: string;
    text: string;
    faIcon: IconDefinition;
    position: number;
};

function NavigationItem({
    href,
    text,
    faIcon,
    className,
    activeClassName,
}: Omit<NavigationItemProps, 'position'> & ReactComponentProps & { activeClassName: string }) {
    const route = usePathname();

    function isActive(): boolean {
        console.log(route);
        return route === href;
    }

    return (
        <Link href={href} className={`${className} ${isActive() ? activeClassName : ''}`}>
            <FontAwesomeIcon icon={faIcon}></FontAwesomeIcon>
            <span className='mx-3'>{text}</span>
        </Link>
    );
}

export default NavigationItem;
