import * as React from 'react';
const ProgressBar = require('./ProgressBar');
interface Props {
    begin: boolean;
    transitionDuration: number;
    win: boolean;
}

interface State {

}

export class Racetrack extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);

        this.state = {winner: 'blank'};
    }

    render(){
        let winRace = this.props.win;

        if (this.props.begin)
        {
            return(
                <ProgressBar progress={100} transitionDuration={this.props.transitionDuration} winRace={winRace} />
            );
        }
        else{
            return(
                <ProgressBar progress={0} />
            );
        }
            
    }
}