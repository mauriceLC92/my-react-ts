import * as React from 'react';


interface State {

}

interface Props {
    onStart: Function;
    onStop: Function;
}
export class StartAndStopButtons extends React.Component <Props, State>{
    constructor(props: Props){
        super(props);

        this.startRace = this.startRace.bind(this);
        this.resetRace = this.resetRace.bind(this);
    }

    startRace = () =>{
        // this.setState({run: true})
        this.props.onStart(true)
    }

    resetRace = () =>{
        // this.setState({run: true})
        this.props.onStop(false)
    }
    
    render(){
        return(
            <div className="ui medium buttons">
                  <button id="startButton" className="positive ui button" onClick={this.startRace}>Render Race Tracks</button>
                  <div className="or"></div>
                  <button className="negative ui button" onClick={this.resetRace}>Clear Race Tracks</button>
            </div>
        );
    }
}