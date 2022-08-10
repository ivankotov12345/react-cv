import { StyleSheet } from 'aphrodite/no-important';
import glowing from './assets/img/glowing.JPG'

const StylesNav = StyleSheet.create({

    listWrapper: {
        width: '100vw',
        position: 'absolute',
        top: '100%',
        left: '0',
        transition: '.5s ease-in-out',
    },

    navigation: {
        display: 'flex',
        flexDirection: 'column',
        columnGap: '1em',
        listStyle: 'none',
        margin: '0',
        padding: '0 30px',
        position: 'absolute',
        right: '0',
        width: '100%',
        background: '#fff',
        height: '83vh',
        zIndex: '2',
        justifyContent: 'space-around',
        transition: '.5s ease-in-out',
        backgroundImage: `url(${glowing})`,
        mask: 'linear-gradient(top, rgba(76, 245, 242, 0) 0 1%, rgba(76, 245, 242, 1) 5% 96%, rgba(76, 245, 242, 0) 98% 100%)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '@media ( orientation: landscape )': {
            height: '80vh',
        },
    },

    backgroundNav: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',

        position: 'absolute',
        left: '0',
        zIndex: '-1',
    },
    
    linkText: {
        color: '#4CF5F2',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '2em',
        fontWeight: '500',
        textShadow: '-2px 0 0 #F54C4F',
        letterSpacing: '.1em',
        margin: '0',
        padding: '0',
        transition: '.2s ease-in-out',
        ':hover': {
            textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        }
    },

    burger: {
        display: 'flex',
        flexDirection: 'column',
        width: '45px',
    },

    lineBurger: {
        content: '""',
        width: '45px',
        borderBottom: '2px solid #fff',
        position: 'absolute',
        transition: '.3s ease-in-out',
        '::before': {
            content: '""',
            width: '45px',
            borderBottom: '2px solid #fff',
            position: 'absolute',
            transition: '.3s ease-in-out',
            top: '12px',
            right: '0',
        },
        '::after': {
            content: '""',
            width: '45px',
            borderBottom: '2px solid #fff',
            position: 'absolute',
            transition: '.3s ease-in-out',
            bottom: '10px',
            right: '0',
        },
        '@media ( orientation: landscape )': {
            width: '30px',
            borderBottom: '1px solid #fff',
            '::before': {
                content: '""',
                width: '30px',
                borderBottom: '1px solid #fff',
                position: 'absolute',
                right: '0',
            },
            '::after': {
                content: '""',
                width: '30px',
                borderBottom: '1px solid #fff',
                right: '0',
            },
        },
    },

    burgerOpen: {
        border: 'none',
        '::before': {
            transform: 'rotate(-45deg)',
            top: '-1px',
        },
        '::after': {
            transform: 'rotate(45deg)',
            bottom: '-2px',
        },
        '@media ( orientation: landscape )': {
            border: 'none',
            '::before': {
                transform: 'rotate(-45deg)',
                top: '0',
            },
            '::after': {
                transform: 'rotate(45deg)',
                bottom: '-1px',
            },
        },
    },

});

export default StylesNav;