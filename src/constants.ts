import aulifyBlue from './resources/images/aulifyBlue.png';
import redBackground from './resources/images/backgrounds/red_background.png';
import blueBackground from './resources/images/backgrounds/blue_background.png';


export const PAGE_TITLE: string = '';

export interface LinkConstant {
    label: string;
    path: string;
}
export interface HeaderConstant {
    label: string;
    path: string;
    id: string;
}

export interface LogoConstant{
    name: string;
    path: string;
    alt: string;
}

export interface backgroundConstant{
    name: string;
    path: string;
    alt: string;
}


export const LINKS: LinkConstant[] = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Play',
        path: '/play',
    },
    {
        label: 'birth',
        path: '/birth',
    },
    {
        label:'registration',
        path:'/registration',
    }
];


export const HEADER_ITEMS: HeaderConstant[] = [
    {
        label: 'Home',
        path: LINKS[0].path,
        id: 'home',
    },
    {
        label: 'About',
        path: LINKS[1].path,
        id: 'about',
    },
    {
        label: 'PLAY',
        path: '/play',
        id: 'play',
    },

];

export const LOGO_CONSTANTS: LogoConstant[] = [
    {
        name: 'blue-logo',
        path: aulifyBlue,
        alt: 'Aulify Logo Blue',
    },
    {
        name: 'white-logo.png',
        path: '/resources/images/aulifyWhite.png',
        alt: 'Aulify Logo White',
    }
];

export const BACKGROUND_CONSTANTS: backgroundConstant[] = [
    {
        name: 'blue-background',
        path: blueBackground,
        alt: 'Blue Background',
    },
    {
        name: 'red-background',
        path: redBackground,
        alt: 'Red Background',
    }
];

