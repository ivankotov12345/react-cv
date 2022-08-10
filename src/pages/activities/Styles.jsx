import { StyleSheet } from 'aphrodite/no-important';
import { fadeIn, fadeInDownBig, fadeInRightBig, fadeInLeftBig } from 'react-animations';

const stylesActivities = StyleSheet.create({
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
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '3em 2rem',
        animationName: fadeIn,
        animationDuration: '1s',
        rowGap: '20px',
        '@media (max-width: 500px)': {
            margin: '1em 2rem',
        },
    },

    HeaderStyle: {
        margin: '0',
        display: 'inline-block',
        color: '#fff',
        fontSize: '2rem',
        textTransform: 'uppercase',
        textShadow: '-2px 0 0 #F54C4F',
        animationName: fadeInDownBig,
        animationDuration: '.5s',
        cursor: 'default',
        '@media (max-width: 850px)': {
            fontSize: '1.5rem',
        },
    },

    activityContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: '30px',
        paddingBottom: '30px',
    },

    activityRight: {
        animationName: fadeInRightBig,
        animationDuration: '1s'
    },
    activityLeft: {
        animationName: fadeInLeftBig,
        animationDuration: '1s'
    },

    text: {
        margin: '0',
        color: '#fff',
        textAlign: 'start',
        fontSize: '1.5rem',
        textIndent: '2rem',
        cursor: 'default',
        '@media (max-width: 850px)': {
            fontSize: '1rem',
        },
    },
    imgActivities: {
        width: '22vw',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
})

export default stylesActivities;