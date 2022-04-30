import React from 'react';
import PropTypes from 'prop-types';
import CurrentDayDescriptionItem from '..CurrentDayDescriptionItem/CurrentDayDescriptionItem';

const CurrentDayDescription = () => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {forcast.map(() => {
                <CurrentDayDescriptionItem {...item} key={item.name} />;
            })}
        </div>
    </div>
);

CurrentDayDescription.prototype = {
    forecast: PropTypes.array,
};

export default CurrentDayDescription;
