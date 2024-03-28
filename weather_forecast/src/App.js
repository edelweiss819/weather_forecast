import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/search/SearchForm';
import MainBlock from './components/main_block/MainBlock';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState("London");

    const updateWeatherData = (data) => {
        setWeatherData(data);
    }

    const updateCityName = (city) => {
        setCityName(city);
    }

    return (
        <div className="App">
            <SearchForm onUpdateWeatherData={updateWeatherData} onUpdateCityName={updateCityName} />
            <MainBlock weatherData={weatherData} cityName={cityName}/>
        </div>
    );
}

export default App;
