import * as React from 'react';
interface Props {

}

interface State {

}
export class RaceTrackEmpty extends React.Component<Props, State>{
    render(){
        return(
            <div className="ui icon message">
                <i className="notched circle loading icon">.</i>
                <div className="content">
                    <div className="header">
                        Please use the green button on the right to
                        render a track
                    </div>
                </div>
            </div>
        );
    }
}