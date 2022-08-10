import { StyleSheet } from 'aphrodite/no-important';

const stylesCounter = StyleSheet.create({
    skillWrapper: {
        border: '1px solid #4CF5F2',
        position: 'relative',
        padding: '0 20px 10px 20px',
    },

    skillTitle: {
        margin: '5px 0',
        fontSize: '1.5rem',
        color: '#fff',
        textTransform: 'uppercase',
        textShadow: '-2px 0 0 #F54C4F',
    },

    skillText: {
        fontSize: '2rem',
        color: '#4CF5F2',
        fontWeight: '500',
        textShadow: '-2px 0 0 #F54C4F',
        '@media (max-width: 820px)': {
            margin: '.5em 0',
        },
    },

    skillProgressBar: {
        width: '100%',
        height: '20px',
        border: '2px solid #4CF5F2',
        borderRadius: '20px',
        overflow: 'hidden',
    },

    skillProgressBarFilled: {
        width: '83%',
        height: '20px',
        background: '#4CF5F2',
        boxShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
    },
})

export default stylesCounter;