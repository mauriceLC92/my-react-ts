import * as React from 'react';

interface State {

}

interface Props {

}
export class LeaderBoard extends React.Component<Props, State>{
    render(){
        return(
            <table className='ui very basic collapsing celled table'>
                <thead>
                    <tr><th className='runnerhead'>Runner</th>
                    <th>Races Won</th>
                    </tr></thead>
                    <tbody>
                        <tr>
                            <td>
                                <h4 className="ui image header"> 
                                    <img src="https://avatars2.githubusercontent.com/u/1482046?v=4" className="ui mini rounded image" alt="#"/>
                                    <div className='content'>
                                        
                                        <div className='sub header'>Software Developer
                                    </div>
                                </div>
                                </h4>
                            </td>
                            <td>
                                22
                            </td>
                        </tr>
                    </tbody>
            </table>

        );
    }
}