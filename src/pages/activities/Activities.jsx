import React from 'react';
import { css } from 'aphrodite/no-important';
import stylesActivities from './Styles.jsx'
import book from './assets/img/book.webp'
import baseGuitarPlayer from './assets/img/baseGuitarPlayer.webp'
import light from './assets/img/lightMagic.webp'
import volunteer from './assets/img/volunteer.webp'

const Activities = () => {
    return(
        <div className={css(stylesActivities.container)}>
            <div className={css(stylesActivities.fadeIn)}>
                <h2 className={css(stylesActivities.HeaderStyle)}>Activities</h2>
                <div className={css(stylesActivities.activityContainer, stylesActivities.activityRight)}>
                    <p className={css(stylesActivities.text)}>I have nice library which includes books of Hemingway, Camus, Kafka, Tolstoy and other author's books. I like to spend weekends reading.</p>
                    <img src={book} alt='book' className={css(stylesActivities.imgActivities)}></img>
                </div>

                <div className={css(stylesActivities.activityContainer, stylesActivities.activityLeft)}>
                    <img src={baseGuitarPlayer} alt='Base guitar player' className={css(stylesActivities.imgActivities)}></img>
                    <p className={css(stylesActivities.text)}>I have basic guitar skills so sometimes I also play and sing.</p>
                </div>

                <div className={css(stylesActivities.activityContainer, stylesActivities.activityRight)}>
                    <p className={css(stylesActivities.text)}>Great film photographer. Have 70 years old camera wich i almost never leave at home.</p>
                    <img src={light} alt='light magic' className={css(stylesActivities.imgActivities)}></img>
                </div>

                <div className={css(stylesActivities.activityContainer)}>
                    <img src={volunteer} alt='volunteers' className={css(stylesActivities.imgActivities, stylesActivities.activityLeft)}></img>
                    <p className={css(stylesActivities.text)}>Volunteering is an important part of my life. I was a volunteer in second large organization called "Caritas" and even gave lectures people who want to make the world a better place.</p>
                </div>
            </div>
        </div>
    )
}

export default Activities;