import React from 'react'
import Loader from './Loader';

export default function Result(props) {
    console.log('weatherData', props.weatherData);
    const { weatherData: data } = props;
    // if (!data) {
    //     return null;
    // }
    function ktoc(k) {
        return (k - 273.15).toFixed(2) + ' °C'
    }
    function getthedate(stamp) {
        const date = new Date(stamp * 1000)
        return date.toLocaleTimeString();
    }

    let showpage;
    if(data === null){
        console.log('true');
        if(props.loader === true){
            showpage = <Loader></Loader>
        } else {
            showpage = (
                <div className=' container text-center mt-4'>
                    <h3 className='rh3'>Please Select City</h3>
                </div>
            )
        }
    }
    else{
        showpage = (
            <section className='card_section'>
                <div className=' container'>
                    <h2 className=' text-center mb-4'>Weather description</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> <br />City:- {data.name} <br />Temp :- {ktoc(data.main.temp)} <br />Description :- {data.weather[0].description}</h5>
                            <div className="card-text">
                                <table className=' table'>
                                    <tbody>
                                        <tr>
                                            <th>Feels Like</th>
                                            <td>{ktoc(data.main.feels_like)}</td>
                                        </tr>
                                        <tr>
                                            <th>Min. Temp</th>
                                            <td>{ktoc(data.main.temp_min)}</td>
                                        </tr>
                                        <tr>
                                            <th>Max. Temp</th>
                                            <td>{ktoc(data.main.temp_max)}</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Rise</th>
                                            <td>{getthedate(data.sys.sunrise)}</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Set</th>
                                            <td>{getthedate(data.sys.sunset)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return <>
        {showpage}
    </>
}
