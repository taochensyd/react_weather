import React from 'react';

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
    <div className="d-flex justify-content-between">
        <p className="mb-0 font-weight-bolder text-uppercase">{name}</p>
        <p className="mb-0">
            {value}
            {unit}
        </p>
    </div>
);

CurrentDayDescriptionItem.protoTypes = {
    name: PorpTypes.string.isRequired,
    value: PorpTypes.number.isRequired,
    unit: PorpTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
