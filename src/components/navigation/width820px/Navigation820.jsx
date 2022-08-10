import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import React from 'react';
import StylesNav from './Styles';

const Navigation820 = () => {

    return (
            <nav>
                <ul className={css(StylesNav.navigation)}>
                    <li className='nav-link'><Link to='/react-cv/' className={css(StylesNav.linkText)}>Main</Link></li>
                    <li className='nav-link'><Link to='/react-cv/about' className={css(StylesNav.linkText)}>About</Link></li>
                    <li className='nav-link'><Link to='/react-cv/skills' className={css(StylesNav.linkText)}>Skills</Link></li>
                    <li className='nav-link'><Link to='/react-cv/activities' className={css(StylesNav.linkText)}>Activities</Link></li>
                    <li className='nav-link'><Link to='/react-cv/contacts' className={css(StylesNav.linkText)}>Contacts</Link></li>
                </ul>
            </nav>
    )
}

export default Navigation820;