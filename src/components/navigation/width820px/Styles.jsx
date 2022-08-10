import { StyleSheet } from 'aphrodite/no-important';

const StylesNav = StyleSheet.create({
    navigation: {
        display: 'flex',
        columnGap: '1.5em',
        listStyle: 'none',
        margin: '0',
    },
    
    linkText: {
        color: '#4CF5F2',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '1.5em',
        fontWeight: '500',
        textShadow: '-2px 0 0 #F54C4F',
        letterSpacing: '.1em',
        margin: '0',
        transition: '.2s ease-in-out',
        ':hover': {
            textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        }
    },
});

export default StylesNav;