import React from 'react'

export default function Card(props) {
    const { weatherData: data } = props;
    if (!data) {
        return null;
    }
    function ktoc(k) {
        return (k - 273.15).toFixed(2) + " °C"
    }
    return (
        <div>
            <div className="card-img-overlay p-5">
                <h4 className="mb-0 text-white">{data.name} <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width={'25%'} alt="" /></h4>
                <p className="display-2 mb-2 text-white">{ktoc(data.main.temp)}</p>
                <p className="mb-2 text-white">Feels Like: <strong>{ktoc(data.main.feels_like)}</strong></p>
                <h5 className='text-white'>{data.weather[0].description}</h5>
            </div>
        </div>
    )
}
