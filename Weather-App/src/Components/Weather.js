import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from 'axios'
import Recent from './Recent'

export default class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: "",
            lon: "",
            weatherData: null,
            isSubmit: false,
            city: "",
            loading: false,
            recent: []
        }
    }
    changehandler = (event) => {
        // console.log(event);
        const name = event.target.name;
        if (name === 'city') {
            this.setState({ city: event.target.value })
        } else if (name === 'lat') {
            this.setState({ lat: event.target.value })
        } else if (name === 'lon') {
            this.setState({ lon: event.target.value })
        }
    }

    locationHandler = (events) => {
        // alert("Hello !")
        // events.preventDefault()
        this.setState({
            lat: "",
            lon: "",
            isSubmit: false,
            loading: true
        })
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (result) => {
                    // console.log('Location ', result);
                    setTimeout(() => {
                        this.setState({
                            lat: result.coords.latitude,
                            lon: result.coords.longitude,
                            isSubmit: true,
                        });
                        const { latitude: lat, longitude: lon } = result.coords;

                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=26155408103f91ff0e230450127268cb`).then((response) => {
                            // console.log('New ', response);
                            this.setState({
                                city: response.data.name,
                                weatherData: response.data
                            },
                                () => {
                                    this.addDatatorecent();
                                }
                            )
                        })
                            .catch((err) => {
                                console.log(err);
                            })
                    }, 1000)
                },
                (err) => {
                    console.log('location', err);
                }
            )
        } else (
            console.log('Location not support')
        )
    }

    searchHandler = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        if (!this.state.lat || !this.state.lon) {
            return;
        }
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=26155408103f91ff0e230450127268cb`).then((response) => {
            console.log('New ', response);
            this.setState({
                city: response.data.name,
                weatherData: response.data,
                isSubmit: true,
            },
                () => {
                    this.addDatatorecent();
                }
            )
        })
            .catch((err) => {
                console.log(err);
            })
    }

    cityHandler = (e) => {
        e.preventDefault();
        if (!this.state.city) {
            return;
        }
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=26155408103f91ff0e230450127268cb`).then((res) => {
            console.log("city", res)
            this.setState({
                city: res.data.name,
                weatherData: res.data,
                lat: res.data.coord.lat,
                lon: res.data.coord.lon,
                isSubmit: true,
            },
                () => {
                    this.addDatatorecent();
                }
            )
        }).catch((err) => {
            console.log(err);
        })
    }

    addDatatorecent = () => {
        let recent = this.state.recent;
        recent.push({
            lat: this.state.lat,
            lon: this.state.lon,
            city: this.state.city
        })
        this.setState({ recent }, () => {
            // console.log('recent data', this.state);
        })
    }

    researchHandler = (lat, lon) => {
        // console.log('lat', lat, 'lon', lon)
        this.setState({ lat, lon }, () => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=26155408103f91ff0e230450127268cb`).then((response) => {
                console.log('New ', response);
                this.setState({
                    city: response.data.name,
                    weatherData: response.data,
                    isSubmit: true,
                })
            }).catch((err) => {
                console.log(err);
            })
        })
    }

    render() {
        // console.log(this.state.city)
        // console.log(this.state.lat)
        // console.log(this.state.lon)
        return (
            <div>
                <Search change={this.changehandler} city={this.state.city} lat={this.state.lat} lon={this.state.lon} weatherData={this.state.weatherData} getlocation={this.locationHandler} search={this.searchHandler} cityHandler={this.cityHandler} isSubmit={this.state.isSubmit} loader={this.state.loading}></Search>
                <Result weatherData={this.state.weatherData} loader={this.state.loading}></Result>
                <Recent recent={this.state.recent} research={this.researchHandler}></Recent>
            </div>
        )
    }
}
