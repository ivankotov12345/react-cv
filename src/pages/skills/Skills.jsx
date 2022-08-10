import React from 'react';
import { css } from 'aphrodite/no-important';
import stylesSkills from './Styles.jsx'
import Counter from '../../components/counter/Counter.jsx';

const Skills = () => {
    
    return(
        <div className={css(stylesSkills.container)}>
        <div className={css(stylesSkills.fadeIn)}>
            <h2 className={css(stylesSkills.HeaderStyle)}>Skills</h2>
            <div className={css(stylesSkills.skillsContainer)}>
            
            <Counter  val={83} time={6} skillName='HTML' />
            <Counter  val={89} time={6} skillName='CSS' />
            <Counter  val={80} time={6} skillName='JavaScript' />
            <Counter  val={63} time={6} skillName='TypeScript' />
            <Counter  val={82} time={6} skillName='Git' />
            <Counter  val={78} time={6} skillName='React' />

            </div>
            </div>
        </div>
    )
}

export default Skills;