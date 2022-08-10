import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import React from 'react';
import StylesNav from './Styles';

const Navigation819 = ({ active, setActive }) => {

    return (
            <nav onClick={(e) => {e.stopPropagation()}}>
                <div className={css(StylesNav.listWrapper)}>
                    <ul className={css(StylesNav.navigation)} style={active ? {transform: 'translateX(0%)'} : {transform: 'translateX(100%)'}}>
                        <li onClick={() => setActive(!active)}><Link to='/' className={css(StylesNav.linkText)}>Main</Link></li>
                        <li onClick={() => setActive(!active)}><Link to='/about' className={css(StylesNav.linkText)}>About</Link></li>
                        <li onClick={() => setActive(!active)}><Link to='/skills' className={css(StylesNav.linkText)}>Skills</Link></li>
                        <li onClick={() => setActive(!active)}><Link to='/activities' className={css(StylesNav.linkText)}>Activities</Link></li>
                        <li onClick={() => setActive(!active)}><Link to='/contacts' className={css(StylesNav.linkText)}>Contacts</Link></li>
                        <div className={css(StylesNav.backgroundNav)}></div>
                    </ul>
                </div>

                <div className={css(StylesNav.burger)} onClick={() => setActive(!active)}>
                    <span className={active ? css(StylesNav.lineBurger, StylesNav.burgerOpen): css(StylesNav.lineBurger)}></span>
                </div>
            </nav>
    )
}

export default Navigation819;