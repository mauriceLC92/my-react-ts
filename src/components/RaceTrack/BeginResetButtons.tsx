import * as React from 'react';


interface Props {
    onBegin: Function;
    onClearRace: Function;

}

interface State {

}
export class BeginResetButtons extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
    
        this.beginRace = this.beginRace.bind(this);
        this.clearRace = this.clearRace.bind(this);
      }

    beginRace = () =>{
        this.props.onBegin(true)
    }

    clearRace = () =>{
        this.props.onClearRace(false)
    }

    render(){
        return(
            <div className="ui medium buttons">
                  <button id="startButton" className="positive ui button" onClick={this.beginRace}>Start Race</button>
                  <div className="or"></div>
                  <button className="negative ui button" onClick={this.clearRace}>Reset Race</button>
            </div>
        );
    }
}