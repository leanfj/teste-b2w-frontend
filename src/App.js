import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './App.css';

import apis from './api/Api'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      films: [],
      formatedPopulation: ''
    }
  }

  componentDidMount(){
    this.nextPlanet();
  }

  formatPopulation = (argPopulation) => {
    const population = argPopulation;
    const lengPopulation = population.length;
    console.log(population)
    if (population !== 'unknown'){
      let format = '';
      if(lengPopulation === 4) {
        format = population.substr(0, 1) + '.' + population.substr(1, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 5) {
        format = population.substr(0, 2) + '.' + population.substr(2, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 6) {
        format = population.substr(0, 3) + '.' + population.substr(3, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 7) {
        format = population.substr(0, 1) + '.' + population.substr(1, 3) +'.'+ population.substr(4, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 8) {
        format = population.substr(0, 2) + '.'+ population.substr(2, 3) +'.'+ population.substr(5, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 9) {
        format = population.substr(0, 3) + '.'+ population.substr(3, 3) +'.'+ population.substr(6, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 10) {
        format = population.substr(0, 1) + '.'+ population.substr(1, 3) +'.'+ population.substr(4, 3)+'.'+ population.substr(7, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 11) {
        format = population.substr(0, 2) + '.'+ population.substr(2, 3) +'.'+ population.substr(5, 3)+'.'+ population.substr(8, 3);
        this.setState({formatedPopulation: format});  
      }
      if(lengPopulation === 12) {
        format = population.substr(0, 3) + '.'+ population.substr(3, 3) +'.'+ population.substr(6, 3)+'.'+ population.substr(9, 3);
        this.setState({formatedPopulation: format});  
      }

    } else {
      this.setState({formatedPopulation: 'Unknow'});
    }
  }

  nextPlanet = () => {
    let randomNumber = (Math.trunc(Math.random() * 61) + 1);
    apis(randomNumber).then(
      response => {
        this.setState({
          data: response.data,
          films: response.data.films
        });
        let population = response.data.population;
        this.formatPopulation(population);
      });
  }
    
  render() {
    return (
      <div className="container">
        <div className="app">
          <h1 className="app__title">Star Wars Planet's</h1>
          <div className="app__planet">
            {this.state.data.name}  
          </div>
          <dl className="app__description">
            <dt className="app__description__name">
            Population
            </dt>
            <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}> 
              <dd className="app__description__name--data">
                { this.state.formatedPopulation }
              </dd>
            </CSSTransitionGroup>
            <dt className="app__description__name">
              Climate
            </dt> 
            <dd className="app__description__name--data">
              {this.state.data.climate}
            </dd>
            <dt className="app__description__name">
              Terrain
            </dt> 
            <dd className="app__description__name--data">
              {this.state.data.terrain}
            </dd>
          </dl>
          <p className="quant__films">Feature in {this.state.films.length} Film's</p>
          <button onClick={this.nextPlanet} className="app__button" >Next</button>
        </div>
      </div>
    );
  }
}

export default App;
