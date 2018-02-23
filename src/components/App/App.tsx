import * as React from 'react';
import './App.css';
// import '../../../src/index.css';

import { Header } from '../Dashboard/Header';
import { EditableHorseList } from '../HorseCard/EditableHorseList';
import { LeaderBoard } from '../Dashboard/LeaderBoard';
import { StartAndStopButtons } from '../Dashboard/StartAndStopButtons';
import { GenerateClearButtons } from '../Dashboard/GenerateClearButtons';
import { EditableRaceTrack } from '../RaceTrack/EditableRaceTrack';
interface Props {
	onStart?: boolean;
	onStop?: boolean;
	onGen: boolean;
	onClear: boolean;
	run?: boolean;

}

interface State {
	horseListEmpty: boolean;
	run: boolean;
}

export class App extends React.Component<React.Props<Props>, State> {
	constructor(props: React.Props<{}>) {
		super(props);
		this.state = {horseListEmpty: false, run: false};
	
}
		
renderHorseList = () => {
		this.setState({horseListEmpty: true});
	
}
	
clearHorseList = () => {
		this.setState({horseListEmpty: false});
}
	
startRace = () => {
		this.setState({run: true});
}
	
resetRace = () => {
		this.setState({run: false});
		
}
	
render() {
		return (
<div className="App">
			<Header />
			<div className="ui four column grid">
<div className="row">
				<div className="column">
<GenerateClearButtons onGen={this.renderHorseList} onClear={this.clearHorseList} />
				</div>
				<div className="columnResult">
<LeaderBoard />
				</div>
				<div className="column">
<h2 className="Heading">Kurtosys Race Track</h2>
				</div>
				<div className="column">
<StartAndStopButtons onStart={this.startRace} onStop={this.resetRace}/>
				</div>
</div> 
<div className="column">
<EditableHorseList horseListEmpty={this.state.horseListEmpty} /> 
</div>
<div className="column">
<EditableRaceTrack run={this.state.run}/>
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