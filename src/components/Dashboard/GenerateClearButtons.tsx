import * as React from 'react';

interface State {

}

interface Props {
onGen: Function;
onClear: Function;
}
export class GenerateClearButtons extends React.Component <Props, State> {

renderHorseList = () => {
// this.setState({horseListEmpty: true});
this.props.onGen(true);
}
clearHorseList = () => {
// this.setState({horseListEmpty: false});
this.props.onClear(false);
}

    render(){
        return(
            <div className="ui medium buttons">
                <button className="positive ui button" onClick={this.renderHorseList}>Generate Horses</button>
                    <div className="or">.</div>
                 <button className="ui button" onClick={this.clearHorseList} >Clear Horses</button>
            </div>
        );
    }
}