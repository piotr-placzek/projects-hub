import { faFolderTree, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { NavigationItemProps } from '../components/server/navigation/NavigationItem';

const navigationConfig: Required<NavigationItemProps>[] = [
    {
        href: '/',
        text: 'Projects',
        faIcon: faFolderTree,
        position: 0,
    },
    {
        href: '/ide',
        text: 'Editor',
        faIcon: faKeyboard,
        position: 1,
    },
];

export default navigationConfig;
