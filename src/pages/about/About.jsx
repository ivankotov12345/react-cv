import React from 'react'
import { css } from 'aphrodite/no-important';
import stylesAbout from './Styles.jsx'


const About = () => {
    return(
        <div className={css(stylesAbout.container)}>
            <div className={css(stylesAbout.fadeIn)}>
                <h2 className={css(stylesAbout.HeaderStyle, stylesAbout.title)}>About</h2>
                <p className={css(stylesAbout.text)}>Started my career as engineer in 2019, and worked for some local factories until now. Proved myself as capable, flexible team worker with an great sence of humor. I have abilities to learning.</p>


                
                <div className={css(stylesAbout.sectionWrapper)}>
                    <div className={css(stylesAbout.cellStyle)}>
                        <h3 className={css(stylesAbout.HeaderStyle)}>Location</h3>
                        <p className={css(stylesAbout.text)}>Belarus, Mogilev</p>
                    </div>

                    <div className={css(stylesAbout.cellStyle)}>
                        <h3 className={css(stylesAbout.HeaderStyle)}>Education</h3>
                        <p className={css(stylesAbout.text)}>Belarussian-Russian University</p>
                    </div>

                    <div className={css(stylesAbout.cellStyle)}>
                        <h3 className={css(stylesAbout.HeaderStyle)}>Work experience</h3>
                        <p className={css(stylesAbout.text)}>2019-2022: Design engineer</p>
                    </div>

                    <div className={css(stylesAbout.cellStyle)}>
                        <h3 className={css(stylesAbout.HeaderStyle)}>Languages</h3>
                        <ul className={css(stylesAbout.textAchievments)}>
                            <li className={css(stylesAbout.textAchievmentsFirst)}>Russian: native</li>
                            <li className={css(stylesAbout.textAchievmentsSecond)}>English: B1</li>
                            <li className={css(stylesAbout.textAchievmentsThird)}>Polish: A2</li>
                        </ul>
                    </div>

                    <div className={css(stylesAbout.cellStyle)}>
                        <h3 className={css(stylesAbout.HeaderStyle)}>Achievements</h3>
                        <ul className={css(stylesAbout.textAchievments)}>
                            <li className={css(stylesAbout.textAchievmentsFirst)}>improved my skills in 3D modeling</li>
                            <li className={css(stylesAbout.textAchievmentsSecond)}>self-educate myself as front-end developer</li>
                        </ul>
                    </div>
                    <div className={css(stylesAbout.imageFont)}></div>
                </div>

            </div>
        </div>
    )
}

export default About;