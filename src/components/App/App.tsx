import * as React from 'react';
import './App.css';

interface Props {
	samplePropProp?: string;
}

interface State {
	sampleStateProp?: string;
}

export class App extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {horseListEmpty: false, run: false, beginRace: false};
	
	  }
	
	  beginRace = () =>{
		this.setState({beginRace: true})
	  }
	
	  clearRace = () =>{
		this.setState({beginRace: false})
	  }
	  
	  renderHorseList = () => {
		this.setState({horseListEmpty: true});
	
	  }
	
	  clearHorseList = () => {
		this.setState({horseListEmpty: false});
	  }
	
	  startRace = () =>{
		this.setState({run: true})
	  }
	
	  resetRace = () =>{
		this.setState({run: false})
		
	  }
	
	  render() {
		return (
		  <div className="App">
			<Header />
			<div className='ui four column grid'>
			  <div className='row'>
				<div className='column'>
				  <GenerateClearButtons 
				  onGen = {this.renderHorseList}
				  onClear = {this.clearHorseList}/>
				</div>
				<div className='columnResult'>
				  <LeaderBoard />
				</div>
				<div className='column'>
				  <h2 className='Heading'>Kurtosys Race Track</h2>
				</div>
				<div className='column'>
				  <StartAndStopButtons 
				  onStart = {this.startRace}
				  onStop = {this.resetRace}/>
				</div>
			  </div> 
			  <div className='column'>
				<EditableHorseList 
				  horseListEmpty={this.state.horseListEmpty} />
			  </div>
			  <div className='column'>
				<EditableRaceTrack run = {this.state.run}/>
			  </div>
			   {/* <div className='column'>...
			  </div> */}
			  {/* <div className='column'>
				...
			  </div>  */}
			</div>
		  </div>
		);
	  }
	}
	