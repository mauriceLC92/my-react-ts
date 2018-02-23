import * as React from 'react';
import { ProgressBar } from './ProgressBar';
interface Props {
    begin: boolean;
    win: string;
    transitionDuration: number;
}

interface State {
    winner: string;
    
}

export class Racetrack extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);

        this.state = {winner: ''};
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
                <ProgressBar progress={0} transitionDuration={0} winRace={winRace} />
            );
        }
            
    }
}