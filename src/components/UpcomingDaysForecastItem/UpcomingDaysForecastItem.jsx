import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';

const imgUrlBase = 'https:///www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} />
        <span className="mb-2">{weekday}</span>
        <span className="font-weight-bold">{temperature}</span>
    </li>
);

export default UpcomingDaysForecastItem;
