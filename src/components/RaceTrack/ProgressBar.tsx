import * as React from 'react';

interface Props {
    progress: number;
    transitionDuration: number;
    winRace: string;
}
interface State {
	
}
export class ProgressBar extends React.Component<Props, State>{
    
  render() {
    // console.log(this.props.winRace);   Maybe pass this to the scorebaord to show a winner!!
      return (
          <div className="progressbar">
              <div
                  className="progress"
                  style={{ width: `${this.props.progress}%`, transitionDuration: `${this.props.transitionDuration}ms` }}
              />
          </div>
      );
  }
}
