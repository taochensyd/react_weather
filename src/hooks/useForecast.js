import React, { useState } from 'react';
import axios from 'axios';
import getCurrentDayDetailedForecast from '../utils/getCurrentDayDetailedForecast';
import getCurrentDayForecast from '../utils/getCurrentDayForecast';
import getUpcomingDaysForecast from '../utils/getUpcomingDaysForecast';

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

    const getForecastData = async woeid => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);
        if (!data || data.length === 0) {
            setIsError('No data');
            setIsLoading(false);
            return;
        }
        return data;
    };

    const gatherForecastData = data => {
        const currentDay = getUpcomingDaysForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getCurrentDayForecast(data.consolidated_weather);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setIsLoading(false);
    };

    const submitRequest = async location => {
        setIsLoading(true);
        setIsError(false);
        const response = await getWoeid(location);
        if (!response.woeid) {
            return;
        }
        const data = await getForecastData(response.woeid);
        if (!data || data.length === 0) {
            return;
        }
        console.log({ data });

        gatherForecastData(data);
    };
    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};
