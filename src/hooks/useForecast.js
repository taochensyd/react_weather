import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api/location/';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com/';
// const CROSS_DOMAIN = 'https://cors-anywhere.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

export const useForecast = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    //api
    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
        console.log({ data });

        if (!data || data === 0) {
            setIsError('There is no such location');
            return;
        }
        return data;
    };

    const getForecast = async woeid => {
        setIsLoading(true);
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);
        setForecast(data);
        setIsLoading(false);
    };

    const submitRequest = async location => {
        const data = await getWoeid(location);
        const response = await axios(`${REQUEST_URL}/${data[0].woeid}`);
        console.log({ response });
    };
    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};
