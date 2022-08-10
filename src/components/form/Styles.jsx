import { StyleSheet } from 'aphrodite/no-important';
import { fadeInUpBig } from 'react-animations';

const stylesForm = StyleSheet.create({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '60vw',
        height: '70%',
        paddingBottom: '20px',
        animationName: fadeInUpBig,
        animationDuration: '1.4s',
        '@media (max-width: 450px)': {
            width: '70vw',
        },
        '@media (max-height: 400px)': {
            height: '150%',
        },
    },

    label: {
        fontSize: '1.5rem',
        color: '#fff',
        alignSelf: 'flex-start',
        '@media (max-width: 500px)': {
            fontSize: '1rem',
        },
        '@media (max-height: 500px)': {
            fontSize: '.7rem',
        },
    },

    field: {
        height: '20px',
        margin: '10px 0',
        padding: '3px 5px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
        resize: 'none',
        ':focus': {
            boxShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        },
    },

    messageField: {
        height: '45%',
        '@media (max-height: 450px)': {
            height: '60px',
        },
    },

    formBtn: {
        width: '150px',
        height: '30px',
        alignSelf: 'center',
        backgroundColor: 'fff',
        color: '#000',
        border: 'none',
        fontSize: '1rem',
        transition: '.3s ease-in-out',
        borderRadius: '3px',
        ':hover': {
            boxShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        }
    }
});

export default stylesForm;