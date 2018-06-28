import React, { Component } from 'react';
import Map from './components/Map'
import QuakeList from './components/QuakeList'
import QuakeModel from './models/QuakeModel'

class App extends Component {

  constructor(){
    super()

    this.state = {
      quakesData : []
    }

  }

  componentDidMount(){
    QuakeModel.all().then(res =>
      this.setState({
        quakesData: res.data.features
      })
    )
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Map quakesData={this.state.quakesData} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <QuakeList quakesData={this.state.quakesData}/>
        </div>
      </div>
    );
  }
}

export default App;
