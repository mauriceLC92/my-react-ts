import * as React from 'react';
const  RaceTrackFull = require('./RaceTrackFull');
const  RaceTrackEmpty  = require('./RaceTrackEmpty');

interface Props {
    run?: boolean;
}

interface State {
	
}

export class EditableRaceTrack extends React.Component<Props, State>{
    render(){

        if (this.props.run)
        {
            return(
                <RaceTrackFull />
            );
        }else {
            return(
                <RaceTrackEmpty />
            );
        }
    }
}