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
                    <p className={css(stylesActivities.text)}>Have nice library wich includes books of Hemingway, Camus, Kafka, Tolstoy and other authors. I love spend my weekends with literature.</p>
                    <img src={book} alt='book' className={css(stylesActivities.imgActivities)}></img>
                </div>

                <div className={css(stylesActivities.activityContainer, stylesActivities.activityLeft)}>
                    <img src={baseGuitarPlayer} alt='Base guitar player' className={css(stylesActivities.imgActivities)}></img>
                    <p className={css(stylesActivities.text)}>Sometimes i play base guitar and singing.</p>
                </div>

                <div className={css(stylesActivities.activityContainer, stylesActivities.activityRight)}>
                    <p className={css(stylesActivities.text)}>Great film photographer. Have 70 years old camera wich i almost never leave at home.</p>
                    <img src={light} alt='light magic' className={css(stylesActivities.imgActivities)}></img>
                </div>

                <div className={css(stylesActivities.activityContainer)}>
                    <img src={volunteer} alt='volunteers' className={css(stylesActivities.imgActivities, stylesActivities.activityLeft)}></img>
                    <p className={css(stylesActivities.text)}>Volunteering is an important part of my life. I was an volunteer in second large organization called "Caritas" and even lectured people who want to make this world better.</p>
                </div>
            </div>
        </div>
    )
}

export default Activities;