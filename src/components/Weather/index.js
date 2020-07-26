import React from "react";
const API_WEATHERS = "http://localhost:8888/weather-service/weathers?";
// Stateless component
//const Weather = (props) => {
  // 1 .
  // class 형태로 변경 후 fetch 선택 도시의 날씨
  // 2 .
  // react Hook << 검색
  // state, setState
class Weather extends React.Component {
    state = {
            weatherData : {
                weather : [
                    { main : null,description : null }
                ],
                main : {
                    temp : 0,
                }
            },
        };


    componentDidMount() {
        const { cityName } = this.props.match.params;

        const weathersData = fetch(API_WEATHERS +'cityName='+ cityName)
              .then((res) => res.json())
              .then((data) => {
                this.setState({
                  weatherData : data,
                });
              });

    }

     render() {
         const { weatherData } = this.state;

         const main = weatherData.weather[0].main
         const description = weatherData.weather[0].description
         const celsius = (weatherData.main.temp - 273.15).toFixed(2); // kelvin to celsius

        return (
            <div>
              <p>{main}</p>
              <p>{description}</p>
              <p>{celsius}</p>
            </div>
          );
     }
};
export default Weather;