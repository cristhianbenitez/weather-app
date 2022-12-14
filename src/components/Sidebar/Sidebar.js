import React from 'react';
import { format } from 'date-fns';
import { BiCurrentLocation } from 'react-icons/bi';
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';

import './Sidebar.scss';
import { Search } from 'components/Search/Search';

export const Sidebar = ({
  temperature,
  location,
  icon,
  condition,
  scaleType,
  changeLocation,
  getCurrentLocation
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const roundedTemperature = Math.round(temperature);

  let today = format(new Date(), 'EEE, d MMM');

  return (
    <section className="weather-app__sidebar">
      <div className="weather-app__sidebar__container">
        <div className="weather-app__sidebar__top-section">
          <div
            className="weather-app__sidebar__search-location"
            onClick={() => setIsOpen(true)}
          >
            Search for places
          </div>
          <div
            className="weather-app__sidebar__current-location"
            onClick={getCurrentLocation}
          >
            <BiCurrentLocation />
          </div>
        </div>
        <div className="weather-app__sidebar__icon">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather-conditions"
          />
        </div>
        <h2 className="weather-app__sidebar__temperature">
          {roundedTemperature}
          {scaleType === 'metric' ? <RiCelsiusFill /> : <RiFahrenheitFill />}
        </h2>
        <h3 className="weather-app__sidebar__condition">{condition}</h3>

        <div className="weather-app__sidebar__date">
          <span>Today</span>
          <span>·</span>
          <span>{today}</span>
        </div>

        <span className="weather-app__sidebar__location">
          <MdLocationPin />
          {location}
        </span>
        <Search
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          changeLocation={changeLocation}
        />
      </div>
    </section>
  );
};
