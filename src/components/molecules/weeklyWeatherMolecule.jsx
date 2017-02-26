var React = require('react');
var ReactDOM = require('react-dom');
var WeatherIcon = require('../atoms/weatherIcon.jsx');
var classNames = require('classnames');

var WeeklyWeather = require('../atoms/weeklyWeather.jsx');

var WeeklyWeatherMolecule=React.createClass({

  render: function(){
        console.log('Rendering weekly weather molecule');
        console.log('Forecast array is ');
        console.log(this.props.forecast);
        return(

            <div className="pull-left weekly-weather-widget">
                <WeeklyWeather temp1={this.props.forecast[0]} />
                <WeeklyWeather temp1={this.props.forecast[1]} />
                <WeeklyWeather temp1={this.props.forecast[2]} />
                <WeeklyWeather temp1={this.props.forecast[3]} />
            </div>
        );
	 }
});

module.exports=WeeklyWeatherMolecule;
