import { StyleSheet } from 'aphrodite/no-important';
import { fadeIn, fadeInDownBig, fadeInLeftBig } from 'react-animations';
import glowing from './assets/img/glowing.JPG'

const stylesAbout = StyleSheet.create({
    container: {
        width: '100%',
        height: '83vh',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '3px solid #4CF5F2',
        overflowX: 'hidden',
        '::-webkit-scrollbar': {
            width: '5px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#4cf5f2',
            borderRadius: '10px',
            opacity: '0.5',
            boxShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        },
    },

    fadeIn: {
        maxWidth: '1440px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        rowGap: '2rem',
        alignItems: 'center',
        margin: '2em 2rem',
        animationName: fadeIn,
        animationDuration: '1s',
    },

    sectionWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        rowGap: '1em',
    },

    cellStyle: {
        width: '300px'
    },

    HeaderStyle: {
        margin: '0 0 10px 0',
        display: 'inline-block',
        color: '#fff',
        fontSize: '1.2rem',
        textTransform: 'uppercase',
        textShadow: '-2px 0 0 #F54C4F',
        animationName: fadeInDownBig,
        animationDuration: '1s',
        cursor: 'default',
    },

    title: {
        fontSize: '2rem',
    },

    text: {
        margin: '10px 0 0 0',
        color: '#fff',
        fontSize: '1.2rem',
        cursor: 'default',
        animationName: fadeInDownBig,
        animationDuration: '.5s',
        alignSelf: 'flex-start',
    },

    textAchievments: {
        margin: '0',
        color: '#fff',
        fontSize: '1.2rem',
        cursor: 'default',
        alignSelf: 'flex-start',
        padding: '1rem 0',
        listStyleType: 'none',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '5px',
    },

    textAchievmentsFirst: {
        animationName: fadeInLeftBig,
        animationDuration: '1s',
    },
    textAchievmentsSecond: {
        animationName: fadeInLeftBig,
        animationDuration: '1.2s',
    },
    textAchievmentsThird: {
        animationName: fadeInLeftBig,
        animationDuration: '1.4s',
    },

    imageFont: {
        display: 'flex',
        width: '100%',
        height: '40%',
        position: 'absolute',
        left: '0',
        bottom: '7vh',
        zIndex: '-1',
        opacity: '0.5',
        backgroundImage: `url(${glowing})`,
        backgroundPosition: '40% 0',
        mask: 'linear-gradient(top, rgba(76, 245, 242, 0), rgba(76, 245, 242, 1))',
        padding: '0',
        '@media (max-width: 650px)': {
            bottom: '0',
        },
    },
});

export default stylesAbout;