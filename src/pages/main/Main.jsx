import React from 'react';

import imgCV from './assets/img/photoCV.webp';
import { css } from 'aphrodite/no-important';
import stylesMain from './Styles.jsx'


const Main = () => {

    const imgMouseMove = (event) => {
        
        const photoWidth = event.currentTarget.offsetWidth;
        const photoHeight = event.currentTarget.offsetHeight;
        const centerX = event.currentTarget.offsetLeft + photoWidth/2;
        const centerY = event.currentTarget.offsetTop + photoHeight/2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;

        const rotateX = mouseY/(photoHeight/2).toFixed(2);
        const rotateY = -mouseX/(photoWidth/2).toFixed(2);

        event.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    return(
        <div className={css(stylesMain.container)}>
            <div className={css(stylesMain.fadeIn)}>

                <div className={css(stylesMain.imgWrapper)} onMouseMove = {imgMouseMove}>
                    <img src={imgCV} alt='Ivan Kotov' className={css(stylesMain.imageCV)}></img>
                </div>

                <div>
                    <h2 className={css(stylesMain.headName)}>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationI)}>I</span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationV)}>v</span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationA)}>a</span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationN)}>n</span>
                    <span> </span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationK)}>K</span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationO)}>o</span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationT)}>t</span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationO2)}>o</span>
                    <span className={css(stylesMain.ltrHeaderStyle, stylesMain.ltrDurationV2)}>v</span>
                    </h2>
                    <h3 className={css(stylesMain.headProfession)}>
                        <span className={css(stylesMain.headProfessionAnimateFirst)}>Junior front-end</span>
                        <span> </span>
                        <span className={css(stylesMain.headProfessionAnimateSecond)}>developer</span>
                     </h3>
                </div>

            </div>
        </div> 
    )
}

export default Main;