import React, { Component } from 'react';
import logo from './logo.svg';
import moment from 'moment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLabel: '',
      seconds:0
    };
    
    this.calculateTime = () => {
      var releaseTime = moment('2018-07-23 20:00:00');
      var now = moment();
      var difftime = releaseTime.diff(now);
      var duration = moment.duration(difftime);
      var days = duration.get('days');
      var hours = duration.get('hours');
      var minutes = duration.get('minutes');
      var seconds = duration.get('seconds');
      
      var result = '';
      if(days > 0) {
        result = days + ' days  ';
      }
      if( hours > 0 || (days>0 && hours==0)) {
        result +=  hours + ' horas  ';
      }
      if(minutes > 0 || (minutes==0 && hours>0)) {
        result += minutes + ' minutes  ';
      }
      if(seconds<10){
        seconds = '0' + seconds;
      }
      this.setState({timeLabel: result, seconds:seconds});
      
    };
  }

  componentDidMount(){
    this.calculateTime();
    setInterval(this.calculateTime, 1000);
  }
  c

  render() {
    return (
      <div className="App">
        <h1>Faltan para el sorteo de intercambio de regalos!!</h1>
        <div className="cronometro-container">
          <h4>{this.state.timeLabel}</h4>
          <h2 className="second">{this.state.seconds}</h2>
        </div>
      </div>
    );
  }
}

export default App;
