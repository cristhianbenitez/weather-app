import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

import './TodayHighlights.scss';
import { getDirection, kmmToMiles, metersToKm } from 'helpers';

export const TodayHighlights = ({
  scaleType,
  wind,
  pressure,
  humidity,
  visibility
}) => {
  const isMetric = scaleType === 'metric';

  const currentVisibility = isMetric
    ? metersToKm(visibility)
    : kmmToMiles(visibility);

  const kphOrMph = isMetric ? 'kph' : 'mph';

  const milesOrKm = isMetric ? 'km' : 'mi';

  return (
    <section className="weather-app__todays-highlights">
      <h2>Today's Highlights</h2>
      <div className="weather-app__todays-highlights__container">
        <div className="weather-app__todays-highlights__wind-status">
          <h3>Wind Status</h3>
          <span className="weather-app__todays-highlights__wind-status__speed">
            {Math.round(wind.speed)}
            <span>{kphOrMph}</span>
          </span>
          <div className="weather-app__todays-highlights__wind-status__direction">
            <span>
              <FaLocationArrow
                style={{ transform: `rotate(${wind.deg}deg)` }}
              />
            </span>
            <span>{getDirection(wind.deg)}</span>
          </div>
        </div>
        <div className="weather-app__todays-highlights__humidity">
          <h3>Humidity</h3>
          <span className="weather-app__todays-highlights__humidity__percentage">
            {humidity}
            <span>%</span>
          </span>
          <div className="weather-app__todays-highlights__humidity__percentage-bar">
            <div className="weather-app__todays-highlights__humidity__percentage-bar__top-numbers">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="weather-app__todays-highlights__humidity__percentage-bar__bar">
              <div
                className="weather-app__todays-highlights__humidity__percentage-bar__bar__fill"
                style={{ width: `${humidity}%` }}
              ></div>
            </div>
            <span className="weather-app__todays-highlights__humidity__percentage-bar__percentage-symbol">
              %
            </span>
          </div>
        </div>
        <div className="weather-app__todays-highlights__visibility">
          <h3>Visibility</h3>
          <span className="weather-app__todays-highlights__visibility__amount">
            {currentVisibility.toFixed(1)} <span>{milesOrKm}</span>
          </span>
        </div>
        <div className="weather-app__todays-highlights__air-pressure">
          <h3>Air Pressure</h3>
          <span className="weather-app__todays-highlights__air-pressure__level">
            {pressure} <span>mb</span>
          </span>
        </div>
      </div>
    </section>
  );
};
