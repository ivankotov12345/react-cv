import React from 'react';
import { useState, useEffect } from 'react'
import { css } from 'aphrodite/no-important';
import stylesCounter from './Styles.jsx'

function Counter({ val, time, skillName }) {
    const [ currVal, setCurrVal ] = useState(0);

    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
    }, [ currVal, time, val ]);
  
    return (
    <div className={css(stylesCounter.skillWrapper)}>
      <h3 className={css(stylesCounter.skillTitle)}>{skillName}</h3>
      <p className={css(stylesCounter.skillText)}>{currVal}%</p>
      <div className={css(stylesCounter.skillProgressBar)}>
          <div className={css(stylesCounter.skillProgressBarFilled, stylesCounter.skillCssFilled)} 
            style = {{
              width: `${currVal}%`,
          }}></div>
      </div>
    </div>
    );
  }

  export default Counter;