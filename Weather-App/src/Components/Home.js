import React from 'react'

export default function Home() {
    return (
        <div>
            <section className='Home_section'>
                <div className=" container">
                    <div className='home_main'>
                        <div className=' row'>
                            <div className=" col-lg-6">
                                <div className=' home w-100 h-100'>
                                    <h4><img src="asset/img/navbar-logo.webp" alt="" /> Weatherapp.</h4>
                                    <div className='home_info'>
                                        <h1>Weather & Forecast <br /> Application</h1>
                                        <p>Use weather application and get weather information daily and daily. Download weather
                                            forecast for free and experience.</p>
                                        <div>
                                            <button type='button' className="btn1"><i className="fa-brands fa-apple ico1"></i> Download
                                                Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-6 mt-5 mt-lg-0">
                                <div className=" home_1 text-center">
                                    <img src="asset/img/12.png" alt="" className='home_1_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
