import { StyleSheet } from 'aphrodite/no-important';
import { fadeIn, fadeInDownBig, fadeInUpBig } from 'react-animations';

const stylesSkills = StyleSheet.create({
    container: {
        width: '100%',
        height: '83vh',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '3px solid #4CF5F2',
        position: 'relative',
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
        '@media (max-width: 820px)': {
            gridTemplate: '1fr 1fr 1fr / 1fr 1fr',
            rowGap: '20px',
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
    },

    skillsContainer: {
        width: '100%',
        display: 'grid',
        gridTemplate: '1fr 1fr / 1fr 1fr 1fr',
        animationName: fadeInUpBig,
        animationDuration: '.5s',
        cursor: 'default',
        '@media (max-width: 820px)': {
            gridTemplate: '1fr 1fr 1fr / 1fr 1fr',
            paddingBottom: '1em',
        },
        '@media (max-width: 425px)': {
            gridTemplate: '1fr 1fr 1fr 1fr / 1fr',
        },
    },

    skillWrapper: {
        border: '1px solid #fff',
        position: 'relative',
        padding: '0 20px 10px 20px',
    },

});

export default stylesSkills;