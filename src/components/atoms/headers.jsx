var React = require('react');

var WeatherHeader = React.createClass({
        render :function(){
        return(
          <div >
                <div id = "headerDiv" className="row">
      					<div className="col-sm-4">
      					</div>
      					<div className="col-sm-4">
      						<img src="src/images/headerIcon.png" alt=" Taapmaan " id="headerIconImage"/>
                        		<h1 id="headerStyle">LiveWeather</h1>
      					</div>
      					<div className="col-sm-4">
      					</div>
      					</div>
            </div>
            );
    }
});

module.exports = WeatherHeader;
