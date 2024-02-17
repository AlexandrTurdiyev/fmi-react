import React from "react";
import styles from './BackgroundSlider.module.css'
import BgImage1 from './background-image-1.webp'
import BgImage2 from './background-image-2.webp'
import BgImage3 from './background-image-3.webp'
import BgImage4 from './background-image-4.webp'

const BackgroundSlider = () => {
    return (
        <div className={styles.backgroundSlider}>
            <img src={BgImage1} alt="bgImage1"/>
            <img src={BgImage2} alt="bgImage2"/>
            <img src={BgImage3} alt="bgImage3"/>
            <img src={BgImage4} alt="bgImage4"/>
        </div>
        )
}

export default BackgroundSlider;