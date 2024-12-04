import React from 'react'
import Card from './Card'

export default function Search(props) {
    return (
        <div>
            <section className="weather_section">
                <div className="container">
                    <div className="weather_main">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="weather d-flex flex-column justify-content-center h-100">
                                    <form action="" className="mb-5">
                                        <div className="mb-3 ">
                                            <label htmlFor="text1" className="form-label">Enter City Name</label>
                                            <div className='city_div'>
                                                <input type="text" name='city' className="form-control" id="text1" value={props.city} onChange={props.change} placeholder="City Name" />
                                                <i className="fa-solid fa-magnifying-glass serch_ico"></i>
                                            </div>
                                            <button type='submit' onClick={props.cityHandler} className="btn1 mt-3"> Search</button>
                                        </div>
                                    </form>
                                    <form action="">
                                        <div className="mb-3">
                                            <label htmlFor="text2" className="form-label">Get Co-ordinate </label> <i className="fa-solid fa-location-crosshairs icon1" onClick={props.getlocation}></i>
                                            <input type="number" name='lat' className="form-control mb-3" id="text2" value={props.lat} onChange={props.change} placeholder="Latitude" />

                                            <input type="number" name='lon' className="form-control" id="text2" value={props.lon} onChange={props.change} placeholder="Longitude" />

                                            <button type='submit' onClick={props.search} className="btn1 mt-3"> Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-3 mt-lg-0">
                                <div className="card bg-dark overflow-hidden" style={{ borderRadius: '40px' }}>
                                    <div className="bg-image" style={{ borderRadius: '35px' }}>
                                        <img src="asset/img/bg-wed.jpg"
                                            className="card-img" alt="weather" />
                                    </div>
                                    {props.isSubmit === true ? (<Card weatherData={props.weatherData}></Card>) : (
                                        <div className="card-img-overlay p-5">
                                            {/* <h4 className="mb-0">Surat, Gujarat, india</h4>
                                        <p className="display-2 my-3">1.28°C</p>
                                        <p className="mb-2">Feels Like: <strong>-1.08 °C</strong></p>
                                        <h5>Snowy</h5> */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
