import * as React from 'react';
import { RaceTrackFull } from './RaceTrackFull';
import  { RaceTrackEmpty }  from './RaceTrackEmpty';

interface Props {
    run: boolean;
}

interface State {
	
}

export class EditableRaceTrack extends React.Component<Props, State>{
    render(){

        if (this.props.run)
        {
            return(
                <RaceTrackFull  />
            );
        }else {
            return(
                <RaceTrackEmpty />
            );
        }
    }
}