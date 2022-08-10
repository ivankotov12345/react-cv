import { StyleSheet } from 'aphrodite/no-important';

const glitchKeyFrames = {
    '0%': {
        textShadow: 'text-shadow: 0.03em 0 0 rgba(255, 0, 0, 0.75), -0.03em -0.015em 0 rgba(0, 255, 0, 0.75), -0.015em 0.03em 0 rgba(0, 0, 255, 0.75)'
    },
    '14%': {
        textShadow: 'text-shadow: 0.03em 0 0 rgba(255, 0, 0, 0.75), -0.03em -0.015em 0 rgba(0, 255, 0, 0.75), -0.015em 0.03em 0 rgba(0, 0, 255, 0.75)'
    },
    '15%': {
        textShadow: '-0.03em -0.015em 0 rgba(255, 0, 0, 0.75), 0.015em 0.025em 0 rgba(0, 255, 0, 0.75), -0.03em -0.03em 0 rgba(0, 0, 255, 0.75)'
    },
    '49%': {
        textShadow: '-0.03em -0.015em 0 rgba(255, 0, 0, 0.75), 0.015em 0.015em 0 rgba(0, 255, 0, 0.75), -0.03em -0.03em 0 rgba(0, 0, 255, 0.75)'
    },
    '50%': {
        textShadow: '0.015em 0.03em 0 rgba(255, 0, 0, 0.75), 0.03em 0 0 rgba(0, 255, 0, 0.75), 0 -0.03em 0 rgba(0, 0, 255, 0.75)'
    },
    '99%': {
        textShadow: '0.015em 0.03em 0 rgba(255, 0, 0, 0.75), 0.03em 0 0 rgba(0, 255, 0, 0.75), 0 -0.03em 0 rgba(0, 0, 255, 0.75)'
    },
    '100%': {
        textShadow: '-0.015em 0 0 rgba(255, 0, 0, 0.75), -0.015em -0.015em 0 rgba(0, 255, 0, 0.75), -0.015em -0.03em 0 rgba(0, 0, 255, 0.75)'
    },
}

const movingArrowLeftKeyFrames = {
    '0%': {
        opacity: '0',
    },

    '50%': {
        opacity: '1'
    },

    '100%': {
        opacity: '0',
        transform: 'translate(-20px, 0)',
    }
}
const movingArrowRightKeyFrames = {
    '0%': {
        opacity: '0',
    },

    '50%': {
        opacity: '1'
    },

    '100%': {
        opacity: '0',
        transform: 'translate(20px, 0)',
    }
}

const hoveroutBtnKeyFrames = {
    '0%': {
        opacity: '0',
    },

    '100%': {
        opacity: '1',
    }
}


const stylesApp = StyleSheet.create({
    App: {
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        height: '100vh',
        overflow: 'hidden',
    },

    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '3px solid #4CF5F2',
    },

    innerContainer: {
        maxWidth: '1440px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 2rem',
        position: 'relative',
        height: '10vh',
    },

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

    titleWrapper: {
        width: '300px',
    },

    title: {
        color: '#fff',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '4em',
        fontWeight: '500',
        margin: '0',
        paddingLeft: '3rem',
        cursor: 'default',
        textShadow: '0.03em 0 0 rgba(255, 0, 0, 0.75), -0.015em -0.03em 0 rgba(0, 255, 0, 0.75), 0.015em 0.03em 0 rgba(0, 0, 255, 0.75);',
        position: 'relative',
        '@media (max-width: 970px)': {
            fontSize: '3em',
        },
        '@media (max-width: 600px)': {
            paddingLeft: '0',
        }
    },

    span: {
        position: 'absolute',
        top: '0',
        left: '0',
        paddingLeft: '3rem',
        cursor: 'default',
        ':first-child': {
            animationName: [glitchKeyFrames],
            animationDuration: '650ms',
            animationIterationCount: 'infinite',
            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            transform: 'translate(-0.015em, -0.0075em)',
            opacity: '0.8',
        },
        ':last-child': {
            animationName: [glitchKeyFrames],
            animationDuration: '375ms',
            animationIterationCount: 'infinite',
            clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
            transform: 'translate(0.0075em, 0.015em)',
            opacity: '0.8',
        },
        '@media (max-width: 600px)': {
            paddingLeft: '0',
        }
    },

    buttonContainer: {
        alignSelf: 'flex-end',
        paddingRight: '40px',
        height: '7vh',
        maxWidth: '1440px',
        '@media (max-width: 768px)': {
            paddingRight: '0',
        }
    },

    arrowButton: {
        display: 'inline-block',
        animationName: hoveroutBtnKeyFrames,
        animationDuration: '1.5s',
    },

    buttonLeft: {
        fontSize: '1.5rem',
        color: '#4CF5F2',
        background: 'none',
        cursor: 'pointer',
        border: 'none',

        ':hover :nth-child(3)': {
                animationName: movingArrowLeftKeyFrames,
                animationDuration: '1s',
                animationDelay: '.5s',
                animationIterationCount: 'infinite',
                textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        },
        ':hover :nth-child(2)': {
                animationName: movingArrowLeftKeyFrames,
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationDelay: '.7s',
                textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        },
        ':hover :first-child': {
                animationName: movingArrowLeftKeyFrames,
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationDelay: '.9s',
                textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        },
    },

    buttonRight: {
        fontSize: '1.5rem',
        color: '#4CF5F2',
        background: 'none',
        cursor: 'pointer',
        border: 'none',

        ':hover :first-child': {
            animationName: movingArrowRightKeyFrames,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationDelay: '.5s',
            textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        },

        ':hover :nth-child(2)': {
            animationName: movingArrowRightKeyFrames,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationDelay: '.7s',
            textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
        },

            ':hover :nth-child(3)': {
                animationName: movingArrowRightKeyFrames,
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationDelay: '.9s',
                textShadow: '0 0 5px #4cf5f2, 0 0 10px #4cf5f2, 0 0 20px #4cf5f2',
            },
    },

    containerFooter: {
        maxWidth: '1440px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '7vh',
        '@media (max-width: 768px)': {
            justifyContent: 'center',
        }
    },
});

export default stylesApp;