import { StyleSheet } from 'aphrodite/no-important';
import { fadeIn, fadeInDownBig, fadeInRightBig } from 'react-animations';

const stylesMain = StyleSheet.create({
    container: {
        width: '100%',
        height: '83vh',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '3px solid #4CF5F2',

        '@media (max-width: 970px)': {
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

    },
    
    fadeIn: {
        maxWidth: '1440px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '3em 2rem',
        animationName: fadeIn,
        animationDuration: '1s',
        '@media (max-width: 970px)': {
            flexDirection: 'column',
            justifyContent: 'center',
        },
        '@media (max-width: 500px)': {
            justifyContent: 'space-around',
        }
    },

    imgWrapper: {
        overflow: 'hidden',
        borderRadius: '25px',
        width: '58%',
        position: 'relative',
        paddingBottom: '35%',
        animationName: fadeIn,
        animationDuration: '2s',
        '@media (max-width: 690px)': {
            width: '80%',
            paddingBottom: '50%',
        }
    },

    imageCV: {
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px)',
        animationName: fadeIn,
        animationDuration: '2s',

    },

    headName: {
        fontSize: '4rem',
        cursor: 'default',
        '@media (max-width: 970px)': {
            fontSize: '2rem',
            margin: '0',
        }
    },

    ltrHeaderStyle: {
        display: 'inline-block',
        color: '#fff',
        textShadow: '-2px 0 0 #F54C4F',
        animationName: fadeInDownBig,
    },

    ltrDurationI: {
        animationDuration: '.4s'
    },

    ltrDurationV: {
        animationDuration: '.6s'
    },
    ltrDurationA: {
        animationDuration: '.8s'
    },
    ltrDurationN: {
        animationDuration: '1s'
    },
    ltrDurationK: {
        animationDuration: '1.2s'
    },
    ltrDurationO: {
        animationDuration: '2.2s'
    },
    ltrDurationT: {
        animationDuration: '1.6s'
    },
    ltrDurationO2: {
        animationDuration: '1.8s'
    },
    ltrDurationV2: {
        animationDuration: '2s'
    },

    headProfession: {
        fontSize: '2rem',
        cursor: 'default',
        fontWeight: '300',
        color: '#fff',
        textShadow: '-2px 0 0 #F54C4F',
        '@media (max-width: 970px)': {
            fontSize: '1rem',
            margin: '0',
        }
    },

    headProfessionAnimateFirst: {
        animationName: fadeInRightBig,
        animationDuration: '2.7s'
    },
    headProfessionAnimateSecond: {
        animationName: fadeInRightBig,
        animationDuration: '2.9s'
    },
})

export default stylesMain;