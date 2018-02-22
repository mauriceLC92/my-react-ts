
import * as  React from 'react';

interface Props {

}

interface State {

}
export class HorseCardListEmpty extends React.Component<Props, State>{
    render(){
        return(
            <div className="ui icon message">
                <i className="notched circle loading icon">.</i>
                <div className="content">
                    <div className="header">
                        Please click 'Generate Horses' button above
                    </div>
                </div>
            </div>
        );
    }
}
