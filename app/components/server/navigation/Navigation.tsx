import clsx from 'clsx';
import NavigationItem, { NavigationItemProps } from './NavigationItem';


export type NavigationProps = {
    items: NavigationItemProps[];
    className: {
        nav: string;
        link: string;
        activeLink: string;
    };
};

export default function Navigation({ className, items }: NavigationProps) {
    return (
        <nav className={className.nav}>
            {items
                .sort((a, b) => a.position! - b.position!)
                .map((item: NavigationItemProps) => (
                    <NavigationItem
                        href={item.href}
                        text={item.text}
                        faIcon={item.faIcon}
                        className={className.link}
                        activeClassName={className.activeLink}
                    />
                ))}
        </nav>
    );
}
