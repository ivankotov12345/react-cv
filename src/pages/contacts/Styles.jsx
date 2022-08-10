import { StyleSheet } from 'aphrodite/no-important';
import { fadeIn, fadeInDownBig, fadeInUpBig } from 'react-animations';

const stylesContacts = StyleSheet.create({
    container: {
        width: '100%',
        height: '83vh',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '3px solid #4CF5F2',
        '@media (max-width: 650px)': {
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
    },

    fadeIn: {
        maxWidth: '1440px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1em 2rem 1em 2rem',
        animationName: fadeIn,
        animationDuration: '1s',
        '@media (max-width: 650px)': {
            rowGap: '20px',
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
        animationDuration: '1s',
        cursor: 'default',
        '@media (max-width: 400px)': {
            fontSize: '1.5rem',
        },
    },

    tableContacts: {
        width: '70%',
        borderCollapse: 'collapse',
        cursor: 'default',
        animationName: fadeInUpBig,
        animationDuration: '1.2s',
    },

    tableInner: {
        '@media (max-width: 650px)': {
            display: 'grid',
            gridTemplate: '1fr / 1fr 1fr'
        },
    },

    tableRow: {
        borderBottom: '2px solid #fff',
        '@media (max-width: 650px)': {
            display: 'grid',
            gridTemplate: '1fr 1fr 1fr 1fr 1fr / 1fr'
        },
    },

    tableRowContacts: {
        borderBottom: 'none',
        '@media (max-width: 650px)': {
            borderBottom: '2px solid #fff',
        },
    },

    tableCell: {
        width: '20%',
        padding: '5px 20px 5px 0',
        color: '#fff',
        fontSize: '1rem',
        textTransform: 'uppercase',
        textShadow: '-2px 0 0 #F54C4F',
        '@media (max-width: 650px)': {
            width: '100%',
            textAlign: 'start'
        },
        '@media (max-width: 370px)': {
            fontSize: '.7rem',
        },
    },

    tableCellContacts: {
        color: '#fff',
        textTransform: 'none',
        textDecoration: 'none',
        textShadow: 'none',
        transition: '.2s ease-in-out',
        ':hover': {
            color: '#4cf5f2',
            textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        }
    }
})

export default stylesContacts;