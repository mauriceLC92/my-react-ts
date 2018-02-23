import * as React from 'react';

interface State {

}

interface Props {

}
export class LeaderBoard extends React.Component<Props, State>{
    render(){
        return(
            <table className="ui very basic collapsing celled table">
                <thead>
                    <tr><th className="runnerhead">Result</th>
                    <th>Lane</th>
                    </tr></thead>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="ui image header"> 
<i className="trophy icon">.</i>
                                    <div className="content">
                                        
                                        <div className="sub header">Winner!!!!
                                    </div>
                                </div>
                                </h4>
                            </td>
                            <td>
                                ...
                            </td>
                        </tr>
                    </tbody>
            </table>

        );
    }
}