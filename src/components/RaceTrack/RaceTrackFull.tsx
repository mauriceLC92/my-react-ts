import * as React from 'react';
const Racetrack = require('./Racetrack');

interface Props {

}
interface State {
    beginRace: boolean;
}
export class RaceTrackFull extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);

        this.state = {beginRace: false};

        this.beginRace = this.beginRace.bind(this);
        this.clearRace = this.clearRace.bind(this);
    }

    beginRace = () => {
        this.setState({beginRace: true});
    }

    clearRace = () => {
        this.setState({beginRace: false});
    }

    render(){
        let transTime1 = Math.floor(Math.random() * 4000);
        let transTime2 = Math.floor(Math.random() * 4000);
        let transTime3 = Math.floor(Math.random() * 4000);
        let transTime4 = Math.floor(Math.random() * 4000);
        let smallestTime = Math.min(transTime1, transTime2, transTime3, transTime4);

        let raceWinner = () => {
            let winner = '';
            if (smallestTime === transTime1)
            {
                // alert("lane 1 is the Winner");
                winner = 'lane 1';
            }
            else if (smallestTime === transTime2)
            {
                // alert("lane 2 is the Winner");
                winner = 'lane 2';
            }
            else if (smallestTime === transTime3)
            {
                // alert("lane 3 is the Winner");
                winner = 'lane 3';
            }
            else {
                // alert("lane 4 is the Winner");
                winner = 'lane 4';
            }
            
            return winner;
                
        };

        let laneWinner = raceWinner();

        return(
            <div className="main-wrapper">
                <div className="ui medium buttons">
                  <button id="startButton" className="positive ui button" onClick={this.beginRace}>Start Race</button>
                  <div className="or">.</div>
                  <button className="negative ui button" onClick={this.clearRace}>Reset Race</button>
                </div>

                <div className="raceTrack">
                    <div className="track">            
                        <Racetrack begin={this.state.beginRace} transitionDuration={transTime1} win={laneWinner}/>
                    </div>
                    <div className="track">             
                        <Racetrack begin={this.state.beginRace} transitionDuration={transTime2} win={laneWinner}/>
                    </div>
                    <div className="track">     
                        <Racetrack begin={this.state.beginRace} transitionDuration={transTime3} win={laneWinner}/>
                    </div>
                    <div className="track">
                        <Racetrack begin={this.state.beginRace} transitionDuration={transTime4} win={laneWinner}/>
              </div>
            </div>

            </div>
        );
    }
}